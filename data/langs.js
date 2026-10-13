/* ===== LingoGo 语言元数据中枢 =====
 * 统一管理所有支持的语言信息：
 *   - code: 语言代码（用于路由、数据文件名、TTS 映射）
 *   - name: 中文名称（UI 展示）
 *   - flag: 旗帜 emoji
 *   - sub: 原语种名（副标题）
 *   - tts: Web Speech API 语言代码
 *   - theme: 主题色（课程卡片、进度条等）
 * 新增语言只需在此处添加一条记录，并在 data/ 下补 courses.{code}.js 与 reading.{code}.js
 */
window.LL = window.LL || {};

LL.langs = {
  en: { name: '英语',  flag: '🇬🇧', sub: 'English',    tts: 'en-US', theme: '#1CB0F6' },
  ja: { name: '日语',  flag: '🇯🇵', sub: '日本語',      tts: 'ja-JP', theme: '#FF4B4B' },
  ko: { name: '韩语',  flag: '🇰🇷', sub: '한국어',      tts: 'ko-KR', theme: '#58CC02' },
  fr: { name: '法语',  flag: '🇫🇷', sub: 'Français',   tts: 'fr-FR', theme: '#7B61FF' },
  es: { name: '西语',  flag: '🇪🇸', sub: 'Español',     tts: 'es-ES', theme: '#FFC800' },
  de: { name: '德语',  flag: '🇩🇪', sub: 'Deutsch',     tts: 'de-DE', theme: '#FF9600' },
  th: { name: '泰语',  flag: '🇹🇭', sub: 'ภาษาไทย',     tts: 'th-TH', theme: '#00B8A9' },
  vi: { name: '越南语', flag: '🇻🇳', sub: 'Tiếng Việt', tts: 'vi-VN', theme: '#FF4B4B' }
};

/* 语言代码顺序列表，用于课程/读物/推荐等遍历场景 */
LL.langList = Object.keys(LL.langs); // ['en','ja','ko','fr','es','de','th','vi']

/* 便捷访问器：从任意位置获取语言元数据，未找到时返回空对象 */
LL.getLangMeta = function(code) {
  return (LL.langs && LL.langs[code]) || { name: code, flag: '🌐', sub: code, tts: 'en-US', theme: '#1CB0F6' };
};

/* 返回 {name, flag, sub} 三元组（兼容旧代码里写死的 langNames/langEmojis/langSubs） */
LL.getLangName = function(code) { return LL.getLangMeta(code).name; };
LL.getLangFlag = function(code) { return LL.getLangMeta(code).flag; };
LL.getLangSub  = function(code) { return LL.getLangMeta(code).sub;  };
LL.getLangTTS  = function(code) { return LL.getLangMeta(code).tts;  };
LL.getLangTheme = function(code) { return LL.getLangMeta(code).theme; };
