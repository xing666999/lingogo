/* ===== LingoGo Web Speech API 封装 ===== */
window.LL = window.LL || {};

LL.speech = (function() {
  'use strict';

  // 动态从 LL.langs 读取 TTS 语言映射，未加载时回退到旧硬编码
  const LANG_MAP = {};
  if (LL.langs) {
    Object.keys(LL.langs).forEach(function(lang) {
      LANG_MAP[lang] = LL.langs[lang].tts;
    });
  }
  // 兼容兜底
  if (!LANG_MAP.en) LANG_MAP.en = 'en-US';
  if (!LANG_MAP.ja) LANG_MAP.ja = 'ja-JP';
  if (!LANG_MAP.ko) LANG_MAP.ko = 'ko-KR';
  if (!LANG_MAP.zh) LANG_MAP.zh = 'zh-CN';

  let voicesCache = [];
  let voicesLoaded = false;

  const synthesis = 'speechSynthesis' in window;
  const recognitionAvail = ('SpeechRecognition' in window) || ('webkitSpeechRecognition' in window);

  function loadVoices() {
    return new Promise(function(resolve) {
      if (!synthesis) { resolve([]); return; }
      let v = speechSynthesis.getVoices();
      if (v.length) { voicesCache = v; voicesLoaded = true; resolve(v); return; }
      let resolved = false;
      function handler() {
        if (resolved) return;
        resolved = true;
        voicesCache = speechSynthesis.getVoices();
        voicesLoaded = true;
        resolve(voicesCache);
      }
      speechSynthesis.onvoiceschanged = handler;
      setTimeout(handler, 1000);
    });
  }

  function pickVoice(lang) {
    const target = LANG_MAP[lang] || 'en-US';
    const prefix = target.split('-')[0];
    return voicesCache.find(function(v) { return v.lang === target; })
      || voicesCache.find(function(v) { return v.lang.startsWith(prefix); })
      || null;
  }

  function speak(text, lang, opts) {
    opts = opts || {};
    return new Promise(function(resolve) {
      if (!synthesis) {
        LL.ui && LL.ui.toast('当前浏览器不支持语音合成', 'warn');
        resolve({ ok: false });
        return;
      }
      try {
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = LANG_MAP[lang] || 'en-US';
        u.rate = opts.rate != null ? opts.rate : 1.0;
        u.pitch = opts.pitch != null ? opts.pitch : 1.0;
        const voice = pickVoice(lang);
        if (voice) u.voice = voice;
        u.onend = function() { resolve({ ok: true }); };
        u.onerror = function() { resolve({ ok: false }); };
        speechSynthesis.speak(u);
      } catch (e) {
        console.error('[speech] speak error:', e);
        resolve({ ok: false });
      }
    });
  }

  function recognize(lang, opts) {
    opts = opts || {};
    return new Promise(function(resolve) {
      if (!recognitionAvail) {
        resolve({ ok: false, reason: 'unsupported' });
        return;
      }
      const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
      const r = new Ctor();
      r.lang = LANG_MAP[lang] || 'en-US';
      r.interimResults = false;
      r.maxAlternatives = 3;
      r.continuous = false;

      const timeout = opts.timeout || 8000;
      let done = false;
      const t = setTimeout(function() {
        if (!done) { done = true; try { r.stop(); } catch(e){} resolve({ ok: false, reason: 'timeout' }); }
      }, timeout);

      r.onresult = function(e) {
        clearTimeout(t);
        if (done) return;
        done = true;
        const res = e.results[0];
        const alternatives = [];
        for (let i = 0; i < res.length; i++) alternatives.push(res[i].transcript);
        resolve({ ok: true, transcript: res[0].transcript, alternatives: alternatives });
      };
      r.onerror = function(e) {
        clearTimeout(t);
        if (done) return;
        done = true;
        resolve({ ok: false, reason: e.error || 'error' });
      };
      r.onend = function() {
        clearTimeout(t);
        if (!done) { done = true; resolve({ ok: false, reason: 'no-speech' }); }
      };
      try { r.start(); } catch (e) {
        clearTimeout(t);
        if (!done) { done = true; resolve({ ok: false, reason: 'start-failed' }); }
      }
    });
  }

  function isSynthesisSupported() { return synthesis; }
  function isRecognitionSupported() { return recognitionAvail; }

  function stopSpeak() {
    if (synthesis) speechSynthesis.cancel();
  }

  // 预热
  if (synthesis) loadVoices();

  return {
    speak: speak,
    recognize: recognize,
    loadVoices: loadVoices,
    isSynthesisSupported: isSynthesisSupported,
    isRecognitionSupported: isRecognitionSupported,
    stopSpeak: stopSpeak
  };
})();
