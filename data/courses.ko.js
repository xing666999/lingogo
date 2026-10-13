/* ===== LingoGo 韩语课程数据 ===== */
window.LL = window.LL || {};
LL.courses = LL.courses || {};

LL.courses.ko = {
  lang: 'ko',
  label: '韩语',
  flag: '🇰🇷',
  themeColor: '#00B8A9',
  levels: [
    {
      id: 'ko-T1', code: 'TOPIK1', name: '入门',
      description: '韩文字母、日常问候、基础表达',
      units: [
        {
          id: 'ko-T1-U1', title: '한글', subtitle: '韩文字母',
          icon: 'korean', color: '#00B8A9',
          lessons: [
            {
              id: 'ko-T1-U1-L1', title: '모음',
              description: '基本元音 ㅏ ㅑ ㅓ ㅕ ㅗ',
              xpReward: 20, requires: [],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'ko-c1', front: 'ㅏ', back: 'a (啊)', ipa: '/a/', example: '아이 (孩子)', exampleTr: '孩子' },
                  { id: 'ko-c2', front: 'ㅑ', back: 'ya (呀)', ipa: '/ja/', example: '야채 (蔬菜)', exampleTr: '蔬菜' },
                  { id: 'ko-c3', front: 'ㅓ', back: 'eo (奥)', ipa: '/ʌ/', example: '어머니 (母亲)', exampleTr: '母亲' },
                  { id: 'ko-c4', front: 'ㅕ', back: 'yeo (哟)', ipa: '/jʌ/', example: '여자 (女人)', exampleTr: '女人' },
                  { id: 'ko-c5', front: 'ㅗ', back: 'o (哦)', ipa: '/o/', example: '오이 (黄瓜)', exampleTr: '黄瓜' }
                ]},
                { type: 'grammar', rule: '韩语语序：主语 + 宾语 + 动词（SOV）',
                  questions: [
                  { id: 'ko-g1', kind: 'single', q: '저는 학생___. (是学生)',
                    choices: ['입니다','의','를'], answer: 0, explain: '입니다 是「是」的敬语。' },
                  { id: 'ko-g2', kind: 'fill', q: '저는 학생___.', answer: '입니다' }
                ]},
                { type: 'listening', audio: '저는 학생입니다. 이름은 김영희입니다. 만나서 반갑습니다.',
                  questions: [
                  { id: 'ko-l1', kind: 'single', q: '说话者是什么身份？',
                    choices: ['学生','老师','医生'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: '아', targetTr: '啊', hint: '跟读元音' },
                  { target: '어', targetTr: '奥', hint: '跟读元音' },
                  { target: '오', targetTr: '哦', hint: '跟读元音' }
                ]}
              ]
            },
            {
              id: 'ko-T1-U1-L2', title: '자음',
              description: '基本辅音 ㄱ ㄴ ㄷ ㄹ ㅁ',
              xpReward: 20, requires: ['ko-T1-U1-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'ko-c6', front: 'ㄱ', back: 'k/g (ㄱ)', ipa: '/k/', example: '가다 (去)', exampleTr: '去' },
                  { id: 'ko-c7', front: 'ㄴ', back: 'n (ㄴ)', ipa: '/n/', example: '나무 (树)', exampleTr: '树' },
                  { id: 'ko-c8', front: 'ㄷ', back: 't/d (ㄷ)', ipa: '/t/', example: '다리 (腿)', exampleTr: '腿' },
                  { id: 'ko-c9', front: 'ㄹ', back: 'r/l (ㄹ)', ipa: '/ɾ/', example: '라면 (拉面)', exampleTr: '拉面' },
                  { id: 'ko-c10', front: 'ㅁ', back: 'm (ㅁ)', ipa: '/m/', example: '바다 (海)', exampleTr: '海' }
                ]},
                { type: 'grammar', rule: '主语用 은/는 标记',
                  questions: [
                  { id: 'ko-g3', kind: 'single', q: '저___ 학생입니다。 (主语标记)',
                    choices: ['는','를','의'], answer: 0, explain: '无韵尾用는。' },
                  { id: 'ko-g4', kind: 'fill', q: '저___ 학생입니다。', answer: '는' }
                ]},
                { type: 'listening', audio: '저는 한국 사람입니다. 지금 서울에 살고 있습니다.',
                  questions: [
                  { id: 'ko-l2', kind: 'single', q: '说话者是哪国人？',
                    choices: ['韩国人','日本人','中国人'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: '가다', targetTr: '去', hint: '跟读单词' },
                  { target: '나무', targetTr: '树', hint: '跟读单词' }
                ]}
              ]
            },
            {
              id: 'ko-T1-U1-L3', title: '인사',
              description: '日常问候',
              xpReward: 20, requires: ['ko-T1-U1-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'ko-c11', front: '안녕하세요', back: '你好', ipa: '/anɲjʌŋɦasejo/', example: '안녕하세요, 만나서 반갑습니다.', exampleTr: '你好，很高兴见到你。' },
                  { id: 'ko-c12', front: '감사합니다', back: '谢谢', ipa: '/kamsahapnida/', example: '도와주셔서 감사합니다.', exampleTr: '感谢你的帮助。' },
                  { id: 'ko-c13', front: '죄송합니다', back: '对不起', ipa: '/tʃweːsoŋhapnida/', example: '죄송합니다, 늦었어요.', exampleTr: '对不起，我迟到了。' },
                  { id: 'ko-c14', front: '안녕히 가세요', back: '再见(对走的人)', ipa: '/anɲjʌŋɦiɡasejo/', example: '안녕히 가세요.', exampleTr: '请慢走。' },
                  { id: 'ko-c15', front: '네', back: '是/好', ipa: '/ne/', example: '네, 그래요.', exampleTr: '是的。' }
                ]},
                { type: 'grammar', rule: '敬语：~습니다/ㅂ니다',
                  questions: [
                  { id: 'ko-g5', kind: 'single', q: '저는 학생___. (敬语)',
                    choices: ['입니다','이다','는'], answer: 0 },
                  { id: 'ko-g6', kind: 'fill', q: '안녕하___!', answer: '세요' }
                ]},
                { type: 'listening', audio: '안녕하세요! 만나서 반갑습니다. 저는 김영희입니다. 잘 부탁드립니다.',
                  questions: [
                  { id: 'ko-l3', kind: 'single', q: '说话者叫什么？',
                    choices: ['金英姬','金大明','李善姬'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: '안녕하세요', targetTr: '你好', hint: '问候' },
                  { target: '감사합니다', targetTr: '谢谢', hint: '感谢' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'ko-T1-U2', title: '자기소개', subtitle: '自我介绍',
          icon: 'intro', color: '#FF9600',
          lessons: [
            {
              id: 'ko-T1-U2-L1', title: '저는…',
              description: '自我介绍',
              xpReward: 20, requires: ['ko-T1-U1-L3'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'ko-c16', front: '저', back: '我(敬)', ipa: '/tɕʌ/', example: '저는 학생입니다.', exampleTr: '我是学生。' },
                  { id: 'ko-c17', front: '이름', back: '名字', ipa: '/iɾɯm/', example: '이름이 뭐예요?', exampleTr: '你叫什么名字？' },
                  { id: 'ko-c18', front: '학생', back: '学生', ipa: '/haksɛŋ/', example: '저는 학생입니다.', exampleTr: '我是学生。' },
                  { id: 'ko-c19', front: '선생님', back: '老师', ipa: '/sʌnsɛŋnim/', example: '선생님 안녕하세요.', exampleTr: '老师好。' },
                  { id: 'ko-c20', front: '회사원', back: '公司职员', ipa: '/hwesawan/', example: '그는 회사원입니다.', exampleTr: '他是公司职员。' }
                ]},
                { type: 'grammar', rule: 'A는 B입니다：A是B',
                  questions: [
                  { id: 'ko-g7', kind: 'single', q: '저___ 학생___.',
                    choices: ['는/입니다','을/이다','가/해요'], answer: 0 },
                  { id: 'ko-g8', kind: 'fill', q: '저___ 학생___.', answer: '는' }
                ]},
                { type: 'listening', audio: '안녕하세요, 만나서 반갑습니다. 저는 김영희입니다. 학생이에요. 잘 부탁드립니다.',
                  questions: [
                  { id: 'ko-l4', kind: 'single', q: '说话者身份？',
                    choices: ['学生','老师','公司职员'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: '저는 학생입니다', targetTr: '我是学生', hint: '自我介绍' }
                ]}
              ]
            },
            {
              id: 'ko-T1-U2-L2', title: '숫자',
              description: '韩语数字',
              xpReward: 20, requires: ['ko-T1-U2-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'ko-c21', front: '하나', back: '一', ipa: '/hana/', example: '하나만 주세요.', exampleTr: '给我一个。' },
                  { id: 'ko-c22', front: '둘', back: '二', ipa: '/tu:l/', example: '둘이 가요.', exampleTr: '两个人去。' },
                  { id: 'ko-c23', front: '셋', back: '三', ipa: '/sɛ:t/', example: '셋이서 놀아요.', exampleTr: '三个人玩。' },
                  { id: 'ko-c24', front: '넷', back: '四', ipa: '/nɛ:t/', example: '넷이서 식사해요.', exampleTr: '四个人吃饭。' },
                  { id: 'ko-c25', front: '다섯', back: '五', ipa: '/tasʌt/', example: '다섯 개 있어요.', exampleTr: '有五个。' }
                ]},
                { type: 'grammar', rule: '韩语有固有词和汉字词两套数字',
                  questions: [
                  { id: 'ko-g9', kind: 'single', q: '「三」的固有词是？',
                    choices: ['셋','삼','삼'], answer: 0 },
                  { id: 'ko-g10', kind: 'fill', q: '하나, 둘, ___.', answer: '셋' }
                ]},
                { type: 'listening', audio: '저는 형제가 둘이 있습니다. 형과 동생이에요.',
                  questions: [
                  { id: 'ko-l5', kind: 'single', q: '说话者有几个兄弟姐妹？',
                    choices: ['两个','三个','一个'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: '하나, 둘, 셋', targetTr: '一、二、三', hint: '数数' }
                ]}
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'ko-T2', code: 'TOPIK2', name: '初级',
      description: '日常生活、购物、出行表达',
      units: [
        {
          id: 'ko-T2-U1', title: '쇼핑', subtitle: '购物',
          icon: 'cart', color: '#1CB0F6',
          lessons: [
            {
              id: 'ko-T2-U1-L1', title: '가게에서',
              description: '商店购物',
              xpReward: 25, requires: ['ko-T1-U2-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'ko-c26', front: '사다', back: '买', ipa: '/sada/', example: '책을 사다.', exampleTr: '买书。' },
                  { id: 'ko-c27', front: '가격', back: '价格', ipa: '/kaɡjʌk/', example: '가격이 비싸요.', exampleTr: '价格贵。' },
                  { id: 'ko-c28', front: '싸다', back: '便宜', ipa: '/ssada/', example: '이건 싸요.', exampleTr: '这便宜。' },
                  { id: 'ko-c29', front: '비싸다', back: '贵', ipa: '/pissada/', example: '너무 비싸요.', exampleTr: '太贵了。' },
                  { id: 'ko-c30', front: '돈', back: '钱', ipa: '/ton/', example: '돈이 있어요.', exampleTr: '有钱。' }
                ]},
                { type: 'grammar', rule: '을/를：宾语标记',
                  questions: [
                  { id: 'ko-g11', kind: 'single', q: '책___ 사요. (买书)',
                    choices: ['을','은','의'], answer: 0 },
                  { id: 'ko-g12', kind: 'fill', q: '사과___ 사요.', answer: '를' }
                ]},
                { type: 'listening', audio: '이 책 얼마예요? 만원이에요. 너무 비싸요.',
                  questions: [
                  { id: 'ko-l6', kind: 'single', q: '这本书多少钱？',
                    choices: ['一万韩元','五千韩元','两万韩元'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: '얼마예요', targetTr: '多少钱', hint: '问价格' }
                ]}
              ]
            },
            {
              id: 'ko-T2-U1-L2', title: '식당',
              description: '餐厅点餐',
              xpReward: 25, requires: ['ko-T2-U1-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'ko-c31', front: '주문', back: '点餐', ipa: '/tʃumo:n/', example: '주문하겠습니다.', exampleTr: '我要点餐。' },
                  { id: 'ko-c32', front: '메뉴', back: '菜单', ipa: '/menju/', example: '메뉴 주세요.', exampleTr: '请给我菜单。' },
                  { id: 'ko-c33', front: '커피', back: '咖啡', ipa: '/kʰʌphi/', example: '커피 한 잔 주세요.', exampleTr: '请给我一杯咖啡。' },
                  { id: 'ko-c34', front: '밥', back: '饭', ipa: '/pap/', example: '밥을 먹어요.', exampleTr: '吃饭。' },
                  { id: 'ko-c35', front: '물', back: '水', ipa: '/mul/', example: '물 주세요.', exampleTr: '请给我水。' }
                ]},
                { type: 'grammar', rule: '주세요：请给我...',
                  questions: [
                  { id: 'ko-g13', kind: 'single', q: '커피___ 주세요. (请给我咖啡)',
                    choices: ['을','은','의'], answer: 0 },
                  { id: 'ko-g14', kind: 'fill', q: '물___ 주세요.', answer: '을' }
                ]},
                { type: 'listening', audio: '어서 오세요. 메뉴 보여주세요. 커피하고 밥 주세요.',
                  questions: [
                  { id: 'ko-l7', kind: 'single', q: '客人点了什么？',
                    choices: ['咖啡和饭','只点了咖啡','只点了水'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: '커피 주세요', targetTr: '请给我咖啡', hint: '点餐' }
                ]}
              ]
            }
          ]
        }
      ]
    }
  ]
};
