/* ── Init ───────────────────────────────────────────────────────────────── */
const params   = new URLSearchParams(window.location.search);
let pin        = params.get('pin') || '';
let playerName = params.get('name') ? decodeURIComponent(params.get('name')) : '';

const AVATARS = ['🐯','🦊','🐸','🐼','🦁','🐺','🦋','🐬','🦅','🐲','🐙','🦄','🐻','🐨','🦉'];
const ICONS   = ['▲', '◆', '●', '★'];

let myAvatar = AVATARS[Math.floor(Math.random() * AVATARS.length)];
let myScore  = 0;
let lastAnswerCorrect = null;
let lastPoints = 0;
let timerInterval = null;
let answered = false;
let currentTimeLimit = 20;

/* ── Helpers ────────────────────────────────────────────────────────────── */
function show(id)  { document.getElementById(id).classList.remove('hidden'); document.getElementById(id).style.display = ''; }
function hide(id)  { document.getElementById(id).classList.add('hidden'); document.getElementById(id).style.display = 'none'; }
function hideAll() {
  ['joinScreen','connectingScreen','lobbyScreen','startingScreen',
   'questionScreen','waitingScreen','revealScreen','finalScreen'].forEach(id => {
    const el = document.getElementById(id);
    el.classList.add('hidden');
    el.style.display = 'none';
  });
}
function showScreen(id) { hideAll(); show(id); }

function toast(msg, type = 'error') {
  const c = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

/* ── Timer ──────────────────────────────────────────────────────────────── */
function startTimer(seconds) {
  clearInterval(timerInterval);
  const circle = document.getElementById('pTimerCircle');
  const number = document.getElementById('pTimerNumber');
  const circumference = 207.3;
  let remaining = seconds;

  const update = () => {
    circle.style.strokeDashoffset = circumference * (1 - remaining / seconds);
    number.textContent = remaining;
    number.classList.toggle('urgent', remaining <= 5);
    circle.style.stroke = remaining <= 5 ? 'var(--accent)' : 'var(--accent2)';
  };

  update();
  timerInterval = setInterval(() => {
    remaining--;
    if (remaining < 0) { clearInterval(timerInterval); return; }
    update();
  }, 1000);
}

/* ── Join flow ──────────────────────────────────────────────────────────── */
if (!pin || !playerName) {
  showScreen('joinScreen');

  document.getElementById('joinFormBtn').addEventListener('click', () => {
    pin        = document.getElementById('pinField').value.trim();
    playerName = document.getElementById('nameField').value.trim();
    if (!pin)        return toast('Entrez un code PIN');
    if (!playerName) return toast('Entrez votre pseudo');
    connectAndJoin();
  });

  ['pinField', 'nameField'].forEach(id => {
    document.getElementById(id).addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('joinFormBtn').click();
    });
  });

  document.getElementById('pinField').addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '').slice(0, 6);
  });
} else {
  showScreen('connectingScreen');
  connectAndJoin();
}

/* ── Socket ─────────────────────────────────────────────────────────────── */
let socket;

