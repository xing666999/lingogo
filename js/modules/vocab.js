/* ===== LingoGo 单词记忆环节 ===== */
window.LL = window.LL || {};
LL.modules = LL.modules || {};

LL.modules.vocabActivity = function(activity, lang, onComplete) {
  const cards = activity.cards || [];
  let currentIdx = 0;
  let correctCount = 0;
  const results = [];

  function render() {
    if (currentIdx >= cards.length) {
      const score = Math.round(correctCount / cards.length * 100);
      onComplete({ score: score, correct: correctCount, total: cards.length, type: 'vocab' });
      return;
    }

    const card = cards[currentIdx];
    const app = document.getElementById('app');

    const html = '<div class="lesson-player">' +
      '<div class="player-header">' +
        '<span class="player-close" id="vocab-close">✕</span>' +
        '<div class="player-progress"><div class="player-progress-fill" style="width:' + ((currentIdx / cards.length) * 100) + '%"></div></div>' +
        '<span class="c-soft" style="font-size:12px">' + (currentIdx + 1) + '/' + cards.length + '</span>' +
      '</div>' +
      '<div class="player-body">' +
        '<div class="vocab-card-area">' +
          '<div class="vocab-meta"><span class="tag tag-primary">📚 单词记忆</span></div>' +
          '<div class="flashcard" id="flashcard">' +
            '<div class="flashcard-inner">' +
              '<div class="flashcard-face flashcard-front">' +
                '<button class="audio-btn" id="vocab-audio">🔊</button>' +
                '<div style="font-size:36px;font-weight:900">' + LL.utils.escapeHtml(card.front) + '</div>' +
                (card.ipa ? '<div class="c-soft">' + LL.utils.escapeHtml(card.ipa) + '</div>' : '') +
                '<div class="c-faint" style="font-size:13px;margin-top:12px">点击卡片查看释义</div>' +
              '</div>' +
              '<div class="flashcard-face flashcard-back">' +
                '<div style="font-size:28px;font-weight:900;color:var(--c-primary)">' + LL.utils.escapeHtml(card.back) + '</div>' +
                (card.example ? '<div style="margin-top:12px;font-size:16px">' + LL.utils.escapeHtml(card.example) + '</div>' : '') +
                (card.exampleTr ? '<div class="c-soft">' + LL.utils.escapeHtml(card.exampleTr) + '</div>' : '') +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div id="vocab-actions">' +
            '<button class="btn btn-secondary btn-block btn-lg" id="vocab-flip">显示答案</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

    app.innerHTML = html;

    // 翻转
    const flipBtn = document.getElementById('vocab-flip');
    const flashcard = document.getElementById('flashcard');
    let flipped = false;

    flashcard.addEventListener('click', function() {
      flipped = !flipped;
      flashcard.classList.toggle('flipped', flipped);
      updateActions();
    });
    flipBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      flipped = !flipped;
      flashcard.classList.toggle('flipped', flipped);
      updateActions();
    });

    function updateActions() {
      const actions = document.getElementById('vocab-actions');
      if (flipped) {
        actions.innerHTML = '<p class="c-soft t-center mb-2" style="font-size:13px">你认识这个词吗？</p>' +
          '<div class="rating-btns">' +
            '<button class="rating-btn r0" data-rating="0">不认识</button>' +
            '<button class="rating-btn r1" data-rating="1">困难</button>' +
            '<button class="rating-btn r2" data-rating="2">一般</button>' +
            '<button class="rating-btn r3" data-rating="3">容易</button>' +
          '</div>';
        actions.querySelectorAll('.rating-btn').forEach(function(btn) {
          btn.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'), 10);
            handleRating(card, rating);
          });
        });
      } else {
        actions.innerHTML = '<button class="btn btn-secondary btn-block btn-lg" id="vocab-flip2">显示答案</button>';
        document.getElementById('vocab-flip2').addEventListener('click', function(e) {
          e.stopPropagation();
          flipped = true;
          flashcard.classList.add('flipped');
          updateActions();
        });
      }
    }

    // 音频
    document.getElementById('vocab-audio').addEventListener('click', function(e) {
      e.stopPropagation();
      LL.speech.speak(card.front, lang, { rate: LL.store.getCurrentUser().settings.ttsRate });
    });
    // 自动播放一次
    setTimeout(function() {
      LL.speech.speak(card.front, lang, { rate: LL.store.getCurrentUser().settings.ttsRate });
    }, 300);

    // 关闭
    document.getElementById('vocab-close').addEventListener('click', function() {
      if (confirm('确定退出本次学习？进度不会保存。')) {
        LL.router.go('/courses/' + lang);
      }
    });
  }

  function handleRating(card, rating) {
    const quality = LL.srs.qualityFromRating(rating);
    const user = LL.store.getCurrentUser();
    const records = LL.store.getRecords(user.id);
    const oldState = records.srs[card.id] || null;
    const newState = LL.srs.update(oldState, quality);
    records.srs[card.id] = newState;
    LL.store.saveRecords(user.id, records);

    if (rating >= 2) correctCount++;
    results.push({ cardId: card.id, rating: rating });

    // 记录 XP
    if (rating >= 2) {
      LL.gamification.record('card_correct');
    } else {
      LL.gamification.record('card_review');
    }
    LL.gamification.updateSkillStats(user.id, lang, 'vocab', rating >= 2 ? 1 : 0.3);

    currentIdx++;
    render();
  }

  return { render: render };
};
