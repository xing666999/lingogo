/* ===== LingoGo 德语分级读物清单 =====
 * level: 统一用 CEFR A1-C1，便于跨语言筛选
 * cover: 用 trae-api-cn 在线生成封面图
 * url: 在线阅读外链（公共领域优先）
 */
window.LL = window.LL || {};
LL.reading = LL.reading || {};

LL.reading.de = [
  {
    id: 'de-rd-001',
    lang: 'de',
    title: 'Märchen der Gebrüder Grimm',
    titleZh: '格林童话',
    author: 'Gebrüder Grimm',
    level: 'A2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('classic grimm fairy tales illustration little red riding hood and cinderella vintage watercolor children book art') + '&image_size=square',
    summary: '经典童话集，含小红帽、灰姑娘、白雪公主等。语言简洁，故事性强，适合 A2 级学习者。',
    keywords: ['fairy tale','classic','german','children'],
    url: 'https://www.gutenberg.org/ebooks/6343',
    duration: 15,
    relatedLessonId: 'de-A1-U1-L1'
  },
  {
    id: 'de-rd-002',
    lang: 'de',
    title: 'Der kleine Prinz',
    titleZh: '小王子',
    author: 'Antoine de Saint-Exupéry',
    level: 'A2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('little prince standing on tiny planet with rose vintage watercolor illustration children book art') + '&image_size=square',
    summary: '来自 B-612 星球的小王子游历各星球的奇遇。德语译本语言简洁富有哲理，适合 A2 级学习者。',
    keywords: ['philosophy','friendship','imagination','classic'],
    url: 'https://www.gutenberg.org/ebooks/49002',
    duration: 20,
    relatedLessonId: 'de-A1-U3-L1'
  },
  {
    id: 'de-rd-003',
    lang: 'de',
    title: 'Max und Moritz',
    titleZh: '马克斯和莫里茨',
    author: 'Wilhelm Busch',
    level: 'A2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('max und moritz two naughty boys prank classic german children book illustration vintage cartoon') + '&image_size=square',
    summary: '两个淘气男孩的七场恶作剧故事。韵律体配插图，语言幽默，适合 A2 级阅读。',
    keywords: ['children','humor','rhyme','classic'],
    url: 'https://www.gutenberg.org/ebooks/10519',
    duration: 15,
    relatedLessonId: 'de-A1-U2-L2'
  },
  {
    id: 'de-rd-004',
    lang: 'de',
    title: 'Die Räuber',
    titleZh: '强盗',
    author: 'Friedrich Schiller',
    level: 'B1',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('schiller die raeuber theatrical dramatic scene german classic literature vintage illustration') + '&image_size=square',
    summary: '贵族兄弟反目成仇的悲剧戏剧。狂飙突进时期代表作，含古典戏剧语言与情感张力。',
    keywords: ['drama','classic','rebellion','german literature'],
    url: 'https://www.gutenberg.org/ebooks/4900',
    duration: 50,
    relatedLessonId: 'de-A2-U1-L2'
  },
  {
    id: 'de-rd-005',
    lang: 'de',
    title: 'Die Verwandlung',
    titleZh: '变形记',
    author: 'Franz Kafka',
    level: 'B2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('gregor samsa transformation dark surrealist illustration kafka metamorphosis german literature') + '&image_size=square',
    summary: 'Gregor Samsa 一觉醒来变成甲虫的现代经典。约 2 万字，叙述冷静，含大量完成时与从句。',
    keywords: ['modern','surreal','alienation','novella'],
    url: 'https://www.gutenberg.org/ebooks/22367',
    duration: 45,
    relatedLessonId: 'de-A2-U3-L1'
  },
  {
    id: 'de-rd-006',
    lang: 'de',
    title: 'Faust',
    titleZh: '浮士德',
    author: 'Johann Wolfgang von Goethe',
    level: 'B2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('faust and mephistopheles classic german drama illustration goethe vintage engraving') + '&image_size=square',
    summary: '学者浮士德与魔鬼梅菲斯托的契约悲剧。古典诗剧语言，含大量文学用语与哲学思辨。',
    keywords: ['drama','classic','philosophy','german literature'],
    url: 'https://www.gutenberg.org/ebooks/1459',
    duration: 60,
    relatedLessonId: 'de-A2-U3-L2'
  }
];
