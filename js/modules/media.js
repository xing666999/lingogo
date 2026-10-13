/* ===== LingoGo 媒体活动渲染器（YouTube 嵌入 + 逐句跟读 + 默写） =====
 * 依赖：LL.speech.speak / LL.speech.recognize / LL.utils.similarity / LL.ui.toast
 * 数据结构：activity = { type:'media', videoId, source, title, level, transcript, segments:[{start,end,text}], target, ttsFallback }
 */
window.LL = window.LL || {};
LL.modules = LL.modules || {};

/* YouTube IFrame API 懒加载 */
(function() {
  'use strict';
  if (!window._ytInitStarted) {
    window._ytInitStarted = true;
    window._ytReady = false;
    window._ytReadyQueue = [];
    window.onYouTubeIframeAPIReady = function() {
      window._ytReady = true;
      var q = window._ytReadyQueue;
      window._ytReadyQueue = [];
      q.forEach(function(fn) { try { fn(); } catch (e) { console.error(e); } });
    };
    // 不立即注入 script，等首次使用时再注入
  }
})();

function ensureYT(cb) {
  if (window.YT && window.YT.Player) { cb(); return; }
  window._ytReadyQueue.push(cb);
  if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    tag.onerror = function() { cb(new Error('yt-load-failed')); };
    document.head.appendChild(tag);
  }
  // 超时兜底（5s）
  setTimeout(function() {
    if (!window.YT) cb(new Error('yt-timeout'));
  }, 5000);
}

