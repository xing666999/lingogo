/* ===== LingoGo 西语分级读物清单 =====
 * level: 统一用 CEFR A1-C1，便于跨语言筛选
 * cover: 用 trae-api-cn 在线生成封面图
 * url: 在线阅读外链（公共领域优先）
 */
window.LL = window.LL || {};
LL.reading = LL.reading || {};

LL.reading.es = [
  {
    id: 'es-rd-001',
    lang: 'es',
    title: 'Don Quijote (Excerpt)',
    titleZh: '堂吉诃德（节选）',
    author: 'Miguel de Cervantes',
    level: 'B1',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('book cover don quixote spanish knight windmill classic illustrated vintage') + '&image_size=square',
    summary: '一位沉迷骑士小说的绅士自封为堂吉诃德，带着侍从桑丘出发冒险。经典开篇语言典雅，适合 B1 级学习者。',
    keywords: ['chivalry','adventure','classic','satire'],
    url: 'https://www.gutenberg.org/ebooks/2000',
    duration: 20,
    relatedLessonId: 'es-A1-U1-L1'
  },
  {
    id: 'es-rd-002',
    lang: 'es',
    title: 'Cien Años de Soledad',
    titleZh: '百年孤独（节选）',
    author: 'Gabriel García Márquez',
    level: 'B2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('magical realism book cover macondo village tropical jungle spanish literature art') + '&image_size=square',
    summary: '布恩迪亚家族七代人的兴衰史，魔幻现实主义巅峰之作。叙事宏大，句式复杂，适合 B2 级学习者。',
    keywords: ['magical realism','family','history','latin america'],
    url: 'https://www.gutenberg.org/ebooks/55631',
    duration: 35,
    relatedLessonId: 'es-A2-U1-L2'
  },
  {
    id: 'es-rd-003',
    lang: 'es',
    title: 'La Casa de los Espíritus',
    titleZh: '幽灵之家（节选）',
    author: 'Isabel Allende',
    level: 'B2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('elegant old mansion with spirits latin american magical realism novel cover vintage watercolor') + '&image_size=square',
    summary: '特鲁埃瓦家族三代女性跨越世纪的家族史诗，融合魔幻与现实。文笔细腻，适合 B2 级学习者。',
    keywords: ['family','magic','history','chile'],
    url: 'https://www.gutenberg.org/ebooks/56025',
    duration: 30,
    relatedLessonId: 'es-A2-U1-L2'
  },
  {
    id: 'es-rd-004',
    lang: 'es',
    title: 'El Principito',
    titleZh: '小王子（西语版）',
    author: 'Antoine de Saint-Exupéry',
    level: 'A2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('little prince standing on tiny planet with rose watercolor children book spanish edition cover') + '&image_size=square',
    summary: '来自 B-612 星球的小王子与飞行员在沙漠相遇，讲述游历各星球的奇遇。语言简洁，适合 A2 级学习者。',
    keywords: ['friendship','imagination','philosophy','adventure'],
    url: 'https://www.gutenberg.org/ebooks/49002',
    duration: 15,
    relatedLessonId: 'es-A1-U1-L1'
  },
  {
    id: 'es-rd-005',
    lang: 'es',
    title: 'Platero y Yo',
    titleZh: '小银和我（节选）',
    author: 'Juan Ramón Jiménez',
    level: 'B1',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('soft watercolor of a small grey donkey platero with a poet in andalusian countryside spanish classic poetry book') + '&image_size=square',
    summary: '诗人与小驴 Platero 在安达卢西亚乡间的温馨日常。散文诗体裁，短篇可独立阅读，适合 B1 级。',
    keywords: ['poetry','nature','nostalgia','andalusia'],
    url: 'https://www.gutenberg.org/ebooks/26203',
    duration: 20,
    relatedLessonId: 'es-A1-U3-L2'
  },
  {
    id: 'es-rd-006',
    lang: 'es',
    title: 'Fábulas de Esopo en Español',
    titleZh: '伊索寓言（西语版）',
    author: 'Aesop',
    level: 'A2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('classic illustration of tortoise and hare fable vintage engraving style animal story spanish edition') + '&image_size=square',
    summary: '短小精悍的动物寓言，每篇 50-100 字，词汇基础，是西语入门经典读物。',
    keywords: ['animals','moral','fable','story'],
    url: 'https://www.gutenberg.org/ebooks/28',
    duration: 10,
    relatedLessonId: 'es-A1-U1-L2'
  }
];
