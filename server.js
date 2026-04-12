const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] },
  transports: ['websocket', 'polling']
});

app.set('trust proxy', 1);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage
const quizzes = new Map(); // quizId -> quiz
const games = new Map();   // gamePin -> game state

// Load pre-made quizzes
const presetQuizzes = require('./data/quizzes');
presetQuizzes.forEach(q => quizzes.set(q.id, { ...q, createdAt: Date.now() }));
console.log(`Loaded ${presetQuizzes.length} preset quizzes.`);

function generatePin() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// ─── REST API ────────────────────────────────────────────────────────────────

// Create or update a quiz
app.post('/api/quiz', (req, res) => {
  const { title, questions } = req.body;
  if (!title || !questions || questions.length === 0) {
    return res.status(400).json({ error: 'Title and questions are required' });
  }
  const id = generateId();
  quizzes.set(id, { id, title, questions, createdAt: Date.now() });
  res.json({ id });
});

// Get a quiz by ID
app.get('/api/quiz/:id', (req, res) => {
  const quiz = quizzes.get(req.params.id);
  if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
  res.json(quiz);
});

// List all quizzes
app.get('/api/quizzes', (req, res) => {
  res.json([...quizzes.values()].map(q => ({
    id: q.id,
    title: q.title,
    description: q.description || null,
    category: q.category || null,
    preset: q.id.startsWith('preset_'),
    questionCount: q.questions.length,
    createdAt: q.createdAt
  })));
});

// Create a game session from a quiz
app.post('/api/game', (req, res) => {
  const { quizId } = req.body;
  const quiz = quizzes.get(quizId);
  if (!quiz) return res.status(404).json({ error: 'Quiz not found' });

  let pin = generatePin();
  while (games.has(pin)) pin = generatePin();

  const game = {
    pin,
    quizId,
    quiz,
    hostSocketId: null,
    players: new Map(), // socketId -> { name, score, answers, connected }
    state: 'lobby',     // lobby | starting | question | results | final
    currentQuestion: -1,
    questionTimer: null,
    questionStartTime: null,
  };

  games.set(pin, game);
  res.json({ pin });
});

// ─── Socket.io ───────────────────────────────────────────────────────────────

io.on('connection', (socket) => {

  // ── HOST ──────────────────────────────────────────────────────────────────

  socket.on('host:join', ({ pin }) => {
    const game = games.get(pin);
    if (!game) return socket.emit('error', 'Game not found');

    game.hostSocketId = socket.id;
    socket.join(`game:${pin}`);
    socket.emit('host:joined', {
      pin,
      quiz: game.quiz,
      players: [...game.players.values()].map(p => p.name)
    });
  });

  socket.on('host:start', ({ pin }) => {
    const game = games.get(pin);
    if (!game || game.hostSocketId !== socket.id) return;
    if (game.players.size === 0) return socket.emit('error', 'Aucun joueur connecté');
    if (game.state !== 'lobby') return;

    game.state = 'starting';
    io.to(`game:${pin}`).emit('game:starting');
    setTimeout(() => startNextQuestion(pin), 3000);
  });

  socket.on('host:next', ({ pin }) => {
    const game = games.get(pin);
    if (!game || game.hostSocketId !== socket.id) return;
    if (game.state !== 'results') return;
    startNextQuestion(pin);
  });

  socket.on('host:end_early', ({ pin }) => {
    const game = games.get(pin);
    if (!game || game.hostSocketId !== socket.id) return;
    if (game.state !== 'question') return;
    if (game.questionTimer) { clearTimeout(game.questionTimer); game.questionTimer = null; }
    showQuestionResults(pin);
  });

  // ── PLAYER ────────────────────────────────────────────────────────────────

  socket.on('player:join', ({ pin, name }) => {
    const game = games.get(pin);
    if (!game) return socket.emit('error', 'Code de partie invalide');
    if (game.state !== 'lobby') return socket.emit('error', 'La partie a déjà commencé');

    const trimmed = name.trim();
    if (!trimmed || trimmed.length > 20) return socket.emit('error', 'Nom invalide (1-20 caractères)');

    const nameTaken = [...game.players.values()].find(
      p => p.name.toLowerCase() === trimmed.toLowerCase()
    );
    if (nameTaken) return socket.emit('error', 'Ce pseudo est déjà pris');

    game.players.set(socket.id, {
      name: trimmed,
      score: 0,
      answers: [],
      connected: true
    });

    socket.join(`game:${pin}`);
    socket.emit('player:joined', { name: trimmed });

    const playerList = [...game.players.values()].map(p => p.name);
    io.to(game.hostSocketId).emit('player:new', { name: trimmed, count: game.players.size });
    io.to(`game:${pin}`).emit('lobby:update', { count: game.players.size, players: playerList });
  });

  socket.on('player:answer', ({ pin, answerIndex }) => {
    const game = games.get(pin);
    if (!game || game.state !== 'question') return;

    const player = game.players.get(socket.id);
    if (!player) return;
    if (player.answers[game.currentQuestion] !== undefined) return; // already answered

    const q = game.quiz.questions[game.currentQuestion];
    const elapsed = Date.now() - game.questionStartTime;
    const timeLimit = (q.timeLimit || 20) * 1000;

    const isCorrect = answerIndex === q.correctIndex;
    let points = 0;
    if (isCorrect) {
      const ratio = Math.max(0, 1 - elapsed / timeLimit);
      points = Math.round(500 + 500 * ratio);
    }

    player.answers[game.currentQuestion] = { answerIndex, isCorrect, points, elapsed };
    player.score += points;

    socket.emit('player:answer:confirmed', { isCorrect, points });

    const answered = [...game.players.values()].filter(
      p => p.answers[game.currentQuestion] !== undefined
    ).length;

    if (game.hostSocketId) {
      io.to(game.hostSocketId).emit('host:answer:count', {
        answered,
        total: game.players.size
      });
    }

    if (answered === game.players.size) {
      if (game.questionTimer) { clearTimeout(game.questionTimer); game.questionTimer = null; }
      setTimeout(() => showQuestionResults(pin), 800);
    }
  });

  // ── DISCONNECT ────────────────────────────────────────────────────────────

  socket.on('disconnect', () => {
    for (const [pin, game] of games) {
      if (game.players.has(socket.id)) {
        const player = game.players.get(socket.id);
        player.connected = false;
        if (game.hostSocketId) {
          io.to(game.hostSocketId).emit('player:left', { name: player.name });
        }
        break;
      }
      if (game.hostSocketId === socket.id) {
        io.to(`game:${pin}`).emit('host:disconnected');
        break;
      }
    }
  });
});