LL.modules.mediaActivity = function(activity, lang, onComplete) {
  'use strict';
  var segments = activity.segments || [];
  var totalTargets = segments.length;
  var passedSet = {};  // 已通过的 segment 索引
  var ytPlayer = null;
  var ytReady = false;
  var ytFailed = false;
  var currentSeg = -1;
  var captionHidden = false;
  var progressCheckTimer = null;

  function escape(t) { return LL.utils.escapeHtml(t); }

  function render() {
    var app = document.getElementById('app');
    var progressPct = totalTargets > 0 ? (Object.keys(passedSet).length / totalTargets * 100) : 0;
    var html = '<div class="lesson-player">' +
      '<div class="player-header">' +
        '<span class="player-close" id="media-close">✕</span>' +
        '<div class="player-progress"><div class="player-progress-fill" style="width:' + progressPct + '%"></div></div>' +
        '<span class="c-soft" style="font-size:12px">🎬 媒体</span>' +
      '</div>' +
      '<div class="player-body">' +
        '<div class="t-center mb-4">' +
          '<span class="tag" style="background:#efe8ff;color:#7B61FF">🎬 媒体训练</span>' +
          (activity.source ? '<p class="c-soft mt-1" style="font-size:12px">' + escape(activity.source) + '</p>' : '') +
        '</div>';

    // 视频区
    if (activity.videoId) {
      html += '<div class="card mb-4" style="padding:0;overflow:hidden;background:#000">' +
        '<div id="yt-host" style="position:relative;padding-bottom:56.25%;height:0">' +
          '<div id="yt-mount" style="position:absolute;top:0;left:0;width:100%;height:100%"></div>' +
        '</div></div>';
    }

    // 倍速控制
    html += '<div class="flex gap-2 mb-4 justify-center">' +
      '<span class="c-soft" style="font-size:13px;align-self:center">倍速</span>' +
      [0.75, 1.0, 1.25].map(function(r) {
        return '<button class="btn btn-sm" data-rate="' + r + '" id="rate-' + r + '">' + r + 'x</button>';
      }).join('') +
      '<button class="btn btn-sm" id="toggle-caption">' + (captionHidden ? '显示字幕' : '隐藏字幕') + '</button>' +
    '</div>';

    // 字幕区
    html += '<div class="card mb-4" id="caption-box"' + (captionHidden ? ' style="display:none"' : '') + '>' +
      '<p class="c-soft mb-2" style="font-size:12px">点击任一句播放对应片段，再选跟读或默写</p>' +
      '<div id="seg-list">';
    segments.forEach(function(seg, i) {
      var passed = passedSet[i];
      var cls = 'seg-item' + (i === currentSeg ? ' active' : '') + (passed ? ' passed' : '');
      html += '<div class="' + cls + '" data-idx="' + i + '" style="padding:10px 12px;border-radius:8px;cursor:pointer;margin-bottom:6px;border:1px solid var(--c-border)' + (passed ? ';background:#e8f5e0' : (i === currentSeg ? ';background:#fff8e0' : '')) + '">' +
        '<div class="flex items-center justify-between">' +
          '<span style="font-size:14px">' + escape(seg.text) + '</span>' +
          (passed ? '<span class="c-primary" style="font-size:14px">✓</span>' : '<span class="c-faint" style="font-size:12px">' + seg.start + 's</span>') +
        '</div>' +
      '</div>';
    });
    html += '</div></div>';

    // 操作区
    html += '<div id="action-area" class="mt-4"></div>';

    // 完成按钮
    html += '<div class="mt-6 t-center">' +
      '<button class="btn btn-primary btn-lg" id="finish-btn">完成活动 (通过 ' + Object.keys(passedSet).length + '/' + totalTargets + ')</button>' +
      (activity.ttsFallback ? '<p class="c-soft mt-2" style="font-size:12px">视频加载失败时可用「听 TTS 示范」跟读</p>' : '') +
    '</div>';

    html += '</div></div>';

    app.innerHTML = html;

    bind();
  }

  function bind() {
    document.getElementById('media-close').addEventListener('click', function() {
      if (confirm('确定退出本次学习？')) {
        cleanup();
        LL.router.go('/courses/' + lang);
      }
    });

    // 字幕选择
    document.querySelectorAll('#seg-list .seg-item').forEach(function(el) {
      el.addEventListener('click', function() {
        var idx = parseInt(this.getAttribute('data-idx'), 10);
        selectSegment(idx);
      });
    });

    // 倍速
    [0.75, 1.0, 1.25].forEach(function(r) {
      var b = document.getElementById('rate-' + r);
      if (b) b.addEventListener('click', function() {
        if (ytPlayer && ytReady) {
          try { ytPlayer.setPlaybackRate(r); } catch (e) {}
        }
        document.querySelectorAll('[data-rate]').forEach(function(x) { x.classList.remove('btn-primary'); });
        b.classList.add('btn-primary');
      });
    });

    // 字幕开关
    document.getElementById('toggle-caption').addEventListener('click', function() {
      captionHidden = !captionHidden;
      var box = document.getElementById('caption-box');
      box.style.display = captionHidden ? 'none' : '';
      this.textContent = captionHidden ? '显示字幕' : '隐藏字幕';
    });

    // 完成按钮
    document.getElementById('finish-btn').addEventListener('click', function() {
      finish();
    });

    // 初始化 YouTube
    if (activity.videoId) {
      initYTPlayer();
    }
  }

  function initYTPlayer() {
    ensureYT(function(err) {
      if (err || !window.YT || !window.YT.Player) {
        ytFailed = true;
        showFallbackNote();
        return;
      }
      try {
        ytPlayer = new window.YT.Player('yt-mount', {
          videoId: activity.videoId,
          playerVars: {
            enablejsapi: 1,
            playsinline: 1,
            origin: location.origin,
            modestbranding: 1
          },
          events: {
            onReady: function() {
              ytReady = true;
            },
            onError: function() {
              ytFailed = true;
              showFallbackNote();
            },
            onStateChange: function(e) {
              // 播放到片段末尾自动暂停
              if (e.data === window.YT.PlayerState.PLAYING && currentSeg >= 0 && progressCheckTimer == null) {
                startSegWatch();
              }
              if (e.data === window.YT.PlayerState.ENDED || e.data === window.YT.PlayerState.PAUSED) {
                stopSegWatch();
              }
            }
          }
        });
      } catch (e) {
        ytFailed = true;
        showFallbackNote();
      }
    });
  }

  function showFallbackNote() {
    var host = document.getElementById('yt-host');
    if (host) {
      host.innerHTML = '<div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#222;color:#fff;font-size:13px;padding:20px;text-align:center">' +
        '视频加载失败，已切换 TTS 模式<br><span style="opacity:.7">点击下方字幕聆听并跟读</span></div>';
    }
  }

  function startSegWatch() {
    stopSegWatch();
    progressCheckTimer = setInterval(function() {
      if (!ytPlayer || !ytReady || currentSeg < 0) { stopSegWatch(); return; }
      try {
        var t = ytPlayer.getCurrentTime();
        var seg = segments[currentSeg];
        if (seg && t >= seg.end) {
          ytPlayer.pauseVideo();
          stopSegWatch();
        }
      } catch (e) {}
    }, 200);
  }

  function stopSegWatch() {
    if (progressCheckTimer) { clearInterval(progressCheckTimer); progressCheckTimer = null; }
  }

  function selectSegment(idx) {
    currentSeg = idx;
    // 高亮
    document.querySelectorAll('#seg-list .seg-item').forEach(function(el, i) {
      el.classList.remove('active');
      el.style.background = i === idx ? '#fff8e0' : (passedSet[i] ? '#e8f5e0' : '');
      if (i === idx) el.classList.add('active');
    });
    var seg = segments[idx];
    if (!seg) return;

    // 播放
    playSeg(seg);

    // 渲染操作区
    var actArea = document.getElementById('action-area');
    actArea.innerHTML =
      '<div class="card" style="border:1px solid var(--c-primary);background:#f3f8ff">' +
        '<p class="fw-bold mb-3" style="font-size:14px">第 ' + (idx + 1) + ' 句</p>' +
        '<p class="mb-3" style="font-size:16px;line-height:1.6">' + escape(seg.text) + '</p>' +
        '<div class="flex gap-2 flex-wrap">' +
          '<button class="btn btn-sm" id="replay-btn">▶ 重播</button>' +
          '<button class="btn btn-primary btn-sm" id="speak-btn">🔊 听 TTS</button>' +
          '<button class="btn btn-sm" style="background:#1CB0F6;color:#fff" id="read-btn">🎤 跟读</button>' +
          '<button class="btn btn-sm" style="background:#FF9600;color:#fff" id="dict-btn">✍ 默写</button>' +
        '</div>' +
        '<div id="feedback" class="mt-3"></div>' +
      '</div>';

    document.getElementById('replay-btn').addEventListener('click', function() { playSeg(seg); });
    document.getElementById('speak-btn').addEventListener('click', function() {
      LL.speech.speak(seg.text, lang, { rate: LL.store.getCurrentUser().settings.ttsRate || 1.0 });
    });
    document.getElementById('read-btn').addEventListener('click', function() { doRead(seg, idx); });
    document.getElementById('dict-btn').addEventListener('click', function() { doDict(seg, idx); });
  }

  function playSeg(seg) {
    if (ytPlayer && ytReady) {
      try {
        ytPlayer.seekTo(seg.start, true);
        ytPlayer.playVideo();
        startSegWatch();
        return;
      } catch (e) {}
    }
    // 兜底：TTS 朗读
    LL.speech.speak(seg.text, lang, { rate: LL.store.getCurrentUser().settings.ttsRate || 1.0 });
  }

  function doRead(seg, idx) {
    var fb = document.getElementById('feedback');
    if (!fb) return;
    if (!LL.speech.isRecognitionSupported()) {
      fb.innerHTML = '<p class="c-warn">当前浏览器不支持语音识别。请使用 Chrome/Edge，或点「✍ 默写」。</p>' +
        '<div class="flex gap-2 mt-2">' +
          '<button class="btn btn-sm btn-primary" id="self-pass">我读对了</button>' +
          '<button class="btn btn-sm" id="self-fail">重试</button>' +
        '</div>';
      document.getElementById('self-pass').addEventListener('click', function() { markPass(idx, 'read-self'); });
      document.getElementById('self-fail').addEventListener('click', function() { render(); });
      return;
    }
    fb.innerHTML = '<p class="c-primary">🎙 正在聆听...</p>';
    if (ytPlayer && ytReady) { try { ytPlayer.pauseVideo(); } catch (e) {} }
    LL.speech.recognize(lang, { timeout: 8000 }).then(function(res) {
      if (!res.ok) {
        fb.innerHTML = '<p class="c-warn">未识别到语音（' + (res.reason || 'error') + '）</p>' +
          '<div class="flex gap-2 mt-2">' +
            '<button class="btn btn-sm btn-primary" id="retry-read">重试</button>' +
            '<button class="btn btn-sm" id="self-pass2">我读对了</button>' +
          '</div>';
        document.getElementById('retry-read').addEventListener('click', function() { doRead(seg, idx); });
        document.getElementById('self-pass2').addEventListener('click', function() { markPass(idx, 'read-self'); });
        return;
      }
      var sim = LL.utils.similarity(res.transcript, seg.text);
      var correct = sim >= 0.85;
      var alts = (res.alternatives || []).slice(0, 2).map(function(a) {
        var s = LL.utils.similarity(a, seg.text);
        if (s > sim) { sim = s; if (s >= 0.85) correct = true; }
        return a + ' (' + Math.round(s * 100) + '%)';
      });
      fb.innerHTML =
        '<div class="result-bar ' + (correct ? 'correct' : 'wrong') + '">' +
          (correct ? '✓ 跟读通过' : '✗ 还差一点') + ' · 相似度 ' + Math.round(sim * 100) + '%' +
        '</div>' +
        '<p class="c-soft mt-2" style="font-size:13px">你说：' + escape(res.transcript) + '</p>' +
        '<p class="c-soft" style="font-size:13px">目标：' + escape(seg.text) + '</p>' +
        (alts.length ? '<p class="c-faint" style="font-size:11px">候选：' + alts.join(' / ') + '</p>' : '') +
        '<div class="flex gap-2 mt-3">' +
          (correct ? '' : '<button class="btn btn-sm btn-primary" id="retry-read2">重试</button>') +
          '<button class="btn btn-sm" id="next-seg">下一句</button>' +
        '</div>';
      var retryBtn = document.getElementById('retry-read2');
      if (retryBtn) retryBtn.addEventListener('click', function() { doRead(seg, idx); });
      document.getElementById('next-seg').addEventListener('click', function() { gotoNext(idx); });
      if (correct) {
        markPass(idx, 'read');
      } else {
        LL.gamification.updateSkillStats(LL.store.getCurrentUser().id, lang, 'speaking', 0.2);
      }
    });
  }

  function doDict(seg, idx) {
    var fb = document.getElementById('feedback');
    if (!fb) return;
    fb.innerHTML =
      '<p class="c-soft mb-2" style="font-size:13px">仔细聆听后输入原文：</p>' +
      '<input class="input" id="dict-input" placeholder="写下你听到的内容" autocomplete="off">' +
      '<div class="flex gap-2 mt-3">' +
        '<button class="btn btn-sm btn-primary" id="dict-check">检查</button>' +
        '<button class="btn btn-sm" id="replay-dict">▶ 重播</button>' +
      '</div>' +
      '<div id="dict-feedback" class="mt-3"></div>';
    // 播放
    playSeg(seg);
    document.getElementById('replay-dict').addEventListener('click', function() { playSeg(seg); });
    document.getElementById('dict-check').addEventListener('click', function() {
      var input = document.getElementById('dict-input');
      if (!input || !input.value.trim()) { LL.ui.toast('请输入内容', 'warn'); return; }
      var val = input.value.trim().toLowerCase().replace(/[.,!?，。！？]/g, '');
      var ans = (seg.text || '').toLowerCase().replace(/[.,!?，。！？]/g, '');
      var sim = LL.utils.similarity(val, ans);
      var correct = sim >= 0.85;
      var dfb = document.getElementById('dict-feedback');
      dfb.innerHTML = '<div class="result-bar ' + (correct ? 'correct' : 'wrong') + '">' +
          (correct ? '✓ 默写通过' : '✗ 还差一点') + ' · 相似度 ' + Math.round(sim * 100) + '%' +
        '</div>' +
        '<p class="c-soft mt-2" style="font-size:13px">原文：' + escape(seg.text) + '</p>' +
        '<div class="flex gap-2 mt-3">' +
          '<button class="btn btn-sm" id="next-seg2">下一句</button>' +
        '</div>';
      input.disabled = true;
      document.getElementById('dict-check').disabled = true;
      document.getElementById('next-seg2').addEventListener('click', function() { gotoNext(idx); });
      if (correct) {
        markPass(idx, 'dict');
      } else {
        LL.gamification.updateSkillStats(LL.store.getCurrentUser().id, lang, 'listening', 0.2);
      }
    });
    document.getElementById('dict-input').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') document.getElementById('dict-check').click();
    });
    setTimeout(function() { var i = document.getElementById('dict-input'); if (i) i.focus(); }, 100);
  }

  function markPass(idx, mode) {
    passedSet[idx] = mode;
    LL.ui.toast('通过第 ' + (idx + 1) + ' 句', 'success');
    LL.ui.beep(880, 0.08); setTimeout(function() { LL.ui.beep(1320, 0.1); }, 80);
    // 局部刷新
    setTimeout(function() {
      if (Object.keys(passedSet).length >= totalTargets) {
        finish();
      } else {
        gotoNext(idx);
      }
    }, 600);
  }

  function gotoNext(idx) {
    var next = idx + 1;
    if (next >= segments.length) {
      // 找未通过的
      for (var i = 0; i < segments.length; i++) {
        if (!passedSet[i]) { selectSegment(i); return; }
      }
      finish();
      return;
    }
    selectSegment(next);
  }

  function finish() {
    cleanup();
    var correct = Object.keys(passedSet).length;
    var score = totalTargets > 0 ? Math.round(correct / totalTargets * 100) : 0;
    onComplete({ score: score, correct: correct, total: totalTargets, type: 'media' });
  }

  function cleanup() {
    stopSegWatch();
    if (ytPlayer) {
      try { ytPlayer.stopVideo(); } catch (e) {}
      try { ytPlayer.destroy(); } catch (e) {}
      ytPlayer = null;
    }
    LL.speech.stopSpeak();
  }

  return { render: render };
};
