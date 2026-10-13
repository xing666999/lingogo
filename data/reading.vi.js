/* ===== LingoGo 越南语分级读物清单 =====
 * level: 统一用 CEFR A1-C1，便于跨语言筛选
 * cover: 用 trae-api-cn 在线生成封面图
 * url: 在线阅读外链（公共领域优先）
 */
window.LL = window.LL || {};
LL.reading = LL.reading || {};

LL.reading.vi = [
  {
    id: 'vi-rd-001',
    lang: 'vi',
    title: 'Truyện Kiều (Trích đoạn)',
    titleZh: '金云翘传（节选）',
    author: 'Nguyễn Du',
    level: 'B2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('elegant vietnamese classic poetry book cover, traditional ao dai woman silhouette, lotus and ink wash painting style, vintage manuscript') + '&image_size=square',
    summary: '越南文学巅峰之作，阮攸创作的 3254 句六八体诗体小说，讲述王翠翘的坎坷命运。语言典雅，含大量成语典故，适合 B2 级学习者。',
    keywords: ['poetry','classic','vietnamese','literature','tragedy'],
    url: 'https://vi.wikisource.org/wiki/Truy%E1%BB%87n_Ki%E1%BB%81u',
    duration: 30,
    relatedLessonId: 'vi-A1-U1-L1'
  },
  {
    id: 'vi-rd-002',
    lang: 'vi',
    title: 'Dế Mèn Phiêu Lưu Ký (Trích đoạn)',
    titleZh: '蟋蟀冒险记（节选）',
    author: 'Tô Hoài',
    level: 'B1',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('cute cricket character adventure story book cover, vietnamese forest animals, watercolor children illustration, green meadow') + '&image_size=square',
    summary: '越南儿童文学经典，作家苏怀借蟋蟀 Mèn 的冒险之旅探讨勇气与成长。叙事生动，含大量日常词汇与自然描写，适合 B1 级学习者。',
    keywords: ['adventure','animals','children','vietnamese','nature'],
    url: 'https://vi.wikisource.org/wiki/De_Men_phieu_luu_ky',
    duration: 20,
    relatedLessonId: 'vi-A2-U2-L1'
  },
  {
    id: 'vi-rd-003',
    lang: 'vi',
    title: 'Lòng Dạ Con Người',
    titleZh: '人心',
    author: 'Nam Cao',
    level: 'B1',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('vietnamese village life scene, traditional thatched roof house, paddy field at dusk, realist literary novel cover, muted tones') + '&image_size=square',
    summary: '南高代表作之一，以越南农村为背景刻画人性挣扎与社会现实。心理描写细腻，含口语化对话，适合 B1 级学习者阅读。',
    keywords: ['realism','village','human','nature','literature'],
    url: 'https://vi.wikisource.org/wiki/L%C3%B2ng_d%E1%BA%A1_con_ng%C6%B0%E1%BB%9Di',
    duration: 25,
    relatedLessonId: 'vi-A2-U1-L1'
  },
  {
    id: 'vi-rd-004',
    lang: 'vi',
    title: 'Tấm Cám',
    titleZh: '米碎姐与米糠妹',
    author: 'Truyện dân gian',
    level: 'A2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('vietnamese fairy tale Cinderella story book cover, village girl with bamboo basket, folk art style, warm colors') + '&image_size=square',
    summary: '越南版灰姑娘民间故事，讲述 Tấm 受继母与同父异母妹妹 Cám 欺凌，终获幸福。情节简单，句式基础，适合 A2 级学习者入门阅读。',
    keywords: ['folktale','fairy','tale','cinderella','vietnamese'],
    url: 'https://vi.wikisource.org/wiki/T%E1%BA%A5m_C%C3%A1m',
    duration: 15,
    relatedLessonId: 'vi-A1-U1-L1'
  },
  {
    id: 'vi-rd-005',
    lang: 'vi',
    title: 'Thạch Sanh',
    titleZh: '石生',
    author: 'Truyện dân gian',
    level: 'A2',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('vietnamese hero fairy tale book cover, brave warrior with sword and magic lute, epic folk illustration, golden colors') + '&image_size=square',
    summary: '越南家喻户晓的英雄童话，讲述孤儿 Thạch Sanh 斩妖救公主的传奇故事。词汇基础，情节跌宕，适合 A2 级学习者巩固阅读。',
    keywords: ['folktale','hero','adventure','vietnamese','legend'],
    url: 'https://vi.wikisource.org/wiki/Th%E1%BA%A1ch_Sanh',
    duration: 15,
    relatedLessonId: 'vi-A1-U1-L1'
  }
];