// ─── Game Logic ───────────────────────────────────────────────────────────────

function startNextQuestion(pin) {
  const game = games.get(pin);
  if (!game) return;

  game.currentQuestion++;

  if (game.currentQuestion >= game.quiz.questions.length) {
    return endGame(pin);
  }

  game.state = 'question';
  const q = game.quiz.questions[game.currentQuestion];
  const timeLimit = q.timeLimit || 20;

  // Host gets full question (with correctIndex)
  if (game.hostSocketId) {
    io.to(game.hostSocketId).emit('question:start', {
      question: q,
      index: game.currentQuestion,
      total: game.quiz.questions.length,
      timeLimit
    });
  }

  // Players get question WITHOUT correct answer
  const playerPayload = {
    text: q.text,
    choices: q.choices,
    image: q.image || null,
    index: game.currentQuestion,
    total: game.quiz.questions.length,
    timeLimit
  };
  for (const [sid] of game.players) {
    io.to(sid).emit('question:start', playerPayload);
  }

  game.questionStartTime = Date.now();

  game.questionTimer = setTimeout(() => {
    showQuestionResults(pin);
  }, timeLimit * 1000 + 500);
}

function showQuestionResults(pin) {
  const game = games.get(pin);
  if (!game || game.state !== 'question') return;

  if (game.questionTimer) { clearTimeout(game.questionTimer); game.questionTimer = null; }

  game.state = 'results';
  const q = game.quiz.questions[game.currentQuestion];

  const leaderboard = [...game.players.values()]
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((p, i) => ({ rank: i + 1, name: p.name, score: p.score }));

  const distribution = new Array(q.choices.length).fill(0);
  for (const player of game.players.values()) {
    const ans = player.answers[game.currentQuestion];
    if (ans !== undefined) distribution[ans.answerIndex]++;
  }

  const isLast = game.currentQuestion >= game.quiz.questions.length - 1;

  io.to(`game:${pin}`).emit('question:results', {
    correctIndex: q.correctIndex,
    leaderboard,
    distribution,
    isLast
  });
}

function endGame(pin) {
  const game = games.get(pin);
  if (!game) return;

  game.state = 'final';

  const leaderboard = [...game.players.values()]
    .sort((a, b) => b.score - a.score)
    .map((p, i) => ({ rank: i + 1, name: p.name, score: p.score }));

  io.to(`game:${pin}`).emit('game:end', { leaderboard });

  // Clean up after 30 min
  setTimeout(() => games.delete(pin), 30 * 60 * 1000);
}

// ─── Start ────────────────────────────────────────────────────────────────────

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`\n🎮 QuizLive running → http://localhost:${PORT}\n`);
});
