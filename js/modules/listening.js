/* ===== LingoGo 听力训练环节 ===== */
window.LL = window.LL || {};
LL.modules = LL.modules || {};

LL.modules.listeningActivity = function(activity, lang, onComplete) {
  const questions = activity.questions || [];
  let currentIdx = 0;
  let correctCount = 0;

  function render() {
    if (currentIdx >= questions.length) {
      const score = Math.round(correctCount / questions.length * 100);
      onComplete({ score: score, correct: correctCount, total: questions.length, type: 'listening' });
      return;
    }

    const q = questions[currentIdx];
    const app = document.getElementById('app');

    const html = '<div class="lesson-player">' +
      '<div class="player-header">' +
        '<span class="player-close" id="listen-close">✕</span>' +
        '<div class="player-progress"><div class="player-progress-fill" style="width:' + ((currentIdx / questions.length) * 100) + '%"></div></div>' +
        '<span class="c-soft" style="font-size:12px">' + (currentIdx + 1) + '/' + questions.length + '</span>' +
      '</div>' +
      '<div class="player-body">' +
        '<div class="t-center mb-6"><span class="tag" style="background:#fff3e0;color:var(--c-warn)">🎧 听力训练</span></div>' +
        '<div class="speaking-area">' +
          '<p class="speaking-hint">点击播放，仔细聆听</p>' +
          '<button class="audio-btn" id="listen-play" style="width:72px;height:72px;font-size:28px">🔊</button>' +
          '<div id="listen-text" class="c-faint" style="font-size:13px"></div>' +
        '</div>' +
        '<div class="card mb-4"><p class="fw-bold fs-lg">' + LL.utils.escapeHtml(q.q) + '</p></div>' +
        '<div class="flex flex-col gap-3" id="choices">';
    if (q.choices) {
      q.choices.forEach(function(c, i) {
        html += '<button class="choice" data-idx="' + i + '">' + LL.utils.escapeHtml(c) + '</button>';
      });
    } else {
      // 听写
      html += '<input class="input" id="dict-input" placeholder="写下你听到的内容" autocomplete="off">';
    }
    html += '</div>' +
      '<div id="feedback"></div>' +
      '</div></div>';

    app.innerHTML = html;

    document.getElementById('listen-close').addEventListener('click', function() {
      if (confirm('确定退出本次学习？')) LL.router.go('/courses/' + lang);
    });

    const playBtn = document.getElementById('listen-play');
    let played = false;

    playBtn.addEventListener('click', function() {
      playBtn.classList.add('playing');
      LL.speech.speak(activity.audio, lang, { rate: LL.store.getCurrentUser().settings.ttsRate }).then(function() {
        playBtn.classList.remove('playing');
      });
    });

    // 自动播放
    setTimeout(function() {
      playBtn.click();
      played = true;
    }, 400);

    if (q.choices) {
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
          showFeedback(correct);
          if (correct) {
            correctCount++;
            LL.gamification.record('listening_correct');
            LL.gamification.updateSkillStats(LL.store.getCurrentUser().id, lang, 'listening', 1);
          } else {
            LL.gamification.updateSkillStats(LL.store.getCurrentUser().id, lang, 'listening', 0.2);
          }
        });
      });
    } else {
      // 听写
      const input = document.getElementById('dict-input');
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') check();
      });
      // 添加确认按钮
      const fb = document.getElementById('feedback');
      fb.innerHTML = '<button class="btn btn-primary btn-block btn-lg mt-4" id="dict-check">检查</button>';
      document.getElementById('dict-check').addEventListener('click', check);
    }

    function check() {
      const input = document.getElementById('dict-input');
      if (!input) return;
      const val = input.value.trim().toLowerCase();
      const answer = (activity.audio || '').toLowerCase().replace(/[.,!?，。！？]/g, '').trim();
      const valClean = val.replace(/[.,!?，。！？]/g, '').trim();
      const correct = valClean && LL.utils.similarity(valClean, answer) >= 0.85;
      input.disabled = true;
      const btn = document.getElementById('dict-check');
      if (btn) btn.disabled = true;
      showFeedback(correct, '原文：' + activity.audio);
      if (correct) {
        correctCount++;
        LL.gamification.record('listening_correct');
        LL.gamification.updateSkillStats(LL.store.getCurrentUser().id, lang, 'listening', 1);
      } else {
        LL.gamification.updateSkillStats(LL.store.getCurrentUser().id, lang, 'listening', 0.2);
      }
    }
  }

  function showFeedback(correct, explain) {
    const fb = document.getElementById('feedback');
    const content = '<div class="result-bar ' + (correct ? 'correct' : 'wrong') + '">' +
      (correct ? '✓ 回答正确' : '✗ 回答错误') + '</div>' +
      (explain ? '<p class="c-soft mt-2" style="font-size:14px">' + LL.utils.escapeHtml(explain) + '</p>' : '') +
      '<button class="btn btn-primary btn-block btn-lg mt-4" id="next-q">下一题</button>';
    fb.innerHTML = content;
    if (correct) LL.ui.correctSound(); else LL.ui.wrongSound();
    document.getElementById('next-q').addEventListener('click', function() {
      currentIdx++;
      render();
    });
  }

  return { render: render };
};
