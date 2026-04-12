/* ── Init ───────────────────────────────────────────────────────────────── */
const pin = new URLSearchParams(window.location.search).get('pin');
if (!pin) window.location.href = '/';

const socket = io();

const ICONS = ['▲', '◆', '●', '★'];
const COLORS = ['var(--ans-0)', 'var(--ans-1)', 'var(--ans-2)', 'var(--ans-3)'];

let totalPlayers = 0;
let currentTimeLimit = 20;
let timerInterval = null;
let currentQuestion = null;
let currentTotal = 0;

/* ── Helpers ────────────────────────────────────────────────────────────── */
function show(id)   { document.getElementById(id).classList.remove('hidden'); }
function hide(id)   { document.getElementById(id).classList.add('hidden'); }
function hideAll()  { ['lobbyScreen','startingScreen','questionScreen','resultsScreen','finalScreen'].forEach(hide); }

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
  const circle = document.getElementById('timerCircle');
  const number = document.getElementById('timerNumber');
  const circumference = 207.3;
  let remaining = seconds;

  const update = () => {
    const ratio = remaining / seconds;
    circle.style.strokeDashoffset = circumference * (1 - ratio);
    number.textContent = remaining;
    number.classList.toggle('urgent', remaining <= 5);
    if (remaining <= 5) {
      circle.style.stroke = 'var(--accent)';
    } else {
      circle.style.stroke = 'var(--accent2)';
    }
  };

  update();
  timerInterval = setInterval(() => {
    remaining--;
    if (remaining < 0) { clearInterval(timerInterval); return; }
    update();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

/* ── Socket events ──────────────────────────────────────────────────────── */
socket.emit('host:join', { pin });

socket.on('error', (msg) => {
  toast(msg);
});

socket.on('host:joined', ({ quiz, players }) => {
  document.getElementById('pinDisplay').textContent = pin;
  document.getElementById('quizTitleDisplay').textContent = quiz.title;
  document.getElementById('finalQuizTitle').textContent = quiz.title;

  const baseUrl = window.location.origin;
  document.getElementById('joinUrl').textContent = `${baseUrl}`;
  document.getElementById('siteUrl').textContent = baseUrl.replace('http://', '').replace('https://', '');

  players.forEach(name => addPlayerChip(name));
  updatePlayerCount(players.length);
  show('lobbyScreen');
});

socket.on('player:new', ({ name, count }) => {
  addPlayerChip(name);
  updatePlayerCount(count);
  toast(`${name} a rejoint la partie !`, 'success');
});

socket.on('player:left', ({ name }) => {
  toast(`${name} s'est déconnecté`);
});

socket.on('lobby:update', ({ count, players }) => {
  updatePlayerCount(count);
});

socket.on('game:starting', () => {
  hideAll();
  show('startingScreen');
  let n = 3;
  document.getElementById('countdown').textContent = n;
  const iv = setInterval(() => {
    n--;
    if (n > 0) {
      document.getElementById('countdown').textContent = n;
    } else {
      clearInterval(iv);
    }
  }, 1000);
});

socket.on('question:start', ({ question, index, total, timeLimit }) => {
  hideAll();
  show('questionScreen');

  currentQuestion = question;
  currentTotal = total;
  currentTimeLimit = timeLimit;

  document.getElementById('qProgressText').textContent = `Question ${index + 1} / ${total}`;
  document.getElementById('qTextDisplay').textContent = question.text;
  document.getElementById('answerCount').textContent = `0 / ${totalPlayers} réponses`;

  // Render answer buttons
  const container = document.getElementById('hostAnswers');
  container.innerHTML = '';
  question.choices.forEach((ch, ci) => {
    if (!ch.trim()) return;
    const btn = document.createElement('div');
    btn.className = 'host-ans-btn';
    btn.dataset.index = ci;
    btn.innerHTML = `<span style="font-size:1.3rem;">${ICONS[ci]}</span> ${ch}`;
    if (ci === question.correctIndex) {
      btn.classList.add('correct');
      btn.innerHTML += `<span class="ans-correct-badge">✓ Bonne réponse</span>`;
    }
    container.appendChild(btn);
  });

  startTimer(timeLimit);
});

socket.on('host:answer:count', ({ answered, total }) => {
  totalPlayers = total;
  document.getElementById('answerCount').textContent = `${answered} / ${total} réponses`;
});

socket.on('question:results', ({ correctIndex, leaderboard, distribution, isLast }) => {
  stopTimer();
  hideAll();
  show('resultsScreen');

  // Distribution chart
  const chart = document.getElementById('distChart');
  chart.innerHTML = '';
  const maxVal = Math.max(...distribution, 1);

  distribution.forEach((count, ci) => {
    if (!currentQuestion.choices[ci]?.trim()) return;
    const wrap = document.createElement('div');
    wrap.className = 'dist-bar-wrap';
    const heightPct = Math.round((count / maxVal) * 100);
    wrap.innerHTML = `
      <div class="dist-count">${count}</div>
      <div class="dist-bar" data-index="${ci}" style="height:${heightPct}%; background:${ci === correctIndex ? 'var(--ans-' + ci + ')' : 'rgba(255,255,255,0.15)'};">
      </div>
      <div class="dist-icon">${ICONS[ci]}</div>
    `;
    chart.appendChild(wrap);
  });

  // Leaderboard
  const lb = document.getElementById('resultsLeaderboard');
  lb.innerHTML = '';
  if (leaderboard.length === 0) {
    lb.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">Aucun joueur</p>';
  } else {
    leaderboard.forEach(({ rank, name, score }) => {
      const item = document.createElement('div');
      item.className = 'leaderboard-item';
      const medals = ['🥇', '🥈', '🥉'];
      item.innerHTML = `
        <div class="lb-rank">${medals[rank - 1] || rank}</div>
        <div class="lb-name">${escHtml(name)}</div>
        <div class="lb-score">${score.toLocaleString()} pts</div>
      `;
      lb.appendChild(item);
    });
  }

  const nextBtn = document.getElementById('nextBtn');
  nextBtn.textContent = isLast ? '🏆 Classement final' : '➡ Question suivante';
});

socket.on('game:end', ({ leaderboard }) => {
  hideAll();
  show('finalScreen');

  renderFinalLeaderboard(leaderboard);
});

socket.on('host:disconnected', () => {
  // This shouldn't happen for host, but handle gracefully
});

/* ── Controls ───────────────────────────────────────────────────────────── */
document.getElementById('startBtn').addEventListener('click', () => {
  socket.emit('host:start', { pin });
});

document.getElementById('nextBtn').addEventListener('click', () => {
  socket.emit('host:next', { pin });
});

document.getElementById('endEarlyBtn').addEventListener('click', () => {
  socket.emit('host:end_early', { pin });
});

/* ── Lobby helpers ──────────────────────────────────────────────────────── */
function addPlayerChip(name) {
  const list = document.getElementById('playerList');
  // Remove empty state
  const empty = list.querySelector('p');
  if (empty) empty.remove();

  const chip = document.createElement('div');
  chip.className = 'player-chip';
  chip.textContent = name;
  list.appendChild(chip);
}

function updatePlayerCount(count) {
  totalPlayers = count;
  document.getElementById('playerCount').textContent = count;
  const startBtn = document.getElementById('startBtn');
  const hint = document.getElementById('startHint');

  if (count > 0) {
    startBtn.disabled = false;
    hint.textContent = `${count} joueur${count > 1 ? 's' : ''} prêt${count > 1 ? 's' : ''}`;
  } else {
    startBtn.disabled = true;
    hint.textContent = 'En attente d\'au moins 1 joueur';
  }
}

/* ── Final leaderboard ──────────────────────────────────────────────────── */
function renderFinalLeaderboard(leaderboard) {
  const podium = document.getElementById('podium');
  podium.innerHTML = '';

  const podiumOrder = [1, 0, 2]; // 2nd, 1st, 3rd visually
  const blockHeights = [80, 120, 60];
  const medals = ['🥇', '🥈', '🥉'];
  const avatars = ['🐯', '🦊', '🐸', '🐼', '🦁', '🐺', '🦋', '🐬', '🦅', '🐲'];

  podiumOrder.forEach((rank, vi) => {
    const player = leaderboard[rank];
    if (!player) return;
    const place = document.createElement('div');
    place.className = 'podium-place';
    place.innerHTML = `
      <div class="podium-avatar">${avatars[rank % avatars.length]}</div>
      <div class="podium-name" title="${escHtml(player.name)}">${escHtml(player.name)}</div>
      <div class="podium-score">${player.score.toLocaleString()} pts</div>
      <div class="podium-block" style="height:${blockHeights[vi]}px;">${medals[rank]}</div>
    `;
    podium.appendChild(place);
  });

  const lb = document.getElementById('finalLeaderboard');
  lb.innerHTML = '';
  leaderboard.forEach(({ rank, name, score }) => {
    const item = document.createElement('div');
    item.className = 'leaderboard-item';
    const medals2 = ['🥇', '🥈', '🥉'];
    item.innerHTML = `
      <div class="lb-rank">${medals2[rank - 1] || rank}</div>
      <div class="lb-name">${escHtml(name)}</div>
      <div class="lb-score">${score.toLocaleString()} pts</div>
    `;
    lb.appendChild(item);
  });
}

function escHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
