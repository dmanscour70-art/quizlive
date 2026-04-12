/* ── State ──────────────────────────────────────────────────────────────── */
let currentQuizId = null;
let questions = [];

const COLORS  = ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71'];
const ICONS   = ['▲', '◆', '●', '★'];
const LABELS  = ['Rouge', 'Bleu', 'Jaune', 'Vert'];
const TIMES   = [5, 10, 15, 20, 30, 45, 60];

/* ── Toast ──────────────────────────────────────────────────────────────── */
function toast(msg, type = 'error') {
  const c = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

/* ── Question model ─────────────────────────────────────────────────────── */
function newQuestion() {
  return {
    id: Math.random().toString(36).substr(2, 9),
    text: '',
    choices: ['', '', '', ''],
    correctIndex: 0,
    timeLimit: 20
  };
}

/* ── Render ─────────────────────────────────────────────────────────────── */
function render() {
  const list = document.getElementById('questionsList');
  list.innerHTML = '';

  questions.forEach((q, qi) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.dataset.id = q.id;

    card.innerHTML = `
      <button class="delete-q-btn" data-qi="${qi}" title="Supprimer">✕</button>
      <div class="question-card-header">
        <div class="q-num-badge">${qi + 1}</div>
        <input class="input" placeholder="Question (ex: Quelle est la capitale de...)"
          value="${escHtml(q.text)}" data-qi="${qi}" data-field="text" maxlength="200">
      </div>

      <div class="time-select-wrap">
        <span>⏱ Durée :</span>
        <select class="input select" data-qi="${qi}" data-field="timeLimit" style="width:auto; padding:0.4rem 0.75rem;">
          ${TIMES.map(t => `<option value="${t}" ${q.timeLimit === t ? 'selected' : ''}>${t}s</option>`).join('')}
        </select>
      </div>

      <div class="answer-inputs">
        ${q.choices.map((ch, ci) => `
          <div class="answer-input-row">
            <div class="correct-mark ${q.correctIndex === ci ? 'active' : ''}"
              data-qi="${qi}" data-ci="${ci}" title="Marquer comme correcte">
              ${q.correctIndex === ci ? '✓' : ''}
            </div>
            <div style="width:10px; height:10px; border-radius:50%; background:${COLORS[ci]}; flex-shrink:0;"></div>
            <input class="input" placeholder="${LABELS[ci]}" value="${escHtml(ch)}"
              data-qi="${qi}" data-ci="${ci}" data-field="choice" maxlength="100">
          </div>
        `).join('')}
      </div>
      <div style="margin-top:0.75rem; font-size:0.8rem; color:var(--text-muted);">
        Bonne réponse : <strong style="color:#2ecc71;">${LABELS[q.correctIndex]}</strong>
      </div>
    `;

    // Delete button
    card.querySelector('.delete-q-btn').addEventListener('click', () => {
      if (questions.length <= 1) return toast('Un quiz doit avoir au moins 1 question');
      questions.splice(qi, 1);
      render();
      updateCount();
    });

    // Text inputs
    card.querySelectorAll('input[data-field="text"]').forEach(inp => {
      inp.addEventListener('input', () => {
        questions[inp.dataset.qi].text = inp.value;
        markUnsaved();
      });
    });

    // Choice inputs
    card.querySelectorAll('input[data-field="choice"]').forEach(inp => {
      inp.addEventListener('input', () => {
        questions[inp.dataset.qi].choices[inp.dataset.ci] = inp.value;
        markUnsaved();
      });
    });

    // Time selects
    card.querySelectorAll('select[data-field="timeLimit"]').forEach(sel => {
      sel.addEventListener('change', () => {
        questions[sel.dataset.qi].timeLimit = parseInt(sel.value);
        markUnsaved();
      });
    });

    // Correct answer marks
    card.querySelectorAll('.correct-mark').forEach(mark => {
      mark.addEventListener('click', () => {
        questions[mark.dataset.qi].correctIndex = parseInt(mark.dataset.ci);
        render();
        markUnsaved();
      });
    });

    list.appendChild(card);
  });

  updateCount();
}

function escHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function updateCount() {
  const n = questions.length;
  document.getElementById('qCount').textContent = `${n} question${n > 1 ? 's' : ''}`;
  document.getElementById('launchBtn').disabled = n === 0;
}

function markUnsaved() {
  document.getElementById('saveStatus').textContent = '✏️ Non sauvegardé';
  document.getElementById('saveStatus').style.color = 'var(--accent2)';
}

/* ── Save ───────────────────────────────────────────────────────────────── */
async function saveQuiz() {
  const title = document.getElementById('quizTitle').value.trim();
  if (!title) return toast('Donnez un titre à votre quiz');
  if (questions.length === 0) return toast('Ajoutez au moins une question');

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    if (!q.text.trim()) return toast(`Question ${i + 1} : texte manquant`);
    const filled = q.choices.filter(c => c.trim());
    if (filled.length < 2) return toast(`Question ${i + 1} : au moins 2 réponses requises`);
    if (!q.choices[q.correctIndex].trim()) return toast(`Question ${i + 1} : la bonne réponse est vide`);
  }

  const btn = document.getElementById('saveBtn');
  btn.disabled = true;
  btn.textContent = '⏳ Sauvegarde...';

  try {
    const res = await fetch('/api/quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, questions })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);

    currentQuizId = data.id;

    // Save to localStorage for recent list
    const stored = JSON.parse(localStorage.getItem('quizlive_quizzes') || '[]');
    stored.push({ id: data.id, title, count: questions.length });
    localStorage.setItem('quizlive_quizzes', JSON.stringify(stored));

    document.getElementById('saveStatus').textContent = '✅ Sauvegardé';
    document.getElementById('saveStatus').style.color = '#2ecc71';
    toast('Quiz sauvegardé !', 'success');
    return true;
  } catch (err) {
    toast(err.message || 'Erreur lors de la sauvegarde');
    return false;
  } finally {
    btn.disabled = false;
    btn.textContent = '💾 Sauvegarder';
  }
}

/* ── Launch ─────────────────────────────────────────────────────────────── */
async function launchGame() {
  if (!currentQuizId) {
    const saved = await saveQuiz();
    if (!saved) return;
  }

  const btn = document.getElementById('launchBtn');
  btn.disabled = true;
  btn.textContent = '⏳ Création...';

  try {
    const res = await fetch('/api/game', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quizId: currentQuizId })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    window.location.href = `/host.html?pin=${data.pin}`;
  } catch (err) {
    toast(err.message || 'Erreur lors du lancement');
    btn.disabled = false;
    btn.textContent = '🚀 Lancer une partie';
  }
}

/* ── Init ───────────────────────────────────────────────────────────────── */
document.getElementById('addQuestionBtn').addEventListener('click', () => {
  questions.push(newQuestion());
  render();
  // Scroll to new question
  setTimeout(() => {
    const cards = document.querySelectorAll('.question-card');
    cards[cards.length - 1]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);
});

document.getElementById('saveBtn').addEventListener('click', saveQuiz);
document.getElementById('launchBtn').addEventListener('click', launchGame);

document.getElementById('quizTitle').addEventListener('input', markUnsaved);

// Load existing quiz if ?edit=id
const urlParams = new URLSearchParams(window.location.search);
const editId = urlParams.get('edit');
if (editId) {
  fetch(`/api/quiz/${editId}`)
    .then(r => r.json())
    .then(quiz => {
      document.getElementById('quizTitle').value = quiz.title;
      questions = quiz.questions;
      currentQuizId = quiz.id;
      render();
      document.getElementById('saveStatus').textContent = '✅ Chargé';
      document.getElementById('saveStatus').style.color = '#2ecc71';
    })
    .catch(() => {
      toast('Quiz introuvable');
    });
} else {
  // Start with one empty question
  questions.push(newQuestion());
  render();
}
