/* ===== LingoGo 口语跟读环节 ===== */
window.LL = window.LL || {};
LL.modules = LL.modules || {};

LL.modules.speakingActivity = function(activity, lang, onComplete) {
  const prompts = activity.prompts || [];
  let currentIdx = 0;
  let passCount = 0;
  let totalScore = 0;
  const sttSupported = LL.speech.isRecognitionSupported();

  function render() {
    if (currentIdx >= prompts.length) {
      const avgScore = prompts.length > 0 ? totalScore / prompts.length : 0;
      const score = Math.round(avgScore * 100);
      onComplete({ score: score, correct: passCount, total: prompts.length, type: 'speaking' });
      return;
    }

    const p = prompts[currentIdx];
    const app = document.getElementById('app');

    const html = '<div class="lesson-player">' +
      '<div class="player-header">' +
        '<span class="player-close" id="speak-close">✕</span>' +
        '<div class="player-progress"><div class="player-progress-fill" style="width:' + ((currentIdx / prompts.length) * 100) + '%;background:var(--c-accent)"></div></div>' +
        '<span class="c-soft" style="font-size:12px">' + (currentIdx + 1) + '/' + prompts.length + '</span>' +
      '</div>' +
      '<div class="player-body">' +
        '<div class="t-center mb-6"><span class="tag" style="background:#ffe0e0;color:var(--c-accent)">🎤 口语跟读</span></div>' +
        '<div class="speaking-area">' +
          '<div class="flex items-center justify-center gap-3 mb-2">' +
            '<button class="audio-btn" id="speak-demo">🔊</button>' +
            '<span class="c-soft">听示范</span>' +
          '</div>' +
          '<p class="speaking-prompt">' + LL.utils.escapeHtml(p.target) + '</p>' +
          '<p class="c-soft">' + LL.utils.escapeHtml(p.targetTr || '') + '</p>' +
          (p.hint ? '<p class="c-faint" style="font-size:13px">' + LL.utils.escapeHtml(p.hint) + '</p>' : '') +
          (sttSupported ?
            '<button class="mic-btn" id="speak-mic">🎤</button>' +
            '<p class="speaking-hint" id="speak-status">点击麦克风开始跟读</p>'
            :
            '<div class="card" style="background:#fff8e1;border-color:var(--c-warn)"><p class="c-soft" style="font-size:13px">⚠️ 当前浏览器不支持语音识别，已切换自评模式</p></div>' +
            '<div class="flex gap-3">' +
              '<button class="btn btn-primary" id="self-right">✓ 我读对了</button>' +
              '<button class="btn btn-ghost" id="self-wrong">✗ 读错了</button>' +
            '</div>'
          ) +
          '<div id="speak-result"></div>' +
        '</div>' +
      '</div>' +
    '</div>';

    app.innerHTML = html;

    document.getElementById('speak-close').addEventListener('click', function() {
      if (confirm('确定退出本次学习？')) LL.router.go('/courses/' + lang);
    });

    document.getElementById('speak-demo').addEventListener('click', function() {
      LL.speech.speak(p.target, lang, { rate: LL.store.getCurrentUser().settings.ttsRate });
    });

    // 自动播放示范
    setTimeout(function() {
      LL.speech.speak(p.target, lang, { rate: LL.store.getCurrentUser().settings.ttsRate });
    }, 400);

    if (sttSupported) {
      const mic = document.getElementById('speak-mic');
      const status = document.getElementById('speak-status');
      let recognized = false;

      mic.addEventListener('click', async function() {
        if (recognized) return;
        mic.classList.add('recording');
        status.textContent = '正在聆听... 请跟读';
        status.style.color = 'var(--c-accent)';

        const result = await LL.speech.recognize(lang, { timeout: 8000 });

        mic.classList.remove('recording');
        status.textContent = '点击麦克风开始跟读';
        status.style.color = '';

        if (result.ok && result.transcript) {
          const sim = LL.utils.similarity(p.target, result.transcript);
          totalScore += sim;
          const passed = sim >= 0.7;
          if (passed) passCount++;
          showResult(sim, result.transcript, passed);
        } else {
          showFallback(result.reason);
        }
      });
    } else {
      document.getElementById('self-right').addEventListener('click', function() {
        totalScore += 1; passCount++;
        next();
      });
      document.getElementById('self-wrong').addEventListener('click', function() {
        totalScore += 0.2;
        next();
      });
    }
  }

  function showResult(similarity, transcript, passed) {
    const pct = Math.round(similarity * 100);
    const color = passed ? 'var(--c-primary)' : 'var(--c-warn)';
    const result = document.getElementById('speak-result');
    result.innerHTML = '<div class="card mb-4" style="text-align:center">' +
      '<p class="c-soft" style="font-size:13px">识别结果</p>' +
      '<p class="fw-bold fs-lg mt-1">' + LL.utils.escapeHtml(transcript) + '</p>' +
      '<div class="similarity-bar mt-4"><div class="similarity-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '<p class="fw-bold mt-2" style="color:' + color + '">相似度 ' + pct + '%</p>' +
      '<div class="result-bar ' + (passed ? 'correct' : 'wrong') + ' mt-4">' +
        (passed ? '✓ 发音不错！' : '再来一次试试') + '</div>' +
      '<div class="flex gap-3 mt-4">' +
        (passed ? '' : '<button class="btn btn-ghost" id="speak-retry">重新跟读</button>') +
        '<button class="btn btn-primary btn-block" id="speak-next">下一题</button>' +
      '</div>' +
    '</div>';
    if (passed) LL.ui.correctSound(); else LL.ui.wrongSound();

    const nextBtn = document.getElementById('speak-next');
    nextBtn.addEventListener('click', next);
    const retry = document.getElementById('speak-retry');
    if (retry) retry.addEventListener('click', function() { render(); });

    // 更新技能统计
    LL.gamification.updateSkillStats(LL.store.getCurrentUser().id, lang, 'speaking', similarity);
    if (passed) LL.gamification.record('speaking_pass');
  }

  function showFallback(reason) {
    const result = document.getElementById('speak-result');
    result.innerHTML = '<div class="card mb-4" style="text-align:center;background:#fff8e1;border-color:var(--c-warn)">' +
      '<p class="c-soft">未能识别语音（' + (reason || '未知原因') + '）</p>' +
      '<p class="c-soft mt-2" style="font-size:13px">请尝试重试，或使用自评模式</p>' +
      '<div class="flex gap-3 mt-4">' +
        '<button class="btn btn-ghost" id="speak-retry">重新跟读</button>' +
        '<button class="btn btn-primary" id="self-pass">我读对了</button>' +
        '<button class="btn btn-ghost" id="self-fail">跳过</button>' +
      '</div>' +
    '</div>';
    document.getElementById('speak-retry').addEventListener('click', function() { render(); });
    document.getElementById('self-pass').addEventListener('click', function() {
      totalScore += 0.8; passCount++; next();
    });
    document.getElementById('self-fail').addEventListener('click', function() {
      totalScore += 0.2; next();
    });
  }

  function next() {
    currentIdx++;
    render();
  }

  return { render: render };
};
