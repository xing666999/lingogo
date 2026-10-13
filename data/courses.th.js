/* ===== LingoGo 泰语课程数据 =====
 * 结构：levels -> units -> lessons -> activities
 * 每课含 vocab/grammar/listening/speaking 四环节
 * 泰语为声调语言，ipa 字段用拉丁转写+声调符号
 * 声调标记：mid 无符 / low à / falling â / high á / rising ǎ
 */
window.LL = window.LL || {};
LL.courses = LL.courses || {};

LL.courses.th = {
  lang: 'th',
  label: '泰语',
  flag: '🇹🇭',
  themeColor: '#00B8A9',
  levels: [
    {
      id: 'th-A1', code: 'A1', name: '入门',
      description: '泰语字母、问候、基础数字',
      units: [
        {
          id: 'th-A1-U1', title: 'สวัสดี', subtitle: '打招呼',
          icon: 'wave', color: '#00B8A9',
          lessons: [
            {
              id: 'th-A1-U1-L1', title: 'สวัสดีครับ/ค่ะ',
              description: '学会泰语基础问候与性别尾词',
              xpReward: 20, requires: [],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'th-c1', front: 'สวัสดี', back: '你好', ipa: 'sà.wàt.diː',
                    example: 'สวัสดีครับ สบายดีไหม', exampleTr: '你好，你怎么样？' },
                  { id: 'th-c2', front: 'ครับ', back: '（男）礼貌尾词', ipa: 'kráp',
                    example: 'ผมชื่อสมชายครับ', exampleTr: '我叫 somchai（男）。' },
                  { id: 'th-c3', front: 'ค่ะ', back: '（女）礼貌尾词', ipa: 'kâ',
                    example: 'ฉันชื่อสมหญิงค่ะ', exampleTr: '我叫 somying（女）。' },
                  { id: 'th-c4', front: 'ขอบคุณ', back: '谢谢', ipa: 'khǒop.khun',
                    example: 'ขอบคุณครับ', exampleTr: '谢谢（男）。' },
                  { id: 'th-c5', front: 'ไม่เป็นไร', back: '没关系', ipa: 'mâi pen rai',
                    example: 'ไม่เป็นไรครับ', exampleTr: '没关系。' },
                  { id: 'th-c6', front: 'ลาก่อน', back: '再见', ipa: 'laa.gòon',
                    example: 'ลาก่อนครับ', exampleTr: '再见。' }
                ]},
                { type: 'grammar', rule: '泰语礼貌尾词：男性用 ครับ（kráp），女性用 ค่ะ（kâ）',
                  questions: [
                    { id: 'th-g1', kind: 'single', q: '男性说你好：___',
                      choices: ['สวัสดีครับ','สวัสดีค่ะ','สวัสดี'], answer: 0,
                      explain: 'ครับ 是男性礼貌尾词，表示尊敬。' },
                    { id: 'th-g2', kind: 'single', q: '女性说谢谢：ขอบคุณ___',
                      choices: ['ครับ','ค่ะ','คับ'], answer: 1,
                      explain: 'ค่ะ 是女性礼貌尾词。' },
                    { id: 'th-g3', kind: 'fill', q: '女性说再见：ลาก่อน___（填尾词）',
                      answer: 'ค่ะ', explain: '女性用 ค่ะ 作为礼貌尾词。' }
                  ]
                },
                { type: 'listening', audio: 'สวัสดีครับ ผมชื่อสมชาย ผมมาจากไทย',
                  questions: [
                    { id: 'th-l1', kind: 'single', q: 'สมชาย 来自哪里？',
                      choices: ['泰国','老挝','柬埔寨'], answer: 0,
                      explain: 'ไทย 意为泰国。' }
                  ]
                },
                { type: 'speaking', prompts: [
                  { target: 'สวัสดี', targetTr: '你好', hint: '跟读：你好（中性问候）' },
                  { target: 'ขอบคุณครับ', targetTr: '谢谢（男）', hint: '跟读：男性道谢' },
                  { target: 'ไม่เป็นไร', targetTr: '没关系', hint: '跟读：表示没关系' },
                  { target: 'ลาก่อนค่ะ', targetTr: '再见（女）', hint: '跟读：女性道别' }
                ]}
              ]
            },
            {
              id: 'th-A1-U1-L2', title: 'สบายดีไหม',
              description: '询问对方近况与回答',
              xpReward: 20, requires: ['th-A1-U1-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'th-c7', front: 'สบายดี', back: '好的/安康', ipa: 'sà.bai dii',
                    example: 'สบายดีไหมครับ', exampleTr: '你好吗？' },
                  { id: 'th-c8', front: 'ไหม', back: '…吗（疑问尾词）', ipa: 'mǎi',
                    example: 'สบายดีไหม', exampleTr: '你还好吗？' },
                  { id: 'th-c9', front: 'ดี', back: '好', ipa: 'dii',
                    example: 'สบายดี', exampleTr: '安康。' },
                  { id: 'th-c10', front: 'เช้า', back: '早晨', ipa: 'cháao',
                    example: 'อรุณสวัสดิ์ตอนเช้า', exampleTr: '早上好。' },
                  { id: 'th-c11', front: 'บ่าย', back: '下午', ipa: 'bàai',
                    example: 'ตอนบ่ายโมง', exampleTr: '下午。' },
                  { id: 'th-c12', front: 'ค่ำ', back: '傍晚', ipa: 'khâm',
                    example: 'ตอนค่ำ', exampleTr: '傍晚。' }
                ]},
                { type: 'grammar', rule: '疑问句型：สบายดีไหม? 你好吗？回答用 สบายดี + 尾词',
                  questions: [
                    { id: 'th-g4', kind: 'single', q: '— สบายดีไหม — สบายดี___',
                      choices: ['ครับ','คุณ','แล้ว'], answer: 0,
                      explain: '回答时用礼貌尾词 ครับ/ค่ะ。' },
                    { id: 'th-g5', kind: 'order', q: '排列成句：สบายดี / ไหม / ครับ',
                      blocks: ['สบายดี','ไหม','ครับ'], answer: 'สบายดีไหมครับ' },
                    { id: 'th-g6', kind: 'fill', q: '早上好：อรุณสวัสดิ์ตอน___',
                      answer: 'เช้า', explain: 'ตอนเช้า 表示早上。' }
                  ]
                },
                { type: 'listening', audio: 'อรุณสวัสดิ์ตอนเช้าครับ สบายดีไหม สบายดีครับ ขอบคุณครับ',
                  questions: [
                    { id: 'th-l2', kind: 'single', q: '说话者感觉如何？',
                      choices: ['好的','累的','生病的'], answer: 0,
                      explain: '回答 สบายดี 表示安好。' }
                  ]
                },
                { type: 'speaking', prompts: [
                  { target: 'สบายดีไหม', targetTr: '你好吗', hint: '问候对方近况' },
                  { target: 'สบายดีครับ', targetTr: '我很好（男）', hint: '回答良好状态' },
                  { target: 'อรุณสวัสดิ์ตอนเช้า', targetTr: '早上好', hint: '早晨问候' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'th-A1-U2', title: 'อักษรไทย', subtitle: '字母与声调',
          icon: 'book', color: '#FF9600',
          lessons: [
            {
              id: 'th-A1-U2-L1', title: 'อักษรไทย',
              description: '认识泰语辅音字母与中高低调分类',
              xpReward: 20, requires: ['th-A1-U1-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'th-c13', front: 'ก', back: 'ก.ไก่（鸡）', ipa: 'gɔɔ',
                    example: 'ไก่', exampleTr: '鸡。' },
                  { id: 'th-c14', front: 'ข', back: 'ข.ไข่（蛋）', ipa: 'khǒɔ',
                    example: 'ไข่', exampleTr: '蛋。' },
                  { id: 'th-c15', front: 'ค', back: 'ค.ควาย（水牛）', ipa: 'khaa',
                    example: 'ควาย', exampleTr: '水牛。' },
                  { id: 'th-c16', front: 'ม', back: 'ม.ม้า（马）', ipa: 'máa',
                    example: 'ม้า', exampleTr: '马。' },
                  { id: 'th-c17', front: 'น', back: 'น.หนู（鼠）', ipa: 'nǔu',
                    example: 'หนู', exampleTr: '鼠。' },
                  { id: 'th-c18', front: 'ส', back: 'ส.เสือ（虎）', ipa: 'sǔa',
                    example: 'เสือ', exampleTr: '虎。' }
                ]},
                { type: 'grammar', rule: '泰语辅音分中辅音（如 ก）、高辅音（如 ข ส）、低辅音（如 ค ม น），决定声调',
                  questions: [
                    { id: 'th-g7', kind: 'single', q: '下列哪个是中辅音？',
                      choices: ['ก','ข','ค'], answer: 0,
                      explain: 'ก 是中辅音，声调由韵尾决定。' },
                    { id: 'th-g8', kind: 'single', q: '下列哪个是高辅音？',
                      choices: ['ค','ข','ม'], answer: 1,
                      explain: 'ข 是高辅音。' },
                    { id: 'th-g9', kind: 'fill', q: 'ไ___（蛋）填辅音字母',
                      answer: 'ข่', explain: 'ไข่ 由 ข 组成。' }
                  ]
                },
                { type: 'listening', audio: 'ไก่ ไข่ ควาย ม้า หนู เสือ',
                  questions: [
                    { id: 'th-l3', kind: 'single', q: '听到的是哪种动物？',
                      choices: ['鸡','马','虎'], answer: 0,
                      explain: 'ไก่ 意为鸡。' }
                  ]
                },
                { type: 'speaking', prompts: [
                  { target: 'ไก่', targetTr: '鸡', hint: '跟读：鸡' },
                  { target: 'ไข่', targetTr: '蛋', hint: '跟读：蛋' },
                  { target: 'ม้า', targetTr: '马', hint: '跟读：马' }
                ]}
              ]
            },
            {
              id: 'th-A1-U2-L2', title: 'เลข 0-10',
              description: '学会泰语数字 0 到 10',
              xpReward: 20, requires: ['th-A1-U2-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'th-c19', front: 'ศูนย์', back: '零', ipa: 'sǔun',
                    example: 'ศูนย์บาท', exampleTr: '零泰铢。' },
                  { id: 'th-c20', front: 'หนึ่ง', back: '一', ipa: 'nùeng',
                    example: 'หนึ่งลูก', exampleTr: '一个。' },
                  { id: 'th-c21', front: 'สอง', back: '二', ipa: 'sǒong',
                    example: 'สองคน', exampleTr: '两个人。' },
                  { id: 'th-c22', front: 'สาม', back: '三', ipa: 'sǎam',
                    example: 'สามเล่ม', exampleTr: '三本。' },
                  { id: 'th-c23', front: 'สี่', back: '四', ipa: 'sìi',
                    example: 'สี่ตัว', exampleTr: '四只。' },
                  { id: 'th-c24', front: 'ห้า', back: '五', ipa: 'hâa',
                    example: 'ห้าชิ้น', exampleTr: '五件。' },
                  { id: 'th-c25', front: 'สิบ', back: '十', ipa: 'sìp',
                    example: 'สิบบาท', exampleTr: '十泰铢。' }
                ]},
                { type: 'grammar', rule: '数字组合：สิบ（十）+ หนึ่ง（一）= สิบเอ็ด（十一）',
                  questions: [
                    { id: 'th-g10', kind: 'single', q: 'สาม + สิบ = ?',
                      choices: ['สามสิบ','สิบสาม','สามสิบสอง'], answer: 0,
                      explain: '三十 = สามสิบ。' },
                    { id: 'th-g11', kind: 'fill', q: '十一：สิบ___',
                      answer: 'เอ็ด', explain: '11 是 สิบเอ็ด，特殊形式。' },
                    { id: 'th-g12', kind: 'single', q: '5 在泰语中是？',
                      choices: ['ห้า','สี่','สาม'], answer: 0,
                      explain: 'ห้า 意为五。' }
                  ]
                },
                { type: 'listening', audio: 'หนึ่ง สอง สาม สี่ ห้า หก เจ็ด แปด เก้า สิบ',
                  questions: [
                    { id: 'th-l4', kind: 'single', q: '听到第四个数字是？',
                      choices: ['四','三','五'], answer: 0,
                      explain: 'สี่ 意为四。' }
                  ]
                },
                { type: 'speaking', prompts: [
                  { target: 'หนึ่ง สอง สาม', targetTr: '一二三', hint: '数数一到三' },
                  { target: 'สี่ ห้า หก', targetTr: '四五六', hint: '数数四到六' },
                  { target: 'สิบ', targetTr: '十', hint: '跟读：十' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'th-A1-U3', title: 'สีและตัวเลข', subtitle: '数字与颜色',
          icon: 'palette', color: '#FF4B4B',
          lessons: [
            {
              id: 'th-A1-U3-L1', title: 'ผมชื่อ...',
              description: '介绍自己的名字与国籍',
              xpReward: 20, requires: ['th-A1-U2-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'th-c26', front: 'ผม', back: '我（男）', ipa: 'phǒm',
                    example: 'ผมชื่อสมชาย', exampleTr: '我叫 somchai。' },
                  { id: 'th-c27', front: 'ฉัน', back: '我（女/通用）', ipa: 'chǎn',
                    example: 'ฉันชื่อสมหญิง', exampleTr: '我叫 somying。' },
                  { id: 'th-c28', front: 'ชื่อ', back: '名字', ipa: 'chûue',
                    example: 'คุณชื่ออะไร', exampleTr: '你叫什么？' },
                  { id: 'th-c29', front: 'คุณ', back: '你（敬称）', ipa: 'khun',
                    example: 'คุณมาจากไหน', exampleTr: '你来自哪里？' },
                  { id: 'th-c30', front: 'มาจาก', back: '来自', ipa: 'maa jàak',
                    example: 'ผมมาจากจีน', exampleTr: '我来自中国。' },
                  { id: 'th-c31', front: 'ประเทศ', back: '国家', ipa: 'prà.thêet',
                    example: 'ประเทศไทย', exampleTr: '泰国。' }
                ]},
                { type: 'grammar', rule: '自我介绍：ผม/ฉัน + ชื่อ + 名字。问国籍用 มาจากไหน？',
                  questions: [
                    { id: 'th-g13', kind: 'single', q: '— คุณชื่ออะไร — ___ชื่อสมชาย',
                      choices: ['ผม','เขา','มัน'], answer: 0,
                      explain: '男性自称用 ผม。' },
                    { id: 'th-g14', kind: 'fill', q: '我来自中国：ผมมาจาก___',
                      answer: 'จีน', explain: 'จีน 意为中国。' },
                    { id: 'th-g15', kind: 'single', q: '询问对方国籍：คุณมาจาก___？',
                      choices: ['ไหน','อะไร','เท่าไหร่'], answer: 0,
                      explain: 'ไหน 表示哪里。' }
                  ]
                },
                { type: 'listening', audio: 'สวัสดีครับ ผมชื่อสมชาย ผมมาจากประเทศไทย ยินดีที่ได้รู้จักครับ',
                  questions: [
                    { id: 'th-l5', kind: 'single', q: '说话者叫什么名字？',
                      choices: ['somchai','somying','somkit'], answer: 0,
                      explain: 'สมชาย 是常见男性名字。' }
                  ]
                },
                { type: 'speaking', prompts: [
                  { target: 'ผมชื่อสมชาย', targetTr: '我叫 somchai', hint: '男性自我介绍' },
                  { target: 'คุณชื่ออะไร', targetTr: '你叫什么', hint: '询问对方姓名' },
                  { target: 'ผมมาจากจีน', targetTr: '我来自中国', hint: '说明国籍' }
                ]}
              ]
            },
            {
              id: 'th-A1-U3-L2', title: 'สี',
              description: '学习常用颜色词',
              xpReward: 20, requires: ['th-A1-U3-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'th-c32', front: 'สีแดง', back: '红色', ipa: 'sǐi dǎeng',
                    example: 'แอปเปิลสีแดง', exampleTr: '红色的苹果。' },
                  { id: 'th-c33', front: 'สีเหลือง', back: '黄色', ipa: 'sǐi lǔeang',
                    example: 'ดอกไม้สีเหลือง', exampleTr: '黄色的花。' },
                  { id: 'th-c34', front: 'สีเขียว', back: '绿色', ipa: 'sǐi khǐao',
                    example: 'ต้นไม้สีเขียว', exampleTr: '绿色的树。' },
                  { id: 'th-c35', front: 'สีฟ้า', back: '蓝色', ipa: 'sǐi fáa',
                    example: 'ท้องฟ้าสีฟ้า', exampleTr: '蓝色的天空。' },
                  { id: 'th-c36', front: 'สีดำ', back: '黑色', ipa: 'sǐi dam',
                    example: 'แมวสีดำ', exampleTr: '黑色的猫。' },
                  { id: 'th-c37', front: 'สีขาว', back: '白色', ipa: 'sǐi kǎao',
                    example: 'กระดาษสีขาว', exampleTr: '白色的纸。' }
                ]},
                { type: 'grammar', rule: '颜色表达：名词 + สี + 颜色词，如 แมวสีดำ（黑色的猫）',
                  questions: [
                    { id: 'th-g16', kind: 'single', q: '天空是蓝色的：ท้องฟ้าสี___',
                      choices: ['แดง','ฟ้า','เขียว'], answer: 1,
                      explain: 'สีฟ้า 意为蓝色。' },
                    { id: 'th-g17', kind: 'fill', q: '黑色的猫：แมวสี___',
                      answer: 'ดำ', explain: 'สีดำ 意为黑色。' },
                    { id: 'th-g18', kind: 'single', q: '草是什么颜色？ต้นหญ้าสี___',
                      choices: ['เขียว','แดง','ดำ'], answer: 0,
                      explain: 'สีเขียว 意为绿色。' }
                  ]
                },
                { type: 'listening', audio: 'แอปเปิลสีแดง ท้องฟ้าสีฟ้า ต้นหญ้าสีเขียว ดอกไม้สีเหลือง',
                  questions: [
                    { id: 'th-l6', kind: 'single', q: '苹果是什么颜色？',
                      choices: ['红色','蓝色','黄色'], answer: 0,
                      explain: 'สีแดง 意为红色。' }
                  ]
                },
                { type: 'speaking', prompts: [
                  { target: 'สีแดง', targetTr: '红色', hint: '跟读：红色' },
                  { target: 'สีเขียว', targetTr: '绿色', hint: '跟读：绿色' },
                  { target: 'ท้องฟ้าสีฟ้า', targetTr: '天空是蓝色的', hint: '描述颜色' }
                ]}
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'th-A2', code: 'A2', name: '初级',
      description: '系词、家庭、食物、问路与基本时态',
      units: [
        {
          id: 'th-A2-U1', title: 'ประโยค', subtitle: '系词与句子',
          icon: 'text', color: '#8B5CF6',
          lessons: [
            {
              id: 'th-A2-U1-L1', title: 'เป็น与มี',
              description: '系词 เป็น（是）与 มี（有）的用法',
              xpReward: 25, requires: ['th-A1-U3-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'th-c38', front: 'เป็น', back: '是（系词）', ipa: 'pen',
                    example: 'ผมเป็นนักเรียน', exampleTr: '我是学生。' },
                  { id: 'th-c39', front: 'มี', back: '有', ipa: 'mii',
                    example: 'ฉันมีหนังสือ', exampleTr: '我有书。' },
                  { id: 'th-c40', front: 'นักเรียน', back: '学生', ipa: 'nák rian',
                    example: 'เขาเป็นนักเรียน', exampleTr: '他是学生。' },
                  { id: 'th-c41', front: 'ครู', back: '老师', ipa: 'khruu',
                    example: 'คุณครูดี', exampleTr: '老师很好。' },
                  { id: 'th-c42', front: 'หนังสือ', back: '书', ipa: 'nǎng sǔu',
                    example: 'นี่คือหนังสือ', exampleTr: '这是书。' },
                  { id: 'th-c43', front: 'ครอบครัว', back: '家庭', ipa: 'khrop.khrua',
                    example: 'ครอบครัวของผม', exampleTr: '我的家庭。' }
                ]},
                { type: 'grammar', rule: 'เป็น 用于身份职业（是…）；มี 用于拥有（有…）',
                  questions: [
                    { id: 'th-g19', kind: 'single', q: '我是学生：ผม___นักเรียน',
                      choices: ['เป็น','มี','อยู่'], answer: 0,
                      explain: 'เป็น 表示身份，意为"是"。' },
                    { id: 'th-g20', kind: 'single', q: '我有一本书：ผม___หนังสือ',
                      choices: ['เป็น','มี','คือ'], answer: 1,
                      explain: 'มี 表示拥有，意为"有"。' },
                    { id: 'th-g21', kind: 'fill', q: '她是老师：เขา___ครู',
                      answer: 'เป็น', explain: '职业身份用 เป็น。' }
                  ]
                },
                { type: 'listening', audio: 'ผมเป็นนักเรียน ผมมีหนังสือสามเล่ม ครูของผมเป็นคนดี',
                  questions: [
                    { id: 'th-l7', kind: 'single', q: '说话者是什么身份？',
                      choices: ['学生','老师','医生'], answer: 0,
                      explain: 'นักเรียน 意为学生。' }
                  ]
                },
                { type: 'speaking', prompts: [
                  { target: 'ผมเป็นนักเรียน', targetTr: '我是学生', hint: '介绍身份' },
                  { target: 'ฉันมีหนังสือ', targetTr: '我有书', hint: '表达拥有' },
                  { target: 'เขาเป็นครู', targetTr: '他是老师', hint: '介绍他人职业' }
                ]}
              ]
            },
            {
              id: 'th-A2-U1-L2', title: 'ครอบครัว',
              description: '家庭成员称呼与介绍',
              xpReward: 25, requires: ['th-A2-U1-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'th-c44', front: 'พ่อ', back: '父亲', ipa: 'phâw',
                    example: 'พ่อของผม', exampleTr: '我的父亲。' },
                  { id: 'th-c45', front: 'แม่', back: '母亲', ipa: 'mêe',
                    example: 'แม่ของฉัน', exampleTr: '我的母亲。' },
                  { id: 'th-c46', front: 'พี่ชาย', back: '哥哥', ipa: 'phîi chaai',
                    example: 'พี่ชายผม', exampleTr: '我的哥哥。' },
                  { id: 'th-c47', front: 'น้องสาว', back: '妹妹', ipa: 'nóng sǎao',
                    example: 'น้องสาวฉัน', exampleTr: '我的妹妹。' },
                  { id: 'th-c48', front: 'ปู่', back: '祖父', ipa: 'pùu',
                    example: 'ปู่ของผม', exampleTr: '我的祖父。' },
                  { id: 'th-c49', front: 'ย่า', back: '祖母', ipa: 'yâa',
                    example: 'ย่าของฉัน', exampleTr: '我的祖母。' }
                ]},
                { type: 'grammar', rule: '亲属词前加 ของ（的）表所属：พ่อของผม（我的父亲）',
                  questions: [
                    { id: 'th-g22', kind: 'single', q: '我的母亲：แม่___ผม',
                      choices: ['ของ','เป็น','มี'], answer: 0,
                      explain: 'ของ 表示所属关系，意为"的"。' },
                    { id: 'th-g23', kind: 'fill', q: '我的哥哥：พี่ชาย___ผม',
                      answer: 'ของ', explain: 'ของ 连接所有者。' },
                    { id: 'th-g24', kind: 'single', q: '妹妹用泰语怎么说？',
                      choices: ['น้องสาว','พี่สาว','ปู่'], answer: 0,
                      explain: 'น้องสาว 意为妹妹。' }
                  ]
                },
                { type: 'listening', audio: 'ครอบครัวของผมมีพ่อ แม่ พี่ชายและน้องสาว รวมสี่คน',
                  questions: [
                    { id: 'th-l8', kind: 'single', q: '说话者家有几口人？',
                      choices: ['四口','三口','五口'], answer: 0,
                      explain: 'รวมสี่คน 表示共四人。' }
                  ]
                },
                { type: 'speaking', prompts: [
                  { target: 'พ่อของผม', targetTr: '我的父亲', hint: '介绍父亲' },
                  { target: 'แม่ของฉัน', targetTr: '我的母亲', hint: '介绍母亲' },
                  { target: 'ครอบครัวของผม', targetTr: '我的家庭', hint: '介绍家庭' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'th-A2-U2', title: 'ชีวิตประจำวัน', subtitle: '日常生活',
          icon: 'home', color: '#00B8A9',
          lessons: [
            {
              id: 'th-A2-U2-L1', title: 'อาหาร',
              description: '泰国食物与点餐用语',
              xpReward: 25, requires: ['th-A2-U1-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'th-c50', front: 'ข้าว', back: '米饭', ipa: 'kâao',
                    example: 'ผมกินข้าว', exampleTr: '我吃饭。' },
                  { id: 'th-c51', front: 'ผัดไทย', back: '泰式炒河粉', ipa: 'phàt thai',
                    example: 'ผมชอบผัดไทย', exampleTr: '我喜欢泰式炒河粉。' },
                  { id: 'th-c52', front: 'ต้มยำกุ้ง', back: '冬阴功汤', ipa: 'tòm yam kúng',
                    example: 'ต้มยำกุ้งอร่อย', exampleTr: '冬阴功汤很美味。' },
                  { id: 'th-c53', front: 'เผ็ด', back: '辣的', ipa: 'pèt',
                    example: 'อาหารเผ็ด', exampleTr: '辣的食物。' },
                  { id: 'th-c54', front: 'หวาน', back: '甜的', ipa: 'wǎan',
                    example: 'ของหวาน', exampleTr: '甜点。' },
                  { id: 'th-c55', front: 'อร่อย', back: '美味的', ipa: 'a.ròi',
                    example: 'อร่อยมาก', exampleTr: '非常美味。' }
                ]},
                { type: 'grammar', rule: '形容词放名词后：อาหารเผ็ด（辣的食物），ชอบ + 名词（喜欢…）',
                  questions: [
                    { id: 'th-g25', kind: 'single', q: '我喜欢泰式炒河粉：ผมชอบ___',
                      choices: ['ผัดไทย','ต้มยำกุ้ง','ข้าว'], answer: 0,
                      explain: 'ผัดไทย 是泰式炒河粉。' },
                    { id: 'th-g26', kind: 'fill', q: '辣的食物：อาหาร___',
                      answer: 'เผ็ด', explain: 'เผ็ด 意为辣。' },
                    { id: 'th-g27', kind: 'single', q: '哪种食物是 ต้มยำกุ้ง？',
                      choices: ['冬阴功汤','泰式炒河粉','甜点'], answer: 0,
                      explain: 'ต้มยำกุ้ง 是冬阴功汤。' }
                  ]
                },
                { type: 'listening', audio: 'ผมชอบผัดไทย อร่อยมาก แต่ไม่เผ็ดเกินไป ขอเมนูได้ไหม',
                  questions: [
                    { id: 'th-l9', kind: 'single', q: '说话者喜欢什么？',
                      choices: ['泰式炒河粉','冬阴功汤','甜点'], answer: 0,
                      explain: 'ผัดไทย 是泰式炒河粉。' }
                  ]
                },
                { type: 'speaking', prompts: [
                  { target: 'ผมชอบผัดไทย', targetTr: '我喜欢泰式炒河粉', hint: '表达喜好' },
                  { target: 'อาหารอร่อย', targetTr: '食物美味', hint: '赞美食物' },
                  { target: 'ไม่เผ็ด', targetTr: '不辣', hint: '说明口味' }
                ]}
              ]
            },
            {
              id: 'th-A2-U2-L2', title: 'ถามทาง',
              description: '问路与方位表达',
              xpReward: 25, requires: ['th-A2-U2-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'th-c56', front: 'ซ้าย', back: '左', ipa: 'saai',
                    example: 'เลี้ยวซ้าย', exampleTr: '左转。' },
                  { id: 'th-c57', front: 'ขวา', back: '右', ipa: 'khwǎa',
                    example: 'เลี้ยวขวา', exampleTr: '右转。' },
                  { id: 'th-c58', front: 'ตรง', back: '直', ipa: 'trong',
                    example: 'ตรงไป', exampleTr: '直走。' },
                  { id: 'th-c59', front: 'ทาง', back: '路/方向', ipa: 'thaang',
                    example: 'ทางนี้', exampleTr: '这条路。' },
                  { id: 'th-c60', front: 'อยู่ที่ไหน', back: '在哪里', ipa: 'yùu thîi nǎi',
                    example: 'ห้องน้ำอยู่ที่ไหน', exampleTr: '厕所在哪里？' },
                  { id: 'th-c61', front: 'ใกล้', back: '近', ipa: 'glài',
                    example: 'ใกล้มาก', exampleTr: '很近。' }
                ]},
                { type: 'grammar', rule: '问路用 อยู่ที่ไหน？在哪？回答用 เลี้ยว（转）+ 方位',
                  questions: [
                    { id: 'th-g28', kind: 'single', q: '左转：เลี้ยว___',
                      choices: ['ซ้าย','ขวา','ตรง'], answer: 0,
                      explain: 'ซ้าย 意为左。' },
                    { id: 'th-g29', kind: 'fill', q: '直走：___ไป',
                      answer: 'ตรง', explain: 'ตรง 意为直。' },
                    { id: 'th-g30', kind: 'single', q: '询问厕所在哪：ห้องน้ำ___？',
                      choices: ['อยู่ที่ไหน','เป็นไร','มีอะไร'], answer: 0,
                      explain: 'อยู่ที่ไหน 表示在哪里。' }
                  ]
                },
                { type: 'listening', audio: 'ขอโทษครับ ห้องน้ำอยู่ที่ไหน เลี้ยวซ้ายแล้วตรงไป ใกล้มาก',
                  questions: [
                    { id: 'th-l10', kind: 'single', q: '应该先往哪转？',
                      choices: ['左','右','直'], answer: 0,
                      explain: 'เลี้ยวซ้าย 意为左转。' }
                  ]
                },
                { type: 'speaking', prompts: [
                  { target: 'ห้องน้ำอยู่ที่ไหน', targetTr: '厕所在哪里', hint: '问路' },
                  { target: 'เลี้ยวซ้าย', targetTr: '左转', hint: '指路左转' },
                  { target: 'ตรงไป', targetTr: '直走', hint: '指路直走' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'th-A2-U3', title: 'กาล', subtitle: '时态',
          icon: 'clock', color: '#FF9600',
          lessons: [
            {
              id: 'th-A2-U3-L1', title: 'อดีตกาล',
              description: '过去时表达：ได้ / แล้ว / เคย',
              xpReward: 25, requires: ['th-A2-U2-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'th-c62', front: 'เมื่อวาน', back: '昨天', ipa: 'mûea waan',
                    example: 'เมื่อวานผมไปตลาด', exampleTr: '昨天我去了市场。' },
                  { id: 'th-c63', front: 'แล้ว', back: '已经（完成）', ipa: 'lɛ́ɛw',
                    example: 'ผมกินข้าวแล้ว', exampleTr: '我已经吃饭了。' },
                  { id: 'th-c64', front: 'เคย', back: '曾经（经历）', ipa: 'khooei',
                    example: 'ผมเคยไปภูเก็ต', exampleTr: '我曾经去过普吉岛。' },
                  { id: 'th-c65', front: 'ได้', back: '过去动作标记', ipa: 'dâai',
                    example: 'ผมได้กินข้าว', exampleTr: '我吃了饭。' },
                  { id: 'th-c66', front: 'เมื่อยาว', back: '很久以前', ipa: 'mûea yao',
                    example: 'นานมาแล้ว', exampleTr: '很久以前。' },
                  { id: 'th-c67', front: 'วานนี้', back: '今天早上', ipa: 'waan níi',
                    example: 'วานนี้ผมยุ่ง', exampleTr: '今天早上我忙碌。' }
                ]},
                { type: 'grammar', rule: '过去时：แล้ว 表完成；เคย 表经历；ได้ 表过去动作',
                  questions: [
                    { id: 'th-g31', kind: 'single', q: '我已经吃饭了：ผมกินข้าว___',
                      choices: ['แล้ว','เคย','จะ'], answer: 0,
                      explain: 'แล้ว 表示动作已完成。' },
                    { id: 'th-g32', kind: 'single', q: '我曾经去过泰国：ผม___ไปไทย',
                      choices: ['แล้ว','เคย','ได้'], answer: 1,
                      explain: 'เคย 表示曾经经历过。' },
                    { id: 'th-g33', kind: 'fill', q: '昨天：___วาน',
                      answer: 'เมื่อ', explain: 'เมื่อวาน 意为昨天。' }
                  ]
                },
                { type: 'listening', audio: 'เมื่อวานผมได้ไปตลาด ผมได้ซื้อผลไม้ แล้วกลับบ้าน',
                  questions: [
                    { id: 'th-l11', kind: 'single', q: '说话者昨天做了什么？',
                      choices: ['去市场','上班','旅行'], answer: 0,
                      explain: 'ไปตลาด 意为去市场。' }
                  ]
                },
                { type: 'speaking', prompts: [
                  { target: 'ผมกินข้าวแล้ว', targetTr: '我已经吃饭了', hint: '表达完成动作' },
                  { target: 'ผมเคยไปไทย', targetTr: '我曾经去过泰国', hint: '表达经历' },
                  { target: 'เมื่อวาน', targetTr: '昨天', hint: '说昨天时间词' }
                ]}
              ]
            },
            {
              id: 'th-A2-U3-L2', title: 'อนาคตกาล',
              description: '将来时表达：จะ / พรุ่งนี้',
              xpReward: 25, requires: ['th-A2-U3-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'th-c68', front: 'พรุ่งนี้', back: '明天', ipa: 'prùng nîi',
                    example: 'พรุ่งนี้ผมจะไป', exampleTr: '明天我要去。' },
                  { id: 'th-c69', front: 'จะ', back: '将/将要', ipa: 'cà',
                    example: 'ผมจะกินข้าว', exampleTr: '我将要吃饭。' },
                  { id: 'th-c70', front: 'อนาคต', back: '未来', ipa: 'a.ná.khót',
                    example: 'ในอนาคต', exampleTr: '在未来。' },
                  { id: 'th-c71', front: 'สัปดาห์หน้า', back: '下周', ipa: 'sàp.daa nâa',
                    example: 'สัปดาห์หน้าผมจะเดินทาง', exampleTr: '下周我要旅行。' },
                  { id: 'th-c72', front: 'เดือนหน้า', back: '下个月', ipa: 'duean nâa',
                    example: 'เดือนหน้าผมจะย้าย', exampleTr: '下个月我要搬家。' },
                  { id: 'th-c73', front: 'ปีหน้า', back: '明年', ipa: 'pii nâa',
                    example: 'ปีหน้าผมจะเรียน', exampleTr: '明年我要学习。' }
                ]},
                { type: 'grammar', rule: '将来时用 จะ + 动词：ผมจะไป（我将要去），时间词常放句首',
                  questions: [
                    { id: 'th-g34', kind: 'single', q: '明天我要去：พรุ่งนี้ผม___ไป',
                      choices: ['จะ','แล้ว','เคย'], answer: 0,
                      explain: 'จะ 表示将来时。' },
                    { id: 'th-g35', kind: 'fill', q: '下周：___หน้า',
                      answer: 'สัปดาห์', explain: 'สัปดาห์ 意为周。' },
                    { id: 'th-g36', kind: 'single', q: '哪个是 พรุ่งนี้ 的意思？',
                      choices: ['明天','昨天','今天'], answer: 0,
                      explain: 'พรุ่งนี้ 意为明天。' }
                  ]
                },
                { type: 'listening', audio: 'พรุ่งนี้ผมจะไปตลาด ผมจะซื้อผักและผลไม้ แล้วจะกลับบ้าน',
                  questions: [
                    { id: 'th-l12', kind: 'single', q: '说话者明天要去哪里？',
                      choices: ['市场','学校','医院'], answer: 0,
                      explain: 'ไปตลาด 意为去市场。' }
                  ]
                },
                { type: 'speaking', prompts: [
                  { target: 'พรุ่งนี้ผมจะไป', targetTr: '明天我要去', hint: '表达将来计划' },
                  { target: 'ผมจะกินข้าว', targetTr: '我将要吃饭', hint: '表达将来动作' },
                  { target: 'สัปดาห์หน้า', targetTr: '下周', hint: '说将来时间' }
                ]}
              ]
            }
          ]
        }
      ]
    }
  ]
};

// 提供查询工具函数（沿用 en 模板）
LL.courses.findLesson = function(lang, lessonId) {
  const course = LL.courses[lang];
  if (!course) return null;
  for (let i = 0; i < course.levels.length; i++) {
    for (let j = 0; j < course.levels[i].units.length; j++) {
      for (let k = 0; k < course.levels[i].units[j].lessons.length; k++) {
        if (course.levels[i].units[j].lessons[k].id === lessonId) {
          return course.levels[i].units[j].lessons[k];
        }
      }
    }
  }
  return null;
};

LL.courses.getLessonContext = function(lang, lessonId) {
  const course = LL.courses[lang];
  if (!course) return null;
  for (let i = 0; i < course.levels.length; i++) {
    for (let j = 0; j < course.levels[i].units.length; j++) {
      for (let k = 0; k < course.levels[i].units[j].lessons.length; k++) {
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

LL.courses.countLessons = function(lang) {
  const course = LL.courses[lang];
  if (!course) return 0;
  let n = 0;
  course.levels.forEach(function(l) { l.units.forEach(function(u) { n += u.lessons.length; }); });
  return n;
};