function connectAndJoin() {
  showScreen('connectingScreen');
  socket = io();

  socket.on('connect', () => {
    socket.emit('player:join', { pin, name: playerName });
  });

  socket.on('error', (msg) => {
    toast(msg);
    showScreen('joinScreen');
  });

  socket.on('player:joined', ({ name }) => {
    playerName = name;
    document.getElementById('playerNameDisplay').textContent = name;
    document.getElementById('playerAvatar').textContent = myAvatar;

    showScreen('lobbyScreen');
  });

  socket.on('lobby:update', ({ count, players }) => {
    const el = document.getElementById('playerCountDisplay');
    el.textContent = `${count} joueur${count > 1 ? 's' : ''} dans la salle`;
  });

  socket.on('game:starting', () => {
    showScreen('startingScreen');
    let n = 3;
    document.getElementById('playerCountdown').textContent = n;
    const iv = setInterval(() => {
      n--;
      if (n > 0) document.getElementById('playerCountdown').textContent = n;
      else clearInterval(iv);
    }, 1000);
  });

  socket.on('question:start', ({ text, choices, index, total, timeLimit }) => {
    answered = false;
    currentTimeLimit = timeLimit;
    clearInterval(timerInterval);

    // Build question screen
    document.getElementById('pQText').textContent = text;
    document.getElementById('pQIndex').textContent = `${index + 1} / ${total}`;

    const grid = document.getElementById('playerAnswerGrid');
    grid.innerHTML = '';

    choices.forEach((ch, ci) => {
      if (!ch?.trim()) return;
      const btn = document.createElement('button');
      btn.className = 'player-ans-btn';
      btn.innerHTML = `<span class="icon">${ICONS[ci]}</span><span>${ch}</span>`;
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        // Disable all buttons and highlight selected
        grid.querySelectorAll('.player-ans-btn').forEach((b, i) => {
          b.disabled = true;
          b.style.opacity = i === ci ? '1' : '0.35';
          b.style.transform = i === ci ? 'scale(1.05)' : 'scale(0.95)';
        });

        socket.emit('player:answer', { pin, answerIndex: ci });

        // Show waiting screen
        setTimeout(() => {
          showScreen('waitingScreen');
          document.getElementById('answerResult').innerHTML = `<div style="font-size:3rem;">⏳</div><p style="color:var(--text-muted); font-size:1.1rem;">Réponse envoyée !</p>`;
          document.getElementById('pointsBadge').style.display = 'none';
        }, 400);
      });
      grid.appendChild(btn);
    });

    showScreen('questionScreen');
    startTimer(timeLimit);

    // Auto-show timeout message if time runs out without answering
    setTimeout(() => {
      if (!answered) {
        answered = true;
        grid.querySelectorAll('.player-ans-btn').forEach(b => b.disabled = true);
        showScreen('waitingScreen');
        document.getElementById('answerResult').innerHTML =
          `<div style="font-size:3rem;">⌛</div><p style="color:var(--text-muted); font-size:1.1rem;">Temps écoulé !</p>`;
        document.getElementById('pointsBadge').style.display = 'none';
      }
    }, timeLimit * 1000 + 300);
  });

  socket.on('player:answer:confirmed', ({ isCorrect, points }) => {
    lastAnswerCorrect = isCorrect;
    lastPoints = points;
    myScore += points;

    const resultEl = document.getElementById('answerResult');
    const pointsEl = document.getElementById('pointsBadge');

    if (isCorrect) {
      resultEl.innerHTML = `<div class="big-check">✅</div><p style="font-size:1.3rem; font-weight:700; color:#2ecc71;">Bonne réponse !</p>`;
      pointsEl.textContent = `+${points.toLocaleString()} pts`;
      pointsEl.style.display = 'block';
    } else {
      resultEl.innerHTML = `<div class="big-cross">❌</div><p style="font-size:1.3rem; font-weight:700; color:var(--accent);">Mauvaise réponse</p>`;
      pointsEl.style.display = 'none';
    }
  });

  socket.on('question:results', ({ correctIndex, leaderboard, distribution, isLast }) => {
    clearInterval(timerInterval);
    showScreen('revealScreen');

    const myEntry = leaderboard.find(p => p.name === playerName);
    const revealIcon = document.getElementById('revealIcon');
    const revealTitle = document.getElementById('revealTitle');

    if (lastAnswerCorrect === true) {
      revealIcon.textContent = '✅';
      revealTitle.textContent = `+${lastPoints.toLocaleString()} points !`;
      revealTitle.style.color = '#2ecc71';
    } else if (lastAnswerCorrect === false) {
      revealIcon.textContent = '❌';
      revealTitle.textContent = 'Pas cette fois…';
      revealTitle.style.color = 'var(--accent)';
    } else {
      revealIcon.textContent = '⌛';
      revealTitle.textContent = 'Temps écoulé';
      revealTitle.style.color = 'var(--text-muted)';
    }

    // Mini leaderboard
    const lb = document.getElementById('revealLeaderboard');
    lb.innerHTML = '';
    leaderboard.forEach(({ rank, name, score }) => {
      const item = document.createElement('div');
      item.className = 'leaderboard-item';
      const medals = ['🥇', '🥈', '🥉'];
      const isMe = name === playerName;
      item.innerHTML = `
        <div class="lb-rank">${medals[rank - 1] || rank}</div>
        <div class="lb-name" ${isMe ? 'style="color:var(--accent2);"' : ''}>${escHtml(name)}${isMe ? ' (vous)' : ''}</div>
        <div class="lb-score">${score.toLocaleString()} pts</div>
      `;
      lb.appendChild(item);
    });

    lastAnswerCorrect = null;
  });

  socket.on('game:end', ({ leaderboard }) => {
    clearInterval(timerInterval);
    showScreen('finalScreen');

    const myEntry = leaderboard.find(p => p.name === playerName);
    const medals  = ['🥇', '🥈', '🥉'];
    const rank    = myEntry ? myEntry.rank : leaderboard.length;
    const score   = myEntry ? myEntry.score : 0;

    document.getElementById('finalMedal').textContent = medals[rank - 1] || '🎮';
    document.getElementById('myRankDisplay').textContent = `#${rank}`;
    document.getElementById('myNameFinal').textContent = playerName;
    document.getElementById('myScoreFinal').textContent = `${score.toLocaleString()} points`;

    const lb = document.getElementById('finalLb');
    lb.innerHTML = '';
    leaderboard.forEach(({ rank: r, name, score: s }) => {
      const item = document.createElement('div');
      item.className = 'leaderboard-item';
      const isMe = name === playerName;
      item.innerHTML = `
        <div class="lb-rank">${medals[r - 1] || r}</div>
        <div class="lb-name" ${isMe ? 'style="color:var(--accent2);"' : ''}>${escHtml(name)}${isMe ? ' ★' : ''}</div>
        <div class="lb-score">${s.toLocaleString()} pts</div>
      `;
      lb.appendChild(item);
    });
  });

  socket.on('host:disconnected', () => {
    toast("L'hôte s'est déconnecté");
    setTimeout(() => window.location.href = '/', 2500);
  });

  socket.on('disconnect', () => {
    // Only show if not on final screen
    if (!document.getElementById('finalScreen').classList.contains('hidden') === false) {
      toast('Connexion perdue');
    }
  });
}

function escHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
