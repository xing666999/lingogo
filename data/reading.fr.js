/* ===== LingoGo 法语分级读物清单 =====
 * level: 统一用 CEFR A1-C1，便于跨语言筛选
 * cover: 用 trae-api-cn 在线生成封面图
 * url: 在线阅读外链（公共领域优先）
 */
window.LL = window.LL || {};
LL.reading = LL.reading || {};

LL.reading.fr = [
  {
    id: 'fr-rd-001',
    lang: 'fr',
    title: 'Le Petit Prince (Extrait)',
    titleZh: '小王子（节选）',
    author: 'Antoine de Saint-Exupéry',
    level: 'A2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('vintage watercolor illustration of a little prince standing on a tiny planet with a rose, french classic children book art') + '&image_size=square',
    summary: '来自 B-612 星球的小王子与飞行员在沙漠相遇，讲述他游历各星球的奇遇。语言简洁、寓意丰富，适合 A2 级学习者。',
    keywords: ['greetings','daily life','friendship','imagination'],
    url: 'https://www.gutenberg.org/ebooks/16154',
    duration: 15,
    relatedLessonId: 'fr-A1-U1-L1'
  },
  {
    id: 'fr-rd-002',
    lang: 'fr',
    title: 'Les Fables de La Fontaine (Choix)',
    titleZh: '拉封丹寓言（选篇）',
    author: 'Jean de La Fontaine',
    level: 'B1',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('classic french engraving illustration of tortoise and hare fable, vintage animal story art, 17th century style') + '&image_size=square',
    summary: '短小精悍的动物寓言，多用复合过去时与未完成过去时，是 B1 级学习者接触文学语言的经典素材。',
    keywords: ['animals','moral','past tense','literature'],
    url: 'https://www.gutenberg.org/ebooks/56394',
    duration: 20,
    relatedLessonId: 'fr-A2-U1-L1'
  },
  {
    id: 'fr-rd-003',
    lang: 'fr',
    title: 'Trois Contes',
    titleZh: '三故事',
    author: 'Gustave Flaubert',
    level: 'B2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('elegant vintage illustration of a medieval french legend scene, romantic literary novel cover, soft watercolor') + '&image_size=square',
    summary: '福楼拜晚期三部中短篇，包含《圣朱利安传奇》《一颗单纯的心》《希罗底亚》。叙事精密、用词考究，适合 B2 级学习者。',
    keywords: ['literature','narrative','description','past tense'],
    url: 'https://www.gutenberg.org/ebooks/9064',
    duration: 35,
    relatedLessonId: 'fr-A2-U2-L1'
  },
  {
    id: 'fr-rd-004',
    lang: 'fr',
    title: 'Le Tour du Monde en 80 Jours',
    titleZh: '八十天环游地球',
    author: 'Jules Verne',
    level: 'B1',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('vintage adventure illustration of a hot air balloon and train traveling around the world, 19th century french novel cover') + '&image_size=square',
    summary: '斐利亚·福克与仆人路路通八十天环游地球的冒险故事。语言生动、情节紧凑，含大量旅行与问路用语。',
    keywords: ['adventure','travel','direction','daily life'],
    url: 'https://www.gutenberg.org/ebooks/800',
    duration: 30,
    relatedLessonId: 'fr-A2-U2-L2'
  },
  {
    id: 'fr-rd-005',
    lang: 'fr',
    title: 'Les Misérables (Extrait)',
    titleZh: '悲惨世界（节选）',
    author: 'Victor Hugo',
    level: 'B2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('dramatic vintage illustration of 19th century paris street scene, french classic novel cover, romantic watercolor') + '&image_size=square',
    summary: '冉阿让、珂赛特与沙威的命运交织。节选段落含大量描写性语言、复杂句式与 19 世纪社会用词，适合 B2 级学习者。',
    keywords: ['society','justice','description','literature'],
    url: 'https://www.gutenberg.org/ebooks/135',
    duration: 40,
    relatedLessonId: 'fr-A2-U1-L2'
  },
  {
    id: 'fr-rd-006',
    lang: 'fr',
    title: 'Candide, ou l\'Optimisme',
    titleZh: '老实人（乐观主义）',
    author: 'Voltaire',
    level: 'B1',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('satirical 18th century french engraving illustration of a young traveler and philosopher, classic enlightenment novel art') + '&image_size=square',
    summary: '伏尔泰哲理小说，跟随老实人 Candide 游历欧亚大陆。语言机智、句式工整，含反讽与启蒙思想表达。',
    keywords: ['philosophy','satire','travel','narrative'],
    url: 'https://www.gutenberg.org/ebooks/19942',
    duration: 30,
    relatedLessonId: 'fr-A2-U3-L2'
  }
];
