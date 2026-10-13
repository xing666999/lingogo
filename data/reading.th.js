/* ===== LingoGo 泰语分级读物清单 =====
 * level: 统一用 CEFR A2-C1，便于跨语言筛选
 * cover: 用 trae-api-cn 在线生成封面图
 * url: 在线阅读外链（公共领域优先）
 */
window.LL = window.LL || {};
LL.reading = LL.reading || {};

LL.reading.th = [
  {
    id: 'th-rd-001',
    lang: 'th',
    title: 'ปูนางเงือก',
    titleZh: '美人鱼（泰国民间故事）',
    author: 'พระบาทสมเด็จพระพุทธเลิศหล้า',
    level: 'B1',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('book cover thai folklore mermaid illustrated traditional thai art watercolor style') + '&image_size=square',
    summary: '泰国经典民间故事，讲述美人鱼的传奇故事。语言平实，适合 A2-B1 学习者阅读泰国民间文化。',
    keywords: ['folklore','mermaid','thai','legend'],
    url: 'https://www.gutenberg.org/ebooks/49002',
    duration: 15,
    relatedLessonId: 'th-A1-U1-L1'
  },
  {
    id: 'th-rd-002',
    lang: 'th',
    title: 'ขุนแผน',
    titleZh: '坤潘（泰国民间英雄传说）',
    author: ' folklore',
    level: 'B2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('book cover thai folklore hero warrior kun pan traditional thai illustration epic tale') + '&image_size=square',
    summary: '泰国著名民间英雄传说，讲述坤潘的传奇一生。词汇丰富，包含古典文学用语，适合 B1-B2 级学习者。',
    keywords: ['folklore','hero','thai','legend','adventure'],
    url: 'https://www.gutenberg.org/ebooks/49003',
    duration: 30,
    relatedLessonId: 'th-A1-U3-L1'
  },
  {
    id: 'th-rd-003',
    lang: 'th',
    title: 'นทีทุกข์',
    titleZh: '河流之悲（泰国短篇故事）',
    author: 'นักเขียนไทย',
    level: 'A2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('book cover thai river story sadness simple illustration watercolor style thai culture') + '&image_size=square',
    summary: '泰国短篇故事，语言简洁、词汇基础，适合 A2 级学习者练习日常词汇与时态用法。',
    keywords: ['story','river','thai','daily life','emotions'],
    url: 'https://www.gutenberg.org/ebooks/49004',
    duration: 10,
    relatedLessonId: 'th-A2-U2-L1'
  },
  {
    id: 'th-rd-004',
    lang: 'th',
    title: 'ลั่นทม 24 ลักษณะ',
    titleZh: '兰纳 24 节气（泰国传统文化读本）',
    author: 'folklore',
    level: 'A2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('book cover thai lanna culture 24 seasons traditional calendar northern thailand illustration') + '&image_size=square',
    summary: '介绍泰国兰纳文化的 24 节气传统知识，含基础词汇与文化常识，适合 A2 级学习者。',
    keywords: ['culture','seasons','lanna','thai','traditional'],
    url: 'https://www.gutenberg.org/ebooks/49005',
    duration: 12,
    relatedLessonId: 'th-A2-U3-L1'
  },
  {
    id: 'th-rd-005',
    lang: 'th',
    title: 'สมุดภาพนิทาน',
    titleZh: '泰国民间故事绘本（精选）',
    author: 'folklore',
    level: 'A2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('book cover thai folk tales picture book illustrated stories children art watercolor') + '&image_size=square',
    summary: '精选泰国民间故事绘本，每篇 50-100 字，词汇基础，是泰语学习者入门读物。',
    keywords: ['folklore','picture book','thai','stories','children'],
    url: 'https://www.gutenberg.org/ebooks/49006',
    duration: 10,
    relatedLessonId: 'th-A1-U1-L2'
  }
];
