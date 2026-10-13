/* ===== LingoGo SM-2 间隔重复算法 ===== */
window.LL = window.LL || {};

LL.srs = (function() {
  'use strict';

  // quality 0-5: 0-2 记不住, 3-5 不同程度掌握
  function update(state, quality) {
    state = state || { ease: 2.5, interval: 0, repetitions: 0, lapses: 0 };
    let ease = state.ease || 2.5;
    let interval = state.interval || 0;
    let repetitions = state.repetitions || 0;
    let lapses = state.lapses || 0;

    quality = Math.max(0, Math.min(5, quality));

    if (quality < 3) {
      repetitions = 0;
      interval = 1;
      lapses += 1;
    } else {
      repetitions += 1;
      if (repetitions === 1) interval = 1;
      else if (repetitions === 2) interval = 6;
      else interval = Math.round(interval * ease);
    }

    ease = ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (ease < 1.3) ease = 1.3;

    return {
      ease: Math.round(ease * 100) / 100,
      interval: interval,
      repetitions: repetitions,
      due: LL.utils.addDays(LL.utils.todayStr(), interval),
      lastReview: LL.utils.todayStr(),
      lapses: lapses
    };
  }

  // 评分映射：4档自评按钮 -> quality
  const RATING_MAP = {
    0: 0,  // 完全不认识
    1: 2,  // 困难
    2: 4,  // 一般
    3: 5   // 容易
  };

  function qualityFromRating(rating) {
    return RATING_MAP[rating] !== undefined ? RATING_MAP[rating] : 3;
  }

  function getDueCards(srsMap) {
    const today = LL.utils.todayStr();
    return Object.keys(srsMap).filter(function(cardId) {
      return srsMap[cardId].due <= today;
    });
  }

  function isDue(cardState) {
    if (!cardState) return true;
    return cardState.due <= LL.utils.todayStr();
  }

  return {
    update: update,
    qualityFromRating: qualityFromRating,
    getDueCards: getDueCards,
    isDue: isDue
  };
})();
