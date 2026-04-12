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

  const container = document.getElementById('hostAnswers');
  const openFeed  = document.getElementById('openAnswersFeed');
  container.innerHTML = '';
  openFeed.innerHTML  = '';

  if (question.type === 'open') {
    container.style.display = 'none';
    openFeed.style.display  = 'block';
    openFeed.innerHTML = `
      <div style="background:var(--surface); border-radius:var(--radius-lg); padding:2rem 1.5rem; max-width:700px; margin:0 auto; text-align:center; box-shadow:var(--shadow-sm);">
        <div style="font-size:2.5rem; margin-bottom:0.75rem;">✍️</div>
        <div style="font-size:1.1rem; font-weight:700; margin-bottom:0.4rem;">Mode Questions Ouvertes</div>
        <div style="color:var(--text-muted); font-size:0.9rem;">Les réponses s'afficheront sur l'écran de résultats.</div>
      </div>
    `;
  } else {
    container.style.display = 'block';
    openFeed.style.display  = 'none';
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
  }

  startTimer(timeLimit);
});


socket.on('host:answer:count', ({ answered, total }) => {
  totalPlayers = total;
  document.getElementById('answerCount').textContent = `${answered} / ${total} réponses`;
});

socket.on('question:results', (data) => {
  stopTimer();
  hideAll();
  show('resultsScreen');

  const { type, questionText, leaderboard, isLast } = data;

  document.getElementById('resultQText').textContent = questionText || currentQuestion?.text || '';

  const ansGrid  = document.getElementById('resultAnswersGrid');
  const chart    = document.getElementById('distChart');
  const distTitle = chart.previousElementSibling; // "Répartition des réponses" label
  ansGrid.innerHTML = '';
  chart.innerHTML   = '';

  if (type === 'open') {
    const { correctAnswer, playerAnswers } = data;

    // Single-column grid for open mode
    ansGrid.style.gridTemplateColumns = '1fr';

    // Correct answer card — custom green style (no result-ans-btn, no data-index needed)
    const correctDiv = document.createElement('div');
    correctDiv.style.cssText = 'background:rgba(56,161,105,0.12); border:2px solid #38a169; border-radius:var(--radius); padding:0.9rem 1.1rem;';
    correctDiv.innerHTML = `
      <div style="font-size:0.68rem; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:#38a169; margin-bottom:0.3rem;">✓ Bonne réponse</div>
      <div style="font-size:1.15rem; font-weight:800; color:var(--text);">${escHtml(correctAnswer || '')}</div>
    `;
    ansGrid.appendChild(correctDiv);

    // Override dist-chart CSS → vertical list
    chart.style.cssText = 'display:flex; flex-direction:column; gap:0.35rem; height:auto; max-height:300px; overflow-y:auto;';
    if (distTitle) distTitle.textContent = 'Réponses des joueurs';

    const correctCount = playerAnswers.filter(p => p.isCorrect).length;
    playerAnswers.forEach(({ name, text, isCorrect, answered }) => {
      const item = document.createElement('div');
      item.style.cssText = `display:flex; align-items:center; gap:0.65rem; padding:0.5rem 0.75rem; border-radius:var(--radius); background:${isCorrect ? 'rgba(56,161,105,0.1)' : 'var(--card)'}; border-left:3px solid ${isCorrect ? '#38a169' : answered ? 'var(--danger)' : 'var(--border)'};`;
      item.innerHTML = `
        <span style="font-weight:700; color:var(--text-muted); min-width:80px; flex-shrink:0; font-size:0.82rem;">${escHtml(name)}</span>
        <span style="flex:1; font-size:0.9rem; color:var(--text);">${answered ? escHtml(text) : '<em style="opacity:0.4;">Sans réponse</em>'}</span>
        <span style="font-size:1rem; flex-shrink:0;">${isCorrect ? '✅' : answered ? '❌' : '—'}</span>
      `;
      chart.appendChild(item);
    });

    const summary = document.createElement('div');
    summary.style.cssText = 'margin-top:0.4rem; font-size:0.8rem; color:var(--text-muted); font-weight:600; padding-top:0.4rem; border-top:1px solid var(--border);';
    summary.textContent = `${correctCount} / ${playerAnswers.length} bonne${correctCount > 1 ? 's' : ''} réponse${correctCount > 1 ? 's' : ''}`;
    chart.appendChild(summary);

  } else {
    const { correctIndex, choices, distribution } = data;

    // Reset to default grid for QCM
    ansGrid.style.gridTemplateColumns = '';
    chart.style.cssText = '';

    // Answer buttons
    (choices || currentQuestion?.choices || []).forEach((ch, ci) => {
      if (!ch?.trim()) return;
      const btn = document.createElement('div');
      btn.className = `result-ans-btn ${ci === correctIndex ? 'correct' : 'incorrect'}`;
      btn.dataset.index = ci;
      btn.innerHTML = `
        <span style="font-size:1.1rem;">${ICONS[ci]}</span>
        <span>${escHtml(ch)}</span>
        ${ci === correctIndex ? '<span class="result-check">✓</span>' : ''}
      `;
      ansGrid.appendChild(btn);
    });

    // Distribution chart
    if (distTitle) distTitle.textContent = 'Répartition des réponses';
    const maxVal = Math.max(...distribution, 1);
    const displayChoices = choices || currentQuestion?.choices || [];
    distribution.forEach((count, ci) => {
      if (!displayChoices[ci]?.trim()) return;
      const wrap = document.createElement('div');
      wrap.className = 'dist-bar-wrap';
      const heightPct = Math.round((count / maxVal) * 100);
      const isCorrect = ci === correctIndex;
      wrap.innerHTML = `
        <div class="dist-count">${count}</div>
        <div class="dist-bar ${isCorrect ? 'correct' : 'incorrect'}" data-index="${ci}"
          style="height:${heightPct}%; background:var(--ans-${ci});"></div>
        <div class="dist-icon">${ICONS[ci]}</div>
      `;
      chart.appendChild(wrap);
    });
  }

  // Leaderboard (same for both modes)
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
  saveMultiToHistory(leaderboard);
});

function saveMultiToHistory(leaderboard) {
  const title = document.getElementById('finalQuizTitle').textContent;
  const STORAGE_KEY = 'mindeon_history';
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  existing.push({
    id:         Date.now().toString(36),
    mode:       'multi',
    quizTitle:  title,
    date:       Date.now(),
    score:      leaderboard[0]?.score || 0,
    correct:    null,
    total:      null,
    leaderboard: leaderboard
  });
  if (existing.length > 50) existing.splice(0, existing.length - 50);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

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
