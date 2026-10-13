/* ===== LingoGo 越南语课程数据 =====
 * 结构：levels -> units -> lessons -> activities
 * 每课含 vocab/grammar/listening/speaking 四环节
 * 越南语有 6 个声调：平声(a) 玄声(à) 锐声(á) 问声(ả) 跌声(ã) 重声(ạ)
 */
window.LL = window.LL || {};
LL.courses = LL.courses || {};

LL.courses.vi = {
  lang: 'vi',
  label: '越南语',
  flag: '🇻🇳',
  themeColor: '#FF4B4B',
  levels: [
    {
      id: 'vi-A1', code: 'A1', name: '入门',
      description: '越南语字母、声调、问候、数字与颜色',
      units: [
        {
          id: 'vi-A1-U1', title: 'Xin chào', subtitle: '打招呼',
          icon: 'wave', color: '#FF4B4B',
          lessons: [
            {
              id: 'vi-A1-U1-L1', title: 'Xin chào!',
              description: '学会越南语基础问候',
              xpReward: 20, requires: [],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'vi-c1', front: 'xin chào', back: '你好', ipa: '/sin cǎw/',
                    example: 'Xin chào, tôi tên là Nam.', exampleTr: '你好，我叫南。' },
                  { id: 'vi-c2', front: 'cảm ơn', back: '谢谢', ipa: '/kam ʔɯn/',
                    example: 'Cảm ơn bạn rất nhiều.', exampleTr: '非常感谢你。' },
                  { id: 'vi-c3', front: 'xin lỗi', back: '对不起', ipa: '/sin lɔj/',
                    example: 'Xin lỗi, tôi đến trễ.', exampleTr: '对不起，我迟到了。' },
                  { id: 'vi-c4', front: 'tạm biệt', back: '再见', ipa: '/tam biət/',
                    example: 'Tạm biệt, hẹn gặp lại.', exampleTr: '再见，回头见。' },
                  { id: 'vi-c5', front: 'vâng', back: '是/好的', ipa: '/vaŋ/',
                    example: 'Vâng, tôi hiểu rồi.', exampleTr: '好的，我明白了。' }
                ]},
                { type: 'grammar', rule: '人称代词 tôi(我) / bạn(你) / anh(男性) / chị(女性)',
                  questions: [
                  { id: 'vi-g1', kind: 'single', q: '___ là sinh viên. (我)',
                    choices: ['Tôi','Bạn','Anh'], answer: 0, explain: 'tôi 意为"我"，作主语。' },
                  { id: 'vi-g2', kind: 'single', q: '___ tên là gì? (你)',
                    choices: ['Tôi','Bạn','Chị'], answer: 1, explain: 'bạn 意为"你"，用于平辈之间。' },
                  { id: 'vi-g3', kind: 'fill', q: '___ khỏe không? (对年长男性：您好)',
                    answer: 'Anh', explain: 'anh 用于称呼年长男性，意为"您/哥哥"。' }
                ]},
                { type: 'listening', audio: 'Xin chào, tôi tên là Nam. Tôi đến từ Việt Nam.',
                  questions: [
                  { id: 'vi-l1', kind: 'single', q: 'Nam 来自哪里？',
                    choices: ['越南','泰国','柬埔寨'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Xin chào', targetTr: '你好', hint: '跟读：你好' },
                  { target: 'Cảm ơn', targetTr: '谢谢', hint: '跟读：谢谢' },
                  { target: 'Tạm biệt', targetTr: '再见', hint: '跟读：再见' }
                ]}
              ]
            },
            {
              id: 'vi-A1-U1-L2', title: 'Bạn khỏe không?',
              description: '询问对方近况',
              xpReward: 20, requires: ['vi-A1-U1-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'vi-c6', front: 'khỏe', back: '好的/健康', ipa: '/kwe/',
                    example: 'Tôi khỏe, cảm ơn.', exampleTr: '我很好，谢谢。' },
                  { id: 'vi-c7', front: 'buồn', back: '难过的', ipa: '/bwən/',
                    example: 'Hôm nay tôi buồn.', exampleTr: '今天我很难过。' },
                  { id: 'vi-c8', front: 'vui', back: '开心的', ipa: '/wuj/',
                    example: 'Tôi rất vui gặp bạn.', exampleTr: '我很高兴见到你。' },
                  { id: 'vi-c9', front: 'hôm nay', back: '今天', ipa: '/hom naj/',
                    example: 'Hôm nay thời tiết đẹp.', exampleTr: '今天天气很好。' },
                  { id: 'vi-c10', front: 'mệt', back: '累的', ipa: '/met/',
                    example: 'Tôi mệt quá.', exampleTr: '我太累了。' }
                ]},
                { type: 'grammar', rule: '疑问句 Bạn khỏe không? 回答用 Tôi + 形容词',
                  questions: [
                  { id: 'vi-g4', kind: 'single', q: '— Bạn khỏe không? — Tôi ___.',
                    choices: ['khỏe','buồn','mệt'], answer: 0, explain: '回答用 tôi + 形容词，khỏe 表示"好的"。' },
                  { id: 'vi-g5', kind: 'order', q: '排列成句：không / bạn / khỏe / ?',
                    blocks: ['Bạn','khỏe','không','?'], answer: 'Bạn khỏe không?', explain: '疑问句语序：主语 + 形容词 + không。' },
                  { id: 'vi-g6', kind: 'fill', q: 'Hôm nay tôi ___ (开心).',
                    answer: 'vui', explain: 'vui 意为"开心"，作表语。' }
                ]},
                { type: 'listening', audio: 'Chào bạn, hôm nay bạn khỏe không? Tôi khỏe, cảm ơn. Còn bạn?',
                  questions: [
                  { id: 'vi-l2', kind: 'single', q: '说话者感觉如何？',
                    choices: ['很好','难过','累了'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Bạn khỏe không', targetTr: '你好吗', hint: '问候对方' },
                  { target: 'Tôi khỏe', targetTr: '我很好', hint: '回答近况' },
                  { target: 'Hôm nay tôi vui', targetTr: '今天我很开心', hint: '描述心情' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'vi-A1-U2', title: 'Bảng chữ cái', subtitle: '字母与声调',
          icon: 'abc', color: '#FF9600',
          lessons: [
            {
              id: 'vi-A1-U2-L1', title: 'Bảng chữ cái',
              description: '学习越南语字母与声调',
              xpReward: 20, requires: ['vi-A1-U1-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'vi-c11', front: 'chữ', back: '字/字母', ipa: '/cu/',
                    example: 'Chữ này đọc gì?', exampleTr: '这个字怎么读？' },
                  { id: 'vi-c12', front: 'dấu', back: '声调符号', ipa: '/dau/',
                    example: 'Dấu này là dấu sắc.', exampleTr: '这个符号是锐声。' },
                  { id: 'vi-c13', front: 'nguyên âm', back: '元音', ipa: '/ŋwiən am/',
                    example: 'A, O, E là nguyên âm.', exampleTr: 'A、O、E 是元音。' },
                  { id: 'vi-c14', front: 'phụ âm', back: '辅音', ipa: '/fu am/',
                    example: 'B, C, D là phụ âm.', exampleTr: 'B、C、D 是辅音。' },
                  { id: 'vi-c15', front: 'viết', back: '写', ipa: '/wiət/',
                    example: 'Tôi viết thư cho bạn.', exampleTr: '我给朋友写信。' }
                ]},
                { type: 'grammar', rule: '越南语 6 个声调：平声(a) 玄声(à) 锐声(á) 问声(ả) 跌声(ã) 重声(ạ)',
                  questions: [
                  { id: 'vi-g7', kind: 'single', q: '下列哪个是锐声？',
                    choices: ['á','à','ạ'], answer: 0, explain: '锐声(á)声调上扬，符号为左上斜撇。' },
                  { id: 'vi-g8', kind: 'single', q: '下列哪个是重声？',
                    choices: ['ả','ã','ạ'], answer: 2, explain: '重声(ạ)声调短促下沉，符号为下方一点。' },
                  { id: 'vi-g9', kind: 'fill', q: '"ba"加上玄声符号变为 ___ .',
                    answer: 'bà', explain: '玄声(à)符号为左上斜撇向下，bà 意为"奶奶"。' }
                ]},
                { type: 'listening', audio: 'Đây là sáu thanh điệu: a, à, á, ả, ã, ạ.',
                  questions: [
                  { id: 'vi-l3', kind: 'single', q: '越南语有几个声调？',
                    choices: ['6 个','5 个','4 个'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'a à á ả ã ạ', targetTr: '六个声调', hint: '跟读六声' },
                  { target: 'bà', targetTr: '奶奶', hint: '跟读玄声词' },
                  { target: 'cá', targetTr: '鱼', hint: '跟读锐声词' }
                ]}
              ]
            },
            {
              id: 'vi-A1-U2-L2', title: 'Các số 0-10',
              description: '学会从零数到十',
              xpReward: 20, requires: ['vi-A1-U2-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'vi-c16', front: 'không', back: '零', ipa: '/xom/',
                    example: 'Số không.', exampleTr: '数字零。' },
                  { id: 'vi-c17', front: 'một', back: '一', ipa: '/mot/',
                    example: 'Tôi có một quyển sách.', exampleTr: '我有一本书。' },
                  { id: 'vi-c18', front: 'hai', back: '二', ipa: '/haj/',
                    example: 'Hai người bạn.', exampleTr: '两个朋友。' },
                  { id: 'vi-c19', front: 'ba', back: '三', ipa: '/ba/',
                    example: 'Ba quyển vở.', exampleTr: '三个笔记本。' },
                  { id: 'vi-c20', front: 'bốn', back: '四', ipa: '/bon/',
                    example: 'Bốn cái ghế.', exampleTr: '四把椅子。' }
                ]},
                { type: 'grammar', rule: 'Bao nhiêu? (多少) 回答用数字',
                  questions: [
                  { id: 'vi-g10', kind: 'single', q: '— Bạn có ___ quyển sách? — Ba.',
                    choices: ['bao nhiêu','mấy','gì'], answer: 0, explain: 'bao nhiêu 用于询问数量"多少"。' },
                  { id: 'vi-g11', kind: 'fill', q: 'Tôi có ___ (五) cái bút.',
                    answer: 'năm', explain: 'năm 意为"五"。' },
                  { id: 'vi-g12', kind: 'single', q: 'Sáu là số mấy?',
                    choices: ['六','七','八'], answer: 0, explain: 'sáu 意为"六"。' }
                ]},
                { type: 'listening', audio: 'Tôi có một con chó và hai con mèo. Bạn có bao nhiêu con vật?',
                  questions: [
                  { id: 'vi-l4', kind: 'single', q: '说话者有几只狗？',
                    choices: ['一只','两只','三只'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'một hai ba bốn năm', targetTr: '一二三四五', hint: '数数一到五' },
                  { target: 'Tôi có một quyển sách', targetTr: '我有一本书', hint: '表达数量' },
                  { target: 'ba con mèo', targetTr: '三只猫', hint: '数量+名词' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'vi-A1-U3', title: 'Tên và Màu', subtitle: '名字与颜色',
          icon: 'palette', color: '#58CC02',
          lessons: [
            {
              id: 'vi-A1-U3-L1', title: 'Tên tôi là...',
              description: '介绍自己的名字与来历',
              xpReward: 20, requires: ['vi-A1-U2-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'vi-c21', front: 'tên', back: '名字', ipa: '/ten/',
                    example: 'Tên bạn là gì?', exampleTr: '你叫什么名字？' },
                  { id: 'vi-c22', front: 'tôi', back: '我', ipa: '/toj/',
                    example: 'Tôi là sinh viên.', exampleTr: '我是学生。' },
                  { id: 'vi-c23', front: 'là', back: '是', ipa: '/la/',
                    example: 'Đây là sách.', exampleTr: '这是书。' },
                  { id: 'vi-c24', front: 'đến từ', back: '来自', ipa: '/dən tu/',
                    example: 'Tôi đến từ Trung Quốc.', exampleTr: '我来自中国。' },
                  { id: 'vi-c25', front: 'sinh viên', back: '学生', ipa: '/siɲ viən/',
                    example: 'Tôi là sinh viên.', exampleTr: '我是大学生。' }
                ]},
                { type: 'grammar', rule: 'Tên tôi là... 我的名字是...',
                  questions: [
                  { id: 'vi-g13', kind: 'single', q: 'Tên ___ là Nam.',
                    choices: ['tôi','bạn','anh'], answer: 0, explain: 'tôi 意为"我"，tên tôi = 我的名字。' },
                  { id: 'vi-g14', kind: 'fill', q: 'Tôi đến ___ Việt Nam.',
                    answer: 'từ', explain: 'đến từ 意为"来自"，từ 是介词"从"。' },
                  { id: 'vi-g15', kind: 'single', q: '— Bạn là sinh viên ___? — Vâng.',
                    choices: ['không','đúng','sai'], answer: 0, explain: '句末加 không 构成是非疑问句。' }
                ]},
                { type: 'listening', audio: 'Xin chào, tôi tên là Linh. Tôi đến từ Việt Nam. Tôi là sinh viên.',
                  questions: [
                  { id: 'vi-l5', kind: 'single', q: 'Linh 的身份是？',
                    choices: ['学生','老师','工人'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Tên tôi là Nam', targetTr: '我叫南', hint: '介绍名字' },
                  { target: 'Tôi đến từ Việt Nam', targetTr: '我来自越南', hint: '介绍来历' },
                  { target: 'Tôi là sinh viên', targetTr: '我是学生', hint: '介绍身份' }
                ]}
              ]
            },
            {
              id: 'vi-A1-U3-L2', title: 'Các màu',
              description: '颜色单词',
              xpReward: 20, requires: ['vi-A1-U3-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'vi-c26', front: 'đỏ', back: '红色', ipa: '/dɔ/',
                    example: 'Quả táo màu đỏ.', exampleTr: '苹果是红色的。' },
                  { id: 'vi-c27', front: 'xanh', back: '蓝色/绿色', ipa: '/sɛɲ/',
                    example: 'Bầu trời màu xanh.', exampleTr: '天空是蓝色的。' },
                  { id: 'vi-c28', front: 'vàng', back: '黄色', ipa: '/vaŋ/',
                    example: 'Mặt trời màu vàng.', exampleTr: '太阳是黄色的。' },
                  { id: 'vi-c29', front: 'đen', back: '黑色', ipa: '/dɛn/',
                    example: 'Tóc tôi màu đen.', exampleTr: '我的头发是黑色的。' },
                  { id: 'vi-c30', front: 'trắng', back: '白色', ipa: '/tɾaɲ/',
                    example: 'Ao này màu trắng.', exampleTr: '这件衣服是白色的。' }
                ]},
                { type: 'grammar', rule: 'màu + 颜色词：表示颜色',
                  questions: [
                  { id: 'vi-g16', kind: 'single', q: 'Bầu trời màu ___.',
                    choices: ['xanh','đỏ','vàng'], answer: 0, explain: 'xanh 可表示蓝色或绿色，bầu trời(天空) là màu xanh。' },
                  { id: 'vi-g17', kind: 'fill', q: 'Mặt trời màu ___ (黄).',
                    answer: 'vàng', explain: 'vàng 意为"黄色"，mặt trời = 太阳。' },
                  { id: 'vi-g18', kind: 'single', q: 'Tóc tôi màu ___.',
                    choices: ['đen','trắng','đỏ'], answer: 0, explain: 'đen 意为"黑色"，亚洲人头发多为黑色。' }
                ]},
                { type: 'listening', audio: 'Mặt trời màu vàng. Bầu trời màu xanh. Cỏ cũng màu xanh.',
                  questions: [
                  { id: 'vi-l6', kind: 'single', q: '太阳是什么颜色？',
                    choices: ['黄色','蓝色','红色'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'màu đỏ', targetTr: '红色', hint: '描述颜色' },
                  { target: 'Bầu trời màu xanh', targetTr: '天空是蓝色的', hint: '描述天空' },
                  { target: 'Mặt trời màu vàng', targetTr: '太阳是黄色的', hint: '描述太阳' }
                ]}
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'vi-A2', code: 'A2', name: '初级',
      description: '系词、家庭、食物、问路与时态',
      units: [
        {
          id: 'vi-A2-U1', title: 'Là và Có', subtitle: '系词与有',
          icon: 'book', color: '#8B5CF6',
          lessons: [
            {
              id: 'vi-A2-U1-L1', title: 'Là và Có',
              description: '系词 là 与动词 có',
              xpReward: 25, requires: ['vi-A1-U3-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'vi-c31', front: 'là', back: '是', ipa: '/la/',
                    example: 'Tôi là sinh viên.', exampleTr: '我是学生。' },
                  { id: 'vi-c32', front: 'có', back: '有', ipa: '/kɔ/',
                    example: 'Tôi có anh trai.', exampleTr: '我有哥哥。' },
                  { id: 'vi-c33', front: 'không', back: '不/没有', ipa: '/xom/',
                    example: 'Tôi không có xe.', exampleTr: '我没有车。' },
                  { id: 'vi-c34', front: 'đúng', back: '对的', ipa: '/zuŋ/',
                    example: 'Bạn nói đúng rồi.', exampleTr: '你说对了。' },
                  { id: 'vi-c35', front: 'sai', back: '错的', ipa: '/saj/',
                    example: 'Câu này sai rồi.', exampleTr: '这句话错了。' }
                ]},
                { type: 'grammar', rule: 'là(是) 与 có(有) 的区别：là 连接名词身份，có 表示拥有',
                  questions: [
                  { id: 'vi-g19', kind: 'single', q: 'Tôi ___ sinh viên.',
                    choices: ['là','có','đúng'], answer: 0, explain: 'là 连接主语与身份名词。' },
                  { id: 'vi-g20', kind: 'single', q: 'Tôi ___ anh trai.',
                    choices: ['là','có','sai'], answer: 1, explain: 'có 表示"拥有"，anh trai = 哥哥。' },
                  { id: 'vi-g21', kind: 'fill', q: 'Tôi ___ có chị gái. (没有)',
                    answer: 'không', explain: 'không có 表示"没有"，是否定形式。' }
                ]},
                { type: 'listening', audio: 'Tôi là sinh viên. Tôi có hai anh trai. Tôi không có chị gái.',
                  questions: [
                  { id: 'vi-l7', kind: 'single', q: '说话者有几个兄弟？',
                    choices: ['两个','一个','没有'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Tôi là sinh viên', targetTr: '我是学生', hint: '用 là 介绍身份' },
                  { target: 'Tôi có anh trai', targetTr: '我有哥哥', hint: '用 có 表示拥有' },
                  { target: 'Tôi không có xe', targetTr: '我没有车', hint: '否定表达' }
                ]}
              ]
            },
            {
              id: 'vi-A2-U1-L2', title: 'Gia đình',
              description: '家庭成员称呼',
              xpReward: 25, requires: ['vi-A2-U1-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'vi-c36', front: 'cha', back: '父亲', ipa: '/ca/',
                    example: 'Cha tôi làm việc.', exampleTr: '我父亲在工作。' },
                  { id: 'vi-c37', front: 'mẹ', back: '母亲', ipa: '/mɛ/',
                    example: 'Mẹ tôi rất tốt.', exampleTr: '我母亲很好。' },
                  { id: 'vi-c38', front: 'anh', back: '哥哥', ipa: '/aɲ/',
                    example: 'Anh tôi tên là Nam.', exampleTr: '我哥哥叫南。' },
                  { id: 'vi-c39', front: 'chị', back: '姐姐', ipa: '/ci/',
                    example: 'Chị tôi là giáo viên.', exampleTr: '我姐姐是老师。' },
                  { id: 'vi-c40', front: 'em', back: '弟弟/妹妹', ipa: '/ɛm/',
                    example: 'Em tôi học giỏi.', exampleTr: '我弟弟学习好。' }
                ]},
                { type: 'grammar', rule: 'Đây là... 这是...（用于介绍）',
                  questions: [
                  { id: 'vi-g22', kind: 'single', q: 'Đây ___ mẹ tôi.',
                    choices: ['là','có','đúng'], answer: 0, explain: 'Đây là... 用于介绍"这是..."。' },
                  { id: 'vi-g23', kind: 'fill', q: 'Đây là ___ tôi. (父亲)',
                    answer: 'cha', explain: 'cha 意为"父亲"，也可说 bố。' },
                  { id: 'vi-g24', kind: 'single', q: 'Tôi có một ___ trai. (哥哥)',
                    choices: ['anh','chị','em'], answer: 0, explain: 'anh trai = 哥哥，chị gái = 姐姐。' }
                ]},
                { type: 'listening', audio: 'Đây là bố mẹ tôi. Tôi có một anh trai và một chị gái.',
                  questions: [
                  { id: 'vi-l8', kind: 'single', q: '说话者有几个兄弟姐妹？',
                    choices: ['两个','一个','三个'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Đây là mẹ tôi', targetTr: '这是我妈妈', hint: '介绍家人' },
                  { target: 'Tôi có anh trai', targetTr: '我有哥哥', hint: '表达有兄弟' },
                  { target: 'Em tôi học giỏi', targetTr: '我弟弟学习好', hint: '描述家人' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'vi-A2-U2', title: 'Đời sống', subtitle: '日常生活',
          icon: 'cart', color: '#00B8A9',
          lessons: [
            {
              id: 'vi-A2-U2-L1', title: 'Đồ ăn',
              description: '食物与饮食',
              xpReward: 25, requires: ['vi-A2-U1-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'vi-c41', front: 'cơm', back: '米饭', ipa: '/kom/',
                    example: 'Tôi ăn cơm trưa.', exampleTr: '我吃午饭。' },
                  { id: 'vi-c42', front: 'phở', back: '河粉', ipa: '/fə/',
                    example: 'Phở rất ngon.', exampleTr: '河粉很好吃。' },
                  { id: 'vi-c43', front: 'nước', back: '水', ipa: '/ŋwiək/',
                    example: 'Tôi muốn uống nước.', exampleTr: '我想喝水。' },
                  { id: 'vi-c44', front: 'ăn', back: '吃', ipa: '/an/',
                    example: 'Tôi ăn sáng lúc bảy giờ.', exampleTr: '我七点吃早餐。' },
                  { id: 'vi-c45', front: 'uống', back: '喝', ipa: '/wəŋ/',
                    example: 'Tôi uống cà phê.', exampleTr: '我喝咖啡。' }
                ]},
                { type: 'grammar', rule: 'Tôi muốn + 动词：我想要...',
                  questions: [
                  { id: 'vi-g25', kind: 'single', q: 'Tôi muốn ___ phở.',
                    choices: ['ăn','uống','có'], answer: 0, explain: 'ăn = 吃，muốn ăn phở = 想吃河粉。' },
                  { id: 'vi-g26', kind: 'fill', q: 'Tôi muốn ___ nước.',
                    answer: 'uống', explain: 'uống = 喝，muốn uống nước = 想喝水。' },
                  { id: 'vi-g27', kind: 'single', q: 'Phở rất ___.',
                    choices: ['ngon','đỏ','mệt'], answer: 0, explain: 'ngon 意为"好吃"，形容食物美味。' }
                ]},
                { type: 'listening', audio: 'Tôi muốn ăn phở và uống nước. Cơm cũng rất ngon.',
                  questions: [
                  { id: 'vi-l9', kind: 'single', q: '说话者想吃什么？',
                    choices: ['河粉','米饭','咖啡'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Tôi muốn ăn phở', targetTr: '我想吃河粉', hint: '点餐' },
                  { target: 'Tôi muốn uống nước', targetTr: '我想喝水', hint: '表达需求' },
                  { target: 'Phở rất ngon', targetTr: '河粉很好吃', hint: '评价食物' }
                ]}
              ]
            },
            {
              id: 'vi-A2-U2-L2', title: 'Hỏi đường',
              description: '问路与方向',
              xpReward: 25, requires: ['vi-A2-U2-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'vi-c46', front: 'trái', back: '左边', ipa: '/taj/',
                    example: 'Rẽ trái.', exampleTr: '左转。' },
                  { id: 'vi-c47', front: 'phải', back: '右边', ipa: '/faj/',
                    example: 'Rẽ phải.', exampleTr: '右转。' },
                  { id: 'vi-c48', front: 'thẳng', back: '直走', ipa: '/thaŋ/',
                    example: 'Đi thẳng.', exampleTr: '直走。' },
                  { id: 'vi-c49', front: 'ở đâu', back: '在哪里', ipa: '/ɤ dau/',
                    example: 'Nhà ga ở đâu?', exampleTr: '车站在哪里？' },
                  { id: 'vi-c50', front: 'đường', back: '路/街道', ipa: '/dɨəŋ/',
                    example: 'Đường này rộng.', exampleTr: '这条路很宽。' }
                ]},
                { type: 'grammar', rule: '... ở đâu? ...在哪里？回答用方位词',
                  questions: [
                  { id: 'vi-g28', kind: 'single', q: 'Nhà ga ___ đâu?',
                    choices: ['ở','có','là'], answer: 0, explain: 'ở đâu 表示"在哪里"，ở 是方位介词。' },
                  { id: 'vi-g29', kind: 'fill', q: 'Đi thẳng rồi rẽ ___. (左)',
                    answer: 'trái', explain: 'rẽ trái = 左转，rẽ phải = 右转。' },
                  { id: 'vi-g30', kind: 'single', q: 'Đi thẳng rồi rẽ ___.',
                    choices: ['phải','cơm','mệt'], answer: 0, explain: 'rẽ phải = 右转，方向词搭配动词 rẽ。' }
                ]},
                { type: 'listening', audio: 'Xin lỗi, nhà ga ở đâu? Đi thẳng rồi rẽ trái. Nhà ga ở bên phải.',
                  questions: [
                  { id: 'vi-l10', kind: 'single', q: '应该先往哪走？',
                    choices: ['直走','左转','右转'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Nhà ga ở đâu', targetTr: '车站在哪里', hint: '问路' },
                  { target: 'Đi thẳng rồi rẽ trái', targetTr: '直走然后左转', hint: '指路' },
                  { target: 'Rẽ phải', targetTr: '右转', hint: '方向指示' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'vi-A2-U3', title: 'Thì', subtitle: '时态',
          icon: 'clock', color: '#FF4B4B',
          lessons: [
            {
              id: 'vi-A2-U3-L1', title: 'Thì quá khứ',
              description: '过去时表达',
              xpReward: 25, requires: ['vi-A2-U2-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'vi-c51', front: 'hôm qua', back: '昨天', ipa: '/hom kwa/',
                    example: 'Hôm qua tôi đi chơi.', exampleTr: '昨天我去玩了。' },
                  { id: 'vi-c52', front: 'đã', back: '已/过去标记', ipa: '/da/',
                    example: 'Tôi đã ăn cơm.', exampleTr: '我已经吃过饭了。' },
                  { id: 'vi-c53', front: 'rồi', back: '了/已完成', ipa: '/noj/',
                    example: 'Tôi ăn rồi.', exampleTr: '我吃过了。' },
                  { id: 'vi-c54', front: 'trước', back: '以前', ipa: '/tɾɨək/',
                    example: 'Trước đây tôi ở Hà Nội.', exampleTr: '以前我在河内。' },
                  { id: 'vi-c55', front: 'quá khứ', back: '过去', ipa: '/kwa xu/',
                    example: 'Quá khứ đã qua rồi.', exampleTr: '过去的事已经过去了。' }
                ]},
                { type: 'grammar', rule: 'đã + 动词 表示过去时',
                  questions: [
                  { id: 'vi-g31', kind: 'single', q: 'Hôm qua tôi ___ đi chơi.',
                    choices: ['đã','sẽ','không'], answer: 0, explain: 'đã 是过去时标记，放在动词前。' },
                  { id: 'vi-g32', kind: 'fill', q: 'Tôi ___ ăn cơm rồi.',
                    answer: 'đã', explain: 'đã + 动词 + rồi 表示"已经做过了"。' },
                  { id: 'vi-g33', kind: 'single', q: '___ đây tôi là sinh viên.',
                    choices: ['Trước','Hôm nay','Ngày mai'], answer: 0, explain: 'trước đây 意为"以前"，指过去。' }
                ]},
                { type: 'listening', audio: 'Hôm qua tôi đã đi chơi với bạn. Chúng tôi đã ăn phở.',
                  questions: [
                  { id: 'vi-l11', kind: 'single', q: '说话者昨天做了什么？',
                    choices: ['去玩和吃河粉','只去玩','只吃河粉'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Hôm qua tôi đã đi chơi', targetTr: '昨天我去玩了', hint: '描述过去' },
                  { target: 'Tôi đã ăn phở', targetTr: '我吃了河粉', hint: '已完成动作' },
                  { target: 'Tôi ăn rồi', targetTr: '我吃过了', hint: '表达完成' }
                ]}
              ]
            },
            {
              id: 'vi-A2-U3-L2', title: 'Thì tương lai',
              description: '将来时表达',
              xpReward: 25, requires: ['vi-A2-U3-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'vi-c56', front: 'ngày mai', back: '明天', ipa: '/ŋaj maj/',
                    example: 'Ngày mai tôi đi học.', exampleTr: '明天我去上学。' },
                  { id: 'vi-c57', front: 'sẽ', back: '将/将来标记', ipa: '/se/',
                    example: 'Tôi sẽ đi Hà Nội.', exampleTr: '我将去河内。' },
                  { id: 'vi-c58', front: 'sau', back: '以后', ipa: '/saw/',
                    example: 'Sau này tôi làm bác sĩ.', exampleTr: '以后我当医生。' },
                  { id: 'vi-c59', front: 'tiếp theo', back: '接下来', ipa: '/tiəp tʰwə/',
                    example: 'Tiếp theo chúng ta học gì?', exampleTr: '接下来我们学什么？' },
                  { id: 'vi-c60', front: 'tương lai', back: '未来', ipa: '/tɨəŋ laj/',
                    example: 'Tương lai rất tươi sáng.', exampleTr: '未来很光明。' }
                ]},
                { type: 'grammar', rule: 'sẽ + 动词 表示将来时',
                  questions: [
                  { id: 'vi-g34', kind: 'single', q: 'Ngày mai tôi ___ đi học.',
                    choices: ['sẽ','đã','không'], answer: 0, explain: 'sẽ 是将来时标记，放在动词前。' },
                  { id: 'vi-g35', kind: 'fill', q: 'Tôi ___ đi chơi tối nay.',
                    answer: 'sẽ', explain: 'sẽ + 动词表示将来要做的事。' },
                  { id: 'vi-g36', kind: 'single', q: '___ này tôi làm bác sĩ.',
                    choices: ['Sau','Hôm qua','Đã'], answer: 0, explain: 'sau này 意为"以后"，指将来。' }
                ]},
                { type: 'listening', audio: 'Ngày mai tôi sẽ đi Hà Nội. Tôi sẽ thăm bạn.',
                  questions: [
                  { id: 'vi-l12', kind: 'single', q: '说话者明天要去哪？',
                    choices: ['河内','胡志明市','岘港'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Ngày mai tôi sẽ đi học', targetTr: '明天我要去上学', hint: '描述将来' },
                  { target: 'Tôi sẽ đi Hà Nội', targetTr: '我将去河内', hint: '将来的计划' },
                  { target: 'Sau này tôi làm bác sĩ', targetTr: '以后我当医生', hint: '畅想未来' }
                ]}
              ]
            }
          ]
        }
      ]
    }
  ]
};

/* 查询工具函数（若已由 courses.en.js 定义则跳过，避免重复） */
if (typeof LL.courses.findLesson !== 'function') {
  LL.courses.findLesson = function(lang, lessonId) {
    var course = LL.courses[lang];
    if (!course) return null;
    for (var i = 0; i < course.levels.length; i++) {
      for (var j = 0; j < course.levels[i].units.length; j++) {
        for (var k = 0; k < course.levels[i].units[j].lessons.length; k++) {
          if (course.levels[i].units[j].lessons[k].id === lessonId) {
            return course.levels[i].units[j].lessons[k];
          }
        }
      }
    }
    return null;
  };
}

if (typeof LL.courses.getLessonContext !== 'function') {
  LL.courses.getLessonContext = function(lang, lessonId) {
    var course = LL.courses[lang];
    if (!course) return null;
    for (var i = 0; i < course.levels.length; i++) {
      for (var j = 0; j < course.levels[i].units.length; j++) {
        for (var k = 0; k < course.levels[i].units[j].lessons.length; k++) {
          if (course.levels[i].units[j].lessons[k].id === lessonId) {
            return {
              lang: lang,
              level: course.levels[i],
              unit: course.levels[i].units[j],
              lesson: course.levels[i].units[j].lessons[k]
            };
          }
        }
      }
    }
    return null;
  };
}

if (typeof LL.courses.countLessons !== 'function') {
  LL.courses.countLessons = function(lang) {
    var course = LL.courses[lang];
    if (!course) return 0;
    var n = 0;
    course.levels.forEach(function(l) { l.units.forEach(function(u) { n += u.lessons.length; }); });
    return n;
  };
}
