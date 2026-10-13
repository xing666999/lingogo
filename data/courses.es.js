/* ===== LingoGo 西语课程数据 =====
 * 结构：levels -> units -> lessons -> activities
 * 每课含 vocab/grammar/listening/speaking 四环节
 * 级别：A1 入门（6 课时）+ A2 进阶（6 课时）
 */
window.LL = window.LL || {};
LL.courses = LL.courses || {};

LL.courses.es = {
  lang: 'es',
  label: '西语',
  flag: '🇪🇸',
  themeColor: '#FFC800',
  levels: [
    {
      id: 'es-A1', code: 'A1', name: '入门',
      description: '西语字母、问候、基础数字',
      units: [
        {
          id: 'es-A1-U1', title: 'Hola', subtitle: '基础问候',
          icon: 'wave', color: '#FFC800',
          lessons: [
            {
              id: 'es-A1-U1-L1', title: '¡Hola!',
              description: '学会西语基础问候',
              xpReward: 20, requires: [],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'es-c1', front: 'hola', back: '你好', ipa: '/ˈo.la/',
                    example: '¡Hola! ¿Cómo estás?', exampleTr: '你好！你怎么样？' },
                  { id: 'es-c2', front: 'adiós', back: '再见', ipa: '/aˈðjos/',
                    example: 'Adiós, hasta luego.', exampleTr: '再见，回头见。' },
                  { id: 'es-c3', front: 'gracias', back: '谢谢', ipa: '/ˈɡɾa.θjas/',
                    example: 'Gracias por tu ayuda.', exampleTr: '谢谢你的帮助。' },
                  { id: 'es-c4', front: 'por favor', back: '请', ipa: '/poɾ faˈβoɾ/',
                    example: 'Por favor, siéntate.', exampleTr: '请坐。' },
                  { id: 'es-c5', front: 'buenos días', back: '早上好', ipa: '/ˈbwe.nos ˈdi.as/',
                    example: 'Buenos días, señor.', exampleTr: '早上好，先生。' }
                ]},
                { type: 'grammar', rule: 'ser 与 estar 的区别：身份/本质用 ser，状态/位置用 estar',
                  questions: [
                  { id: 'es-g1', kind: 'single', q: 'Yo ___ estudiante.',
                    choices: ['soy','estoy','es'], answer: 0, explain: '身份用 ser，第一人称 soy。' },
                  { id: 'es-g2', kind: 'single', q: 'Ella ___ de México.',
                    choices: ['es','está','soy'], answer: 0, explain: '来源用 ser，第三人称 es。' },
                  { id: 'es-g3', kind: 'single', q: 'Nosotros ___ cansados.',
                    choices: ['somos','estamos','son'], answer: 1, explain: '状态用 estar，第一人称复数 estamos。' }
                ]},
                { type: 'listening', audio: 'Hola, me llamo Carlos. Soy de México. ¿Y tú?',
                  questions: [
                  { id: 'es-l1', kind: 'single', q: 'Carlos 来自哪里？',
                    choices: ['墨西哥','西班牙','阿根廷'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Hola', targetTr: '你好', hint: '跟读：你好' },
                  { target: 'Gracias', targetTr: '谢谢', hint: '跟读：谢谢' },
                  { target: 'Adiós', targetTr: '再见', hint: '跟读：再见' }
                ]}
              ]
            },
            {
              id: 'es-A1-U1-L2', title: '¿Cómo estás?',
              description: '询问对方近况',
              xpReward: 20, requires: ['es-A1-U1-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'es-c6', front: '¿cómo?', back: '怎样', ipa: '/ˈko.mo/',
                    example: '¿Cómo estás?', exampleTr: '你怎么样？' },
                  { id: 'es-c7', front: 'bien', back: '好', ipa: '/bjen/',
                    example: 'Estoy bien, gracias.', exampleTr: '我很好，谢谢。' },
                  { id: 'es-c8', front: 'mal', back: '不好', ipa: '/mal/',
                    example: 'Estoy mal hoy.', exampleTr: '我今天不好。' },
                  { id: 'es-c9', front: 'así así', back: '一般般', ipa: '/aˈsi aˈsi/',
                    example: 'Estoy así así.', exampleTr: '我一般般。' },
                  { id: 'es-c10', front: 'amigo', back: '朋友', ipa: '/aˈmi.ɣo/',
                    example: 'Él es mi amigo.', exampleTr: '他是我的朋友。' }
                ]},
                { type: 'grammar', rule: '¿Cómo estás? 回答用 estar + 形容词',
                  questions: [
                  { id: 'es-g4', kind: 'single', q: '— ¿Cómo ___? — Estoy bien.',
                    choices: ['estás','soy','es'], answer: 0, explain: 'tú 对应 estar 第二人称 estás。' },
                  { id: 'es-g5', kind: 'single', q: 'Yo ___ bien.',
                    choices: ['estoy','soy','es'], answer: 0, explain: '状态用 estar，第一人称 estoy。' },
                  { id: 'es-g6', kind: 'single', q: '¿Cómo ___ tú?',
                    choices: ['estás','está','estamos'], answer: 0, explain: 'tú 用 estás。' }
                ]},
                { type: 'listening', audio: 'Buenos días. ¿Cómo estás hoy? Estoy bien, gracias. ¿Y tú?',
                  questions: [
                  { id: 'es-l2', kind: 'single', q: '说话者感觉如何？',
                    choices: ['好','不好','累'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: '¿Cómo estás?', targetTr: '你好吗', hint: '问候对方' },
                  { target: 'Estoy bien', targetTr: '我很好', hint: '回答近况' },
                  { target: 'Buenos días', targetTr: '早上好', hint: '早上问候' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'es-A1-U2', title: 'Abecedario y Números', subtitle: '字母与数字',
          icon: 'abc', color: '#FF9600',
          lessons: [
            {
              id: 'es-A1-U2-L1', title: 'El abecedario',
              description: '西语字母表',
              xpReward: 20, requires: ['es-A1-U1-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'es-c11', front: 'la letra', back: '字母', ipa: '/la ˈle.tɾa/',
                    example: 'La letra A.', exampleTr: '字母 A。' },
                  { id: 'es-c12', front: 'la vocal', back: '元音', ipa: '/la boˈkal/',
                    example: 'Hay cinco vocales.', exampleTr: '有五个元音。' },
                  { id: 'es-c13', front: 'la consonante', back: '辅音', ipa: '/la kon.soˈnan.te/',
                    example: 'La B es consonante.', exampleTr: 'B 是辅音。' },
                  { id: 'es-c14', front: 'el abecedario', back: '字母表', ipa: '/el a.βe.θeˈða.ɾjo/',
                    example: 'El abecedario español.', exampleTr: '西语字母表。' },
                  { id: 'es-c15', front: 'la ñ', back: '字母 ñ', ipa: '/la ˈeɲe/',
                    example: 'La ñ es especial.', exampleTr: 'ñ 是特殊的字母。' }
                ]},
                { type: 'grammar', rule: '西语有 5 个元音 a, e, i, o, u；字母 ñ 是西语特有',
                  questions: [
                  { id: 'es-g7', kind: 'single', q: '¿Cuántas vocales hay en español?',
                    choices: ['5','4','6'], answer: 0, explain: '西语有 5 个元音：a, e, i, o, u。' },
                  { id: 'es-g8', kind: 'single', q: 'La letra ñ se pronuncia ___.',
                    choices: ['eñe','ene','elle'], answer: 0, explain: 'ñ 的名称是 eñe。' },
                  { id: 'es-g9', kind: 'single', q: '¿Cómo se pronuncia la vocal A?',
                    choices: ['a','ai','e'], answer: 0, explain: '元音 A 发音为 /a/。' }
                ]},
                { type: 'listening', audio: 'El abecedario español tiene 27 letras. Las vocales son a, e, i, o, u.',
                  questions: [
                  { id: 'es-l3', kind: 'single', q: '西语有几个字母？',
                    choices: ['27','26','28'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'a, e, i, o, u', targetTr: '五个元音', hint: '跟读元音' },
                  { target: 'la letra A', targetTr: '字母 A', hint: '读字母' },
                  { target: 'la ñ', targetTr: '字母 ñ', hint: '读特殊字母' }
                ]}
              ]
            },
            {
              id: 'es-A1-U2-L2', title: 'Los números 0-10',
              description: '学会从零数到十',
              xpReward: 20, requires: ['es-A1-U2-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'es-c16', front: 'cero', back: '零', ipa: '/ˈθe.ɾo/',
                    example: 'Cero libros.', exampleTr: '零本书。' },
                  { id: 'es-c17', front: 'uno', back: '一', ipa: '/ˈu.no/',
                    example: 'Tengo uno.', exampleTr: '我有一个。' },
                  { id: 'es-c18', front: 'dos', back: '二', ipa: '/dos/',
                    example: 'Dos gatos.', exampleTr: '两只猫。' },
                  { id: 'es-c19', front: 'cinco', back: '五', ipa: '/ˈθin.ko/',
                    example: 'Cinco libros.', exampleTr: '五本书。' },
                  { id: 'es-c20', front: 'diez', back: '十', ipa: '/djes/',
                    example: 'Diez años.', exampleTr: '十岁。' }
                ]},
                { type: 'grammar', rule: '数字 + 名词时，名词用单数形式：dos gatos',
                  questions: [
                  { id: 'es-g10', kind: 'single', q: 'Tengo ___ libros.',
                    choices: ['cinco','cincos','cinca'], answer: 0, explain: '数字后名词保持原形复数。' },
                  { id: 'es-g11', kind: 'single', q: '¿Cuántos años ___? — Diez.',
                    choices: ['tienes','soy','es'], answer: 0, explain: '问年龄用 tener，tú 用 tienes。' },
                  { id: 'es-g12', kind: 'single', q: 'Dos y tres son ___.',
                    choices: ['cinco','cuatro','seis'], answer: 0, explain: '2+3=5，cinco。' }
                ]},
                { type: 'listening', audio: 'Tengo dos gatos y tres perros. ¿Cuántos animales tienes?',
                  questions: [
                  { id: 'es-l4', kind: 'single', q: '说话者有几只动物？',
                    choices: ['五','二','三'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'uno, dos, tres', targetTr: '一二三', hint: '数数' },
                  { target: 'cinco', targetTr: '五', hint: '数字五' },
                  { target: 'diez', targetTr: '十', hint: '数字十' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'es-A1-U3', title: 'Presentación y Colores', subtitle: '介绍与颜色',
          icon: 'palette', color: '#FF4B4B',
          lessons: [
            {
              id: 'es-A1-U3-L1', title: 'Me llamo...',
              description: '自我介绍',
              xpReward: 20, requires: ['es-A1-U2-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'es-c21', front: 'me llamo', back: '我叫', ipa: '/me ˈʝa.mo/',
                    example: 'Me llamo Ana.', exampleTr: '我叫安娜。' },
                  { id: 'es-c22', front: 'te llamas', back: '你叫', ipa: '/te ˈʝa.mas/',
                    example: '¿Te llamas Juan?', exampleTr: '你叫胡安吗？' },
                  { id: 'es-c23', front: 'el nombre', back: '名字', ipa: '/el ˈnom.bɾe/',
                    example: 'Mi nombre es Carlos.', exampleTr: '我的名字是卡洛斯。' },
                  { id: 'es-c24', front: 'mucho gusto', back: '很高兴认识你', ipa: '/ˈmu.tʃo ˈɣus.to/',
                    example: '¡Mucho gusto!', exampleTr: '很高兴认识你！' },
                  { id: 'es-c25', front: 'soy de', back: '我来自', ipa: '/soj ðe/',
                    example: 'Soy de España.', exampleTr: '我来自西班牙。' }
                ]},
                { type: 'grammar', rule: 'llamarse 的变位：me llamo / te llamas / se llama',
                  questions: [
                  { id: 'es-g13', kind: 'single', q: 'Yo ___ Ana.',
                    choices: ['me llamo','te llamas','se llama'], answer: 0, explain: '第一人称用 me llamo。' },
                  { id: 'es-g14', kind: 'single', q: '¿Cómo ___? — Me llamo Tom.',
                    choices: ['te llamas','me llamo','se llama'], answer: 0, explain: '问对方用 te llamas。' },
                  { id: 'es-g15', kind: 'single', q: 'Él ___ Juan.',
                    choices: ['se llama','me llamo','te llamas'], answer: 0, explain: '第三人称用 se llama。' }
                ]},
                { type: 'listening', audio: 'Hola, me llamo María. Soy de España. ¿Cómo te llamas?',
                  questions: [
                  { id: 'es-l5', kind: 'single', q: '说话者叫什么？',
                    choices: ['María','Ana','Carlos'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Me llamo Ana', targetTr: '我叫安娜', hint: '介绍自己名字' },
                  { target: 'Mucho gusto', targetTr: '很高兴认识你', hint: '初次见面问候' },
                  { target: '¿Cómo te llamas?', targetTr: '你叫什么', hint: '询问对方名字' }
                ]}
              ]
            },
            {
              id: 'es-A1-U3-L2', title: 'Los colores',
              description: '颜色单词',
              xpReward: 20, requires: ['es-A1-U3-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'es-c26', front: 'rojo', back: '红色', ipa: '/ˈro.xo/',
                    example: 'El coche es rojo.', exampleTr: '汽车是红色的。' },
                  { id: 'es-c27', front: 'azul', back: '蓝色', ipa: '/aˈθul/',
                    example: 'El cielo es azul.', exampleTr: '天空是蓝色的。' },
                  { id: 'es-c28', front: 'verde', back: '绿色', ipa: '/ˈbeɾ.ðe/',
                    example: 'La hierba es verde.', exampleTr: '草是绿色的。' },
                  { id: 'es-c29', front: 'amarillo', back: '黄色', ipa: '/a.maˈɾi.ʝo/',
                    example: 'El sol es amarillo.', exampleTr: '太阳是黄色的。' },
                  { id: 'es-c30', front: 'negro', back: '黑色', ipa: '/ˈne.ɣɾo/',
                    example: 'Mi gato es negro.', exampleTr: '我的猫是黑色的。' }
                ]},
                { type: 'grammar', rule: '形容词与名词性数一致：el coche rojo / la casa blanca',
                  questions: [
                  { id: 'es-g16', kind: 'single', q: 'El cielo es ___.',
                    choices: ['azul','azules','aza'], answer: 0, explain: '单数名词用单数形容词 azul。' },
                  { id: 'es-g17', kind: 'single', q: 'La casa es ___.',
                    choices: ['blanca','blanco','blancas'], answer: 0, explain: '阴性名词用阴性形容词 blanca。' },
                  { id: 'es-g18', kind: 'single', q: 'Los coches son ___.',
                    choices: ['rojos','rojo','rojas'], answer: 0, explain: '阳性复数用 rojos。' }
                ]},
                { type: 'listening', audio: '¿De qué color es el coche? El coche es rojo. ¿Y el cielo? El cielo es azul.',
                  questions: [
                  { id: 'es-l6', kind: 'single', q: '汽车是什么颜色？',
                    choices: ['红色','蓝色','绿色'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'El cielo es azul', targetTr: '天空是蓝色的', hint: '描述颜色' },
                  { target: 'Mi coche es rojo', targetTr: '我的汽车是红色的', hint: '描述物品' },
                  { target: 'La hierba es verde', targetTr: '草是绿色的', hint: '描述自然' }
                ]}
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'es-A2', code: 'A2', name: '进阶',
      description: 'ser/estar、日常生活、基本时态',
      units: [
        {
          id: 'es-A2-U1', title: 'Ser y Estar', subtitle: '系动词',
          icon: 'verb', color: '#8B5CF6',
          lessons: [
            {
              id: 'es-A2-U1-L1', title: 'Ser vs Estar',
              description: '系动词 ser 与 estar 的区别',
              xpReward: 25, requires: ['es-A1-U3-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'es-c31', front: 'ser', back: '是（本质）', ipa: '/seɾ/',
                    example: 'Yo soy estudiante.', exampleTr: '我是学生。' },
                  { id: 'es-c32', front: 'estar', back: '是（状态）', ipa: '/esˈtaɾ/',
                    example: 'Estoy cansado.', exampleTr: '我累了。' },
                  { id: 'es-c33', front: 'permanente', back: '永久的', ipa: '/peɾ.maˈneɱ.te/',
                    example: 'Es permanente.', exampleTr: '这是永久的。' },
                  { id: 'es-c34', front: 'temporal', back: '暂时的', ipa: '/tem.poˈɾal/',
                    example: 'Es temporal.', exampleTr: '这是暂时的。' },
                  { id: 'es-c35', front: 'el estado', back: '状态', ipa: '/el esˈta.ðo/',
                    example: 'El estado de ánimo.', exampleTr: '心情状态。' }
                ]},
                { type: 'grammar', rule: 'ser 用于身份/来源/本质；estar 用于状态/位置/情绪',
                  questions: [
                  { id: 'es-g19', kind: 'single', q: 'Yo ___ de Madrid.',
                    choices: ['soy','estoy','es'], answer: 0, explain: '来源用 ser，第一人称 soy。' },
                  { id: 'es-g20', kind: 'single', q: 'La sopa ___ fría.',
                    choices: ['está','es','son'], answer: 0, explain: '状态（温度）用 estar，第三人称 está。' },
                  { id: 'es-g21', kind: 'single', q: 'Ella ___ médica.',
                    choices: ['es','está','soy'], answer: 0, explain: '职业用 ser，第三人称 es。' }
                ]},
                { type: 'listening', audio: 'Soy profesor. Estoy cansado hoy. Mi clase es grande.',
                  questions: [
                  { id: 'es-l7', kind: 'single', q: '说话者的职业是？',
                    choices: ['老师','医生','学生'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Soy estudiante', targetTr: '我是学生', hint: '介绍身份' },
                  { target: 'Estoy cansado', targetTr: '我累了', hint: '表达状态' },
                  { target: 'Es mi amigo', targetTr: '他是我的朋友', hint: '介绍他人' }
                ]}
              ]
            },
            {
              id: 'es-A2-U1-L2', title: 'Mi familia',
              description: '家庭成员称呼',
              xpReward: 25, requires: ['es-A2-U1-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'es-c36', front: 'el padre', back: '父亲', ipa: '/el ˈpa.ðɾe/',
                    example: 'Mi padre es alto.', exampleTr: '我父亲很高。' },
                  { id: 'es-c37', front: 'la madre', back: '母亲', ipa: '/la ˈma.ðɾe/',
                    example: 'Mi madre es amable.', exampleTr: '我母亲很和善。' },
                  { id: 'es-c38', front: 'el hermano', back: '兄弟', ipa: '/el eɾˈma.no/',
                    example: 'Tengo un hermano.', exampleTr: '我有一个兄弟。' },
                  { id: 'es-c39', front: 'la hermana', back: '姐妹', ipa: '/la eɾˈma.na/',
                    example: 'Mi hermana es joven.', exampleTr: '我妹妹还小。' },
                  { id: 'es-c40', front: 'la familia', back: '家庭', ipa: '/la faˈmi.lja/',
                    example: 'Amo a mi familia.', exampleTr: '我爱我的家庭。' }
                ]},
                { type: 'grammar', rule: '物主形容词：mi/mis, tu/tus, su/sus',
                  questions: [
                  { id: 'es-g22', kind: 'single', q: '___ padre es médico.',
                    choices: ['Mi','Mis','Míos'], answer: 0, explain: '单数名词用 mi。' },
                  { id: 'es-g23', kind: 'single', q: '___ hermanos son altos.',
                    choices: ['Mis','Mi','Míos'], answer: 0, explain: '复数名词用 mis。' },
                  { id: 'es-g24', kind: 'single', q: 'Ella es ___ madre.',
                    choices: ['su','sus','mi'], answer: 0, explain: '第三人称物主用 su。' }
                ]},
                { type: 'listening', audio: 'Esta es mi madre y este es mi padre. Tengo un hermano y una hermana.',
                  questions: [
                  { id: 'es-l8', kind: 'single', q: '说话者有几个兄弟姐妹？',
                    choices: ['两个','一个','三个'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Mi madre es amable', targetTr: '我母亲很和善', hint: '介绍家人' },
                  { target: 'Tengo un hermano', targetTr: '我有一个兄弟', hint: '谈论家庭' },
                  { target: 'Esta es mi familia', targetTr: '这是我的家庭', hint: '介绍家庭' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'es-A2-U2', title: 'Vida Cotidiana', subtitle: '日常生活',
          icon: 'food', color: '#00B8A9',
          lessons: [
            {
              id: 'es-A2-U2-L1', title: 'La comida',
              description: '食物词汇',
              xpReward: 25, requires: ['es-A2-U1-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'es-c41', front: 'el pan', back: '面包', ipa: '/el pan/',
                    example: 'Como pan.', exampleTr: '我吃面包。' },
                  { id: 'es-c42', front: 'el agua', back: '水', ipa: '/el ˈa.ɣwa/',
                    example: 'Bebo agua.', exampleTr: '我喝水。' },
                  { id: 'es-c43', front: 'la manzana', back: '苹果', ipa: '/la manˈθa.na/',
                    example: 'Me gustan las manzanas.', exampleTr: '我喜欢苹果。' },
                  { id: 'es-c44', front: 'la leche', back: '牛奶', ipa: '/la ˈle.tʃe/',
                    example: 'Bebo leche.', exampleTr: '我喝牛奶。' },
                  { id: 'es-c45', front: 'comer', back: '吃', ipa: '/koˈmeɾ/',
                    example: 'Como desayuno.', exampleTr: '我吃早餐。' }
                ]},
                { type: 'grammar', rule: 'gustar 的用法：me gusta（单数）/ me gustan（复数）',
                  questions: [
                  { id: 'es-g25', kind: 'single', q: 'Me ___ las manzanas.',
                    choices: ['gustan','gusta','gusto'], answer: 0, explain: '复数名词用 gustan。' },
                  { id: 'es-g26', kind: 'single', q: 'Me ___ el pan.',
                    choices: ['gusta','gustan','gusto'], answer: 0, explain: '单数名词用 gusta。' },
                  { id: 'es-g27', kind: 'single', q: 'No me ___ la leche.',
                    choices: ['gusta','gustan','gusto'], answer: 0, explain: '单数名词用 gusta。' }
                ]},
                { type: 'listening', audio: 'Como pan y bebo leche en el desayuno. También me gustan las manzanas.',
                  questions: [
                  { id: 'es-l9', kind: 'single', q: '说话者早餐吃了什么？',
                    choices: ['面包和牛奶','只有苹果','水'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Me gustan las manzanas', targetTr: '我喜欢苹果', hint: '表达喜好' },
                  { target: 'Como pan', targetTr: '我吃面包', hint: '表达饮食' },
                  { target: 'Bebo agua', targetTr: '我喝水', hint: '表达饮水' }
                ]}
              ]
            },
            {
              id: 'es-A2-U2-L2', title: 'Preguntar por la calle',
              description: '问路',
              xpReward: 25, requires: ['es-A2-U2-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'es-c46', front: 'la izquierda', back: '左边', ipa: '/la iθˈkjeɾ.ða/',
                    example: 'Gira a la izquierda.', exampleTr: '左转。' },
                  { id: 'es-c47', front: 'la derecha', back: '右边', ipa: '/la deˈɾe.tʃa/',
                    example: 'Gira a la derecha.', exampleTr: '右转。' },
                  { id: 'es-c48', front: 'la calle', back: '街道', ipa: '/la ˈka.ʝe/',
                    example: 'Esta es una calle.', exampleTr: '这是一条街。' },
                  { id: 'es-c49', front: '¿dónde?', back: '哪里', ipa: '/ˈdon.de/',
                    example: '¿Dónde está la estación?', exampleTr: '车站在哪？' },
                  { id: 'es-c50', front: 'recto', back: '直', ipa: '/ˈɾeɾ.to/',
                    example: 'Sigue recto.', exampleTr: '直走。' }
                ]},
                { type: 'grammar', rule: '问路用 ¿Dónde está...?；指路用 gira / sigue',
                  questions: [
                  { id: 'es-g28', kind: 'single', q: '¿___ está la estación?',
                    choices: ['Dónde','Cómo','Cuándo'], answer: 0, explain: '问位置用 dónde。' },
                  { id: 'es-g29', kind: 'single', q: 'Gira a la ___.',
                    choices: ['derecha','derechos','derecha'], answer: 0, explain: '方位词用阴性形式。' },
                  { id: 'es-g30', kind: 'single', q: 'Siga ___.',
                    choices: ['recto','recta','rectos'], answer: 0, explain: 'seguir 后接副词 recto。' }
                ]},
                { type: 'listening', audio: 'Disculpe, ¿dónde está la estación? Siga recto y gire a la izquierda. Está a la derecha.',
                  questions: [
                  { id: 'es-l10', kind: 'single', q: '应该先往哪走？',
                    choices: ['直走','左转','右转'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: '¿Dónde está la estación?', targetTr: '车站在哪里', hint: '问路' },
                  { target: 'Gira a la izquierda', targetTr: '左转', hint: '指路' },
                  { target: 'Siga recto', targetTr: '直走', hint: '指路' }
                ]}
              ]
            }
          ]
        },
        {
          id: 'es-A2-U3', title: 'Tiempos Verbales', subtitle: '时态',
          icon: 'clock', color: '#FF77FF',
          lessons: [
            {
              id: 'es-A2-U3-L1', title: 'El pretérito',
              description: '简单过去时',
              xpReward: 25, requires: ['es-A2-U2-L2'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'es-c51', front: 'ayer', back: '昨天', ipa: '/aˈʝeɾ/',
                    example: 'Ayer fui al cine.', exampleTr: '昨天我去了电影院。' },
                  { id: 'es-c52', front: 'comí', back: '我吃了', ipa: '/koˈmi/',
                    example: 'Comí pan.', exampleTr: '我吃了面包。' },
                  { id: 'es-c53', front: 'fui', back: '我去了', ipa: '/fwi/',
                    example: 'Fui a Madrid.', exampleTr: '我去了马德里。' },
                  { id: 'es-c54', front: 'hablé', back: '我说了', ipa: '/aˈβle/',
                    example: 'Hablé con Juan.', exampleTr: '我和胡安说话了。' },
                  { id: 'es-c55', front: 'el pasado', back: '过去', ipa: '/el paˈsa.ðo/',
                    example: 'El pasado simple.', exampleTr: '简单过去时。' }
                ]},
                { type: 'grammar', rule: '简单过去时变位：-ar → -é / -ió；ir → fui',
                  questions: [
                  { id: 'es-g31', kind: 'single', q: 'Ayer yo ___ al cine.',
                    choices: ['fui','soy','voy'], answer: 0, explain: 'ir 的过去时第一人称是 fui。' },
                  { id: 'es-g32', kind: 'single', q: 'Ella ___ pan.',
                    choices: ['comió','comer','comí'], answer: 0, explain: 'comer 的过去时第三人称是 comió。' },
                  { id: 'es-g33', kind: 'single', q: 'Yo ___ con Juan.',
                    choices: ['hablé','hablo','hablar'], answer: 0, explain: 'hablar 的过去时第一人称是 hablé。' }
                ]},
                { type: 'listening', audio: 'Ayer fui al cine. Comí palomitas y vi una película.',
                  questions: [
                  { id: 'es-l11', kind: 'single', q: '说话者昨天做了什么？',
                    choices: ['去电影院','去餐厅','去公园'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Ayer fui al cine', targetTr: '昨天我去了电影院', hint: '描述过去' },
                  { target: 'Comí pan', targetTr: '我吃了面包', hint: '描述过去饮食' },
                  { target: 'Hablé con Juan', targetTr: '我和胡安说话了', hint: '描述过去对话' }
                ]}
              ]
            },
            {
              id: 'es-A2-U3-L2', title: 'El futuro',
              description: '将来时',
              xpReward: 25, requires: ['es-A2-U3-L1'],
              activities: [
                { type: 'vocab', cards: [
                  { id: 'es-c56', front: 'mañana', back: '明天', ipa: '/maˈɲa.na/',
                    example: 'Mañana iré al cine.', exampleTr: '明天我会去电影院。' },
                  { id: 'es-c57', front: 'iré', back: '我将去', ipa: '/iˈɾe/',
                    example: 'Iré a Madrid.', exampleTr: '我将去马德里。' },
                  { id: 'es-c58', front: 'comeré', back: '我将吃', ipa: '/ko.meˈɾe/',
                    example: 'Comeré pan.', exampleTr: '我将吃面包。' },
                  { id: 'es-c59', front: 'hablaré', back: '我将说', ipa: '/a.βlaˈɾe/',
                    example: 'Hablaré con Juan.', exampleTr: '我将和胡安说话。' },
                  { id: 'es-c60', front: 'el futuro', back: '将来', ipa: '/el fuˈtu.ɾo/',
                    example: 'El futuro simple.', exampleTr: '简单将来时。' }
                ]},
                { type: 'grammar', rule: '简单将来时变位：-ar → -aré；-er/-ir → -eré/-iré',
                  questions: [
                  { id: 'es-g34', kind: 'single', q: 'Mañana yo ___ al cine.',
                    choices: ['iré','voy','fui'], answer: 0, explain: 'ir 的将来时第一人称是 iré。' },
                  { id: 'es-g35', kind: 'single', q: 'Ella ___ pan.',
                    choices: ['comerá','comió','comeré'], answer: 0, explain: 'comer 的将来时第三人称是 comerá。' },
                  { id: 'es-g36', kind: 'single', q: 'Yo ___ con Juan.',
                    choices: ['hablaré','hablé','hablo'], answer: 0, explain: 'hablar 的将来时第一人称是 hablaré。' }
                ]},
                { type: 'listening', audio: 'Mañana iré al cine. Comeré palomitas y veré una película.',
                  questions: [
                  { id: 'es-l12', kind: 'single', q: '说话者明天将做什么？',
                    choices: ['去电影院','去餐厅','去公园'], answer: 0 }
                ]},
                { type: 'speaking', prompts: [
                  { target: 'Mañana iré al cine', targetTr: '明天我将去电影院', hint: '描述将来' },
                  { target: 'Comeré pan', targetTr: '我将吃面包', hint: '描述将来饮食' },
                  { target: 'Hablaré con Juan', targetTr: '我将和胡安说话', hint: '描述将来对话' }
                ]}
              ]
            }
          ]
        }
      ]
    }
  ]
};
