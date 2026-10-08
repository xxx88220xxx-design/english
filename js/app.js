/* =========================================================
   APP  —  موقع تعلم الإنجليزية A0 → A2
   ========================================================= */
(function () {
"use strict";

const RENDER = {};

/* ---------- البيانات ---------- */
const A1 = window.DATA_A1 || [];
const A2 = window.DATA_A2 || [];
const ALL = A1.concat(A2);

const VERBS = [
  { g: "أفعال أساسية", v: [
    ["be", "was / were", "been", "يكون"], ["have", "had", "had", "يملك"],
    ["do", "did", "done", "يفعل"], ["go", "went", "gone", "يذهب"],
    ["come", "came", "come", "يأتي"], ["get", "got", "gotten", "يحصل / يصبح"],
    ["make", "made", "made", "يصنع"], ["take", "took", "taken", "يأخذ"],
    ["give", "gave", "given", "يعطي"], ["see", "saw", "seen", "يرى"],
    ["know", "knew", "known", "يعرف"], ["think", "thought", "thought", "يفكر"]
  ]},
  { g: "أفعال الاستعمال اليومي", v: [
    ["eat", "ate", "eaten", "يأكل"], ["drink", "drank", "drunk", "يشرب"],
    ["sleep", "slept", "slept", "ينام"], ["read", "read", "read", "يقرأ (نفس النطق)"],
    ["write", "wrote", "written", "يكتب"], ["speak", "spoke", "spoken", "يتحدث"],
    ["listen", "listened", "listened", "يستمع"], ["watch", "watched", "watched", "يشاهد"],
    ["work", "worked", "worked", "يعمل"], ["play", "played", "played", "يلعب"],
    ["help", "helped", "helped", "يساعد"], ["start", "started", "started", "يبدأ"],
    ["learn", "learned", "learnt", "يتعلم"], ["teach", "taught", "taught", "يُدرّس"],
    ["buy", "bought", "bought", "يشتري"], ["sell", "sold", "sold", "يبيع"]
  ]},
  { g: "أفعال السكن والحركة", v: [
    ["live", "lived", "lived", "يعيش"], ["stay", "stayed", "stayed", "يبقى"],
    ["move", "moved", "moved", "ينتقل"], ["travel", "travelled", "travelled", "يسافر"],
    ["arrive", "arrived", "arrived", "يصل"], ["leave", "left", "left", "يغادر"],
    ["fly", "flew", "flown", "يطير"], ["drive", "drove", "driven", "يقود"],
    ["walk", "walked", "walked", "يمشي"], ["run", "ran", "run", "يجري"],
    ["sit", "sat", "sat", "يجلس"], ["stand", "stood", "stood", "يقف"]
  ]},
  { g: "أفعال المشاعر والقرار", v: [
    ["like", "liked", "liked", "يحب"], ["love", "loved", "loved", "يحب جداً"],
    ["hate", "hated", "hated", "يكره"], ["want", "wanted", "wanted", "يريد"],
    ["need", "needed", "needed", "يحتاج"], ["feel", "felt", "felt", "يشعر"],
    ["think", "thought", "thought", "يفكر"], ["hope", "hoped", "hoped", "يأمل"],
    ["wish", "wished", "wished", " يتمنى"], ["decide", "decided", "decided", "يقرر"],
    ["choose", "chose", "chosen", "يختار"], ["find", "found", "found", "يجد"],
    ["lose", "lost", "lost", "يفقد"], ["win", "won", "won", "يفوز"]
  ]},
  { g: "أفعال الأكل والشرب", v: [
    ["cook", "cooked", "cooked", "يطبخ"], ["bake", "baked", "baked", "يخبز"],
    ["wash", "washed", "washed", "يغسل"], ["cut", "cut", "cut", "يقطع"],
    ["taste", "tasted", "tasted", "يتذوق"], ["order", "ordered", "ordered", "يطلب"]
  ]}
];

const RULES = [
  { t: "⏰ Present Simple — المضارع البسيط", lv: "A1",
    use: "للعادات والحقائق · I work every day. / The shop opens at 8.",
    m: [
      "مع he/she/it نضيف s أو es: work→works, go→goes, watch→watches, study→studies",
      "السؤال: Do you…? / Does he…? — نضع do/does قبل الفاعل",
      "النفي: don't / doesn't",
      "الكلمات الدالة: always, usually, often, sometimes, never, every day"
    ]},
  { t: "⚡ Present Continuous — المضارع المستمر", lv: "A1",
    use: "لما يحدث الآن أو المخطط القريب · I am studying now.",
    m: [
      "am/is/are + ing",
      "ت doubling: work→working, sit→sitting, run→running",
      "حذف الـ e: make→making, take→taking, write→writing",
      "لا نستعمله مع: know, like, love, want, need, believe"
    ]},
  { t: "🔁 Past Simple — الماضي البسيط", lv: "A2",
    use: "لقصّة منتهية · I worked yesterday.",
    m: [
      "Regular: +ed (work→worked, live→lived)",
      "y → ied (study→studied, try→tried)",
      "Irregular: see→saw, go→went, buy→bought, eat→ate, take→took",
      "كان/كانوا: was / were",
      "❌ didn't went ✅ didn't go — بعد did الفعل بصورته الأساسية"
    ]},
  { t: "🚀 Future — المستقبل", lv: "A2",
    use: "will للقرار اللحظي والوعد · going to للنيّة السابقة",
    m: [
      "will + base: I'll help you. (وعد أو عرض)",
      "going to + base: I'm going to study medicine. (خطط سابق)",
      "be going to مع دليل مرئي: Look! It is going to rain.",
      "السلب: won't / not going to"
    ]},
  { t: "✅ Present Perfect — المضارع التام", lv: "A2",
    use: "لماضي له علاقة بالآن · I have worked here since 2019.",
    m: [
      "have/has + التصريف الثالث (p.p.)",
      "since + نقطة بداية (since 2015) / for + مدة (for 3 years)",
      "with: already, just, yet, ever, never",
      "❌ I have worked here last year. ✅ I worked here last year.",
      "been to = زرت وعدت · gone = لا تزال هناك"
    ]},
  { t: "⚖️ Comparatives — المقارنة", lv: "A2",
    use: "للمقارنة والتفضيل",
    m: [
      "1 syllable: +er / +est (tall→taller→the tallest)",
      "y → ier / iest (easy→easier→the easiest)",
      "3+ syllables: more / most (beautiful→the most beautiful)",
      "Irregular: good→better→best, bad→worse→worst, far→further/farther",
      "مع than: taller than · مع the للتفضيل: the tallest"
    ]},
  { t: "📦 Quantifiers — الكميات", lv: "A2",
    use: "some / any / much / many / a lot of",
    m: [
      "some في الإيجاب و any في النفي والسؤال",
      "but: Would you like some tea? (دعوة = إيجاب)",
      "many + countable / much + uncountable",
      "a few + countable (بعض) / a little + uncountable (قليلاً)",
      "too much / too many = أكثر من اللازم"
    ]},
  { t: "🎯 Modals — الأفعال الناقصة", lv: "A2",
    use: "القدرة والواجب والاحتمال",
    m: [
      "can/could = قدرة · may = إذن",
      "must = واجب أو 95% متأكد (He must be at home)",
      "should = نصيحة / 60% (You should rest)",
      "might/may = 50% (It might rain)",
      "can't = 100% متأكد من النفي (He can't be there)",
      "have to = واجب خارجي · don't have to = لا يلزم"
    ]},
  { t: "🔀 Gerund & Infinitive", lv: "A2",
    use: "متى نستعمل ing ومتى to",
    m: [
      "ing فقط: enjoy, finish, avoid, mind, practise, suggest, keep",
      "to فقط: want, decide, hope, plan, agree, promise, refuse",
      "كلاهما: love, like, hate, start, begin, continue",
      "stop doing = توقف عن · stop to do = توقف لأجل",
      "look forward to + ing · would like + to do"
    ]},
  { t: "❓ Question Words", lv: "A1",
    use: "أهم أسئلة اللغة",
    m: [
      "What is your name? — ما اسمك؟",
      "How old are you? — كم عمرك؟",
      "Where are you from? — من أين أنت؟",
      "What do you do? — ماذا تعمل؟",
      "How much is it? (سعر) / How many are there? (عدد)",
      "When are you coming? — متى ستأتي؟"
    ]},
  { t: "🔗 Relative Clauses — جمل الوصل", lv: "A2",
    use: "who / which / that / where / when",
    m: [
      "للناس: who / that — the man who called me",
      "للأشياء: which / that — the book which I read",
      "للأماكن: where — the city where I was born",
      "للزمن: when — the day when we met",
      "بدون: The girl next to me (no relative needed)"
    ]},
  { t: "🔌 Phrasal Verbs — الأفعال المركبة", lv: "A2",
    use: "فعل + حرف مركب",
    m: [
      "look for / look after / look forward to",
      "give up / find out / run out of / come back",
      "قابل للفصل: turn off the light = turn the light off",
      "غير قابل: look after the baby (❌ look the baby after)",
      "مضارع: give it up · ماضٍ: gave up"
    ]},
  { t: "📍 Prepositions of Place", lv: "A1",
    use: "in / on / under / next to / between",
    m: [
      "in the room · on the wall · under the bed",
      "next to / beside = بجانب · between … and … = بين",
      "behind = خلف · in front of = أمام · opposite = مقابل",
      "at = في مكان محدَّد (at the bus stop, at home)"
    ]},
  { t: "🕐 Prepositions of Time", lv: "A1",
    use: "at / on / in مع الوقت",
    m: [
      "at + ساعة: at 7 o'clock, at noon, at night",
      "on + يوم/تاريخ: on Monday, on my birthday, on 5 May",
      "in + فترة: in the morning, in May, in 2025",
      "for + مدة · since + نقطة بداية"
    ]},
  { t: "❌ أخطاء شائعة", lv: "A2",
    use: "احذر هذه الأخطاء",
    m: [
      "❌ how you call ❌ → ✅ How do you call / What's your name?",
      "❌ I have 20 years ❌ → ✅ I am 20 years old",
      "❌ more better ❌ → ✅ much better",
      "❌ very bigger ❌ → ✅ much bigger",
      "❌ informations ❌ → ✅ information (غير قابلة للجمع)",
      "❌ discuss about ❌ → ✅ discuss",
      "❌ I am agree ❌ → ✅ I agree",
      "❌ he don't like ❌ → ✅ he doesn't like",
      "❌ I am liking it ❌ → ✅ I like it",
      "❌ return back ❌ → ✅ return / go back"
    ]}
];

const AI_TIPS = [
  { i:"🧠", t:"قاعدة اليوم", c:"لا تستعمل continuous مع أفعال الحالة (know, like, want, love, need, believe). قُل: <b>I like it</b> وليس I am liking it." },
  { i:"⏱️", t:"كيف تتعلم بسرعة؟", c:"<b>10 دقائق كل يوم</b> أفضل من ساعتين مرة في الأسبوع. فعّل التكرار المتباعد: راجع الكلمة بعد يوم، بعد ٣ أيام، بعد أسبوع، بعد شهر." },
  { i:"🗣️", t:"لا تخف من الكلام", c:"المتحدثون الأصليون لا يكلمونك بالإنجليزية في البداية. تكلم بأخطاء — الخطأ دليل أنك تتعلم." },
  { i:"👂", t:"طريقة الاستماع", c:"استمع فقط ٥ دقائق يومياً إلى بودكاست. في البداية افهم <b>الفكرة العامة</b> فقط، لا كل الكلمات." },
  { i:"📝", t:"طريقة الحفظ", c:"احفظ الكلمة داخل <b>جملة كاملة</b> لا كلمة منفردة. مثال: لا تحفظ <i>ache</i> وحدها، احفظ <i>I have a stomach ache</i>." },
  { i:"🗂️", t:"نظام المراجعة", c:"حوّل الكلمات إلى بطاقات من تبويب <b>🃏 البطاقات</b>، وراجع ١٠ بطاقات يومياً بانتظام." },
  { i:"🎯", t:"ابدأ من هنا", c:"ابدأ بالوحدة <b>1: Greetings</b> ثم <b>Present Simple</b> ثم <b>الأرقام</b> — ستحتاجها كل يوم." },
  { i:"⚠️", t:"أهم خطأ عربي", c:"العرب يقولون <b>I am from Yemen</b> لكن ليس \"I am Yemen\". انتقل للـ preposition: <b>from / in / at</b>." },
  { i:"💡", t:"حيلة ذكية", c:"اربط الكلمة بشيء: <b>bread</b> = الخبز الذي تراه كل صباح. الصورة تسهّل الاسترجاع." },
  { i:"📊", t:"تتبّع تقدمك", c:"راجع صفحة <b>الإحصائيات</b> كل أسبوع. التراجع البطيء طبيعي، المهم الاستمرارية." },
  { i:"🔤", t:"دقة النطق", c:"اضغط 🔊 في أي مكان لسماع الكلمة بالإنجليزية. جرّب زر النطق البطيء 🐢 في صفحة البطاقات — الأدق." },
  { i:"✍️", t:"اكتب ٥ جمل يومياً", c:"اكتب ٥ جمل عن يومك. هذا يبني الـ grammar subconsciously أسرع من الحفظ." }
];

/* =========================================================
   نطق الحروف — الحروف التي لها نطقان + القاعدة لكل نطق
   ========================================================= */
const LETTER_SOUNDS = [
  { ch: "C", ar: "سي", tone: "kl",
    s: [ { ipa: "/k/", ar: "قبل a أو o أو u، أو قبل أي حرف عدا e,i,y", ex: ["cat", "cup", "school", "car", "corner"] },
        { ipa: "/s/", ar: "قبل e أو i أو y", ex: ["city", "cent", "cycle", "nice", "music"] } ] },
  { ch: "G", ar: "جي", tone: "kl",
    s: [ { ipa: "/dʒ/", ar: "قبل e أو i أو y", ex: ["gem", "giant", "gym", "gently"] },
        { ipa: "/ɡ/", ar: "قبل a أو o أو u، أو قبل أي حرف عدا e,i,y", ex: ["go", "gum", "bag", "ghost", "golf"] } ] },
  { ch: "S", ar: "إس", tone: "kl",
    s: [ { ipa: "/s/", ar: "في بداية الكلمة وبعد الأصوات بلا صوت", ex: ["sit", "stop", "school", "stand"] },
        { ipa: "/z/", ar: "بين حروف مصوّتة، أو بعد حروف مثل l,r,m,n,v", ex: ["rose", "music", "zoo", "is", "was"] } ] },
  { ch: "X", ar: "إكس", tone: "kl",
    s: [ { ipa: "/ks/", ar: "في معظم الكلمات", ex: ["box", "six", "tax", "mix"] },
        { ipa: "/ɡz/", ar: "في آخر الكلمة بعد حرف مصوّت", ex: ["exam", "exact", "next", "boxes"] } ] },
  { ch: "Y", ar: "واي", tone: "kl",
    s: [ { ipa: "/j/", ar: "في بداية الكلمة", ex: ["yes", "you", "year", "yellow"] },
        { ipa: "/aɪ/", ar: "في وسط الكلمة أو آخرها كحركة", ex: ["my", "sky", "cry", "happy"] } ] },
  { ch: "R", ar: "آر", tone: "kl",
    s: [ { ipa: "/r/", ar: "في بداية الكلمة — ر واضحة", ex: ["red", "run", "read", "rabbit"] },
        { ipa: "/ɹ/", ar: "بعد حرف مصوّت — ر ناعمة (ألوبياني)", ex: ["car", "bird", "more", "teacher"] } ] },
  { ch: "L", ar: "إل", tone: "kl",
    s: [ { ipa: "/l/", ar: "في بداية الكلمة", ex: ["light", "look", "love", "lemon"] },
        { ipa: "/ɫ/", ar: "في آخر المقطع — ل داكنة", ex: ["ball", "milk", "cold", "people"] } ] },
  { ch: "N", ar: "إن", tone: "kl",
    s: [ { ipa: "/n/", ar: "في معظم المواضع", ex: ["no", "name", "nine", "can"] },
        { ipa: "/ŋ/", ar: "قبل g في آخر الكلمة", ex: ["sing", "thing", "long", "English"] } ] },
  { ch: "W", ar: "دَبليو", tone: "kl",
    s: [ { ipa: "/w/", ar: "في بداية الكلمة أو بعد حركة قوية", ex: ["we", "wet", "window", "walk"] },
        { ipa: "/v/", ar: "في وسط الكلمة بعد حركة", ex: ["love", "have", "give", "very"] } ] },
  { ch: "V", ar: "في", tone: "kl",
    s: [ { ipa: "/v/", ar: "الوضع الطبيعي", ex: ["very", "voice", "video", "love"] },
        { ipa: "/f/", ar: "عند بعض المتحدثين", ex: ["of", "have", "five"] } ] },
  { ch: "Z", ar: "زد", tone: "kl",
    s: [ { ipa: "/z/", ar: "بين حروف مصوّتة أو قبل حركة", ex: ["zoo", "zero", "is", "amazing"] },
        { ipa: "/s/", ar: "في آخر الكلمة عند بعض المتحدثين", ex: ["cats", "dogs", "hands", "is"] } ] },
  { ch: "T", ar: "تي", tone: "kl",
    s: [ { ipa: "/t/", ar: "في معظم المواضع", ex: ["ten", "table", "stop", "cat"] },
        { ipa: "/t\u02c8/", ar: "بين حركتين — لسانك يطرق الأسنان بلا نفس (American)", ex: ["water", "better", "party", "city"] } ] },
  { ch: "CH", ar: "تش", tone: "kl",
    s: [ { ipa: "/tʃ/", ar: "الوضع الطبيعي", ex: ["chair", "cheese", "much", "teacher"] },
        { ipa: "/k/", ar: "في كلمات أصلها يوناني", ex: ["school", "Christmas", "chemistry", "chef"] } ] },
  { ch: "SH", ar: "ش", tone: "kl",
    s: [ { ipa: "/ʃ/", ar: "الوضع الطبيعي", ex: ["ship", "shop", "fish", "she"] },
        { ipa: "/ʒ/", ar: "في كلمات مستعارة（مثل vision)", ex: ["vision", "measure", "television", "garage"] } ] },
  { ch: "TH", ar: "ث", tone: "kl",
    s: [ { ipa: "/θ/", ar: "نطق بلا صوت — حرف صارخ بلا اهتزاز", ex: ["think", "three", "mouth", "math"] },
        { ipa: "/ð/", ar: "نطق بصوت — حرك لسانك بين الأسنان", ex: ["this", "that", "mother", "with"] } ] },
  { ch: "J", ar: "جاي", tone: "kl",
    s: [ { ipa: "/dʒ/", ar: "دائماً في الإنجليزية", ex: ["jam", "jump", "juice", "orange"] } ] },
  { ch: "K", ar: "كي", tone: "kl",
    s: [ { ipa: "/k/", ar: "دائماً — الكاف hard", ex: ["kite", "key", "kind", "school"] } ] },
  { ch: "P", ar: "بي", tone: "kl",
    s: [ { ipa: "/p/", ar: "في معظم المواضع — بلا صوت", ex: ["pen", "apple", "happy", "stop"] },
        { ipa: "/pʰ/", ar: "في بعض اللهجات (-not standard)", ex: ["happy"] } ] },
  { ch: "U", ar: "يو", tone: "kl",
    s: [ { ipa: "/juː/", ar: "في بداية الكلمة", ex: ["use", "uncle", "usual", "music"] },
        { ipa: "/ʌ/", ar: "بعد حرف ساكن (a, e, o, iq)", ex: ["bus", "cup", "sun", "much"] } ] },
  { ch: "A", ar: "إيه", tone: "kl",
    s: [ { ipa: "/æ/", ar: "في الكلمات القصيرة", ex: ["cat", "map", "bag", "apple"] },
        { ipa: "/eɪ/", ar: "في الكلمات الطويلة أو عند نطق e الساكن", ex: ["name", "day", "make", "cake"] } ] },
  { ch: "O", ar: "أو", tone: "kl",
    s: [ { ipa: "/ɒ/", ar: "الوضع الطبيعي", ex: ["hot", "dog", "box", "orange"] },
        { ipa: "/əʊ/", ar: "عند نطق e الساكن", ex: ["no", "go", "home", "nose"] } ] },
  { ch: "E", ar: "إي", tone: "kl",
    s: [ { ipa: "/iː/", ar: "مضغوط — تطول النطق", ex: ["he", "she", "we", "eat"] },
        { ipa: "/e/", ar: "قصير ومرتاح", ex: ["bed", "ten", "pen", "egg"] } ] },
  { ch: "I", ar: "آي", tone: "kl",
    s: [ { ipa: "/ɪ/", ar: "قصير ومرتاح", ex: ["sit", "big", "fish", "city"] },
        { ipa: "/aɪ/", ar: "مضغوط — تطول النطق", ex: ["time", "my", "five", "kite"] } ] }
];

const LETTER_RULES = [
  { t: "القاعدة الذهبية: الحرف e الساكن", lv: "A1",
    use: "لما تلاقي حرف a أو i أو o وبعده e وأي حرف واحد بس",
    m: ["cat → cape = /keɪp/ — الـ e يخلّي الحركة تطول",
        "hop → hope — الطويل يقرأ /hoʊp/",
        "kit → kite — /aɪ/ بدل /ɪ/",
        "Magic e = الحركة الأولى تصير ألف (long) وينطقها طويلة"] },
  { t: "القاعدة: حرف واحد له نطقين", lv: "A1",
    use: "لما الحرف يكون في مواضع مختلفة يغيّر صوته حسب جيرانه",
    m: ["C: /k/ ثم /s/",
        "G: /ɡ/ ثم /dʒ/",
        "S: /s/ ثم /z/",
        "X: /ks/ ثم /ɡz/",
        "Y: /j/ ثم /aɪ/",
        "الطريقة: انطق الحرف بصوتين واسأل أيهم أقرب لكلمتين"] },
  { t: "TH: أخطر حرف", lv: "A2",
    use: "حرف واحد له نطقان والفرق بينه وبين T و F",
    m: ["/θ/ = ث بلا صوت: think, three, mouth",
        "/ð/ = ث بصوت: this, that, mother",
        "حيلة: شغّل الصوت واضغط فمك — لو الاهتزاز موجود فهي /ð/",
        "أغلب الناس يخلطونها بـ /s/ أو /z/ — احفظ الأمثلة"] },
  { t: "CH: حرفان في حرف", lv: "A2",
    use: "للنطق타임 sét واحد معروف والثاني شاذ",
    m: ["/tʃ/ = تش: chair, cheese, teacher",
        "/k/ = كاف: school, Christmas, chemistry",
        "القاعدة: إذا بعد C came ياء قبلها تكون كاف"] },
  { t: "V: قد تتحول F", lv: "A2",
    use: "كلمة have و of و give",
    m: ["الكلمات: /hæv/ أو /hæf/",
        "الأمريكان: /hæf/ — والبريطانيون: /hæv/",
        "of = /əv/ أو /əf/",
        "لا تقلق — في المحادثة لن يعاقبك أحد"] }
];

/* ---------- الحالة ---------- */
const LS = "eng_site_v1";
let S = load();
function load() {
  try {
    const d = JSON.parse(localStorage.getItem(LS) || "{}");
    return Object.assign({
      theme: "dark", lvl: "all", deck: "due", flipBack: false,
      known: {}, weak: {}, seen: {}, stars: {}, units: {}, srs: {},
      quiz: { best: 0, taken: 0, score: 0 },
      diff: "mid",
      streak: 0, lastDay: "", chat: [], daily: {}, muted: false, engine: "auto", ac: "GB", rate: 0.9
    }, d);
  } catch (e) { return { known:{}, weak:{}, seen:{}, stars:{}, units:{}, srs:{}, quiz:{best:0,taken:0,score:0}, streak:0, lastDay:"", chat:[], daily:{}, muted:false, engine:"auto", ac:"GB", rate:0.9, theme:"dark", lvl:"all", deck:"due", flipBack:false, diff:"mid" }; }
}
function save() { try { localStorage.setItem(LS, JSON.stringify(S)); } catch (e) {} }

/* ---------- أدوات ---------- */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const rnd = (a) => a[Math.floor(Math.random() * a.length)];
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function toast(m) { const t = $("#toast"); t.textContent = m; t.classList.add("on"); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("on"), 2100); }
function findUnit(id) { return ALL.find(u => u.id === id); }
const _wordCache = (function () {
  const seen = new Set(), out = [];
  ALL.forEach(u => u.words.forEach(w => {
    const k = w.en.toLowerCase().trim();
    if (seen.has(k)) return;
    seen.add(k);
    out.push({ w, u });
  }));
  return out;
})();
function allWords() { return _wordCache; }
function unitDone(id) { return S.units[id] || 0; }
function markUnit(id, n) { S.units[id] = Math.max(S.units[id] || 0, n); save(); paintProgress(); }
function paintProgress() {
  const list = allWords(), k = list.filter(x => S.known[x.w.en]).length;
  const pct = list.length ? Math.round(k / list.length * 100) : 0;
  const r = $("#ring"); if (r) { r.style.setProperty("--p", pct); $("#ringTxt").textContent = pct + "%"; }
  const pt = $("#progTxt"); if (pt) pt.textContent = k + " من " + list.length + " كلمة";
  const c = $("#cntC"); if (c) c.textContent = String(k);
  const l = $("#cntL"); if (l) l.textContent = String(ALL.filter(u => !u.top).length);
  const tp = $("#cntT"); if (tp) tp.textContent = String(window.TOP200 ? TOP200.reduce((n, g) => n + g.words.length, 0) : 0);
  const sn = $("#streakN"); if (sn) sn.textContent = String(S.streak);
  const cd = $("#cntD"); if (cd) cd.textContent = String(learnedOn(todayKey()));
  const cw = $("#cntW"); if (cw) cw.textContent = String(Object.keys(S.wrong || {}).length);
  paintStreak();
}

/* =========================================================
   الصوت (TTS) — ثابت ومضمون
   قاعدة ذهبية: أول تشغيل لـ Audio يجب أن يحدث فوراً داخل
   ضغطة المستخدم، وإلا رفضه كروم/أندرويد (NotAllowedError).
   ========================================================= */
let voices = [];
let curAudio = null;
let primed = false;
const human = new Map();      // word -> mp3 url (تسجيل بشري)
const pending = new Map();    // word -> Promise
let lastSaid = { text: "", at: 0 };

/* ---------- Voices ---------- */
function loadVoices() {
  try { voices = (window.speechSynthesis && speechSynthesis.getVoices()) || []; } catch (e) { voices = []; }
}
if (window.speechSynthesis) {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
  try { speechSynthesis.addEventListener("voiceschanged", loadVoices); } catch (e) {}
  [200, 700, 1500, 3000, 5000].forEach(t => setTimeout(loadVoices, t));
}
function engVoices() { return voices.filter(v => /^en[-_]/i.test(v.lang || "")); }
function pickVoice() {
  const en = engVoices();
  if (!en.length) return null;
  const pref = S.ac || "GB";
  const order = pref === "US" ? [/en[-_]US/i, /^en/i]
             : pref === "AU" ? [/en[-_]AU/i, /^en/i]
             : [/en[-_]GB/i, /en[-_]UK/i, /en[-_]AU/i, /en[-_]US/i, /^en/i];
  for (const re of order) { const v = en.find(x => re.test(x.lang)); if (v) return v; }
  return en[0];
}
function isOnline() { return navigator.onLine !== false; }

/* ---------- فتح介质 مسبقاً (مرة واحدة) ---------- */
function prime() {
  if (primed) return;
  primed = true;
  try {
    if (typeof Audio !== "function") return;
    const a = new Audio();
    // نغمة صامتة قصيرة جداً 1/8000 ثانية
    a.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=";
    a.volume = 0.001;
    const p = a.play();
    if (p && p.catch) p.catch(() => {});
  } catch (e) {}
}

/* ---------- إيقاف ---------- */
function stopSpeak() {
  try { window.speechSynthesis && speechSynthesis.cancel(); } catch (e) {}
  if (curAudio) { try { curAudio.pause(); curAudio.currentTime = 0; } catch (e) {} curAudio = null; }
}

/* ---------- تق النص ---------- */
function chunkText(text, max) {
  max = max || 100;
  const s = String(text).replace(/\s+/g, " ").trim();
  if (!s) return [];
  if (s.length <= max) return [s];
  const raw = s.match(/[^.!?…]+[.!?…]*\s*/g) || [s];
  const out = []; let buf = "";
  for (let p of raw) {
    if (!buf) buf = p;
    else if ((buf + p).length <= max) buf += p;
    else { out.push(buf.trim()); buf = p; }
  }
  if (buf.trim()) out.push(buf.trim());
  const fin = [];
  for (const c of out) {
    if (c.length <= max) { fin.push(c); continue; }
    let b = "";
    for (const wd of c.split(" ")) {
      if ((b + " " + wd).length <= max) b = b ? b + " " + wd : wd;
      else { if (b) fin.push(b); b = wd; }
    }
    if (b) fin.push(b);
  }
  return fin.flatMap(c => c.length <= max ? [c]
    : Array.from({ length: Math.ceil(c.length / max) }, (_, i) => c.slice(i * max, (i + 1) * max)))
    .filter(Boolean);
}

/* ---------- مزوّدو الصوت عبر الإنترنت (بالترتيب) ---------- */
function providerPrefix(ac) {
  const lang = ac === "US" ? "en-US" : ac === "AU" ? "en-AU" : "en-GB";
  const v = ac === "US" ? "Aiden" : ac === "AU" ? "Guy" : "Brian";
  return [
    q => "https://translate.google.com/translate_tts?ie=UTF-8&client=gtts&tl=" + lang + "&q=" + encodeURIComponent(q),
    q => "https://api.streamelements.com/kappa/v2/speech?voice=" + v + "&text=" + encodeURIComponent(q)
  ];
}
function providers(text, ac) { return providerPrefix(ac).map(f => f(text)); }

/* ---------- تشغيل ملف (بلا async) ---------- */
function playUrl(url, rate, done) {
  stopSpeak();
  const a = document.createElement("audio");
  a.preload = "auto"; a.src = url; a.controls = false;
  try { a.preservesPitch = true; a.mozPreservesPitch = true; a.webkitPreservesPitch = true; } catch (e) {}
  a.playbackRate = rate || 1;
  let settled = false;
  const fin = (ok, why) => {
    if (settled) return; settled = true;
    if (curAudio === a) curAudio = null;
    done && done(ok, why);
  };
  a.onended = () => fin(true);
  a.onerror = () => {
    const c = a.error ? a.error.code : 0;
    fin(false, c === 4 ? "الإنترنت مقطوع أو الموقع محجوب" : c === 3 ? "فشل فك الترميز" : "فشل التحميل (" + c + ")");
  };
  document.body.appendChild(a);            // بعض المتصفحات تشترط وجود العنصر في الصفحة
  curAudio = a;
  const p = a.play();
  if (p && p.catch) p.catch(err => fin(false, err && err.name === "NotAllowedError"
    ? "المتصفح منع التشغيل التلقائي — اضغط مرة أخرى"
    : "تعذر تشغيل الصوت (" + (err && err.name) + ")"));
  setTimeout(() => { if (!settled && a.paused) fin(false, "لم يبدأ التشغيل"); }, 2500);
}

/* ---------- جملة كاملة: مقاطع × مزوّدين ---------- */
function speakOnline(text, rate, done, from) {
  const parts = chunkText(text);
  if (!parts.length) return done && done(false, "نص فارغ");
  const pre = providerPrefix(S.ac);
  let pi = 0, ci = from || 0;
  (function next() {
    if (ci >= parts.length) return done && done(true);
    const url = pre[pi % pre.length](parts[ci]);
    playUrl(url, rate, (ok) => {
      if (ok) { ci++; setTimeout(next, 200); return; }
      pi++;
      if (pi > 1) { ci++; if (ci < parts.length) setTimeout(next, 120); else return done && done(false, "كل المزوّدين فشلوا"); }
      else setTimeout(next, 60);
    });
  })();
}

/* ---------- تسجيل بشري (مخزّن مسبقاً فقط) ---------- */
function prefetchHuman(word) {
  const w = String(word).trim().toLowerCase();
  if (typeof fetch !== "function") return;              // متصفحات قديمة / بيئات بلا fetch
  if (!w || human.has(w) || pending.has(w) || !/^[a-z][a-z' -]{0,25}$/.test(w)) return;
  const job = fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(w))
    .then(r => r.ok ? r.json() : null)
    .then(j => {
      if (!j) return null;
      let acc = null, any = null;
      for (const e of (Array.isArray(j) ? j : [j]))
        for (const p of (e.phonetics || [])) {
          if (!p.audio) continue;
          if (/-(us|uk|gb|au|ca)\./i.test(p.audio)) { if (!acc) acc = p.audio; }
          else if (!any) any = p.audio;
        }
      return acc || any || null;
    })
    .catch(() => null)
    .then(u => { if (u) human.set(w, u); pending.delete(w); return u; });
  pending.set(w, job);
}

/* ---------- Web Speech (يعمل بدون إنترنت) ---------- */
function speakWeb(text, rate, done) {
  if (!window.speechSynthesis) return done && done(false, "متصفحك لا يدعم النطق الداخلي");
  try { speechSynthesis.cancel(); } catch (e) {}
  setTimeout(() => {
    let started = false, fin = false;
    const end = (ok, why) => { if (fin) return; fin = true; done && done(ok, why); };
    try {
      const u = new SpeechSynthesisUtterance(String(text).replace(/\s+/g, " ").trim());
      u.rate = Math.max(0.5, Math.min(1.2, rate || 0.9)); u.pitch = 1; u.volume = 1;
      const v = pickVoice();
      if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = "en-GB"; }
      u.onstart = () => { started = true; };
      u.onend = () => end(true);
      u.onerror = ev => end(false, "النطق الداخلي: " + ((ev && ev.error) || "خطأ"));
      try { speechSynthesis.resume(); } catch (e) {}
      speechSynthesis.speak(u);
      setTimeout(() => {
        if (!started) { try { speechSynthesis.cancel(); } catch (e) {} end(false, "لا يوجد صوت إنجليزي في جهازك"); }
      }, 1600);
    } catch (e) { end(false, "خطأ داخلي"); }
  }, 100);
}

/* ==================== الدالة الرئيسية ==================== */
function speak(text, rate, force) {
  text = String(text == null ? "" : text).trim();
  if (!text) return;
  if (S.muted) { toast("🔇 الصوت مكتوم — فعّله من زر 🔊"); return; }
  if (S.engine === "off") { toast("الصوت معطّل — فعّله من 🔧 ضبط الصوت"); return; }
  prime();                                   // فوراً — مهم لأندرويد

  const now = Date.now();
  if (!force && lastSaid.text === text && now - lastSaid.at < 900) return;
  lastSaid = { text: text, at: now };
  const r = rate != null ? rate : (S.rate || 0.9);
  const key = text.toLowerCase();
  const isWord = text.split(" ").length === 1 && /^[A-Za-z][A-Za-z' -]{0,25}$/.test(text);

  // ١) تسجيل بشري جاهز مسبقاً → أوضح
  if (S.engine !== "web" && isWord && human.has(key)) {
    return playUrl(human.get(key), 1, ok => { if (!ok) speakOnline(text, r); });
  }
  // ٢) Web Speech لو اختاره المستخدم
  if (S.engine === "web") {
    return speakWeb(text, r, (ok, why) => { if (!ok) toast("❌ " + (why || "النطق الداخلي ما اشتغل")); });
  }
  // ٣) خلّنا نحمّل التسجيل البشري للكلمات ليعمل من المرة الثانية
  if (isWord) prefetchHuman(key);

  // ٤) الإنترنت — يبدأ فوراً
  if (!isOnline()) {
    return speakWeb(text, r, (ok, why) => {
      if (!ok) toast("⚠️ لا يوجد إنترنت — النطق الداخلي فقط (" + (why || "") + ")");
    });
  }
  speakOnline(text, r, (ok, why) => {
    if (!ok) {
      // ٥) آخر محاولة: النطق الداخلي
      speakWeb(text, r, (ok2, why2) => {
        if (!ok2 && force) toast("❌ " + (why || why2 || "الصوت ما اشتغل") + " — جرّب المتصفح Chrome");
      });
    }
  });
}

/* ==================== صفحة ضبط الصوت ==================== */
RENDER.sound = function () {
  const en = engVoices();
  const rows = en.slice(0, 10).map(v =>
    `<tr><td>${esc(v.name)}</td><td>${esc(v.lang)}</td><td>${v.localService ? "محلي" : "سحابي"}</td>
     <td><button class="btn sm" data-v="${esc(v.name)}">🔊</button></td></tr>`).join("");

  $("#soundBody").innerHTML = `
    <div class="gbox" id="diagBox">
      <h3>🔎 تشخيص الصوت</h3>
      <div class="g-ar">اضغط «شغّل التشخيص» وستظهر النتيجة — أرسلها لي إن كان الصوت ما يشتغل.</div>
      <div class="diag" id="diagOut">لم يُشغَّل بعد.</div>
      <button class="btn" id="runDiag" style="margin-top:12px">▶ شغّل التشخيص</button>
    </div>

    <div class="gbox">
      <h3>🎚️ اضبط الصوت</h3>
      <label class="lbl">المصدر</label>
      <div class="seg" id="engSeg">
        <button data-e="auto"   class="${S.engine === "auto"   ? "on" : ""}">تلقائي</button>
        <button data-e="online" class="${S.engine === "online" ? "on" : ""}">إنترنت</button>
        <button data-e="web"    class="${S.engine === "web"    ? "on" : ""}">داخلي</button>
        <button data-e="off"    class="${S.engine === "off"    ? "on" : ""}">إيقاف</button>
      </div>

      <label class="lbl" style="margin-top:18px">اللهجة</label>
      <div class="seg" id="acSeg">
        <button data-a="GB" class="${(S.ac || "GB") === "GB" ? "on" : ""}">🇬🇧 British</button>
        <button data-a="US" class="${S.ac === "US" ? "on" : ""}">🇺🇸 American</button>
        <button data-a="AU" class="${S.ac === "AU" ? "on" : ""}">🇦🇺 Australian</button>
      </div>

      <label class="lbl" style="margin-top:18px">السرعة: <b id="rateLbl">${(S.rate || 0.9).toFixed(2)}×</b></label>
      <input type="range" id="rateIn" min="0.5" max="1.2" step="0.05" value="${S.rate || 0.9}">
      <div style="display:flex;gap:8px;margin-top:6px;flex-wrap:wrap">
        <button class="btn ghost sm" data-r="0.6">🐢 بطيء</button>
        <button class="btn ghost sm" data-r="0.8">أبطأ قليلاً</button>
        <button class="btn ghost sm" data-r="1">طبيعي</button>
      </div>

      <div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap">
        <button class="btn" id="tstWord">🔊 كلمة</button>
        <button class="btn" id="tstSent">🎧 جملة</button>
        <button class="btn ghost" id="tglMute">${S.muted ? "🔇 فعّل الصوت" : "🔊 اكتم الصوت"}</button>
      </div>
    </div>

    ${en.length ? `<div class="gbox"><h3>📋 أصوات جهازك (${en.length})</h3>
      <div class="tbl-wrap"><table class="gtbl"><tr><th>الاسم</th><th>اللغة</th><th>النوع</th><th></th></tr>${rows}</table></div></div>` : ""}

    <div class="gbox">
      <h3>💡 الحل الأسرع للصوت</h3>
      <ul class="gpts">
        <li>افتح الموقع في <b>Chrome</b> لا متصفح الهاتف</li>
        <li>تأكد إن الهاتف متصل <b>بالإنترنت</b> (نطق الإنترنت يحتاجه)</li>
        <li>اضغط الزر <b>مرة واحدة</b> — بعض المتصفحات تمنع التشغيل التلقائي</li>
        <li>ارفع صوت الجهاز لأقصى مستوى</li>
        <li>لا تفتح الملف مباشرة — استخدم رابط <code>http://</code></li>
      </ul>
    </div>`;

  $$("#engSeg button").forEach(b => b.onclick = () => { S.engine = b.dataset.e; save(); RENDER.sound(); });
  $$("#acSeg button").forEach(b => b.onclick = () => {
    S.ac = b.dataset.a; save(); RENDER.sound();
    stopSpeak(); setTimeout(() => speak("Hello. This is my new accent.", null, true), 100);
  });
  const ri = $("#rateIn");
  if (ri) ri.oninput = () => { S.rate = parseFloat(ri.value); $("#rateLbl").textContent = S.rate.toFixed(2) + "×"; save(); };
  $$("#soundBody [data-r]").forEach(b => b.onclick = () => {
    S.rate = parseFloat(b.dataset.r); save(); RENDER.sound();
    speak("The quick brown fox jumps over the lazy dog.", null, true);
  });
  const tw = $("#tstWord"); if (tw) tw.onclick = () => speak("pronunciation", null, true);
  const ts = $("#tstSent"); if (ts) ts.onclick = () => speak("Good morning. How are you today? I am learning English every single day. Shall we practise together right now? I would really like to improve my pronunciation and vocabulary.", null, true);
  const tm = $("#tglMute"); if (tm) tm.onclick = () => {
    S.muted = !S.muted; save();
    const b = $("#ttsBtn"); if (b) b.textContent = S.muted ? "🔇" : "🔊";
    RENDER.sound();
  };
  $$("#soundBody [data-v]").forEach(b => b.onclick = () => {
    const v = voices.find(x => x.name === b.dataset.v); if (!v) return;
    stopSpeak();
    setTimeout(() => {
      const u = new SpeechSynthesisUtterance("Hello. Testing this voice.");
      u.voice = v; u.lang = v.lang; u.rate = S.rate || 0.9; speechSynthesis.speak(u);
    }, 150);
  });

  const rd = $("#runDiag");
  if (rd) rd.onclick = () => {
    const out = $("#diagOut");
    out.textContent = "…جارٍ الاختبار";
    prime();
    const lines = [];
    lines.push("المتصفح: " + navigator.userAgent.slice(0, 90));
    lines.push("الإنترنت: " + (isOnline() ? "متصل ✓" : "غير متصل ✗"));
    lines.push("النطق الداخلي: " + (window.speechSynthesis ? "مدعوم" : "غير مدعوم ✗"));
    lines.push("أصوات إنجليزية: " + engVoices().length);
    const txt = ["Google", "StreamElements", "Dictionary"].map(x =>
      "<li>جارٍ اختبار " + x + "…</li>").join("");
    out.innerHTML = "<ul class='gpts'>" + txt + "</ul>";

    const test = (label, url) => new Promise(res => {
      const a = document.createElement("audio");
      a.preload = "auto"; a.muted = true; a.src = url;
      document.body.appendChild(a);
      const to = setTimeout(() => { try { a.pause(); a.remove(); } catch (e) {} res(label + ": مهلة — لا استجابة"); }, 8000);
      const fin = (msg) => { clearTimeout(to); try { a.pause(); a.remove(); } catch (e) {} res(label + ": " + msg); };
      a.oncanplaythrough = a.onloadeddata = a.oncanplay = () => fin("يعمل ✓");
      a.onerror = () => fin("فشل (كود " + (a.error ? a.error.code : "?") + ")"
        + (a.error && a.error.code === 4 ? " = لا إنترنت أو محجوب" : ""));
      try { const p = a.play(); if (p && p.catch) p.catch(e => fin(" play()=" + e.name)); }
      catch (e) { fin(" play()=" + e.name); }
    });

    test("Google", providers("hello", S.ac)[0])
      .then(r1 => test("StreamElements", providers("hello", S.ac)[1]).then(r2 => {
        out.innerHTML = "<ul class='gpts'>" + lines.map(l => "<li>" + esc(l) + "</li>").join("") +
          "<li>" + esc(r1) + "</li><li>" + esc(r2) + "</li></ul>" +
          "<p class='g-ar' style='margin-top:10px'>انسخ النتيجة وأرسلها لي.</p>";
      }));
  };
};

/* ---------- السمة ---------- */
function setTheme(t) {
  S.theme = t; document.documentElement.setAttribute("data-theme", t);
  const m = $('meta[name="theme-color"]'); if (m) m.content = t === "light" ? "#f6f8fb" : "#0d1117";
  const b = $("#themeBtn"); if (b) b.innerHTML = t === "light" ? "☀️ الوضع النهاري" : "🌙 الوضع الليلي";
  save();
}

/* ---------- التنقل ---------- */
let curView = "home";
function go(v) {
  curView = v;
  $$(".view").forEach(x => x.classList.remove("on"));
  const el = $("#v-" + v); if (el) el.classList.add("on");
  $$(".nv").forEach(x => x.classList.toggle("on", x.dataset.nav === v));
  $("#sidebar").classList.remove("on"); $("#overlay").classList.remove("on");
  window.scrollTo({ top: 0, behavior: "instant" });
  if (RENDER[v]) RENDER[v]();
}
function openSide(open) {
  $("#sidebar").classList.toggle("on", open);
  $("#overlay").classList.toggle("on", open);
}

/* ---------- السلسلة اليومية ---------- */
/* ---------- تواريخ ---------- */
function dkey(t) {
  const d = t instanceof Date ? t : new Date(t);
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const y = String(d.getDate()).padStart(2, "0");
  return d.getFullYear() + "-" + m + "-" + y;
}
function todayKey() { return dkey(Date.now()); }

/* ---------- تسجيل نشاط حقيقي (ليس مجرد فتح الصفحة) ---------- */
function bumpActivity() {
  const d = todayKey();
  S.daily = S.daily || {};
  S.daily[d] = (S.daily[d] || 0) + 1;
  S.lastAct = d;
  save();
  paintStreak();
}

/* ---------- سجل التعلم والأخطاء ---------- */
function markLearned(en, t) {
  if (!en) return;
  S.learned = S.learned || {};
  t = t || todayKey();
  if (S.learned[en] === undefined) S.learned[en] = t;
}
function learnedOn(date) {
  S.learned = S.learned || {};
  return Object.keys(S.learned).filter(k => S.learned[k] === date).length;
}
function markWrong(en) {
  if (!en) return;
  S.wrong = S.wrong || {};
  const e = S.wrong[en] || { n: 0, t: 0 };
  e.n = (e.n || 0) + 1; e.t = Date.now();
  S.wrong[en] = e;
  save();
}

/* ---------- التكرار المتباعد (SRS) ---------- */
const SRS_LVLS = [0, 1, 3, 7, 14, 30, 90];
function srsGet(en) { return (S.srs || {})[en] || null; }
function srsDue(en) {
  const e = srsGet(en);
  if (!e) return false;
  if (S.known[en]) return false;
  if (!S.seen[en]) return false;
  return e.due <= todayKey();
}
function srsPromote(en, easy) {
  if (!en) return;
  S.srs = S.srs || {};
  const e = srsGet(en) || { lvl: 0, due: todayKey() };
  const nl = Math.min(SRS_LVLS.length - 1, (e.lvl || 0) + (easy ? 2 : 1));
  S.srs[en] = { lvl: nl, due: dkey(Date.now() + SRS_LVLS[nl] * 864e5) };
  save();
}
function srsReset(en) {
  if (!en) return;
  S.srs = S.srs || {};
  S.srs[en] = { lvl: 0, due: todayKey() };
  save();
}

/* ---------- إحصائيات الأسبوع (السبت → الجمعة) ---------- */
function weekInfo() {
  const names = ["ح", "ن", "ث", "ر", "خ", "ج", "س"];   // السبت..الجمعة
  const now = new Date();
  const dow = now.getDay();                            // 0=الأحد
  const back = (dow + 1) % 7;                          // عدد الأيام منذ السبت
  const start = new Date(now); start.setDate(now.getDate() - back);
  const days = [], keys = [];
  for (let i = 0; i < 7; i++) {
    const dt = new Date(start); dt.setDate(start.getDate() + i);
    const k = dkey(dt);
    keys.push(k);
    const future = dt.getTime() > now.getTime() + 3600e3;
    const on = !future && ((S.daily || {})[k] || 0) > 0;
    days.push({ k: k, on: on, label: names[i], future: future, today: k === todayKey() });
  }
  const active = days.filter(x => x.on).length;
  // عدد الأسابيع المتتالية التي فيها نشاط
  const all = Object.keys(S.daily || {}).filter(k => (S.daily[k] || 0) > 0).sort();
  let wStreak = 0;
  if (all.length) {
    const wkOf = k => {
      const p = k.split("-");
      const dt = new Date(+p[0], +p[1] - 1, +p[2]);
      const dow = (dt.getDay() + 1) % 7;
      dt.setDate(dt.getDate() - dow);
      return dkey(dt);
    };
    const cur = wkOf(all[all.length - 1]);
    const want = new Date(cur); 
    let guard = 0;
    while (guard++ < 400) {
      const has = all.some(k => wkOf(k) === dkey(want));
      if (!has) break;
      wStreak++;
      want.setUTCDate(want.getUTCDate() - 7);
    }
  }
  return { days: days, active: active, start: keys[0], end: keys[6], wStreak: wStreak };
}

/* ---------- رسم الستريك في القائمة ---------- */
function paintStreak() {
  const dn = $("#stkDay"), wn = $("#stkWeek"), dw = $("#stkDays"), hn = $("#stkHint");
  if (!dn) return;
  const w = weekInfo();
  const day = S.streak || 0;
  dn.textContent = String(day);
  wn.textContent = w.active + "/7";
  dw.innerHTML = w.days.map(x =>
    `<div class="stk-d${x.on ? " on" : ""}${x.today ? " today" : ""}" title="${x.k}">${x.label}</div>`).join("");
  const db = dn.parentElement, wb = wn.parentElement;
  if (db) db.classList.toggle("on", day > 0);
  if (wb) wb.classList.toggle("on", w.active > 0);
  if (hn) {
    hn.innerHTML = w.active === 7 ? "🎉 أكملت الأسبوع كامل! استمر"
                : w.active >= 1 ? `متبقي <b>${7 - w.active}</b> أيام لإكمال الأسبوع`
                : (S.lastDay === todayKey() ? "بدا اليوم ✅ كمّل شي" : "ابدأ سلسلتك اليوم 🔥");
  }
}

function touchDay() {
  const d = todayKey();
  if (S.lastDay !== d) {
    const y = dkey(Date.now() - 864e5);
    S.streak = S.lastDay === y ? (S.streak || 0) + 1 : 1;
    S.lastDay = d; save();
  }
  paintStreak();
}

/* =========================================================
   الرئيسية
   ========================================================= */
RENDER.home = function () {
  paintProgress();
  // السيناريوهات
  $("#homeScen").innerHTML = window.AI.SCENARIOS.map(s =>
    `<div class="scard2" style="min-width:240px" data-scen="${s.id}">
      <div class="top"><div class="ic">${s.icon}</div><b>${s.title}</b></div>
      <div class="lv">${s.ar}</div>
    </div>`).join("");
  $$("#homeScen [data-scen]").forEach(e => e.onclick = () => openScenario(e.dataset.scen));
  // دروس مشهورة = غير مكتملة
  const left = ALL.filter(u => (S.units[u.id] || 0) < u.words.length);
  const pop = (left.length ? left : ALL).slice(0, 6);
  $("#homePop").innerHTML = pop.map(u => lessonCardHTML(u)).join("");
  bindLessonCards($("#homePop"));
  // الخطة
  const plan = [
    ["ابدأ بالأساسيات", "الوحدات ١-٨: تحيات، حروف، أرقام، ألوان، عائلة، طعام، أيام، وقت. هذه التي ستستعملها كل يوم."],
    ["أتقن المضارع", "الوحدات ١٣ و ١٤: be, have, present simple. هنا تبني جملك الأولى."],
    ["فتح الماضي والمستقبل", "وحدات A2: ١-٣ — past simple, continuous, will/going to."],
    ["طوّر دقة لغوية", "وحدات A2: ٤-٨ — مقارنة، some/any، present perfect، modals، -ing/to."],
    ["تحدث!", "وحدتا المحادثة والتمثيل. استخدم ١٠ جمل يومياً في السيناريو حتى تصبح طبيعية."],
    ["ثبّت ما تعلمته", "راجع ١٠ بطاقات يومياً + اختبار شامل كل أسبوع."]
  ];
  $("#planBox").innerHTML = plan.map((p, i) =>
    `<div class="pstep"><div class="n">${i + 1}</div><b>${p[0]}</b><p>${p[1]}</p></div>`).join("");
}

/* =========================================================
   الدروس
   ========================================================= */
function lessonCardHTML(u) {
  const done = S.units[u.id] || 0, pct = Math.round(done / u.words.length * 100);
  const qb = unitQuizBest(u.id), stars = S.stars[u.id] || 0;
  const attempted = !!(qb || (S.uquiz && S.uquiz[u.id]) || (S.stars && (u.id in S.stars)));  // ظهرت النجوم حتى لو 0
  return `<div class="lcard" data-unit="${u.id}">
    <div class="lc-top">
      <div class="lc-ico">${u.icon}</div>
      <div class="lc-tx">
        <h3>${esc(u.title)}</h3>
        <div class="en">${esc(u.titleEn)}</div>
        <div class="goal">${esc(u.goal)}</div>
      </div>
      <span class="badge ${u.level.toLowerCase()}">${u.level}</span>
    </div>
    <div class="lc-foot">
      <span>${done}/${u.words.length} كلمة</span>
      <span>${pct === 100 ? "✅ مكتمل" : "📖 " + pct + "%"}</span>
      ${qb ? `<span class="lc-score" title="نتيجة آخر اختبار">🏅 ${qb}%</span>` : ""}
      ${attempted ? `<span class="lc-stars" title="التقدير">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</span>` : ""}
    </div>
    <div class="lc-bar"><i style="width:${pct}%"></i></div>
    ${qb ? `<div class="lc-bar q"><i style="width:${qb}%"></i></div>` : ""}
  </div>`;
}
function bindLessonCards(root) { $$("[data-unit]", root).forEach(e => e.onclick = () => openLesson(e.dataset.unit)); }

RENDER.lessons = function () {
  const base = ALL.filter(u => !u.top);                       // وحدات "أهم الكلمات" ليست ضمن الدروس
  const list = S.lvl === "all" ? base : base.filter(u => u.level === S.lvl);
  $("#lessonGrid").innerHTML = list.map(lessonCardHTML).join("");
  bindLessonCards($("#lessonGrid"));
}

let curUnit = null;
function openLesson(id) {
  const u = findUnit(id); if (!u) return;
  curUnit = u; touchDay(); bumpActivity();
  const pct = Math.round((S.units[id] || 0) / u.words.length * 100);
  const qb = unitQuizBest(id), stars = S.stars[id] || 0;
  $("#lessonBody").innerHTML = `
    <div class="u-score ${qb ? "" : "none"}">
      <div class="us-n">${qb}<small>%</small></div>
      <div class="us-t">
        <b>نتيجة اختبارك في هذا الدرس</b>
        <span>${qb ? (S.uquiz[id].taken > 1 ? "أفضل نتيجة · محاولت " + S.uquiz[id].taken + " مرات" : "أول محاولة") : "لم تبدأ الاختبار بعد"}</span>
        ${stars ? `<span class="us-s">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</span>` : ""}
      </div>
    </div>
    <div class="u-head">
      <div class="u-ico">${u.icon}</div>
      <div style="flex:1;min-width:200px">
        <h1>${esc(u.title)}</h1>
        <div class="en">${esc(u.titleEn)}</div>
        <p style="color:var(--tx2);margin-top:6px">🎯 ${esc(u.goal)}</p>
        <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">
          <span class="badge ${u.level.toLowerCase()}">${u.level}</span>
          <span class="badge ${pct === 100 ? "dn" : ""}">${pct === 100 ? "مكتمل ✅" : pct + "%"}</span>
          <span class="badge">${u.words.length} كلمة</span>
        </div>
      </div>
    </div>
    <div class="tabs" id="uTabs">
      <button class="on" data-t="w">📖 المفردات</button>
      <button data-t="g">📐 القواعد</button>
      <button data-t="d">💬 حوار</button>
      <button data-t="q">🧠 اختبار الوحدة</button>
    </div>
    <div id="uTabBody"></div>`;
  $$("#uTabs button").forEach(b => b.onclick = () => {
    $$("#uTabs button").forEach(x => x.classList.remove("on")); b.classList.add("on");
    tabWord(u, "w"); tabWord(u, b.dataset.t);
  });
  tabWord(u, "w");
  go("lesson");
}
function tabWord(u, t) {
  const B = $("#uTabBody");
  if (t === "w") B.innerHTML = wordsHTML(u);
  else if (t === "g") B.innerHTML = grammarHTML(u);
  else if (t === "d") B.innerHTML = dialogueHTML(u);
  else if (t === "q") { B.innerHTML = quizHTML(u); startUnitQuiz(u); return; }
  if (t === "w") bindWords(u, B);
  if (t === "d") bindSays(B);
}

function wordsHTML(u) {
  return `<div class="wlist">` + u.words.map((w, i) => {
    const known = S.known[w.en], star = S.stars[w.en];
    return `<div class="wrow" data-i="${i}">
      <span class="w-n">${i + 1}</span>
      <div class="w-main">
        <div class="w-en">${esc(w.en)}</div>
        <div class="w-pr">${esc(w.pr)}</div>
        <div class="w-ar">${esc(w.ar)}</div>
      </div>
      <button class="star ${star ? "on" : ""}" data-star="${esc(w.en)}" title="مفضلة">${star ? "★" : "☆"}</button>
      <button class="w-btn" data-say="${esc(w.en)}" title="استمع">🔊</button>
      <button class="w-btn" data-ok="${esc(w.en)}" title="${known ? "معلومة ✓" : "لا أعرف بعد"}" style="${known ? "color:var(--ok)" : ""}">${known ? "✓" : "○"}</button>
      <div class="w-ex"><p class="en">${esc(w.ex.en)}</p><p class="ar">${esc(w.ex.ar)}</p></div>
    </div>`;
  }).join("") + `</div>
  <div style="display:flex;gap:10px;margin-top:18px;flex-wrap:wrap">
    <button class="btn" id="readAllW">🔊 اقرأ الكل الوحدة</button>
    <button class="btn ghost" id="uToCards">🃏 أضف للبطاقات</button>
  </div>`;
}
function bindWords(u, root) {
  $$(".wrow", root).forEach(r => r.onclick = e => {
    if (e.target.closest("button")) return;
    r.classList.toggle("open");
  });
  $$("[data-say]", root).forEach(b => b.onclick = e => { e.stopPropagation(); speak(b.dataset.say); });
  $$("[data-star]", root).forEach(b => b.onclick = e => {
    e.stopPropagation(); const k = b.dataset.star;
    if (S.stars[k]) delete S.stars[k]; else S.stars[k] = 1;
    b.classList.toggle("on"); b.textContent = S.stars[k] ? "★" : "☆"; save();
  });
  $$("[data-ok]", root).forEach(b => b.onclick = e => {
    e.stopPropagation(); const k = b.dataset.ok;
    if (S.known[k]) { delete S.known[k]; delete S.weak[k]; }
    else { S.known[k] = 1; delete S.weak[k]; }
    b.textContent = S.known[k] ? "✓" : "○";
    b.style.color = S.known[k] ? "var(--ok)" : "";
    let c = 0; u.words.forEach(w => { if (S.known[w.en]) c++; });
    markUnit(u.id, c); save(); paintProgress();
  });
  const ra = $("#readAllW", root);
  if (ra) ra.onclick = () => {
    u.words.forEach((w, i) => setTimeout(() => speak(w.ex.en), i * 2600));
    toast("▶ يقرأ الأمثلة — راقب جيداً");
  };
  const tc = $("#uToCards", root);
  if (tc) tc.onclick = () => { S.deck = "new"; go("cards"); toast("🃏 راجع بطاقاتك"); };
}

function grammarHTML(u) {
  const g = u.grammar; if (!g) return `<div class="empty"><div class="e">📭</div>لا توجد قواعد في هذه الوحدة</div>`;
  let t = `<div class="gbox">
    <h3>${esc(g.title)}</h3>
    <div class="g-ar">📖 ${esc(g.ar)}</div>
    <ul class="gpts">` + (g.points || []).map(p =>
      `<li class="${/^[\x20-\x7E"]/.test(p) ? "en" : ""}">${esc(p).replace(/&amp;(\w+);/g, "&$1;")}</li>`).join("") + `</ul>`;
  if (g.table) {
    t += `<div class="tbl-wrap"><table class="gtbl">` + g.table.map((r, i) =>
      i === 0 ? `<tr>${r.map(c => `<th>${esc(c)}</th>`).join("")}</tr>`
              : `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("") + `</table></div>`;
  }
  return t + `<div style="margin-top:14px"><button class="btn sm" id="sayG">🔊 استمع لل القاعدة</button></div></div>`;
}

function dialogueHTML(u) {
  return `<div class="dlg">` + u.talk.map(d =>
    `<div class="dline ${d.s === "A" ? "a" : "b"}">
      <div class="sp">${d.s}</div>
      <div class="en">${esc(d.en)}</div>
      <div class="ar">${esc(d.ar)}</div>
      <button class="spk" data-say="${esc(d.en)}">🔊</button>
    </div>`).join("") + `</div>
    <div style="display:flex;gap:10px;margin-top:18px;flex-wrap:wrap">
      <button class="btn" id="playD">▶ اقرأ الحوار كاملاً</button>
      <button class="btn ghost" id="hideAr">👁 إخفاء الترجمة</button>
    </div>`;
}
function bindSays(root) {
  $$("[data-say]", root).forEach(b => b.onclick = () => speak(b.dataset.say));
  const p = $("#playD", root);
  if (p) p.onclick = () => { curUnit.talk.forEach((d, i) => setTimeout(() => speak(d.en), i * 3800)); toast("▶ قراءة الحوار"); };
  const h = $("#hideAr", root);
  if (h) h.onclick = () => {
    const on = $$(".dline .ar", root).forEach(e => e.style.display = e.style.display === "none" ? "" : "none");
    h.textContent = "👁 إظهار/إخفاء";
  };
  const sg = $("#sayG", root);
  if (sg) sg.onclick = () => { const p = (curUnit.grammar.points || []).filter(x => /^[\x20-\x7E"]/.test(x)); p.forEach((x, i) => setTimeout(() => speak(x), i * 3200)); };
}

/* =========================================================
   البطاقات (تكرار متباعد)
   ========================================================= */
let deck = [], deckIdx = 0, flipped = false;
RENDER.cards = function () {
  const all = allWords();
  const due = all.filter(x => S.seen[x.w.en] && !S.known[x.w.en]).sort((a, b) => (srsDue(b.w.en) ? 1 : 0) - (srsDue(a.w.en) ? 1 : 0));
  const nw = all.filter(x => !S.seen[x.w.en]);
  const wk = all.filter(x => S.weak[x.w.en] && !S.known[x.w.en]);
  $("#dueN").textContent = due.length; $("#newN").textContent = nw.length;
  $("#weakN").textContent = wk.length; $("#allN").textContent = all.length;
  const map = { due, new: nw, weak: wk, all };
  let pick = map[S.deck];
  if (!pick || !pick.length) pick = nw.length ? nw : all;   // لا تترك المستخدم بلا بطاقات
  deck = pick.slice();
  deck = S.deck === "due" ? pick : shuffle(deck);
  deckIdx = 0; flipped = false;
  showCard();
}
function showCard() {
  const c = $("#flipCard");
  if (!deck.length) {
    $("#flipCard").style.display = "none";
    $("#cardNo").textContent = "0 / 0";
    $("#cardStage").insertAdjacentHTML("beforeend", "");
    const st = $("#cardStage .empty");
    if (st) st.remove();
    if (!st) $("#cardStage").insertAdjacentHTML("beforeend",
      `<div class="empty" id="cardStage"><div class="e">${S.deck === "due" ? "🎉" : "📭"}</div>
       <b>${S.deck === "due" ? "لا يوجد شيء مستحق الآن — أحسنت!" : "لا توجد بطاقات هنا"}</b>
       <p style="color:var(--tx2);margin-top:6px">جرّب تبويباً آخر أو ارجع للدروس</p></div>`);
    return;
  }
  const old = $("#cardStage > .empty"); if (old) old.remove();
  $("#flipCard").style.display = "";
  c.classList.remove("flip");
  const it = deck[deckIdx];
  $("#fcLvl").textContent = it.u.level + " · " + it.u.icon;
  $("#fcEn").textContent = it.w.en;
  $("#fcPr").textContent = it.w.pr;
  $("#fcAr").textContent = it.w.ar;
  $("#fcExEn").textContent = it.w.ex.en;
  $("#fcExAr").textContent = it.w.ex.ar;
  $("#cardNo").textContent = (deckIdx + 1) + " / " + deck.length;
  flipped = false;
}
function flipCard() { if (!deck.length) return; flipped = !flipped; $("#flipCard").classList.toggle("flip", flipped); }
function grade(g) {
  if (!deck.length) return;
  const it = deck[deckIdx], k = it.w.en;
  S.seen[k] = (S.seen[k] || 0) + 1;
  if (g === 3) { S.known[k] = 1; delete S.weak[k]; markLearned(k); }
  else if (g === 1) { S.known[k] = 0; delete S.known[k]; S.weak[k] = 1; }
  else { S.weak[k] = 1; }
  if (g === 1) srsReset(k); else if (g === 2) srsPromote(k, false); else if (g === 3) srsPromote(k, true);
  bumpActivity();
  let c = 0; it.u.words.forEach(w => { if (S.known[w.en]) c++; });
  markUnit(it.u.id, c);
  touchDay(); save(); paintProgress();
  // تحديث الأرقام
  const all = allWords();
  $("#dueN").textContent = all.filter(x => S.seen[x.w.en] && !S.known[x.w.en]).length;
  $("#weakN").textContent = all.filter(x => S.weak[x.w.en] && !S.known[x.w.en]).length;
  $("#allN").textContent = all.length;
  deckIdx++; if (deckIdx >= deck.length) { deckIdx = 0; deck = shuffle(deck); }
  showCard();
}

/* =========================================================
   الاختبارات
   ========================================================= */
let Q = null;
function quizHTML(scope) {
  return `<div class="qbox" id="qbox">
    <div class="qprog"><span class="qnum" id="qN">1 / 10</span><div class="bar"><i id="qB"></i></div><span class="qnum" id="qScore">0 ✓</span></div>
    <div class="qtext" id="qT"></div>
    <div id="qBody"></div>
    <div class="qfb" id="qF"></div>
    <div class="qrow" id="qRow"></div>
  </div>`;
}
function mkQuestions(kind, pool, n, diff) {
  const D = diff || S.diff || "mid";
  const nopt = D === "easy" ? 2 : 4;              // عدد الخيارات
  const hint = D === "easy";                       // إظهار تلميح النطق
  const pro = D === "pro";                         // وضع «تقدر»: كتابة فقط
  const hard = D === "hard" || pro;                // مشتّتات أصعب
  const k0 = kind;                                 // النوع الأصلي قبل التحويل
  // مشتّتات صعبة: أول حرف متشابه أو طول متقارب
  function distract(w, k) {
    const cand = pool.filter(x => x.w.en !== w.en);
    if (hard) {
      const f0 = (w.en[0] || "").toLowerCase();
      const sim = cand.filter(x => (x.w.en[0] || "").toLowerCase() === f0 || Math.abs(x.w.en.length - w.en.length) <= 2);
      const rest = cand.filter(x => sim.indexOf(x) < 0);
      const merged = shuffle(sim).concat(shuffle(rest));
      if (merged.length >= k) return merged.slice(0, k);
    }
    return shuffle(cand).slice(0, k);
  }
  // وضع «تقدر»: لا يوجد اختيار من متعدد إطلاقاً
  if (pro && kind !== "sent" && kind !== "exam") kind = "rev";
  // وضع «سهل»: لا توجد كتابة — كل شيء اختيار
  if (D === "easy" && (kind === "rev" || kind === "sent" || kind === "dict")) kind = "choice";

  const mkChoice = w => ({
    key: w.en, k: "choice",
    q: `ما معنى كلمة <b>«${esc(w.en)}»</b>؟` + (hint ? `<div class="qhint">💡 النطق: <b>${esc(w.pr || "")}</b></div>` : ""),
    opts: shuffle([w.ar, ...distract(w, nopt - 1).map(x => x.w.ar)]),
    ans: w.ar, say: w.en, tip: `${esc(w.pr)} — ${esc(w.ex.en)}`
  });
  const mkListen = w => ({
    key: w.en, k: "listen",
    q: "🎧 استمع واختر الكلمة الصحيحة" + (hint ? `<div class="qhint">💡 ابدأ بـ <b>${esc((w.en[0] || "").toUpperCase())}</b></div>` : ""),
    opts: shuffle([w.en, ...distract(w, nopt - 1).map(x => x.w.en)]),
    ans: w.en, say: w.en, tip: `${esc(w.ar)} — ${esc(w.pr)}`
  });
  const mkRev = (w, heard) => ({
    key: w.en, k: "rev", auto: !!heard,
    q: heard ? "🎧 استمع ثم اكتب معنى ما سمعت بالعربي"
             : `اكتب الترجمة العربية لـ <b>«${esc(w.en)}»</b>`,
    ans: w.ar, say: w.en, accept: [w.ar, w.ar.replace(/^ال/, "")]
  });
  const mkSent = w => {
    const ws = w.ex.en.split(" ").filter(x => /[A-Za-z]/.test(x));
    if (ws.length < 4) return null;
    const ans = ws.slice(0, Math.min(7, ws.length));
    return { key: w.en, k: "sent", q: "🧩 رتّب الكلمات لتكوين الجملة", tokens: shuffle(ans), ans: ans.join(" "), say: w.ex.en, tip: esc(w.ex.ar) };
  };
  const mkDict = w => {
    const s = String(w.ex.en || "").replace(/\s+/g, " ").trim();
    const ws = s.split(" ").filter(x => /[A-Za-z]/.test(x));
    if (ws.length < 3) return null;
    return { key: w.en, k: "dict", q: "✍️ استمع واكتب الجملة كاملة", say: s.replace(/[_…]/g, " "), ans: s, accept: [s.toLowerCase(), s.toUpperCase()], tip: esc(w.ex.ar) };
  };
  const mkFill = item => {
    const w = item.w;
    const pts = item.u.grammar && item.u.grammar.points ? item.u.grammar.points.filter(x => /[\x20-\x7E]/.test(x) && new RegExp("\\b" + w.en.split(" ")[0].replace(/[^a-z]/gi, ""), "i").test(x)) : [];
    if (pts.length) {
      const s = rnd(pts).replace(new RegExp("\\b" + w.en.split(" ")[0].replace(/[^a-z]/gi, "") + "\\b", "i"), "____");
      const blank = w.en.split(" ")[0];
      return { key: w.en, k: "fill", q: esc(s).replace(/____/g, "<b style='color:var(--ac)'>_____</b>"), opts: shuffle([blank, ...distract(w, nopt - 1).map(x => x.w.en.split(" ")[0])]), ans: blank, say: s.replace("____", blank) };
    }
    return mkChoice(w);
  };

  const out = [], src = shuffle(pool);
  for (const it of src) {
    if (out.length >= n) break;
    const w = it.w;
    let q = null;
    if (kind === "choice") q = mkChoice(w);
    else if (kind === "listen") q = mkListen(w);
    else if (kind === "rev") q = mkRev(w, pro && k0 === "listen");
    else if (kind === "fill") q = mkFill(it);
    else if (kind === "sent") q = mkSent(w);
    else if (kind === "dict") q = mkDict(w);
    else if (kind === "exam") {
      const r = Math.random();
      if (D === "easy") q = r < .6 ? mkChoice(w) : mkListen(w);                 // سهل: اختيار فقط
      else if (pro) q = r < .5 ? mkRev(w, false) : (r < .8 ? mkRev(w, true) : mkSent(w));  // تقدر: كتابة ورتيب
      else q = r < .35 ? mkChoice(w) : (r < .6 ? mkListen(w) : (r < .8 ? mkRev(w, false) : mkDict(w))); // متوسط/صعب
    }
    if (q) out.push(q);
  }
  return out;
}
/* وضع اختبار مخصّص: مجموعة محددة من الكلمات (أهم ٢٠٠ / مرحلة متدرجة) */
let QMODE = null;                 // null أو { id, label, pool }
function topPool() {
  if (!window.TOP200) return [];
  const idx = new Map(allWords().map(x => [x.w.en.toLowerCase().trim(), x]));
  const out = [];
  for (const g of TOP200) for (const en of g.words) {
    const x = idx.get(en.toLowerCase().trim());
    if (x) out.push(x);
  }
  return out;
}
function paintTopMode() {
  const b = $("#topMode");
  if (!b) return;
  if (QMODE && QMODE.pool && QMODE.pool.length) {
    b.style.display = "";
    const t = b.querySelector(".tm-b b");
    if (t) t.textContent = QMODE.label;
    const s = b.querySelector(".tm-b small");
    if (s) s.textContent = "عدد أسئلة الاختبار = عدد كلمات المجموعة (" + QMODE.pool.length + ")";
  } else {
    b.style.display = "none";
  }
}
function quizPool() {
  if (QMODE && QMODE.pool && QMODE.pool.length) return QMODE.pool;
  return S.lvl && S.lvl !== "all" ? allWords().filter(x => x.u.level === S.lvl) : allWords();
}

/* ------- الاختبارات المتدرجة على أهم ٢٠٠ ------- */
const STAGES = 10;                                    // 10 × 20 = 200
function arNum(n) { return String(n).replace(/[0-9]/g, c => "٠١٢٣٤٥٦٧٨٩"[c]); }
function stageBest(id) { return (S.stage && S.stage[id]) || 0; }
function stageTried(id) { return !!(S.stage && Object.prototype.hasOwnProperty.call(S.stage, id)); }
function paintLadder() {
  const L = $("#ladder");
  if (!L) return;
  L.innerHTML = "";
  const pool = topPool();
  if (!pool.length) {
    L.innerHTML = "<div class='ld-empty'>ملف أهم الكلمات غير محمّل — حدّث الصفحة</div>";
    return;
  }
  const wrap = document.createElement("div");
  wrap.className = "ladder";
  for (let i = 0; i < STAGES; i++) {
    const seg = pool.slice(i * 20, i * 20 + 20);
    wrap.appendChild(stageBtn("s" + i, i + 1, "المرحلة " + arNum(i + 1), arNum(i * 20 + 1) + "–" + arNum(i * 20 + 20) + " كلمة", seg, stageBest("s" + i)));
  }
  wrap.appendChild(stageBtn("final", 0, "الاختبار النهائي", "كل الكلمات ١–٢٠٠", pool, stageBest("final"), true));
  L.appendChild(wrap);
}
function stageBtn(id, num, title, range, pool, best, fin) {
  const tried = stageTried(id);
  const b = document.createElement("button");
  b.className = "lstep" + (tried ? " done" : "") + (fin ? " fin" : "");
  b.innerHTML = `<i>${fin ? "🏆" : arNum(num)}</i>
    <div class="ls-t"><b>${esc(title)}</b><small>${esc(range)}</small></div>
    <div class="ls-b">${tried ? "أفضل نتيجة " + arNum(best) + "% ✓" : "لم تُحاول بعد"}</div>`;
  b.onclick = () => startStageQuiz({ id, label: title + " · أهم ٢٠٠ (" + range + ")", pool });
  return b;
}
function startStageQuiz(cfg) {
  try {
    const pool = cfg.pool || [];
    if (!pool.length) { toast("هذه المجموعة فارغة"); return; }
    const list = mkQuestions("exam", pool, pool.length, S.diff);
    if (!list.length) { toast("ما فيه أسئلة في هذه المجموعة — جرّب مستوى آخر"); return; }
    Q = { kind: "stage", stageId: cfg.id, hit: {}, miss: {}, diff: S.diff || "mid", list, i: 0, score: 0, done: false, pool };
    QMODE = { id: cfg.id, label: cfg.label, pool };
    const m = $("#quizMenu"); if (m) m.style.display = "none";
    const lw = $("#ladderWrap"); if (lw) lw.style.display = "none";
    const dr = $("#diffRow"); if (dr) dr.style.display = "none";
    paintTopMode(); paintDiff();
    renderQ();
  } catch (e) {
    Q = null;
    try { console.error("stage quiz failed:", e); } catch (_) {}
    toast("تعذّر فتح اختبار المرحلة");
    const lw = $("#ladderWrap"); if (lw) lw.style.display = "";
  }
}
function diffCount(kind) {
  const D = S.diff || "mid";
  if (kind === "exam") return 20;
  if (D === "easy") return 8;
  if (D === "hard") return 12;
  if (D === "pro") return 10;
  return 10;
}
function startQuiz(kind, n, pool) {
  const show = (sel, v) => { const el = $(sel); if (el) el.style.display = v; };
  try {
    const p = pool || quizPool();
    const cnt = diffCount(kind);
    const list = mkQuestions(kind, p, cnt, S.diff);
    if (!list.length) { toast("ما فيه أسئلة في هذه المجموعة — جرّب مستوى آخر"); return; }
    Q = { kind, diff: S.diff || "mid", list, i: 0, score: 0, done: false, pool: p };
    show("#quizMenu", "none");
    show("#diffRow", "none");
    if (!$("#quizArea").innerHTML) $("#quizArea").innerHTML = quizHTML();
    renderQ();
  } catch (e) {
    Q = null;
    try { console.error("quiz start failed:", e); } catch (_) {}
    const a = $("#quizArea");
    if (a) a.innerHTML = `<div class="qres"><div class="big">⚠️</div><h2>تعذّر فتح الاختبار</h2>
      <p style="color:var(--tx2);font-size:13.5px">${esc(String((e && e.message) || e))}</p>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        <button class="btn" onclick="window.__backMenu()">→ قائمة الاختبارات</button>
        <button class="btn ghost" onclick="location.reload()">🔄 حدّث الصفحة</button></div></div>`;
    show("#quizMenu", "grid");
    show("#diffRow", "");
  }
}
function startUnitQuiz(u) {
  try {
  const pool = u.words.map(w => ({ w, u }));
  Q = { kind: "unit", unit: u, hit: {}, miss: {}, diff: S.diff || "mid",
        list: mkQuestions("exam", pool, Math.min(10, pool.length * 2), S.diff).concat(mkQuestions("choice", pool, Math.min(5, pool.length), S.diff)),
        i: 0, score: 0, done: false, pool };
  renderQ();
  } catch (e) { Q = null; try { console.error("unit quiz failed:", e); } catch (_) {} toast("تعذّر فتح اختبار الدرس"); }
}
function renderQ() {
  if (!Q) return;
  if (!$("#qbox")) { $("#quizArea").innerHTML = quizHTML(); }
  if (Q.i >= Q.list.length) { resultQ(); return; }
  const q = Q.list[Q.i];
  $("#qN").textContent = (Q.i + 1) + " / " + Q.list.length;
  $("#qB").style.width = (Q.i / Q.list.length * 100) + "%";
  $("#qScore").textContent = Q.score + " ✓";
  $("#qF").className = "qfb";
  $("#qT").innerHTML = q.q;
  const B = $("#qBody"), R = $("#qRow");
  B.innerHTML = ""; R.innerHTML = "";
  if (q.k === "rev") {
    B.innerHTML = `<input class="qin" id="qIn" placeholder="اكتب الترجمة…" autocomplete="off">`;
    R.innerHTML = `<button class="btn" id="qGo">تحقّق ✓</button>` + (q.say ? `<button class="btn ghost" id="qSh">🔊 استمع</button>` : "");
    $("#qGo").onclick = checkRev;
    $("#qIn").addEventListener("keydown", e => { if (e.key === "Enter") checkRev(); });
    if (q.say) $("#qSh").onclick = () => speak(q.say);
    setTimeout(() => $("#qIn") && $("#qIn").focus(), 60);
  } else if (q.k === "dict") {
    B.innerHTML = `<input class="qin" id="qIn" placeholder="اكتب الجملة كاملة…" autocomplete="off" autocapitalize="off">`;
    R.innerHTML = `<button class="btn ghost" id="qSh">🔊 استمع</button><button class="btn" id="qGo">تحقّق ✓</button>`;
    $("#qSh").onclick = () => speak(q.say, 0.72, true);
    $("#qGo").onclick = checkDict;
    $("#qIn").addEventListener("keydown", e => { if (e.key === "Enter") checkDict(); });
    setTimeout(() => $("#qIn") && $("#qIn").focus(), 60);
  } else if (q.k === "sent") {
    B.innerHTML = `<div class="tokens" id="toks">${q.tokens.map((t, j) => `<button class="tok" data-i="${j}">${esc(t)}</button>`).join("")}</div>`;
    R.innerHTML = `<button class="btn ghost" id="qSh">🔊 استمع للجملة</button><button class="btn" id="qGo" disabled>تحقّق ✓</button>`;
    const build = [];
    $$("#toks .tok").forEach(b => b.onclick = () => {
      if (b.classList.contains("used")) return;
      b.classList.add("used");
      build.push({ t: b.textContent, el: b });
      if (build.length === q.tokens.length) $("#qGo").disabled = false;
    });
    $("#qGo").onclick = () => {
      const ans = build.map(x => x.t).join(" ");
      finish(ans === q.ans, q, `الجملة الصحيحة: <b>${esc(q.ans)}</b>`, build);
    };
    $("#qSh").onclick = () => speak(q.ans);
  } else {
    B.innerHTML = `<div class="qopts">` + q.opts.map((o, j) =>
      `<button class="qopt" data-o="${esc(o)}"><span class="k">${"أبج"[j] || (j + 1)}</span><span>${esc(o)}</span></button>`).join("") + `</div>`;
    if (q.say) R.innerHTML = `<button class="btn ghost" id="qSh">🔊 استمع مرة أخرى</button>`;
    const sh = $("#qSh", R); if (sh) sh.onclick = () => speak(q.say);
    $$("#qBody .qopt").forEach(b => b.onclick = () => {
      const ok = b.dataset.o === q.ans;
      $$("#qBody .qopt").forEach(x => { x.disabled = true; if (x.dataset.o === q.ans) x.classList.add("ok"); });
      if (!ok) b.classList.add("no");
      finish(ok, q, ok ? (q.tip ? "✔ " + q.tip : "إجابة صحيحة!") : `الصحيح: <b>${esc(q.ans)}</b>` + (q.tip ? "<br>" + q.tip : ""));
    });
    if (q.k === "listen" || q.auto) setTimeout(() => speak(q.say), 250);
  }
}
function checkRev() {
  const v = ($("#qIn").value || "").trim().toLowerCase();
  if (!v) return;
  const q = Q.list[Q.i];
  const ok = (q.accept || [q.ans]).some(a => a.trim().toLowerCase() === v);
  finish(ok, q, ok ? "✔ ممتاز!" : `الصحيح: <b>${esc(q.ans)}</b>`);
}
function checkDict() {
  const v = ($("#qIn").value || "").trim().replace(/\s+/g, " ").toLowerCase();
  if (!v) return;
  const q = Q.list[Q.i];
  const want = String(q.ans || "").trim().replace(/\s+/g, " ").toLowerCase();
  const ok = v === want || (q.accept || []).indexOf(v) >= 0;
  let msg = ok ? "✔ إملاء مضبوط!" : "";
  if (!ok) {
    const wv = v.split(" "), ww = want.split(" "), n = Math.max(wv.length, ww.length);
    const cells = [];
    for (let i = 0; i < n; i++) {
      const a = wv[i], b = ww[i];
      if (a && a === b) cells.push(`<span class="wo ok">${esc(a)}</span>`);
      else if (a && b) cells.push(`<span class="wo no">${esc(a)} → ${esc(b)}</span>`);
      else if (b) cells.push(`<span class="wo miss">+ ${esc(b)}</span>`);
      else cells.push(`<span class="wo extra">− ${esc(a)}</span>`);
    }
    msg = `<div class="dict-diff">${cells.join(" ")}</div><div class="dict-tip">الترجمة: ${q.tip || ""}</div>`;
    setTimeout(() => speak(q.say, 0.72, true), 350);
  }
  finish(ok, q, msg);
}
function finish(ok, q, msg) {
  if (ok) Q.score++;
  $("#qScore").textContent = Q.score + " ✓";
  const F = $("#qF");
  F.className = "qfb show " + (ok ? "ok" : "no");
  F.innerHTML = `<b>${ok ? "✅ صحيح!" : "❌ خطأ"}</b>${msg}` +
    (q.say ? `<div class="say">🔊 <span data-say="${esc(q.say)}" style="cursor:pointer;text-decoration:underline">استمع للكلمة</span></div>` : "");
  const ss = F.querySelector("[data-say]"); if (ss) ss.onclick = () => speak(ss.dataset.say);
  // داخل اختبار الدرس: سجّل كل إجابة لتقدير السويتة
  if (Q.kind === "unit" && Q.unit) {
    if (ok) {
      Q.hit = Q.hit || {};
      Q.hit[q.key] = 1;                       // الكلمة أُتقنت في هذا الاختبار
    } else {
      Q.miss = Q.miss || {};
      Q.miss[q.key] = (Q.miss[q.key] || 0) + 1;
    }
  }
  // كلمات الأخطاء تبقى في البطاقات الضعيفة
  if (!ok && q.say) { S.seen[q.say] = (S.seen[q.say] || 0) + 1; S.weak[q.say] = 1; delete S.known[q.say]; markWrong(q.say); srsReset(q.say); save(); }
  if (ok && q.key) { if (!S.known[q.key]) markLearned(q.key); srsPromote(q.key, false); }
  const R = $("#qRow"); R.innerHTML = "";
  const nb = document.createElement("button");
  nb.className = "btn"; nb.textContent = Q.i + 1 >= Q.list.length ? "🏁 النتيجة" : "التالي ⬅";
  nb.onclick = () => { Q.i++; if (Q.i >= Q.list.length) { recordScore(); } renderQ(); };
  R.appendChild(nb);
}
function recordScore() {
  const tot = Q.list.length, pct = Math.round(Q.score / tot * 100);
  S.quiz.taken = (S.quiz.taken || 0) + 1;
  S.quiz.last = pct;
  if (pct > (S.quiz.best || 0)) S.quiz.best = pct;
  if (Q.kind === "unit" && Q.unit) recordUnitScore(Q.unit, pct);
  if (Q.kind === "stage" && Q.stageId) {
    S.stage = S.stage || {};
    S.stage[Q.stageId] = Math.max(S.stage[Q.stageId] || 0, pct);
  }
  if (Q.kind === "daily") {
    S.plan = S.plan || {};
    if (S.plan.date === todayKey()) S.plan.done = true;
    (Q.pool || []).forEach(x => { S.seen[x.w.en] = (S.seen[x.w.en] || 0) + 1; });
  }
  touchDay(); bumpActivity(); save(); paintProgress(); refreshCounters();
}

/* ---------- نتيجة اختبار الدرس — تُحسب وتُحفظ ---------- */
function recordUnitScore(u, pct) {
  // نتيجة الدرس على حدة (لا تُمسح بإعادة المحاولة)
  S.uquiz = S.uquiz || {};
  const prev = S.uquiz[u.id] || { taken: 0, best: 0, last: 0 };
  S.uquiz[u.id] = { taken: prev.taken + 1, last: pct, best: Math.max(prev.best || 0, pct) };

  // الكلمات التي أُجيب عنها صحيحاً تدخل خطة المراجعة
  const hit = Q.hit || {};
  Object.keys(hit).forEach(k => { S.seen[k] = (S.seen[k] || 0) + 1; });

  // تقدّم الوحدة = الكلمات التي أُتقنت فعلاً
  const got = Object.keys(hit).length;
  if (got > (S.units[u.id] || 0)) {
    S.units[u.id] = Math.min(u.words.length, got);
    save(); paintProgress();
  }

  // نجوم الوحدة حسب السويتة
  const st = pct >= 80 ? 3 : pct >= 50 ? 2 : pct >= 30 ? 1 : 0;
  if (st > (S.stars[u.id] || 0)) S.stars[u.id] = st;
  save();
}
function unitQuizBest(id) { return (S.uquiz && S.uquiz[id] && S.uquiz[id].best) || 0; }
function resultQ() {
  const tot = Q.list.length, pct = Math.round(Q.score / tot * 100);
  let msg = "ممتاز! أنت جاهز للمرحلة التالية 🚀";
  if (pct < 50) msg = "لا بأس، الأخطاء تعلّم. راجع الدروس وجرب مرة أخرى 💪";
  else if (pct < 75) msg = "جيد جداً! راجع الكلمات الضعيفة وستتحسن بسرعة ⭐";
  const wasUnit = Q.kind === "unit", k = Q.kind;
  $("#quizArea").innerHTML = `<div class="qres">
    <div class="big">${pct}%</div>
    <h2>${Q.score} من ${tot}</h2>
    <div class="qres-diff">${DIFF_TXT[Q.diff || S.diff || "mid"] || ""}</div>
    <p>${msg}</p>
    ${Q.kind === "unit" && Q.unit ? `<div class="qres-note">✅ حُفظت نتيجتك في درس «${esc(Q.unit.title)}» · أفضل نتيجة ${unitQuizBest(Q.unit.id)}%</div>` : ""}
    ${wasUnit && Q.unit ? `<div class="qres-note">🗂️ ${Object.keys(Q.hit || {}).length} كلمة دخلت خطة المراجعة</div>` : ""}
    ${Q.kind === "stage" ? `<div class="qres-note">🪜 حُفظت نتيجتك للمرحلة · أفضل نتيجة ${S.stage && S.stage[Q.stageId] || 0}%</div>` : ""}
    ${Q.kind === "daily" ? `<div class="qres-note">🗓️ تمت جلسة اليوم — اطلع على الأهداف في قسم «يومي» · شاهد أخطاءك في «أخطائي»</div>` : ""}
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <button class="btn" onclick="window.__retry()">🔄 أعد المحاولة</button>
      <button class="btn ghost" onclick="window.__backMenu()">→ قائمة الاختبارات</button>
    </div>
  </div>`;
  window.__retry = () => { if (Q.kind === "daily") startDailyQuiz(); else if (wasUnit) { $("#lessonBody").insertAdjacentHTML("beforeend", ""); const u = curUnit; startUnitQuiz(u); } else startQuiz(k, tot, Q.pool); };
  window.__backMenu = () => {
    $("#quizArea").innerHTML = "";
    $("#quizMenu").style.display = "grid";
    const dr = $("#diffRow"); if (dr) dr.style.display = "";
    const lw = $("#ladderWrap"); if (lw) lw.style.display = "";
    paintLadder();
    Q = null;
  };
  if (wasUnit) { const lb = $("#lessonBody"); if (lb && lb.scrollIntoView) lb.scrollIntoView({ behavior: "smooth" }); }
}

/* =========================================================
   المحادثة الذكية
   ========================================================= */
let chatMode = "free";
RENDER.chat = function () {
  if (!S.chat || !S.chat.length) {
    S.chat = [
      { r: "bot", t: "Hi! I'm your English teacher. Let's talk in English! You can write in English or Arabic — I'll help you.",
        a: "مرحباً! أنا معلمك الإنجليزي. لنتحدث بالإنجليزية! يمكنك الكتابة بالإنجليزية أو العربية — سأساعدك." },
      { r: "bot", t: "Tip: make a mistake on purpose and I'll correct you. That's the fastest way to learn!",
        a: "نصيحة: أخطئ عمداً وسأصحح لك. هذه أسرع طريقة للتعلم!" }
    ];
    save();
  }
  paintChat();
  paintChips();
}
function paintChat() {
  const L = $("#chatLog");
  L.innerHTML = S.chat.map(m => {
    if (m.r === "typing") return "";
    let h = `<div class="msg ${m.r}">`;
    h += `<div>${m.t}</div>`;
    if (m.a) h += `<div class="ar">${m.a}</div>`;
    if (m.fix && m.fix.length) h += m.fix.map(f =>
      `<div class="fix">✏️ <b>${esc(f.fix)}</b><span class="why">${esc(f.why)}</span></div>`).join("");
    return h + `</div>`;
  }).join("");
  L.scrollTop = L.scrollHeight;
}
function paintChips() {
  const base = chatMode === "free"
    ? ["Hello! How are you?", "What is your name?", "Where are you from?", "What do you do?", "I like English", "How do I learn English?", "Motivate me!", "See you tomorrow"]
    : window.AI.ASKERS.slice(0, 8);
  $("#chatChips").innerHTML = base.map(c => `<button class="chip">${esc(c)}</button>`).join("");
  $$("#chatChips .chip").forEach(b => b.onclick = () => { $("#chatInput").value = b.textContent; sendChat(); });
}
function addMsg(m) {
  S.chat.push(m); if (S.chat.length > 120) S.chat.shift();
  if (m && m.r === "me") bumpActivity();      // الكتابة في المحادثة = نشاط
  save(); paintChat();
}
function sendChat() {
  const inp = $("#chatInput");
  let v = (inp.value || "").trim();
  if (!v) return;
  inp.value = "";
  // تصحيح فوري لرسالة المستخدم
  const fixes = window.AI.correct(v);
  addMsg({ r: "me", t: esc(v), fix: fixes });
  $("#botStat").textContent = "يكتب…";
  $("#chatLog").insertAdjacentHTML("beforeend", `<div class="typing"><i></i><i></i><i></i></div>`);
  $("#chatLog").scrollTop = 99999;
  setTimeout(() => {
    const a = window.AI.answer(v);
    addMsg({ r: "bot", t: esc(a.text), a: esc(a.ar || "") });
    $("#botStat").textContent = "جاهز للمحادثة";
    try { speak(a.text, 0.95); } catch (e) {}
  }, 620 + Math.random() * 500);
}

/* =========================================================
   تمثيل الأدوار
   ========================================================= */
RENDER.scenarios = function () {
  $("#scenGrid").innerHTML = window.AI.SCENARIOS.map(s =>
    `<div class="scard2" data-s="${s.id}">
      <div class="top"><div class="ic">${s.icon}</div><div><b>${s.title}</b><div class="lv">${s.ar}</div></div></div>
      <div class="rl">${s.role}</div>
      <div style="margin-top:10px"><span class="badge">${s.turns.length} مراحل</span></div>
    </div>`).join("");
  $$("#scenGrid [data-s]").forEach(e => e.onclick = () => openScenario(e.dataset.s));
}
let SC = null;
function openScenario(id) {
  const s = window.AI.SCENARIOS.find(x => x.id === id); if (!s) return;
  SC = { s, step: 0, log: [{ r: "bot", t: s.start, a: s.startAr }] };
  renderScen();
  go("scenario");
}
function renderScen() {
  const { s } = SC;
  $("#scenBody").innerHTML = `<div class="scen-stage">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
      <div class="u-ico" style="width:52px;height:52px;font-size:26px">${s.icon}</div>
      <div><h1 style="font-size:21px">${s.title}</h1><div class="en" style="color:var(--tx2)">${s.ar}</div></div>
    </div>
    <div class="scen-role"><b>دورك:</b> أنت الزبون/الضيف. <b>دور المساعد:</b> ${s.role}</div>
    <div class="step-dots" id="sDots"></div>
    <div class="scen-log" id="sLog"></div>
    <div id="sHint"></div>
    <div id="sLive" class="live-fix"></div>
    <form class="scen-in" id="sForm">
      <button type="button" class="icon mic" id="sMicBtn" title="تحدث">🎤</button>
      <input type="text" id="sIn" placeholder="اكتب ردك بالإنجليزية…" autocomplete="off">
      <button class="send">➤</button>
    </form>
    <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap">
      <button class="btn sm ghost" id="sHintBtn">💡 أعطني تلميحاً</button>
      <button class="btn sm ghost" id="sSkip">⏭ تخطَّ المرحلة</button>
      <button class="btn sm ghost" id="sRestart">↺ من البداية</button>
    </div>
  </div>`;
  paintScen();
  $("#sForm").onsubmit = e => { e.preventDefault(); hideLive(); scenAnswer(); };
  const sm = $("#sMicBtn");
  if (sm) sm.onclick = () => startMic($("#sMicBtn"),
    t => { const i = $("#sIn"); i.value = t; i.selectionStart = i.selectionEnd = (t || "").length; },
    () => scenAnswer());
  const sIn = $("#sIn");
  if (sIn) sIn.addEventListener("input", () => liveCheck(sIn));
  $("#sHintBtn").onclick = () => {
    const t = SC.s.turns[SC.step];
    $("#sHint").innerHTML = t ? `<div class="hint-box">💡 ${esc(t.hint)}</div>` : "";
  };
  $("#sSkip").onclick = () => { SC.step++; paintScen(); };
  $("#sRestart").onclick = () => openScenario(SC.s.id);
  $("#sIn").focus();
}
function paintScen() {
  const { s, step } = SC;
  const dots = s.turns.map((_, i) => `<i class="${i < step ? "done" : i === step ? "on" : ""}"></i>`).join("");
  $("#sDots").innerHTML = dots;
  $("#sLog").innerHTML = SC.log.map(m => {
    if (m.r === "step") return `<div class="sc-step">${esc(m.t)}</div>`;
    let h = `<div class="msg ${m.r === "me" ? "me" : "bot"}" style="max-width:92%">`;
    h += `<div>${m.t}</div>`;
    if (m.a) h += `<div class="ar">${m.a}</div>`;
    if (m.fix && m.fix.length) h += m.fix.map(f => `<div class="fix">✏️ <b>${esc(f.fix)}</b><span class="why">${esc(f.why)}</span></div>`).join("");
    if (m.tip) h += `<div class="ar" style="border-top-color:var(--line)">💡 ${m.tip}</div>`;
    return h + `</div>`;
  }).join("");
  $("#sLog").scrollTop = 99999;
  $("#sHint").innerHTML = "";
}
function scenAnswer() {
  const inp = $("#sIn"); const v = (inp.value || "").trim();
  if (!v) return;
  const t = SC.s.turns[SC.step];
  SC.log.push({ r: "me", t: esc(v) });
  inp.value = "";
  const fixes = window.AI.correct(v);
  if (fixes.length) SC.log[SC.log.length - 1].fix = fixes;
  if (!t) { SC.log.push({ r: "bot", t: "That was the end of the role-play. Well done! 🎉", a: "هذا كان نهاية التمثيل. أحسنت! 🎉" }); paintScen(); return; }
  let good = false;
  const nt = window.AI.norm(v);
  good = t.expect.some(k => nt.includes(window.AI.norm(k)));
  setTimeout(() => {
    if (good) {
      SC.log.push({ r: "bot", t: esc(t.reply), a: esc(t.replyAr) });
      try { speak(t.reply, 0.95); } catch (e) {}
    } else {
      SC.log.push({ r: "bot", t: "Not quite. Try again 🙂", a: "ليس تماماً. حاول مرة أخرى 🙂", tip: t.hint });
    }
    SC.step++;
    paintScen();
    $("#sIn") && $("#sIn").focus();
  }, 480);
}

/* =========================================================
   الأفعال الشاذة + القواعد
   ========================================================= */
RENDER.verbs = function () {
  const draw = (q) => {
    const t = q.toLowerCase();
    return VERBS.map(g => {
      const rows = g.v.filter(r => !q || r.join(" ").toLowerCase().includes(t));
      if (!rows.length) return "";
      return `<div class="vgrp"><h4>${g.g} <span>${rows.length} فعل</span></h4>
        <div class="vrows">${rows.map(r =>
          `<div class="vrow"><b>${r[0]}</b><span style="color:var(--tx3)">→</span><span class="ar2">${r[1]}</span>
           <span style="color:var(--tx3)">→</span><span>${r[2]}</span><span class="p2">${r[3]}</span></div>`).join("")}</div></div>`;
    }).join("");
  };
  $("#verbList").innerHTML = draw("");
  $("#verbSearch").oninput = e => { $("#verbList").innerHTML = draw(e.target.value.trim()); };
}
/* =========================================================
   صفحة نطق الحروف
   ========================================================= */
let ltMode = "two";
function letterCard(L) {
  return `<div class="lt-card">
    <div class="lt-head">
      <div class="lt-ch">${esc(L.ch)}</div>
      <div class="lt-nm">${esc(L.ar)}</div>
      <div class="lt-nb">${L.s.length} نطق</div>
    </div>
    <div class="lt-sounds">
      ${L.s.map(x => `<div class="lt-s">
        <div class="lt-ipa">${esc(x.ipa)}</div>
        <div class="lt-rule">${esc(x.ar)}</div>
        <div class="lt-ex">${x.ex.map(w =>
          `<button class="lt-w" data-say="${esc(w)}"><span>${esc(w)}</span></button>`).join("")}</div>
      </div>`).join("")}
    </div>
  </div>`;
}
RENDER.letters = function () {
  const B = $("#ltBox"), L = $("#ltLead");
  $$("#ltSeg button").forEach(b => b.onclick = () => {
    ltMode = b.dataset.lf;
    $$("#ltSeg button").forEach(x => x.classList.toggle("on", x === b));
    RENDER.letters();
  });
  if (ltMode === "rule") {
    L.innerHTML = "القواعد الذهبية لكل نطق — احفظها مرة وحدة.";
    B.innerHTML = LETTER_RULES.map((r, i) => `
      <details class="rule" ${i === 0 ? "open" : ""}>
        <summary>${r.t} <span class="badge ${r.lv === "A1" ? "a1" : "a2"}">${r.lv}</span></summary>
        <div class="in">
          <div class="gpx">🎯 متى نستعمله: ${r.use}</div>
          <ul class="gpts">${r.m.map(m => `<li>${m}</li>`).join("")}</ul>
        </div>
      </details>`).join("");
    return;
  }
  const two = LETTER_SOUNDS.filter(x => x.s.length > 1);
  const list = ltMode === "two" ? two : LETTER_SOUNDS;
  L.innerHTML = ltMode === "two"
    ? `<b>${two.length}</b> حرف له نطقان — انطقهم بصوتين واسأل أيهم أقرب لكلمتين. اضغط 🔊 لتسمع.`
    : `<b>${LETTER_SOUNDS.length}</b> حرف — كل نطق مع القاعدة وأمثلة. اضغط 🔊 لتسمع.`;
  B.innerHTML = `<div class="lt-grid">${list.map(letterCard).join("")}</div>`;
  $$("#ltBox [data-say]").forEach(b => b.onclick = () => speak(b.dataset.say));
};

RENDER.irregular = function () {
  $("#rulesList").innerHTML = RULES.map((r, i) => `
    <details class="rule" ${i === 0 ? "open" : ""}>
      <summary>${r.t} <span class="badge ${r.lv === "A1" ? "a1" : "a2"}">${r.lv}</span></summary>
      <div class="in">
        <div class="gpx">🎯 متى نستعمله: ${r.use}</div>
        <ul class="gpts">${r.m.map(m => `<li>${m}</li>`).join("")}</ul>
      </div>
    </details>`).join("");
}
RENDER.aihelp = function () {
  $("#aiHelpBody").innerHTML = `
    <div class="grid2">${AI_TIPS.map(t =>
      `<div class="gbox" style="margin:0"><h3>${t.i} ${t.t}</h3>
       <div class="g-ar" style="margin:0">${t.c}</div></div>`).join("")}</div>
    <div class="gbox" style="margin-top:16px">
      <h3>🎯 خطة 30 يوماً للنطق</h3>
      <ul class="gpts">
        <li>الأسبوع ١-٢: الدروس ١-١٠ + بطاقات يومية (١٠ بطاقات)</li>
        <li>الأسبوع ٣: Present Simple +Past Simple + ٥ حوارات قصيرة يومياً</li>
        <li>الأسبوع ٤: Perfect/Modals + اختبار شامل + تمثيل أدوار يومية</li>
        <li>كل يوم: ١٥ دق divent تمرين + ١٠ كلمات جديدة + ١٠ دقائق استماع</li>
        <li>مراجعة: كل جمعة اختبار شامل + مراجعة البطاقات الضعيفة فقط</li>
      </ul>
    </div>`;
}

/* =========================================================
   البحث والمفضلة والإحصائيات
   ========================================================= */
function doSearch(q) {
  q = (q || "").trim().toLowerCase();
  const out = $("#searchOut");
  if (!q) { out.innerHTML = `<div class="empty"><div class="e">🔍</div>اكتب كلمة للبحث — بالإنجليزية أو العربية</div>`; return; }
  const words = allWords().filter(x => x.w.en.toLowerCase().includes(q) || x.w.ar.includes(q) || x.w.pr.includes(q));
  const units = ALL.filter(u => (u.title + " " + u.titleEn + " " + u.goal).toLowerCase().includes(q));
  let h = "";
  if (words.length) h += `<h2 class="sec">🔤 كلمات (${words.length})</h2>` + words.slice(0, 60).map(x =>
    `<div class="sres" data-u="${x.u.id}">
      <button class="w-btn" data-say="${esc(x.w.en)}">🔊</button>
      <div><div class="en">${esc(x.w.en)}</div><div class="u">${esc(x.w.pr)}</div></div>
      <div class="ar">${esc(x.w.ar)}</div>
    </div>`).join("");
  if (units.length) h += `<h2 class="sec">📚 دروس (${units.length})</h2>` + units.map(u =>
    `<div class="sres" data-u="${u.id}"><div class="u-ico" style="width:34px;height:34px;font-size:17px">${u.icon}</div>
     <div><div class="en">${esc(u.title)}</div><div class="u">${esc(u.titleEn)}</div></div>
     <span class="badge ${u.level.toLowerCase()}">${u.level}</span></div>`).join("");
  if (!words.length && !units.length) h = `<div class="empty"><div class="e">😕</div>لا توجد نتائج لـ «${esc(q)}»<br><span style="font-size:13px">جرّب كلمة أقصر</span></div>`;
  out.innerHTML = h;
  $$("#searchOut .sres").forEach(e => e.onclick = ev => {
    if (ev.target.closest("[data-say]")) { speak(ev.target.closest("[data-say]").dataset.say); return; }
    openLesson(e.dataset.u);
  });
  $$("#searchOut [data-say]").forEach(b => b.onclick = ev => { ev.stopPropagation(); speak(b.dataset.say); });
}
/* =========================================================
   ⭐ أهم الكلمات — قسم مستقل (٢٠٠ كلمة مرتّبة)
   ========================================================= */
let TOP_F = "all", TOP_L = "all";

function topRows() {
  const idx = new Map();
  allWords().forEach(x => { if (!idx.has(x.w.en)) idx.set(x.w.en, x); });
  return TOP200.map(g => ({ g, items: g.words.map(w => idx.get(w)).filter(Boolean) }));
}
function paintTopStats() {
  const el = $("#topStats"); if (!el) return;
  const rows = topRows().flatMap(x => x.items);
  const nA1 = rows.filter(x => x.u.level === "A1").length;
  const nA2 = rows.filter(x => x.u.level === "A2").length;
  const known = rows.filter(x => S.known[x.w.en]).length;
  el.innerHTML =
    `<div class="ts"><b>${rows.length}</b><span>كلمة</span></div>` +
    `<div class="ts a1"><b>${nA1}</b><span>A0 → A1</span></div>` +
    `<div class="ts a2"><b>${nA2}</b><span>A1 → A2</span></div>` +
    `<div class="ts ok"><b>${known}</b><span>أتقنتها ✓</span></div>`;
}
function topRowHTML(x) {
  const w = x.w, r = TOP_RANK[w.en] || "•", known = S.known[w.en], star = S.stars[w.en];
  return `<div class="wrow trow">
    <span class="w-n">${r}</span>
    <span class="badge ${x.u.level.toLowerCase()} tb">${x.u.level}</span>
    <div class="w-main">
      <div class="w-en">${esc(w.en)}</div>
      <div class="w-pr">${esc(w.pr)}</div>
      <div class="w-ar">${esc(w.ar)}</div>
    </div>
    <button class="star ${star ? "on" : ""}" data-star="${esc(w.en)}" title="مفضلة">${star ? "★" : "☆"}</button>
    <button class="w-btn" data-say="${esc(w.en)}" title="استمع">🔊</button>
    <button class="w-btn" data-ok="${esc(w.en)}" title="${known ? "أتقنتها" : "لم أتقنها بعد"}" style="${known ? "color:var(--ok)" : ""}">${known ? "✓" : "○"}</button>
    <div class="w-ex"><p class="en">${esc(w.ex.en)}</p><p class="ar">${esc(w.ex.ar)}</p></div>
  </div>`;
}
function bindTop(root) {
  $$(".wrow", root).forEach(r => r.onclick = e => { if (e.target.closest("button")) return; r.classList.toggle("open"); });
  $$("[data-say]", root).forEach(b => b.onclick = e => { e.stopPropagation(); speak(b.dataset.say); });
  $$("[data-star]", root).forEach(b => b.onclick = e => {
    e.stopPropagation(); const k = b.dataset.star;
    if (S.stars[k]) delete S.stars[k]; else S.stars[k] = 1;
    b.classList.toggle("on"); b.textContent = S.stars[k] ? "★" : "☆"; save();
  });
  $$("[data-ok]", root).forEach(b => b.onclick = e => {
    e.stopPropagation(); const k = b.dataset.ok;
    if (S.known[k]) { delete S.known[k]; delete S.weak[k]; }
    else { S.known[k] = 1; delete S.weak[k]; }
    b.textContent = S.known[k] ? "✓" : "○";
    b.style.color = S.known[k] ? "var(--ok)" : "";
    save(); paintProgress(); paintTopStats();
  });
}
RENDER.top = function () {
  const out = $("#topOut"); if (!out) return;
  if (!window.TOP200 || !TOP200.length) {
    out.innerHTML = `<div class="empty"><div class="e">😕</div>ملف «أهم الكلمات» غير محمّل<br><span style="font-size:13px">حدّث الصفحة (Ctrl+Shift+R)</span></div>`;
    return;
  }
  paintTopStats();
  $("#topSegG").innerHTML = [{ id: "all", t: "الكل" }]
    .concat(TOP200.map(g => ({ id: g.id, t: g.icon + " " + g.title })))
    .map(c => `<button data-f="${c.id}" class="${TOP_F === c.id ? "on" : ""}">${esc(c.t)}</button>`).join("");
  $("#topSegL").innerHTML = [{ id: "all", t: "كل المستويات" }, { id: "A1", t: "A0 → A1" }, { id: "A2", t: "A1 → A2" }]
    .map(c => `<button data-l="${c.id}" class="${TOP_L === c.id ? "on" : ""}">${esc(c.t)}</button>`).join("");

  let h = "", shown = 0;
  topRows().forEach(({ g, items }) => {
    if (TOP_F !== "all" && TOP_F !== g.id) return;
    const list = items.filter(x => TOP_L === "all" || x.u.level === TOP_L);
    if (!list.length) return;
    shown += list.length;
    h += `<div class="tgrp"><div class="tg-h">
        <div class="tg-i">${g.icon}</div>
        <div class="tg-b"><div class="tg-t">${esc(g.title)} <span class="tg-en">${esc(g.titleEn)}</span></div>
        <div class="tg-d">${esc(g.desc)}</div></div>
        <div class="tg-n">${list.length}<small>كلمة</small></div>
      </div></div>
      <div class="wlist">` + list.map(topRowHTML).join("") + `</div>`;
  });
  if (!shown) h = `<div class="empty"><div class="e">😕</div>لا توجد كلمات بهذا الفلتر</div>`;
  out.innerHTML = h;
  bindTop(out);
  $$("#topSegG button").forEach(b => b.onclick = () => { TOP_F = b.dataset.f; RENDER.top(); });
  $$("#topSegL button").forEach(b => b.onclick = () => { TOP_L = b.dataset.l; RENDER.top(); });
  const qb = $("#topQuizBtn");
  if (qb) qb.onclick = () => {
    if (!window.TOP200) { toast("ملف أهم الكلمات غير محمّل — حدّث الصفحة"); return; }
    QMODE = { id: "final", label: "أهم ٢٠٠ كلمة", pool: topPool() };
    Q = null;
    const a = $("#quizArea"); if (a) a.innerHTML = "";
    go("quiz");
    toast("⭐ اختبار على أهم ٢٠٠ كلمة فقط");
  };
}

RENDER.search = function () {
  if (!$("#searchOut").innerHTML) doSearch("");
  $("#mainSearch").oninput = e => doSearch(e.target.value);
  $("#mainSearch").onkeydown = e => { if (e.key === "Enter") go("search"); };
}
RENDER.bookmarks = function () {
  const k = Object.keys(S.stars || {});
  if (!k.length) { $("#bmList").innerHTML = `<div class="empty"><div class="e">☆</div>لا توجد كلمات مفضلة بعد<br><span style="font-size:13px">اضغط ☆ بجانب أي كلمة لحفظها هنا</span></div>`; return; }
  const list = allWords().filter(x => S.stars[x.w.en]);
  $("#bmList").innerHTML = `<div class="grid2">` + list.map(x =>
    `<div class="wrow" style="flex-wrap:wrap">
      <div class="w-main"><div class="w-en">${esc(x.w.en)}</div><div class="w-pr">${esc(x.w.pr)}</div><div class="w-ar">${esc(x.w.ar)}</div>
      <div class="w-ex" style="display:block"><p class="en">${esc(x.w.ex.en)}</p><p class="ar">${esc(x.w.ex.ar)}</p></div></div>
      <button class="w-btn" data-say="${esc(x.w.en)}">🔊</button>
      <button class="star on" data-un="${esc(x.w.en)}">★</button>
    </div>`).join("") + `</div>`;
  $$("#bmList [data-say]").forEach(b => b.onclick = () => speak(b.dataset.say));
  $$("#bmList [data-un]").forEach(b => b.onclick = () => { delete S.stars[b.dataset.un]; save(); RENDER.bookmarks(); });
}
RENDER.stats = function () {
  const list = allWords();
  const known = list.filter(x => S.known[x.w.en]).length;
  const weak = list.filter(x => S.weak[x.w.en] && !S.known[x.w.en]).length;
  const seen = list.filter(x => S.seen[x.w.en]).length;
  const stars = Object.keys(S.stars || {}).length;
  const doneU = ALL.filter(u => (S.units[u.id] || 0) >= u.words.length).length;
  const a1k = A1.filter(u => u.words).flatMap(u => u.words).filter(w => S.known[w.en]).length;
  const a2k = A2.flatMap(u => u.words).filter(w => S.known[w.en]).length;
  const a1t = A1.reduce((s, u) => s + u.words.length, 0), a2t = A2.reduce((s, u) => s + u.words.length, 0);
  const pct = list.length ? Math.round(known / list.length * 100) : 0;
  const uq = S.uquiz || {};
  const taken = Object.keys(uq);
  const unitTaken = taken.reduce((n, id) => n + (uq[id].taken || 0), 0);
  const unitAvg = taken.length
    ? Math.round(taken.reduce((n, id) => n + (uq[id].best || 0), 0) / taken.length) : 0;
  $("#statsBody").innerHTML = `
    <div class="stgrid">
      <div class="stbox"><div class="v">${pct}%</div><div class="l">نسبة الإتقان</div></div>
      <div class="stbox"><div class="v">${known}</div><div class="l">كلمة أعرفها</div></div>
      <div class="stbox"><div class="v">${list.length - known}</div><div class="l">كلمة متبقية</div></div>
      <div class="stbox"><div class="v">${weak}</div><div class="l">كلمة ضعيفة</div></div>
      <div class="stbox"><div class="v">${seen}</div><div class="l">كلمة راجعتها</div></div>
      <div class="stbox"><div class="v">${doneU}/${ALL.length}</div><div class="l">درس مكتمل</div></div>
      <div class="stbox"><div class="v">${S.quiz.best || 0}%</div><div class="l">أفضل نتيجة اختبار</div></div>
      <div class="stbox"><div class="v">${unitAvg}%</div><div class="l">متوسط نتيجة الدروس</div></div>
      <div class="stbox"><div class="v">${unitTaken}</div><div class="l">محاولات في الدروس</div></div>
      <div class="stbox"><div class="v">${S.streak}</div><div class="l">يوم متتالٍ 🔥</div></div>
      <div class="stbox"><div class="v">${stars}</div><div class="l">في المفضلة ★</div></div>
    </div>
    <div class="bars"><h3>📊 تقدمك حسب المرحلة</h3>
      <div class="barrow"><div class="t"><span>A0 → A1</span><span>${a1k} / ${a1t}</span></div><div class="b"><i style="width:${a1t ? a1k / a1t * 100 : 0}%"></i></div></div>
      <div class="barrow"><div class="t"><span>A1 → A2</span><span>${a2k} / ${a2t}</span></div><div class="b"><i style="width:${a2t ? a2k / a2t * 100 : 0}%"></i></div></div>
    </div>
    <div class="bars"><h3>🎯 حالة الاختبارات</h3>
      <div class="barrow"><div class="t"><span>عدد الاختبارات المؤداة</span><span>${S.quiz.taken || 0}</span></div><div class="b"><i style="width:${Math.min(100, (S.quiz.taken || 0) * 10)}%"></i></div></div>
      <div class="barrow"><div class="t"><span>آخر نتيجة</span><span>${S.quiz.last || 0}%</span></div><div class="b"><i style="width:${S.quiz.last || 0}%"></i></div></div>
      <div class="barrow"><div class="t"><span>أفضل نتيجة</span><span>${S.quiz.best || 0}%</span></div><div class="b"><i style="width:${S.quiz.best || 0}%"></i></div></div>
    </div>
    ${taken.length ? `<div class="bars" style="background:transparent;border:0;padding:0;margin-top:6px">
      <div class="l" style="font-weight:800;margin-bottom:10px">🏅 نتائج دروسك</div>
      ${ALL.filter(u => uq[u.id]).slice(0, 12).map(u => {
        const r = uq[u.id];
        return `<div class="barrow"><div class="t"><span>${u.icon} ${esc(u.title)}</span>
          <span>${r.best}% · ${r.taken} محاولة</span></div>
          <div class="b"><i style="width:${r.best}%"></i></div></div>`;
      }).join("")}
    </div>` : ""}

    <div class="bars" style="background:transparent;border:0;padding:0">
      <button class="btn ghost" id="wipe" style="width:100%">🗑 مسح كل بياناتي والبدء من جديد</button>
    </div>`;
  $("#wipe").onclick = () => { if (confirm("هل أنت متأكد؟ سيتم مسح كل تقدمك نهائياً.")) { localStorage.removeItem(LS); location.reload(); } };
}

/* =========================================================
   الربط
   ========================================================= */

RENDER.lesson = function () {};
RENDER.scenario = function () {};
const DIFF_TXT = {
  easy: "خيارات فقط (٢) + تلميح نطق · بدون كتابة",
  mid:  "٤ خيارات · بلا تلميحات",
  hard: "مشتّتات متشابهة · ١٢ سؤالاً",
  pro:  "لا يوجد اختيار من متعدد · اكتب إجاباتك"
};
const LVL_TXT = { all: "كل الكلمات", A1: "دروس A0 → A1", A2: "دروس A1 → A2" };
function paintDiff() {
  const d = S.diff || "mid";
  $$("#dpSeg .dp").forEach(x => x.classList.toggle("on", x.dataset.d === d));
  paintTopMode();
  const h = $("#dHint");
  if (h) h.innerHTML = "<b>" + (DIFF_TXT[d] || "") + "</b>  ·  مجموعة: <b>" +
    (QMODE && QMODE.label ? QMODE.label : (LVL_TXT[S.lvl] || LVL_TXT.all)) + "</b> (" + quizPool().length + " كلمة)";
}
RENDER.quiz = function () {
  paintDiff();
  const a = $("#quizArea");
  // اختبار جارٍ فعلاً؟ (سُؤال ظاهر وليس شاشة نتيجة)
  const live = Q && a && a.querySelector("#qbox") && !a.querySelector(".qres");
  if (!live) {                     // ما فيه شي — اعرض القائمة والسلّم نظيفين
    Q = null;
    const lw = $("#ladderWrap"); if (lw) lw.style.display = "";
    paintLadder();
    const m = $("#quizMenu"); if (m) m.style.display = "grid";
    const dr = $("#diffRow"); if (dr) dr.style.display = "";
    if (a) a.innerHTML = "";
  }
};
// ملاحظة: RENDER.sound معرّف في قسم الصوت أعلاه — لا تكرره هنا

/* =========================================================
   المراجعة اليومية الذكية «يومي»
   ========================================================= */
RENDER.daily = function () {
  S.goal = S.goal || 8;
  const g = $("#dailyGoal");
  if (g) g.innerHTML =
    `<div class="dl-card">
      <div class="dlc-h"><i>🎯</i><div><b>هدفك اليومي</b><small id="dlGoalTxt">${learnedOn(todayKey())} من ${S.goal} كلمة أتقنت اليوم</small></div></div>
      <div class="seg" id="goalSeg">${[5, 8, 12, 20].map(n => `<button data-g="${n}" class="${S.goal === n ? "on" : ""}">${arNum(n)}</button>`).join("")}</div>
      <div class="dl-bar"><i style="width:${Math.min(100, Math.round(learnedOn(todayKey()) / S.goal * 100))}%"></i></div>
    </div>`;
  $$("#goalSeg button").forEach(b => b.onclick = () => { S.goal = +b.dataset.g; if (!(S.plan && S.plan.done)) buildDailyPlan(true); save(); RENDER.daily(); });
  buildDailyPlan();
  paintDailyPlan();
  refreshCounters();
};
function refreshCounters() {
  const cd = $("#cntD"); if (cd) cd.textContent = String(learnedOn(todayKey()));
  const cw = $("#cntW"); if (cw) cw.textContent = String(Object.keys(S.wrong || {}).length);
}
function priorityWords() {
  // الترتيب: أهم ٢٠٠ ثم باقي الكلمات
  const top = new Set(topPool().map(x => x.w.en));
  return topPool().concat(allWords().filter(x => !top.has(x.w.en)));
}
function buildDailyPlan(force) {
  const t = todayKey();
  if (!force && S.plan && S.plan.date === t) return;
  const order = priorityWords();
  const notNew = S.plan && S.plan.date === t;
  const fresh = order.filter(x => !S.known[x.w.en]);
  const due = fresh.filter(x => srsDue(x.w.en)).map(x => x.w.en);
  const weak = fresh.filter(x => !srsDue(x.w.en) && S.weak[x.w.en] && S.seen[x.w.en]).map(x => x.w.en);
  const review = due.concat(weak).filter((v, i, a2) => a2.indexOf(v) === i).slice(0, 10);
  const newWords = order.filter(x => !S.seen[x.w.en] && !S.known[x.w.en]).slice(0, S.goal).map(x => x.w.en);
  S.plan = { date: t, review, new: newWords, words: newWords.concat(review), done: (notNew && S.plan.done) || false };
  save();
}
function planPool() {
  if (!S.plan || !S.plan.words || !S.plan.words.length) return [];
  const idx = new Map(allWords().map(x => [x.w.en, x]));
  return S.plan.words.map(en => idx.get(en)).filter(Boolean);
}
function paintDailyPlan() {
  const p = S.plan || {};
  const out = $("#dailyPlan");
  if (!out) return;
  const pool = planPool();
  const chips = en => { const idx = new Map(allWords().map(x => [x.w.en, x])); return (en || []).map(e => { const x = idx.get(e); return x ? `<button class="chip" data-say="${esc(e)}">${esc(x.w.en)} <small>${esc(x.w.ar)}</small></button>` : ""; }).join(""); };
  if (p.done) {
    out.innerHTML = `<div class="dl-card ok">
      <div class="dlc-h"><i>🔥</i><div><b>خلصت جلسة اليوم!</b><small>${arNum(p.words.length)} كلمة راجعت — رجّعنا بكرة كلمات جديدة</small></div></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn" id="dailyAgain">🔄 أعد المراجعة</button>
        <button class="btn ghost" id="dailyNewPlan">✨ جرّب جلسة الآن</button>
      </div></div>`;
    const a = $("#dailyAgain"); if (a) a.onclick = startDailyQuiz;
    const n = $("#dailyNewPlan"); if (n) n.onclick = () => { buildDailyPlan(true); RENDER.daily(); };
    bindChips();
    return;
  }
  if (!pool.length) {
    out.innerHTML = `<div class="dl-card ok"><div class="dlc-h"><i>🏆</i><div><b>جميع الكلمات متقنة!</b><small>ما فيه كلمات ضعيفة أو جديدة — استمتع بالاختبارات والقصة يلا</small></div></div></div>`;
    return;
  }
  out.innerHTML = `<div class="dl-card">
      <div class="dlc-h"><i>📋</i><div><b>جلسة اليوم</b><small>${arNum(p.words.length)} كلمة · ${arNum((p.new || []).length)} جديدة + ${arNum((p.review || []).length)} للمراجعة</small></div></div>
      <div class="dl-chips">${chips(p.new)}</div>
      ${(p.review || []).length ? `<div class="dl-chips rev">${chips(p.review)}</div>` : ""}
      <button class="btn" id="dailyGo" style="width:100%">🚀 ابدأ جلسة اليوم (${arNum(pool.length)} سؤالاً)</button>
      <button class="btn ghost" id="dailyNewPlan" style="width:100%">🧹 جلسة جديدة (كلمات تانية)</button>
    </div>`;
  const go = $("#dailyGo"); if (go) go.onclick = startDailyQuiz;
  const n = $("#dailyNewPlan"); if (n) n.onclick = () => { buildDailyPlan(true); RENDER.daily(); };
  bindChips();
}
function bindChips() {
  $$("[data-say]").forEach(b => b.onclick = () => speak(b.dataset.say || ""));
}
function startDailyQuiz() {
  const pool = planPool();
  if (!pool.length) { toast("ما فيه كلمات في جلسة اليوم"); return; }
  const list = mkQuestions("exam", pool, pool.length, "mid");
  if (!list.length) { toast("تعذّر تجهيز الأسئلة"); return; }
  Q = { kind: "daily", planDate: (S.plan || {}).date, hit: {}, miss: {}, diff: "mid", list, i: 0, score: 0, done: false, pool };
  const m = $("#quizMenu"); if (m) m.style.display = "none";
  const lw = $("#ladderWrap"); if (lw) lw.style.display = "none";
  const dr = $("#diffRow"); if (dr) dr.style.display = "none";
  QMODE = { id: "daily", label: "جلسة اليوم 🗓️", pool };
  paintTopMode(); paintDiff();
  renderQ();
  go("quiz");
}

/* =========================================================
   أخطائي
   ========================================================= */
RENDER.mistakes = function () {
  const out = $("#mistakeOut");
  if (!out) return;
  S.wrong = S.wrong || {};
  const idx = new Map(allWords().map(x => [x.w.en, x]));
  const items = Object.keys(S.wrong).map(en => {
    const ent = idx.get(en);
    let w = ent ? ent.w : null;
    let u = ent ? ent.u : null;
    if (!w) { for (const x of allWords()) if (x.w.ex && x.w.ex.en === en) { w = x.w; u = x.u; break; } }
    return { key: en, n: S.wrong[en].n, t: S.wrong[en].t, w, u, isWord: !!ent };
  }).sort((a, b) => b.n - a.n || b.t - a.t);
  const st = $("#mistakeStats");
  if (st) st.innerHTML = `<div class="dl-card"><div class="dlc-h"><i>❌</i><div><b>${arNum(items.length ? items.reduce((a, b) => a + b.n, 0) : 0)} أخطاء</b><small>الأكثر تكراراً أولاً — كل «اعرفها» تزيل الخطأ ولو من البطاقات الضعيفة</small></div></div></div>`;
  if (!items.length) { out.innerHTML = `<div class="dl-card ok"><div class="dlc-h"><i>✨</i><div><b>ما فيه أخطاء!</b><small>رائع — متى ما غلطت في اختبار أو إملاء بيظهر هنا</small></div></div></div>`; return; }
  out.innerHTML = items.map(it => {
    const head = it.isWord ? (it.w ? it.w.en : it.key) : it.key;
    const ar = it.w ? it.w.ar : "";
    const ex = it.w && it.w.ex ? `<small class="mx">${esc(it.w.ex.en)} — <b>${esc(it.w.ex.ar)}</b></small>` : "";
    return `<div class="mrow">
      <span class="m-badge">×${arNum(it.n)}</span>
      <div class="m-b"><b data-say="${esc(head)}">${it.isWord ? esc(head) : "💬 " + esc(head)}</b>
        <small class="ar">${ar ? esc(ar) : ""}</small>${ex}</div>
      <div class="m-a">
        <button class="icon sm" data-act="say" data-t="${esc(head)}">🔊</button>
        ${it.isWord ? `<button class="btn sm" data-act="know" data-t="${esc(head)}">✓ أعرفها</button>` : `<button class="btn ghost sm" data-act="drop" data-t="${esc(head)}">✕</button>`}
      </div>
    </div>`;
  }).join("");
  $$("#mistakeOut [data-act]").forEach(b => b.onclick = () => {
    const t = b.dataset.t, act = b.dataset.act;
    if (act === "say") { speak(t); return; }
    if (act === "know") {
      const x = idx.get(t);
      if (x) { S.known[x.w.en] = 1; delete S.weak[x.w.en]; markLearned(x.w.en); }
      delete S.wrong[t]; save(); RENDER.mistakes(); refreshCounters(); toast("تم — اختفى الخطأ");
    } else { delete S.wrong[t]; save(); RENDER.mistakes(); refreshCounters(); }
  });
};

/* =========================================================
   وضع الاستماع
   ========================================================= */
let LIST = { list: [], i: 0, playing: false, timer: null, withEx: false, rate: 1, gap: 6, src: "all" };
function listenItems(src) {
  if (src === "all") return topPool();
  if (src === "review") return allWords().filter(x => S.weak[x.w.en] && !S.known[x.w.en]);
  if (src === "mistakes") {
    const idx = new Map(allWords().map(x => [x.w.en, x]));
    return Object.keys(S.wrong || {}).map(en => idx.get(en)).filter(Boolean);
  }
  if (src === "daily") return planPool();
  return [];
}
RENDER.listen = function () {
  if (!LIST.list.length) LIST.list = listenItems("all");
  const cur = LIST.src || "all";
  const ss = $("#listenSrc");
  if (ss) ss.innerHTML = `<div class="seg" id="lsSeg">
      <button data-src="all"${cur === "all" ? " class='on'" : ""}>⭐ أهم ٢٠٠</button>
      <button data-src="review"${cur === "review" ? " class='on'" : ""}>🔁 الضعيفة</button>
      <button data-src="mistakes"${cur === "mistakes" ? " class='on'" : ""}>❌ أخطائي</button>
      <button data-src="daily"${cur === "daily" ? " class='on'" : ""}>🗓️ كلمات اليوم</button>
    </div>`;
  $$("#lsSeg button").forEach(b => b.onclick = () => {
    stopListen();
    LIST.src = b.dataset.src;
    LIST.list = listenItems(LIST.src); LIST.i = 0;
    paintListen();
  });
  paintListen();
};
function paintListen() {
  const p = $("#player"), l = $("#listenList");
  if (!p || !l) return;
  paintPlayer(p);
  l.innerHTML = LIST.list.map((x, i) =>
    `<button class="lrow ${i === LIST.i ? "on" : ""}" data-l="${i}"><span>${arNum(i + 1)}</span><b>${esc(x.w.en)}</b><small>${esc(x.w.ar)}</small></button>`).join("");
  $$("[data-l]").forEach(r => r.onclick = () => { LIST.i = +r.dataset.l; paintPlayer(p); if (LIST.playing) speakNow(); });
}
function paintPlayer(p) {
  const n = LIST.list.length, it = LIST.list[LIST.i];
  p.innerHTML = `<div class="player">
      <div class="pl-top"><span class="pl-ic">🎧</span>
        <div class="pl-t"><b>${it ? esc(it.w.en) : "—"}</b><small>${it ? esc(it.w.ar) : ""} · ${arNum(LIST.i + 1)} / ${arNum(n)}</small></div>
        <button class="icon" id="plX">✕</button>
      </div>
      <div class="pl-bar"><i style="width:${n ? Math.round(LIST.i / n * 100) : 0}%"></i></div>
      <div class="pl-ctrl">
        <button class="icon lg" id="plPrev">⏮</button>
        <button class="icon pll" id="plPlay">${LIST.playing ? "⏸" : "▶"}</button>
        <button class="icon lg" id="plNext">⏭</button>
      </div>
      <div class="pl-opts">
        <button data-plopt="ex" class="${LIST.withEx ? "on" : ""}">${LIST.withEx ? "مع المثال ✓" : "كلمة فقط"}</button>
        <button data-plopt="rate">${LIST.rate === 0.8 ? "بطيء ✓" : "بطيء"}</button>
        <button data-plopt="rateN">${LIST.rate === 1 ? "عادي ✓" : "عادي"}</button>
        <button data-plopt="gap">${LIST.gap === 3 ? "سريع ٣ث ✓" : "سريع ٣ث"}</button>
        <button data-plopt="gapN">${LIST.gap === 6 ? "٦ ث ✓" : "٦ ث"}</button>
      </div>
    </div>`;
  $$("[data-plopt]").forEach(b => b.onclick = () => {
    const o = b.dataset.plopt;
    if (o === "ex") LIST.withEx = !LIST.withEx;
    else if (o === "rate") LIST.rate = LIST.rate === 0.8 ? 1 : 0.8;
    else if (o === "rateN") LIST.rate = 1;
    else if (o === "gap") LIST.gap = 3;
    else if (o === "gapN") LIST.gap = 6;
    paintPlayer(p);
  });
  $("#plPlay").onclick = () => { LIST.playing ? pauseListen() : playListen(); paintPlayer(p); };
  $("#plPrev").onclick = () => { LIST.i = (LIST.i - 1 + LIST.list.length) % LIST.list.length; paintPlayer(p); if (LIST.playing) speakNow(); };
  $("#plNext").onclick = () => { LIST.i = (LIST.i + 1) % LIST.list.length; paintPlayer(p); if (LIST.playing) speakNow(); };
  $("#plX").onclick = () => { stopListen(); paintPlayer(p); };
}
function speakNow() {
  const it = LIST.list[LIST.i];
  if (!it) return;
  const txt = it.w.en + (LIST.withEx && it.w.ex ? ". " + it.w.ex.en : "");
  speak(txt, LIST.rate, true);
}
function playListen() {
  if (!LIST.list.length) { toast("القائمة فاضية"); return; }
  LIST.playing = true;
  speakNow();
  if (LIST.timer) clearInterval(LIST.timer);
  LIST.timer = setInterval(() => {
    if (!LIST.playing) return;
    LIST.i = (LIST.i + 1) % LIST.list.length;
    speakNow();
    const p = $("#player"); if (p) paintPlayer(p);
  }, LIST.gap * 1000);
}
function pauseListen() { LIST.playing = false; if (LIST.timer) { clearInterval(LIST.timer); LIST.timer = null; } if (window.speechSynthesis) speechSynthesis.cancel(); }
function stopListen() { pauseListen(); LIST.i = 0; }

/* ---------- الصوت: إملاء في المحادثة والتمثيل + التصحيح الفوري ---------- */
let REC = null, liveT = null;
function stopMic(btn) {
  if (REC) { try { REC.stop(); } catch (e) {} REC = null; }
  if (btn) btn.classList.remove("rec");
}
function startMic(btn, onTyping, onFinal) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { toast("متصفحك لا يدعم التعرف على الصوت — جرّب Chrome"); return; }
  if (REC) { stopMic(btn); return; }
  const r = new SR(); REC = r;
  r.lang = "en-US"; r.interimResults = true; r.maxAlternatives = 1; r.continuous = false;
  let last = "";
  btn.classList.add("rec");
  r.onresult = e => {
    let t = "";
    for (let i = 0; i < e.results.length; i++) t += e.results[i][0].transcript;
    last = t.trim();
    if (onTyping) onTyping(last);
  };
  r.onerror = e => {
    if (e.error === "not-allowed") toast("سمِّح بالمايك من المتصفح ثم أعد المحاولة");
    else if (e.error !== "aborted" && e.error !== "no-speech") {
      toast("لم أفهم الصوت — حاول مرة أخرى");
      if (onTyping) onTyping("");
    }
  };
  r.onend = () => { stopMic(btn); if (last) onFinal && onFinal(last); };
  try { r.start(); } catch (e) { stopMic(btn); }
}
function hideLive() { ["chatLive", "sLive"].forEach(id => { const el = $("#" + id); if (el) el.style.display = "none"; }); }
function liveCheck(inp) {
  const el = inp && inp.id === "chatInput" ? $("#chatLive") : $("#sLive");
  if (!el) return;
  clearTimeout(liveT);
  const v = (inp.value || "").trim();
  liveT = setTimeout(() => {
    if (!v || !/[a-z]/i.test(v)) { el.style.display = "none"; return; }
    const fixes = window.AI.correct(v);
    if (!fixes.length) { el.style.display = "none"; return; }
    const f = fixes[0];
    const applyable = /^[\x20-\x7E]+$/.test(f.fix) && v.indexOf(f.original) !== -1;
    el.innerHTML = `⚡ <span>${esc(f.original)}</span> → <b>${esc(f.fix)}</b><span class="why">${esc(f.why)}</span>` +
      (applyable ? ` <button type="button" class="btn sm live-fix-btn">استعمل</button>` : "");
    el.style.display = "flex";
    const b = el.querySelector(".live-fix-btn");
    if (b) b.onclick = () => { inp.value = v.replace(f.original, f.fix); hideLive(); inp.focus(); };
  }, 550);
}

function init() {
  setTheme(S.theme || "dark");
  touchDay();
  // nav
  $$(".nv").forEach(n => n.onclick = () => go(n.dataset.nav));
  $$("[data-go]").forEach(b => b.onclick = () => go(b.dataset.go));
  $("#menu").onclick = () => openSide(true);
  $("#closeSide").onclick = () => openSide(false);
  $("#overlay").onclick = () => openSide(false);
  $("#themeBtn").onclick = () => setTheme(S.theme === "light" ? "dark" : "light");
  $("#streakBtn").onclick = () => toast(S.streak > 0 ? `🔥 أنت متواصل ${S.streak} يوم — استمر!` : "ابدأ سلسلة اليوم!");
  $("#ttsBtn").onclick = () => {
    if (S.muted) { S.muted = false; save(); $("#ttsBtn").textContent = "🔊"; toast("تم تفعيل الصوت"); speak("Hello! I am your English teacher.", 0.9, true); }
    else go("sound");
  };
  // quick search
  let qt;
  $("#quickSearch").oninput = e => { clearTimeout(qt); const v = e.target.value; if (v.length < 2) return; qt = setTimeout(() => { $("#mainSearch").value = v; go("search"); }, 420); };
  // level seg
  $$("#lvlSeg button").forEach(b => b.onclick = () => { $$("#lvlSeg button").forEach(x => x.classList.remove("on")); b.classList.add("on"); S.lvl = b.dataset.lvl; save(); RENDER.lessons(); });
  if (S.lvl && S.lvl !== "all") { const b = $('#lvlSeg [data-lvl="' + S.lvl + '"]'); if (b) { $$("#lvlSeg button").forEach(x => x.classList.remove("on")); b.classList.add("on"); } }
  // deck seg
  $$("#deckSeg button").forEach(b => b.onclick = () => { $$("#deckSeg button").forEach(x => x.classList.remove("on")); b.classList.add("on"); S.deck = b.dataset.deck; save(); RENDER.cards(); });
  if (S.deck && S.deck !== "due") { const b = $('#deckSeg [data-deck="' + S.deck + '"]'); if (b) { $$("#deckSeg button").forEach(x => x.classList.remove("on")); b.classList.add("on"); } }
  // cards
  $("#flipCard").onclick = flipCard;
  $$(".fc-btns .btn").forEach(b => b.onclick = e => { e.stopPropagation(); grade(+b.dataset.grade); });
  $("#prevCard").onclick = () => { if (!deck.length) return; deckIdx = (deckIdx - 1 + deck.length) % deck.length; showCard(); };
  $("#nextCard").onclick = () => { if (!deck.length) return; deckIdx = (deckIdx + 1) % deck.length; showCard(); };
  $("#sayCard").onclick = () => { if (deck[deckIdx]) speak(deck[deckIdx].w.en, 0.9, true); };
  $("#slowCard").onclick = () => { if (deck[deckIdx]) speak(deck[deckIdx].w.en, 0.55, true); };
  $("#sayEx").onclick = () => { if (deck[deckIdx]) speak(deck[deckIdx].w.ex.en, 0.9, true); };
  $("#slowEx").onclick = () => { if (deck[deckIdx]) speak(deck[deckIdx].w.ex.en, 0.6, true); };
  $("#flipMode").onclick = () => { S.flipBack = !S.flipBack; $("#flipCard").classList.toggle("flip", S.flipBack); toast(S.flipBack ? "الترجمة في الأمام" : "الكلمة في الأمام"); };
  $("#resetDeck").onclick = () => { if (confirm("مسح تقدم البطاقات والبدء من جديد؟")) { S.known = {}; S.weak = {}; S.seen = {}; save(); RENDER.cards(); paintProgress(); toast("تم"); } };
  document.addEventListener("keydown", e => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (curView === "cards") { if (e.key === " ") { e.preventDefault(); flipCard(); } if (e.key === "ArrowLeft") $("#nextCard").click(); if (e.key === "ArrowRight") $("#prevCard").click(); }
  });
  // مستوى الصعوبة
  $$("#dpSeg .dp").forEach(b => b.onclick = () => { S.diff = b.dataset.d; save(); paintDiff(); });
  paintDiff();
  // quiz menu
  $$("#quizMenu .qcard").forEach(b => b.onclick = () => startQuiz(b.dataset.q));
  // إيقاف وضع "أهم ٢٠٠" / المراحل المتدرجة
  const tmx = $("#topModeX");
  if (tmx) tmx.onclick = () => {
    QMODE = null;
    Q = null;
    const a = $("#quizArea"); if (a) a.innerHTML = "";
    const lw = $("#ladderWrap"); if (lw) lw.style.display = "";
    paintLadder();
    const m = $("#quizMenu"); if (m) m.style.display = "grid";
    const dr = $("#diffRow"); if (dr) dr.style.display = "";
    paintDiff();
    toast("↩️ رجعت لباقي كلمات الموقع (" + quizPool().length + " كلمة)");
  };
  // chat
  $("#chatForm").onsubmit = e => { e.preventDefault(); hideLive(); sendChat(); };
  $("#clearChat").onclick = () => { if (confirm("مسح المحادثة؟")) { S.chat = []; save(); RENDER.chat(); } };
  $$("#chatSeg button").forEach(b => b.onclick = () => { $$("#chatSeg button").forEach(x => x.classList.remove("on")); b.classList.add("on"); chatMode = b.dataset.cl; paintChips(); });
  $("#micBtn").onclick = () => startMic($("#micBtn"), t => { const i = $("#chatInput"); i.value = t; i.selectionStart = i.selectionEnd = (t || "").length; $("#botStat").textContent = "أصغٍ إليك…"; }, () => { $("#botStat").textContent = "جاهز للمحادثة"; sendChat(); });
  const chatIn = $("#chatInput");
  chatIn && chatIn.addEventListener("input", () => liveCheck(chatIn));
  // splash
  setTimeout(() => {
    const sp = $("#splash"); if (sp) sp.classList.add("gone");
    if (!document.querySelector(".view.on")) go("home");   // لا تسحب المستخدم لو فتح صفحة بنفسه
  }, 900);
  // dismiss sound bar
  const sb = $("#closeBar");
  if (sb) sb.onclick = () => { $("#soundBar").style.display = "none"; localStorage.setItem("eng_soundbar", "0"); };
  if (localStorage.getItem("eng_soundbar") === "0" && $("#soundBar")) $("#soundBar").style.display = "none";
  if (S.muted) { const b = $("#ttsBtn"); if (b) b.textContent = "\u{1F507}"; }
  // welcome once
  if (!localStorage.getItem("eng_welcomed")) {
    localStorage.setItem("eng_welcomed", "1");
    setTimeout(() => toast("مرحباً! ابدأ من 📚 الدروس أو تحدث مع 🤖 المساعد"), 1600);
  }
  paintProgress();
}
document.addEventListener("DOMContentLoaded", init);

/* =========================================================
   فحص سلامة الإقلاع — لا تترك أي فشل صامتاً
   ========================================================= */
function bootFail(msg) {
  window.__BOOT_ERR = msg || "";
  if (window.__showBootErr) window.__showBootErr();
}
try {
  if (!A1.length || !A2.length || ALL.length < 10)
    bootFail("ملفات الكلمات لم تُحمّل (" + A1.length + "/" + A2.length + " درس)");
  else {
    window.__BOOT = true;
    var _b = document.getElementById("bootErr");
    if (_b) _b.remove();
  }
window.__DBG = function () { return { Q, S, LIST, QMODE, allWords, topPool, todayKey, RENDER, esc, $$ }; };
} catch (e) { bootFail("خطأ: " + e.message); }

})();
