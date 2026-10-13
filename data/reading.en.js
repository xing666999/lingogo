/* ===== LingoGo 英语分级读物清单 =====
 * level: 统一用 CEFR A1-C1，便于跨语言筛选
 * cover: 用 trae-api-cn 在线生成封面图
 * url: 在线阅读外链（公共领域优先）
 */
window.LL = window.LL || {};
LL.reading = LL.reading || {};

LL.reading.en = [
  {
    id: 'en-rd-001',
    lang: 'en',
    title: 'The Little Prince (Excerpt)',
    titleZh: '小王子（节选）',
    author: 'Antoine de Saint-Exupéry',
    level: 'A2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vintage%20illustration%20of%20a%20little%20prince%20standing%20on%20a%20tiny%20planet%20with%20a%20rose%2C%20watercolor%20style%2C%20children%20book%20art&image_size=square',
    summary: '来自 B-612 星球的小王子与飞行员在沙漠相遇，讲述他游历各星球的奇遇。语言简洁，适合 A2 级学习者。',
    keywords: ['greetings','daily life','friendship','imagination'],
    url: 'https://www.gutenberg.org/ebooks/49002',
    duration: 15,
    relatedLessonId: 'en-A1-U1-L1'
  },
  {
    id: 'en-rd-002',
    lang: 'en',
    title: 'Aesop\'s Fables (Selected)',
    titleZh: '伊索寓言（选篇）',
    author: 'Aesop',
    level: 'A2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=classic%20illustration%20of%20tortoise%20and%20hare%20fable%2C%20vintage%20engraving%20style%2C%20animal%20story&image_size=square',
    summary: '短小精悍的动物寓言，每篇 50-100 字，词汇基础，是 ESL 经典入门读物。',
    keywords: ['animals','moral','story','daily life'],
    url: 'https://www.gutenberg.org/ebooks/28',
    duration: 10,
    relatedLessonId: 'en-A1-U1-L2'
  },
  {
    id: 'en-rd-003',
    lang: 'en',
    title: 'Alice\'s Adventures in Wonderland (Chapter 1)',
    titleZh: '爱丽丝梦游仙境（第一章）',
    author: 'Lewis Carroll',
    level: 'B1',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=alice%20falling%20down%20the%20rabbit%20hole%2C%20classic%20victorian%20illustration%2C%20whimsical%20fantasy&image_size=square',
    summary: '爱丽丝追逐白兔掉进兔子洞，遇到各种奇怪角色。第一章约 1200 字，含大量日常对话。',
    keywords: ['adventure','conversation','curiosity'],
    url: 'https://www.gutenberg.org/ebooks/11',
    duration: 20,
    relatedLessonId: 'en-A1-U1-L3'
  },
  {
    id: 'en-rd-004',
    lang: 'en',
    title: 'The Gift of the Magi',
    titleZh: '麦琪的礼物',
    author: 'O. Henry',
    level: 'B1',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vintage%20christmas%20scene%20couple%20exchanging%20gifts%2C%20warm%20cozy%20illustration%2C%20short%20story%20art&image_size=square',
    summary: '一对贫穷夫妇为对方卖掉最珍贵之物买礼物的感人故事。约 2000 字，含 past tense 与描述性语言。',
    keywords: ['love','sacrifice','christmas','story'],
    url: 'https://www.gutenberg.org/files/1581/1581-h/1581-h.htm',
    duration: 25,
    relatedLessonId: 'en-A2-U1-L1'
  },
  {
    id: 'en-rd-005',
    lang: 'en',
    title: 'The Call of the Wild (Chapter 1)',
    titleZh: '野性的呼唤（第一章）',
    author: 'Jack London',
    level: 'B2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=sled%20dog%20buck%20in%20snowy%20alaska%20wilderness%2C%20vintage%20adventure%20novel%20illustration&image_size=square',
    summary: '家犬 Buck 被卖到阿拉斯加做雪橇犬，逐渐回归野性。第一章约 1800 字，自然描写丰富。',
    keywords: ['nature','survival','animals','adventure'],
    url: 'https://www.gutenberg.org/ebooks/215',
    duration: 30,
    relatedLessonId: 'en-A2-U1-L2'
  },
  {
    id: 'en-rd-006',
    lang: 'en',
    title: 'Pride and Prejudice (Chapter 1)',
    titleZh: '傲慢与偏见（第一章）',
    author: 'Jane Austen',
    level: 'B2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20regency%20era%20english%20countryside%20manor%2C%20romantic%20novel%20cover%2C%20vintage%20watercolor&image_size=square',
    summary: '班纳特一家日常对话与婚姻话题。第一章约 800 字，含 19 世纪社交用语与反讽句式。',
    keywords: ['society','marriage','conversation','manners'],
    url: 'https://www.gutenberg.org/ebooks/1342',
    duration: 20,
    relatedLessonId: 'en-A2-U1-L3'
  },
  {
    id: 'en-rd-007',
    lang: 'en',
    title: 'The Adventures of Sherlock Holmes (A Scandal in Bohemia)',
    titleZh: '福尔摩斯冒险史（波西米亚丑闻）',
    author: 'Arthur Conan Doyle',
    level: 'B2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=victorian%20detective%20sherlock%20holmes%20with%20pipe%20and%20magnifying%20glass%2C%20mystery%20novel%20illustration&image_size=square',
    summary: '福尔摩斯受波西米亚国王委托追回照片。约 5000 字，推理叙事与正式对话结合。',
    keywords: ['mystery','deduction','crime','victorian'],
    url: 'https://www.gutenberg.org/ebooks/1661',
    duration: 45,
    relatedLessonId: 'en-B1-U1-L1'
  },
  {
    id: 'en-rd-008',
    lang: 'en',
    title: 'The Great Gatsby (Chapter 1)',
    titleZh: '了不起的盖茨比（第一章）',
    author: 'F. Scott Fitzgerald',
    level: 'C1',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=art%20deco%201920s%20mansion%20with%20green%20light%2C%20jazz%20age%20novel%20cover%2C%20elegant%20illustration&image_size=square',
    summary: 'Nick 初到长岛，邻居 Gatsby 的神秘派对。第一章约 3000 字，象征主义与抒情散文。',
    keywords: ['american','dream','wealth','society'],
    url: 'https://www.gutenberg.org/ebooks/64317',
    duration: 40,
    relatedLessonId: 'en-B1-U1-L2'
  },
  {
    id: 'en-rd-009',
    lang: 'en',
    title: 'News Articles (VOA Learning English)',
    titleZh: 'VOA 慢速英语新闻',
    author: 'Voice of America',
    level: 'A2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=newspaper%20with%20microphone%20and%20american%20flag%2C%20news%20journalism%20concept%2C%20modern%20flat%20illustration&image_size=square',
    summary: 'VOA Learning English 每日更新新闻，使用简化词汇与慢速朗读，适合 A2-B1 听读结合。',
    keywords: ['news','current','events','american'],
    url: 'https://learningenglish.voanews.com/',
    duration: 10,
    relatedLessonId: 'en-A2-U1-L1'
  },
  {
    id: 'en-rd-010',
    lang: 'en',
    title: 'BBC 6 Minute English',
    titleZh: 'BBC 6 分钟英语',
    author: 'BBC Learning English',
    level: 'B1',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=british%20broadcasting%20studio%20with%20two%20presenters%2C%20podcast%20microphone%2C%20modern%20educational%20illustration&image_size=square',
    summary: 'BBC 每周更新的 6 分钟话题节目，含 transcript 与词汇讲解，是 ESL 经典听力+阅读素材。',
    keywords: ['topics','discussion','vocabulary','british'],
    url: 'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english',
    duration: 6,
    relatedLessonId: 'en-B1-U1-L1'
  }
];
