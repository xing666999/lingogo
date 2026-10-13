/* ===== LingoGo 语法练习环节 ===== */
window.LL = window.LL || {};
LL.modules = LL.modules || {};

LL.modules.grammarActivity = function(activity, lang, onComplete) {
  const questions = activity.questions || [];
  let currentIdx = 0;
  let correctCount = 0;

  function render() {
    if (currentIdx >= questions.length) {
      const score = Math.round(correctCount / questions.length * 100);
      onComplete({ score: score, correct: correctCount, total: questions.length, type: 'grammar' });
      return;
    }

    const q = questions[currentIdx];
    const app = document.getElementById('app');
    let html = '<div class="lesson-player">' +
      '<div class="player-header">' +
        '<span class="player-close" id="grammar-close">✕</span>' +
        '<div class="player-progress"><div class="player-progress-fill" style="width:' + ((currentIdx / questions.length) * 100) + '%"></div></div>' +
        '<span class="c-soft" style="font-size:12px">' + (currentIdx + 1) + '/' + questions.length + '</span>' +
      '</div>' +
      '<div class="player-body">' +
        '<div class="t-center mb-6"><span class="tag tag-secondary">📖 语法练习</span></div>' +
        (activity.rule ? '<div class="card mb-4" style="background:#f0f8ff;border-color:var(--c-secondary)"><p class="c-soft" style="font-size:12px">语法要点</p><p class="fw-bold mt-1">' + LL.utils.escapeHtml(activity.rule) + '</p></div>' : '') +
        '<div class="card mb-4"><p class="fs-xl fw-bold">' + LL.utils.escapeHtml(q.q) + '</p></div>';

    if (q.kind === 'single' || q.kind === 'multi') {
      const isMulti = q.kind === 'multi';
      html += '<div class="flex flex-col gap-3" id="choices">';
      q.choices.forEach(function(c, i) {
        html += '<button class="choice" data-idx="' + i + '">' + LL.utils.escapeHtml(c) + '</button>';
      });
      html += '</div>';
      html += '<div id="feedback"></div>';
    } else if (q.kind === 'fill') {
      html += '<input class="input" id="fill-input" placeholder="输入答案" autocomplete="off">' +
        '<button class="btn btn-primary btn-block btn-lg mt-4" id="fill-check">检查</button>' +
        '<div id="feedback"></div>';
    } else if (q.kind === 'order') {
      const shuffled = LL.utils.shuffle(q.blocks);
      html += '<div class="sentence-build" id="sentence-build"></div>' +
        '<div class="word-blocks" id="word-blocks">';
      shuffled.forEach(function(b, i) {
        html += '<span class="word-block" data-word="' + LL.utils.escapeHtml(b) + '">' + LL.utils.escapeHtml(b) + '</span>';
      });
      html += '</div>' +
        '<button class="btn btn-primary btn-block btn-lg mt-4" id="order-check">检查</button>' +
        '<button class="btn btn-ghost btn-block mt-2" id="order-reset">重置</button>' +
        '<div id="feedback"></div>';
    }

    html += '</div></div>';
    app.innerHTML = html;

    // 关闭
    document.getElementById('grammar-close').addEventListener('click', function() {
      if (confirm('确定退出本次学习？')) LL.router.go('/courses/' + lang);
    });

    if (q.kind === 'single') setupSingle(q);
    else if (q.kind === 'fill') setupFill(q);
    else if (q.kind === 'order') setupOrder(q);
  }

  function setupSingle(q) {
    let answered = false;
    document.querySelectorAll('#choices .choice').forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (answered) return;
        answered = true;
        const idx = parseInt(this.getAttribute('data-idx'), 10);
        const correct = idx === q.answer;
        document.querySelectorAll('#choices .choice').forEach(function(b, i) {
          b.disabled = true;
          if (i === q.answer) b.classList.add('correct');
          else if (i === idx && !correct) b.classList.add('wrong');
        });
        showFeedback(correct, q.explain);
        if (correct) {
          correctCount++;
          LL.gamification.record('grammar_correct');
          LL.gamification.updateSkillStats(LL.store.getCurrentUser().id, lang, 'grammar', 1);
        } else {
          LL.gamification.updateSkillStats(LL.store.getCurrentUser().id, lang, 'grammar', 0.2);
        }
      });
    });
  }

  function setupFill(q) {
    document.getElementById('fill-check').addEventListener('click', function() {
      const input = document.getElementById('fill-input').value.trim().toLowerCase();
      const answer = (q.answer || '').toLowerCase();
      const correct = input && (input === answer || LL.utils.similarity(input, answer) >= 0.9);
      document.getElementById('fill-input').disabled = true;
      this.disabled = true;
      showFeedback(correct, q.explain || ('答案：' + q.answer));
      if (correct) {
        correctCount++;
        LL.gamification.record('grammar_correct');
        LL.gamification.updateSkillStats(LL.store.getCurrentUser().id, lang, 'grammar', 1);
      } else {
        LL.gamification.updateSkillStats(LL.store.getCurrentUser().id, lang, 'grammar', 0.2);
      }
    });
  }

  function setupOrder(q) {
    const buildEl = document.getElementById('sentence-build');
    const blocksEl = document.getElementById('word-blocks');
    let built = [];

    function refresh() {
      buildEl.innerHTML = built.map(function(w, i) {
        return '<span class="word-block" data-built="' + i + '">' + LL.utils.escapeHtml(w) + '</span>';
      }).join('');
      buildEl.querySelectorAll('.word-block').forEach(function(el) {
        el.addEventListener('click', function() {
          const i = parseInt(this.getAttribute('data-built'), 10);
          built.splice(i, 1);
          refresh();
          updateBlocks();
        });
      });
    }

    function updateBlocks() {
      blocksEl.querySelectorAll('.word-block').forEach(function(el) {
        const word = el.getAttribute('data-word');
        el.classList.toggle('used', built.indexOf(word) >= 0);
      });
    }

    blocksEl.querySelectorAll('.word-block').forEach(function(el) {
      el.addEventListener('click', function() {
        if (this.classList.contains('used')) return;
        const word = this.getAttribute('data-word');
        built.push(word);
        refresh();
        updateBlocks();
      });
    });

    document.getElementById('order-reset').addEventListener('click', function() {
      built = [];
      refresh();
      updateBlocks();
    });

    document.getElementById('order-check').addEventListener('click', function() {
      const sentence = built.join(' ').toLowerCase().replace(/[.,!?，。！？]/g, '').trim();
      const answer = (q.answer || '').toLowerCase().replace(/[.,!?，。！？]/g, '').trim();
      const correct = sentence === answer;
      this.disabled = true;
      document.getElementById('order-reset').disabled = true;
      showFeedback(correct, q.explain || ('答案：' + q.answer));
      if (correct) {
        correctCount++;
        LL.gamification.record('grammar_correct');
        LL.gamification.updateSkillStats(LL.store.getCurrentUser().id, lang, 'grammar', 1);
      } else {
        LL.gamification.updateSkillStats(LL.store.getCurrentUser().id, lang, 'grammar', 0.2);
      }
    });
  }

  function showFeedback(correct, explain) {
    const fb = document.getElementById('feedback');
    fb.innerHTML = '<div class="result-bar ' + (correct ? 'correct' : 'wrong') + '">' +
      (correct ? '✓ 回答正确' : '✗ 回答错误') + '</div>' +
      (explain ? '<p class="c-soft mt-2" style="font-size:14px">' + LL.utils.escapeHtml(explain) + '</p>' : '') +
      '<button class="btn btn-primary btn-block btn-lg mt-4" id="next-q">下一题</button>';
    if (correct) LL.ui.correctSound(); else LL.ui.wrongSound();
    document.getElementById('next-q').addEventListener('click', function() {
      currentIdx++;
      render();
    });
  }

  return { render: render };
};
