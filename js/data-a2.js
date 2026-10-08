/* =========================================================
   A1 → A2  CURRICULUM
   ========================================================= */
window.DATA_A2 = [
{
  id: "a2-01", icon: "🔁", level: "A2",
  title: "الماضي البسيط", titleEn: "Past Simple",
  goal: "تحكي ماذا حدث في الماضي.",
  words: [
    { en: "yesterday", ar: "أمس", pr: "يستردي", ex: { en: "I worked yesterday.", ar: "عملت أمس." } },
    { en: "ago", ar: "منذ", pr: "أگو", ex: { en: "Two years ago I was a student.", ar: "منذ سنتين كنت طالباً." } },
    { en: "last night", ar: "الليلة الماضية", pr: "لاست نايت", ex: { en: "I called you last night.", ar: "اتصلت بك الليلة الماضية." } },
    { en: "went", ar: "ذهب (ماضٍ)", pr: "وينت", ex: { en: "We went to the park.", ar: "ذهبنا إلى الحديقة." } },
    { en: "saw", ar: "رأى (ماضٍ)", pr: "سو", ex: { en: "I saw a good film.", ar: "شاهدت فيلماً جيداً." } },
    { en: "ate", ar: "أكل (ماضٍ)", pr: "إيت", ex: { en: "He ate rice and meat.", ar: "أكل أرزاً ولحماً." } },
    { en: "bought", ar: "اشترى (ماضٍ)", pr: "بوت", ex: { en: "I bought a new phone.", ar: "اشتريت هاتفاً جديداً." } },
    { en: "made", ar: "صنع (ماضٍ)", pr: "مَيد", ex: { en: "She made a cake.", ar: "أعدّت كعكة." } },
    { en: "took", ar: "أخذ (ماضٍ)", pr: "توك", ex: { en: "I took a photo.", ar: "التقطت صورة." } },
    { en: "met", ar: "التقى (ماضٍ)", pr: "مِت", ex: { en: "I met my friend.", ar: "التقيت صديقي." } },
    { en: "told", ar: "أخبر (ماضٍ)", pr: "تولد", ex: { en: "She told me the truth.", ar: "أخبرني الحقيقة." } },
    { en: "found", ar: "وجد (ماضٍ)", pr: "فاوند", ex: { en: "I found my keys.", ar: "وجدت مفاتيحي." } },
    { en: "gave", ar: "أعطى (ماضٍ)", pr: "گيف", ex: { en: "He gave me a book.", ar: "أعطاني كتاباً." } },
    { en: "was / were", ar: "كان / كانوا (ماضٍ)", pr: "وَز / وِر", ex: { en: "It was a good day.", ar: "كان يوماً جيداً." } },
    { en: "didn't", ar: "لم يفعل (نفي ماضٍ)", pr: "ديدنت", ex: { en: "I didn't sleep.", ar: "لم أنم." } }
  ],
  grammar: {
    title: "Past Simple: القواعد",
    ar: "أضف -ed للفعل العادي، واستعمل الأفعال الشاذة كما هي.",
    points: [
      "Positive: I worked. / He works → He worked.",
      "Negative: I didn't work. (didn't + base verb)",
      "Question: Did you work? — Yes, I did. / No, I didn't.",
      "Note: work→worked, play→played, live→lived (تُضاف طبقة d إضافية)",
      "Note: y→ied (study→studied, cry→cried)",
      "الأفعال الشاذة: go→went, buy→bought, eat→ate, take→took, make→made, see→saw, tell→told, give→gave, find→found, meet→met, write→wrote, come→came, drink→drank, sleep→slept, run→ran, read→read (نفس النطق!), have→had",
      "⚠️ بعد did لا تضع -ed: ❌ I didn't went ✅ I didn't go"
    ],
    table: [
      ["Regular", "+ed", "worked, played"],
      ["y → ied", "", "studied, tried"],
      ["Irregular", "", "went, bought, ate, took"],
      ["with was/were", "", "I was, they were"]
    ]
  },
  talk: [
    { s: "A", en: "What did you do last weekend?", ar: "ماذا فعلت نهاية الأسبوع الماضي؟" },
    { s: "B", en: "I went to my grandmother's house.", ar: "ذهبت إلى بيت جدتي." },
    { s: "A", en: "Did you like it?", ar: "هل أعجبتك؟" },
    { s: "B", en: "Yes, we ate a lot and took photos. It was great!", ar: "نعم، أكلنا كثيراً والتقطنا صوراً. كان رائعاً!" },
    { s: "A", en: "Me too. I didn't rest at all.", ar: "وأنا أيضاً. لم أرتح إطلاقاً." }
  ]
},
{
  id: "a2-02", icon: "⏳", level: "A2",
  title: "المضارع المستمر", titleEn: "Present Continuous",
  goal: "تتحدث عن ما يحدث الآن أو من对未来 القريب.",
  words: [
    { en: "now", ar: "الآن", pr: "ناو", ex: { en: "I am studying now.", ar: "أدرس الآن." } },
    { en: "right now", ar: "في الوقت الحالي", pr: "رايت ناو", ex: { en: "What are you doing right now?", ar: "ماذا تفعل الآن؟" } },
    { en: "at the moment", ar: "في هذه اللحظة", pr: "أت ذ مومنت", ex: { en: "He is sleeping at the moment.", ar: "هو نائم في هذه اللحظة." } },
    { en: "today", ar: "اليوم", pr: "تودَي", ex: { en: "We are working today.", ar: "نعمل اليوم." } },
    { en: "waiting", ar: "ينتظر", pr: "ويتينغ", ex: { en: "I am waiting for the bus.", ar: "أنتظر الحافلة." } },
    { en: "looking for", ar: "يبحث عن", pr: "لوكينغ فور", ex: { en: "I am looking for my phone.", ar: "أبحث عن هاتفي." } },
    { en: "having", ar: "يتناول", pr: "هاڤِنغ", ex: { en: "I'm having lunch.", ar: "أتناول الغداء." } },
    { en: "using", ar: "يستعمل", pr: "يوزِنغ", ex: { en: "She is using the computer.", ar: "هي تستعمل الحاسوب." } },
    { en: "meeting", ar: "يلتقي", pr: "ميتينغ", ex: { en: "I am meeting Sara at seven.", ar: "ألتقي بسارة في السابعة." } },
    { en: "leaving", ar: "يغادر", pr: "ليفِنغ", ex: { en: "They are leaving tomorrow.", ar: "هم يغادرون غداً." } }
  ],
  grammar: {
    title: "am/is/are + ing",
    ar: "am/is/are + الفعل مع ing.",
    points: [
      "I am working. / She is working. / They are working.",
      "Spelling: work→working (double k!), run→running, sit→sitting",
      "make→making, take→taking (يحذف الـ e)",
      "السؤال: What are you doing? — I'm reading.",
      "الأفعال state verbs لا تستعمل continuous: know, like, want, need, love, hate, believe.",
      "⚠️ ❌ I am liking this. ✅ I like this."
    ],
    table: [
      ["I", "am + ing"], ["He/She/It", "is + ing"], ["You/We/They", "are + ing"],
      ["بدون adverb", "دائماً present simple"], ["مع now / at the moment", "present continuous"]
    ]
  },
  talk: [
    { s: "A", en: "Sorry, I'm calling you at a bad time.", ar: "آسف، أتصل بك في وقت سيئ." },
    { s: "B", en: "No problem. What are you doing?", ar: "لا مشكلة. ماذا تفعل؟" },
    { s: "A", en: "I'm looking for a new job.", ar: "أبحث عن عمل جديد." },
    { s: "B", en: "Good luck! I'm working at home today.", ar: "حظاً موفقاً! أعمل في المنزل اليوم." }
  ]
},
{
  id: "a2-03", icon: "🚀", level: "A2",
  title: "المستقبل: will و going to", titleEn: "Future: will / going to",
  goal: "تتحدث عن الخطط والاحتمالات المستقبلية.",
  words: [
    { en: "will", ar: "سوف", pr: "ويل", ex: { en: "I will call you tonight.", ar: "سأتصل بك الليلة." } },
    { en: "going to", ar: "سGoing", pr: "گوينغ تو", ex: { en: "I'm going to study medicine.", ar: "سأدرس الطب." } },
    { en: "tomorrow", ar: "غداً", pr: "تومورو", ex: { en: "See you tomorrow.", ar: "أراك غداً." } },
    { en: "next month", ar: "الشهر القادم", pr: "نيكسث مَنت", ex: { en: "I'm going to move next month.", ar: "سأنتقل الشهر القادم." } },
    { en: "next year", ar: "العام القادم", pr: "نيكسث يير", ex: { en: "Next year I will be 30.", ar: "العام القادم سأكون في الثلاثين." } },
    { en: "plan", ar: "يخطط", pr: "بلان", ex: { en: "What are your plans?", ar: "ما خططك؟" } },
    { en: "future", ar: "مستقبل", pr: "فيوتشر", ex: { en: "I want a better future.", ar: "أريد مستقبلاً أفضل." } },
    { en: "probably", ar: "على الأرجح", pr: "پروبَبلي", ex: { en: "It will probably rain.", ar: "من المحتمل أن تمطر." } },
    { en: "maybe", ar: "ربما", pr: "مِبي", ex: { en: "Maybe I will come.", ar: "ربما سآتي." } },
    { en: "hop(e)", ar: "يأمل", pr: "هوب", ex: { en: "I hope you are well.", ar: "أتمنى أن تكون بخير." } }
  ],
  grammar: {
    title: "will (قرار لحظي / وعود) vs going to (نيّة سابقة)",
    ar: "will للقرار اللحظي والوعد، و going to للنيّة المخطط لها مسبقاً.",
    points: [
      "Look at those clouds! It's going to rain.",
      "I'm going to visit my uncle (decided before).",
      "The phone is ringing. I'll answer it (decision now).",
      "I'll help you. / I promise I'll be there.",
      "Will you marry me? — will + subject + base verb (بدون to)",
      " negatives: won't / not going to"
    ],
    table: [
      ["will", "قرار لحظي، وعد، عرض", "I'll help you."],
      ["going to", "نيّة سابقة، دليل مرئي", "I'm going to buy a car."]
    ]
  },
  talk: [
    { s: "A", en: "What are you going to do this weekend?", ar: "ماذا ستفعل نهاية الأسبوع هذا؟" },
    { s: "B", en: "I'm going to finish my English course.", ar: "سأكمل دورة الإنجليزية." },
    { s: "A", en: "That sounds great. Will you pass the test?", ar: "يبدو رائعاً. هل ستنجح في الاختبار؟" },
    { s: "B", en: "I hope so! I'll study every evening.", ar: "أتمنى ذلك! سأدرس كل مساء." }
  ]
},
{
  id: "a2-04", icon: "⚖️", level: "A2",
  title: "المقارنة والتفضيل", titleEn: "Comparatives & Superlatives",
  goal: "تقارن بين شيئين وتحدد الأفضل.",
  words: [
    { en: "than", ar: "من", pr: "ذان", ex: { en: "Bigger than mine.", ar: "أكبر من ملكي." } },
    { en: "bigger", ar: "أكبر", pr: "بيگَر", ex: { en: "This bag is bigger.", ar: "هذه الحقيبة أكبر." } },
    { en: "smaller", ar: "أصغر", pr: "سمولَر", ex: { en: "It's smaller than yours.", ar: "إنه أصغر من yours." } },
    { en: "cheaper", ar: "أرخص", pr: "تشيپَر", ex: { en: "This one is cheaper.", ar: "هذا أرخص." } },
    { en: "more expensive", ar: "أغلى", pr: "مور إكسپنسِف", ex: { en: "It's more expensive there.", ar: "إنه أغلى هناك." } },
    { en: "faster", ar: "أسرع", pr: "فاستَر", ex: { en: "This car is faster.", ar: "هذه السيارة أسرع." } },
    { en: "better", ar: "أفضل", pr: "بيتر", ex: { en: "English is better than nothing.", ar: "الإنجليزية أفضل من لا شيء." } },
    { en: "worse", ar: "أسوأ", pr: "ورس", ex: { en: "The weather is worse today.", ar: "الطقس أسوأ اليوم." } },
    { en: "best", ar: "الأفضل", pr: "بيست", ex: { en: "She's the best student.", ar: "هي أحسن طالبة." } },
    { en: "worst", ar: "الأسوأ", pr: "ورست", ex: { en: "It was the worst day.", ar: "كان أسوأ يوم." } },
    { en: "more", ar: "أكثر", pr: "مور", ex: { en: "I need more time.", ar: "أحتاج وقتاً أكثر." } },
    { en: "less", ar: "أقل", pr: "لِس", ex: { en: "Less sugar, please.", ar: "سكر أقل من فضلك." } }
  ],
  grammar: {
    title: "قواعد المقارنة",
    ar: "الصفات القصيرة تضيف er، والطويلة تستعمل more.",
    points: [
      "tall → taller (لصفة ذات مقطع واحد)",
      "expensive → more expensive (3+ syllables)",
      "good → better, bad → worse, many/much → more, little → less",
      "far → farther/further, late → later",
      "التفضيل: the + -est / the most",
      "Irregular: good → the best, bad → the worst, old → the oldest, beautiful → the most beautiful",
      "نCancelledComparative مع than: taller than, more expensive than"
    ],
    table: [
      ["1 syllable", "+er / +est", "tall → taller → the tallest"],
      ["2 syllables ending -y", "y → ier / iest", "easy → easier → the easiest"],
      ["3+ syllables", "more / most", "beautiful → more beautiful → the most beautiful"],
      ["Irregular", "", "good → better → best, bad → worse → worst"]
    ]
  },
  talk: [
    { s: "A", en: "Which is cheaper, this one or that one?", ar: "أيهما أرخص، هذا أم ذلك؟" },
    { s: "B", en: "This one is cheaper, but that one is better quality.", ar: "هذا أرخص، لكن ذاك أفضل جودة." },
    { s: "A", en: "I think this one is better for me.", ar: "أعتقد أن هذا أفضل لي." },
    { s: "B", en: "Yes, and it's the cheapest in the shop!", ar: "نعم، وهو الأرخص في المحل!" }
  ]
},
{
  id: "a2-05", icon: "📦", level: "A2",
  title: "some / any / much / many / a lot of", titleEn: "Quantifiers",
  goal: "تستخدم كلمات الكمية بشكل صحيح.",
  words: [
    { en: "some", ar: "بعض / بعض من", pr: "سم", ex: { en: "I have some questions.", ar: "لدي بعض الأسئلة." } },
    { en: "any", ar: "أي (في النفي والسؤال)", pr: "إيني", ex: { en: "I don't have any money.", ar: "ليس لدي أي مال." } },
    { en: "a lot of", ar: "كثير من", pr: "أ لوت أَف", ex: { en: "There are a lot of people.", ar: "هناك كثير من الناس." } },
    { en: "lots of", ar: "كثير جداً", pr: "لوتس أَف", ex: { en: "There is lots of water.", ar: "هناك ماء كثير جداً." } },
    { en: "few", ar: "قليل (قابل للعد)", pr: "فيو", ex: { en: "I have few friends.", ar: "لدي أصدقاء قليلون." } },
    { en: "a few", ar: "بعض قليل", pr: "أ فيو", ex: { en: "I have a few friends.", ar: "لدي بعض الأصدقاء." } },
    { en: "little", ar: "قليل (غير قابل للعد)", pr: "لِتِل", ex: { en: "There is little milk.", ar: "هناك حليب قليل." } },
    { en: "a little", ar: "قليلاً", pr: "أ لِتِل", ex: { en: "I speak a little English.", ar: "أتكلم الإنجليزية قليلاً." } },
    { en: "enough", ar: "كافٍ", pr: "إِنَف", ex: { en: "I don't have enough time.", ar: "ليس لدي وقت كافٍ." } },
    { en: "too", ar: "جداً / أكثر من اللازم", pr: "تو", ex: { en: "This is too expensive.", ar: "هذا غالٍ جداً." } }
  ],
  grammar: {
    title: "قاعدة some / any",
    ar: "نستعمل some في الإيجاب ونستعمل any في النفي والسؤال.",
    points: [
      "I have some money. (positive)",
      "I don't have any money. (negative)",
      "Do you have any money? (question)",
      "Would you like some tea? (invitation = positive → some)",
      "a few + countable (بعض), a little + uncountable (قليلاً)",
      "a few = إيجابي (بعض), few = سلبي (قليل جداً لا يكفي)",
      "too much = أكثر من اللازم / too many = أكثر من اللازم للعدد"
    ],
    table: [
      ["Countable (+)", "some books, a few books"],
      ["Countable (–/?)", "any books, not many books"],
      ["Uncountable (+)", "some water, a little water"],
      ["Uncountable (–/?)", "not much water, any water"]
    ]
  },
  talk: [
    { s: "A", en: "Do you have any questions?", ar: "هل لديك أي أسئلة؟" },
    { s: "B", en: "Yes, I have a few. How much time do we have?", ar: "نعم، لدي بعض. كم وقت لدينا؟" },
    { s: "A", en: "We have enough time, but not much water.", ar: "لدينا وقت كافٍ، لكن ليس الكثير من الماء." },
    { s: "B", en: "OK. Let's not drink too much coffee.", ar: "حسناً. لا نشرب قهوة كثيرة جداً." }
  ]
},
{
  id: "a2-06", icon: "✅", level: "A2",
  title: "Present Perfect", titleEn: "Present Perfect (have/has + p.p.)",
  goal: "تتحدث عن تجارب وماضي له علاقة بالآن.",
  words: [
    { en: "already", ar: "قد / بالفعل", pr: "أولردي", ex: { en: "I have already eaten.", ar: "لقد أكلت بالفعل." } },
    { en: "just", ar: "الآن للتو", pr: "جست", ex: { en: "She has just left.", ar: "لقد غادرت الآن للتو." } },
    { en: "yet", ar: "بعد / حتى الآن (سؤال ونفي)", pr: "يِت", ex: { en: "Have you finished yet?", ar: "هل انتهيت بعد؟" } },
    { en: "ever", ar: "قطيعاً", pr: "إڤر", ex: { en: "Have you ever been to London?", ar: "هل زرت لندن قط؟" } },
    { en: "never", ar: "أبداً", pr: "نِڤر", ex: { en: "I have never tried sushi.", ar: "لمجرّب السوشي أبداً." } },
    { en: "before", ar: "من قبل", pr: "بي فور", ex: { en: "I saw her before.", ar: "رأيتها من قبل." } },
    { en: "since", ar: "منذ (وقت)", pr: "سِنس", ex: { en: "since 2020", ar: "منذ ٢٠٢٠" } },
    { en: "for", ar: "لمدة", pr: "فور", ex: { en: "for two years", ar: "لمدة سنتين" } },
    { en: "ago", ar: "منذ", pr: "أگو", ex: { en: "two days ago", ar: "منذ يومين" } },
    { en: "been", ar: "كان (مصدر)", pr: "بين", ex: { en: "I have been to Paris.", ar: "لقد زرت باريس." } },
    { en: "gone", ar: "ذهب (participio)", pr: "گون", ex: { en: "She has gone home.", ar: "لقد ذهبت إلى منزلها." } },
    { en: "wrote", ar: "كتب (participio)", pr: "روت", ex: { en: "I have written the email.", ar: "لقد كتبت الإيميل." } }
  ],
  grammar: {
    title: "Present Perfect = have/has + التصريف الثالث",
    ar: "لا نستخدم مع وقت محدد في الماضي (yesterday, last year).",
    points: [
      "I have worked here since 2019. (✅)",
      "I have worked here for 5 years. (✅)",
      "I worked here 5 years ago. (✅)",
      "❌ I have worked here last year. → ✅ I worked here last year.",
      "been + to = زيارة Inhibited (ذهبت وعدت) | gone = لا تزال هناك",
      "-ever/never مع I/you/we/they وليس he/she/it"
    ],
    table: [
      ["already", "I've already done it.", "positive"],
      ["just", "He's just called.", "positive"],
      ["yet", "Have you done it yet?", "negative/question"],
      ["ever / never", "Have you ever…? / I've never…", "question/negative"],
      ["since + نقطة", "since 2015, since Monday", ""],
      ["for + مدة", "for 3 hours, for a week", ""]
    ]
  },
  talk: [
    { s: "A", en: "Have you ever visited Istanbul?", ar: "هل زرت إسطنبول من قبل؟" },
    { s: "B", en: "Yes, I have. I went there two years ago.", ar: "نعم، لقد زرت. ذهبت هناك قبل سنتين." },
    { s: "A", en: "Have you finished your report yet?", ar: "هل انتهيت من تقريرك بعد؟" },
    { s: "B", en: "Not yet. I have just started. I have worked on it for a week.", ar: "ليس بعد. لقد بدأت للتو. وأنا أعمل عليه منذ أسبوع." }
  ]
},
{
  id: "a2-07", icon: "🎯", level: "A2",
  title: "Modal Verbs (should, must, have to, might)", titleEn: "Modals",
  goal: "تعبّر عن الواجب والاحتمال والقدرة.",
  words: [
    { en: "should", ar: "ينبغي", pr: "شُد", ex: { en: "You should sleep early.", ar: "ينبغي أن تنام مبكراً." } },
    { en: "must", ar: "يجب", pr: "مَست", ex: { en: "I must go now.", ar: "يجب أن أذهب الآن." } },
    { en: "have to", ar: "مضطر أن", pr: "هاف تو", ex: { en: "I have to wear a uniform.", ar: "مضطر لألبس زياً." } },
    { en: "might", ar: "قد", pr: "مايت", ex: { en: "It might rain later.", ar: "قد تمطر لاحقاً." } },
    { en: "can", ar: "يستطيع", pr: "كان", ex: { en: "I can speak Arabic.", ar: "أستطيع التحدث العربية." } },
    { en: "can't", ar: "لا يستطيع", pr: "كانت", ex: { en: "I can't come on Friday.", ar: "لا أستطيع الحضور يوم الجمعة." } },
    { en: "could", ar: "يستطيع (قدرة في الماضي)", pr: "كود", ex: { en: "Could you help me?", ar: "هل تساعدني؟" } },
    { en: "would like", ar: "يرغب", pr: "وود لايك", ex: { en: "I would like a coffee.", ar: "أود كوب قهوة." } },
    { en: "need / don't have to", ar: "لا يلزم", pr: "نيد", ex: { en: "You don't have to come early.", ar: "لا يلزم أن تأتي مبكراً." } },
    { en: "allowed", ar: "مسموح", pr: "ألاودِد", ex: { en: "Smoking isn't allowed here.", ar: "التدخين غير مسموح هنا." } }
  ],
  grammar: {
    title: "قاعدة الـ modals",
    ar: "بعد كل الفعل الناقص (modal) نضع الفعل في صورته الأساسية بدون to وبدون s.",
    points: [
      "You should study more.",
      "She must be tired. (99% sure) — must be = I'm sure",
      "He might be late. (50% sure) — might be = maybe",
      "can't = I'm sure he isn't. (100% sure of negative)",
      "مقارنة: must be (certain) / might be (possible) / can't be (impossible)",
      "have to = واجب خارجي مفروض عليك · must = واجب أو تخمين",
      "don't have to = لا واجب عليك (أي لست مضطراً)"
    ],
    table: [
      ["60% sure", "should / probably", "It should be fine."],
      ["50% sure", "may / might", "It might rain."],
      ["95% sure", "must", "He must be at home."],
      ["100% sure (not)", "can't", "He can't be at home."],
      ["ability", "can / could", "I can swim."],
      ["permission", "can / may", "Can I sit here?"]
    ]
  },
  talk: [
    { s: "A", en: "You look tired. You should rest.", ar: "تبدو متعباً. ينبغي أن ترتاح." },
    { s: "B", en: "I can't rest. I have to finish this report.", ar: "لا أستطيع الراحة. مضطر أن أنهي هذا التقرير." },
    { s: "A", en: "Maybe you can finish it tomorrow.", ar: "ربما يمكنك إنهائه غداً." },
    { s: "B", en: "That's true. I might be late tomorrow.", ar: "هذا صحيح. قد أتأخر غداً." }
  ]
},
{
  id: "a2-08", icon: "🔀", level: "A2",
  title: "Gerunds and Infinitives", titleEn: "-ing / to + verb",
  goal: "تعرف متى تستعمل ing ومتى تستعمل to.",
  words: [
    { en: "enjoy", ar: "يستمتع", pr: "إنجوي", ex: { en: "I enjoy reading books.", ar: "أستمتع بقراءة الكتب." } },
    { en: "like / love / hate", ar: "يحب / يكره", pr: "لايك", ex: { en: "I love cooking.", ar: "أحب الطبخ." } },
    { en: "want / decide / hope", ar: "يريد / يقرر / يأمل", pr: "وونت", ex: { en: "I want to travel.", ar: "أريد السفر." } },
    { en: "stop", ar: "يتوقف عن / يوقف", pr: "ستوب", ex: { en: "I stopped smoking. / I stopped to smoke.", ar: "توقفت عن التدخين. / توقفت لأدخن." } },
    { en: "remember / forget", ar: "يتذكر / ينسى", pr: "ريممبر", ex: { en: "Remember to close the door.", ar: "تذكر أن تغلق الباب." } },
    { en: "practice", ar: "يتدرب على", pr: "براكتِس", ex: { en: "I practice speaking English.", ar: "أتدرب على التحدث بالإنجليزية." } },
    { en: "finish / avoid", ar: "ينهي / يتجنب", pr: "فينِش", ex: { en: "I finished my homework.", ar: "أنهيت واجبي." } },
    { en: "mind", ar: "يmind", pr: "مايند", ex: { en: "Do you mind opening the window?", ar: "هل تمانع فتح النافذة؟" } },
    { en: "used to", ar: "اعتاد (قبل أن يتغير)", pr: "يوست تو", ex: { en: "I used to play football.", ar: "اعتدت لعب كرة القدم." } },
    { en: "look forward to", ar: "أتطلع إلى", pr: "لوك فوروارد تو", ex: { en: "I look forward to seeing you.", ar: "أتطلع إلى رؤيتك." } }
  ],
  grammar: {
    title: "متى نستعمل ing ومتى to؟",
    ar: "بعض الأفعال تليها ing فقط، وبعضها to فقط.",
    points: [
      "ing فقط: enjoy, finish, avoid, mind, practise, suggest, keep",
      "to فقط: want, decide, hope, plan, agree, promise, refuse",
      "الأفعال التي تقبل الاثنين معاً: love, like, hate, start, begin, continue",
      "I stopped smoking = I stopped doing it (عوّضت)",
      "I stopped to smoke = I paused in order to smoke (توقفت لأجل)",
      "look forward to + ing (to هنا preposition!)",
      "remember/forget + to do = تذكر/انسى أن تفعل"
    ],
    table: [
      ["enjoy / finish / avoid / mind", "+ ing"],
      ["want / decide / hope / plan / agree", "+ to inf"],
      ["love / like / hate / start / begin", "+ ing أو to"],
      ["stop doing / stop to do", "توقف عن / توقف لأجل"]
    ]
  },
  talk: [
    { s: "A", en: "What do you like doing in your free time?", ar: "ماذا تحب أن تفعل في وقت فراغك؟" },
    { s: "B", en: "I enjoy listening to music, but I want to learn guitar too.", ar: "أستمتع بالاستماع للموسيقى، لكن أريد تعلم الغيتار أيضاً." },
    { s: "A", en: "Do you mind if I join you?", ar: "هل تمانع أن أنضم إليك؟" },
    { s: "B", en: "Of course not. I used to play, but now I only listen.", ar: "بالطبع لا. اعتدت اللعب، لكنني الآن أستمع فقط." }
  ]
},
{
  id: "a2-09", icon: "👨‍👩‍👦", level: "A2",
  title: "صف الأشخاص والصفات", titleEn: "Describing People",
  goal: "تصف شكل شخص وطريقة كلامه بعمق.",
  words: [
    { en: "tall", ar: "طويل القامة", pr: "تول", ex: { en: "He is tall and thin.", ar: "هو طويل ونحيف." } },
    { en: "short", ar: "قصير", pr: "شورت", ex: { en: "She has short hair.", ar: "لديها شعر قصير." } },
    { en: "thin", ar: "نحيف", pr: "ثِن", ex: { en: "He is thin.", ar: "هو نحيف." } },
    { en: "young", ar: "شاب", pr: "يانگ", ex: { en: "They are young.", ar: "هم شباب." } },
    { en: "kind", ar: "طيب", pr: "كايند", ex: { en: "She is very kind to me.", ar: "هي طيبة جداً معي." } },
    { en: "friendly", ar: "ودود", pr: "فريندلي", ex: { en: "He looks friendly.", ar: "يبدو ودوداً." } },
    { en: "smart", ar: "ذكي", pr: "سمارت", ex: { en: "She is smart and hard-working.", ar: "هي ذكية ومجتهدة." } },
    { en: "quiet", ar: "هادئ", pr: "كوايت", ex: { en: "He is a quiet boy.", ar: "هو ولد هادئ." } },
    { en: "shy", ar: "خجول", pr: "شاي", ex: { en: "She is shy with strangers.", ar: "هي خجولة مع الغرباء." } },
    { en: "funny", ar: "مضحك", pr: "فَني", ex: { en: "My brother is very funny.", ar: "أخي مضحك جداً." } },
    { en: "handsome", ar: "وسيم", pr: "هانسَم", ex: { en: "He is handsome.", ar: "هو وسيم." } },
    { en: "beautiful", ar: "جميل", pr: "بيوتيفُل", ex: { en: "What a beautiful day!", ar: "يا لها من يوم جميل!" } },
    { en: "character", ar: "شخصية / طبع", pr: "كاراكتر", ex: { en: "He has a strong character.", ar: "له شخصية قوية." } },
    { en: "personality", ar: "شخصية", pr: "بيرسونااليتي", ex: { en: "She has a great personality.", ar: "لديها شخصية رائعة." } }
  ],
  grammar: {
    title: "a / an + adjective + noun",
    ar: "صفات تصف الفرد، و we use they للمجموعة.",
    points: [
      "a tall man, a young woman, an old man, an honest person",
      "a nice day, a lovely evening, an interesting book",
      "تذكر: an قبل الصوت (a useful, an old, an expensive, an honest)",
      "الجمع: young people, nice houses",
      "be of + صفة: He is of medium height."
    ],
    table: [
      ["a + consonant sound", "a tall man, a big car"],
      ["an + vowel sound", "an old man, an apple"],
      ["I am", "I'm tall."],
      ["he/she/it is", "She is friendly."],
      ["we/they are", "They are friendly."]
    ]
  },
  talk: [
    { s: "A", en: "Tell me about your best friend.", ar: "حدثني عن أفضل صديق لك." },
    { s: "B", en: "His name is Omar. He is tall, thin and very funny.", ar: "اسمه عمر. هو طويل ونحيف ومضحك جداً." },
    { s: "A", en: "Is he sociable?", ar: "هل هو اجتماعي؟" },
    { s: "B", en: "Yes, he is a friendly and outgoing person with a strong personality.", ar: "نعم، هو شخص ودود ومنفتح بشخصية قوية." }
  ]
},
{
  id: "a2-10", icon: "✈️", level: "A2",
  title: "السفر والطيران", titleEn: "Travel & Transport",
  goal: "تحجز رحلة وتتعامل مع المطار.",
  words: [
    { en: "flight", ar: "رحلة جوية", pr: "فلايت", ex: { en: "My flight is at 6 a.m.", ar: "رحلتي في السادسة صباحاً." } },
    { en: "delay", ar: "تأخير", pr: "ديلاي", ex: { en: "The flight was delayed.", ar: "تأخرت الرحلة." } },
    { en: "cancel", ar: "يلغي", pr: "كانسل", ex: { en: "They cancelled my booking.", ar: "ألغوا حجزي." } },
    { en: "boarding pass", ar: "بطاقة صعود", pr: "بوردِنغ باس", ex: { en: "Here is my boarding pass.", ar: "هذه بطاقة صعودي." } },
    { en: "gate", ar: "بوابة", pr: "گيت", ex: { en: "Gate 12, please.", ar: "البوابة ١٢ من فضلك." } },
    { en: "seat", ar: "مقعد", pr: "سيت", ex: { en: "Is this seat free?", ar: "هل هذا المقعد فارغ؟" } },
    { en: "luggage", ar: "أمتعة", pr: "لاگِج", ex: { en: "Where can I leave my luggage?", ar: "أين يمكنني ترك أمتعتي؟" } },
    { en: "taxi", ar: "سيارة أجرة", pr: "تاكسي", ex: { en: "Can I get a taxi?", ar: "هل يمكنني الحصول على تاكسي؟" } },
    { en: "traffic", ar: "حركة مرور", pr: "ترافك", ex: { en: "The traffic is terrible.", ar: "حركة المرورفظيفة جداً." } },
    { en: "journey", ar: "رحلة", pr: "جِرني", ex: { en: "It was a long journey.", ar: "كانت رحلة طويلة." } },
    { en: "abroad", ar: "في الخارج", pr: "أبرود", ex: { en: "I want to study abroad.", ar: "أريد الدراسة في الخارج." } },
    { en: "map", ar: "خريطة", pr: "ماب", ex: { en: "Can I have a map, please?", ar: "هل يمكنني الحصول على خريطة؟" } }
  ],
  grammar: {
    title: "الطيران + المستقبل والتعبيرات",
    ar: "صيغ خاصة بالمطار والفنادق.",
    points: [
      "The flight to London leaves at 9:40 from gate 5.",
      "I'd like to change my flight, please.",
      "Is the flight on time? / My flight has been delayed.",
      "I need to catch the 7 o'clock train.",
      "أثناء: while, during + noun, when + clause"
    ]
  },
  talk: [
    { s: "A", en: "Good morning. May I see your passport and ticket?", ar: "صباح الخير. هل أرى جواز سفرك وتذكرتك؟" },
    { s: "B", en: "Here you are. Is my flight on time?", ar: "تفضل. هل رحلتي في وقتها؟" },
    { s: "A", en: "Yes, boarding starts at 9. Gate 12.", ar: "نعم، يبدأ الصعود في التاسعة. البوابة ١٢." },
    { s: "B", en: "Where can I find the toilets?", ar: "أين أجد دورات المياه؟" }
  ]
},
{
  id: "a2-11", icon: "🏥", level: "A2",
  title: "الصحة والطبيب", titleEn: "Health & The Doctor",
  goal: "تصف حالتك الصحية وتذهب للطبيب.",
  words: [
    { en: "sick / ill", ar: "مريض", pr: "سِك / إل", ex: { en: "I feel sick.", ar: "أشعر بالمرض." } },
    { en: "pain", ar: "ألم", pr: "بين", ex: { en: "I have a pain in my back.", ar: "لدي ألم في ظهري." } },
    { en: "fever", ar: "حمى", pr: "فيڤر", ex: { en: "He has a high fever.", ar: "لديه حمى عالية." } },
    { en: "cough", ar: "سعال", pr: "كوف", ex: { en: "I have a bad cough.", ar: "لدي سعال شديد." } },
    { en: "cold", ar: "برد", pr: "كولد", ex: { en: "I have a cold.", ar: "لدي برد." } },
    { en: "headache", ar: "صداع", pr: "هِد إيك", ex: { en: "I have a headache.", ar: "لدي صداع." } },
    { en: "medicine", ar: "دواء", pr: "مِدسِن", ex: { en: "Take this medicine twice a day.", ar: "خذ هذا الدواء مرتين في اليوم." } },
    { en: "tablet / pill", ar: "قرص", pr: "تابلت", ex: { en: "One tablet after meals.", ar: "قرص واحد بعد الأكل." } },
    { en: "rest", ar: "يرتاح", pr: "ريست", ex: { en: "You need to rest.", ar: "تحتاج أن ترتاح." } },
    { en: "better", ar: "أفضل (تحسن)", pr: "بيتر", ex: { en: "I'm feeling better now.", ar: "أشعر بالتحسن الآن." } },
    { en: "healthy", ar: "صحي", pr: "هِلثي", ex: { en: "Eat healthy food.", ar: "كل طعاماً صحياً." } },
    { en: "exercise", ar: "رياضة", pr: "إكسَرسائز", ex: { en: "I do exercise every morning.", ar: "أمارس الرياضة كل صباح." } }
  ],
  grammar: {
    title: "should / must + health advice",
    ar: "نصيحة طبية تستخدم Modal Verbs و infinitives.",
    points: [
      "You should see a doctor.",
      "You mustn't / shouldn't smoke.",
      "You need to drink more water.",
      "Why don't you take an aspirin? (نصيحة)",
      "Let's + base verb = مقترح: Let's go now.",
      "I'd better + base verb = من الأفضل"
    ]
  },
  talk: [
    { s: "A", en: "How do you feel today?", ar: "كيف تشعر اليوم؟" },
    { s: "B", en: "I don't feel well. I have a fever and a headache.", ar: "لا أشعر-PCR جيداً. لدي حمى وصداع." },
    { s: "A", en: "How long have you felt like this?", ar: "منذ متى وأنت تشعر بهذا؟" },
    { s: "B", en: "Since yesterday evening. I think I have a cold.", ar: "منذ مساء أمس. أعتقد أن لدي برد." },
    { s: "A", en: "You should rest and drink a lot of water.", ar: "ينبغي أن ترتاح وتشرب الكثير من الماء." }
  ]
},
{
  id: "a2-12", icon: "💬", level: "A2",
  title: "المحادثة الهاتفية والإيميل", titleEn: "Phone Calls & Email",
  goal: "تتصل بشخص وتكتب رسالة رسمية.",
  words: [
    { en: "call", ar: "يتصل", pr: "كول", ex: { en: "I'll call you later.", ar: "سأتصل بك لاحقاً." } },
    { en: "answer", ar: "يجيب", pr: "آنسَر", ex: { en: "Nobody answers the phone.", ar: "لا أحد يجيب الهاتف." } },
    { en: "message", ar: "رسالة", pr: "مِسِج", ex: { en: "I left a message for you.", ar: "تركت لك رسالة." } },
    { en: "text", ar: "نص / رسالة نصية", pr: "تكست", ex: { en: "I'll text you later.", ar: "سأراسلك نصياً لاحقاً." } },
    { en: "email", ar: "إيميل", pr: "إيميل", ex: { en: "I'll send you an email.", ar: "سأرسل لك إيميلاً." } },
    { en: "reply", ar: "يرد", pr: "ريبلاي", ex: { en: "Please reply as soon as possible.", ar: "يرجى الرد في أقرب وقت." } },
    { en: "subject", ar: "موضوع", pr: "سَبزكت", ex: { en: "The subject is 'Meeting'.", ar: "الموضوع هو «اجتماع»." } },
    { en: "attach", ar: "يرفق", pr: "أَتَش", ex: { en: "I attached the file.", ar: "أرفقت الملف." } },
    { en: "as soon as possible", ar: "في أقرب وقت", pr: "أز سون أَز پازِبل", ex: { en: "Call me as soon as possible.", ar: "اتصل بي في أقرب وقت." } },
    { en: "attend", ar: "يحضر", pr: "أتِند", ex: { en: "Will you attend the meeting?", ar: "هل ستحضر الاجتماع؟" } },
    { en: "confirm", ar: "يؤكد", pr: "كَنفيرم", ex: { en: "Please confirm your attendance.", ar: "يرجى تأكيد حضورك." } },
    { en: "dear", ar: "عزيزي", pr: "دير", ex: { en: "Dear Sir or Madam,", ar: "السادة الأحترمين،" } }
  ],
  grammar: {
    title: "لغة الإيميل + polite requests",
    ar: "عبارات مهذبة لطلب شيء.",
    points: [
      "Could you please send me the file? — هل يمكنك إرسال لي الملف؟",
      "Would you mind + ing? — هل تمانع…؟",
      "I was wondering if you could… — تساءلت إن كان بإمكانك…",
      "Looking forward to hearing from you. — أتطلع لسماع ردك.",
      "Best regards / Kind regards. — مع التحية،"
    ]
  },
  talk: [
    { s: "A", en: "Hello, may I speak to Mr. Ahmed, please?", ar: "مرحبا، هل أتكلم مع السيد أحمد من فضلك؟" },
    { s: "B", en: "Speaking. How can I help you?", ar: "نعم، أنا أتحدث. كيف يمكنني مساعدتك؟" },
    { s: "A", en: "I'm calling about tomorrow's meeting.", ar: "أتصل بخصوص اجتماع الغد." },
    { s: "B", en: "I'm afraid I can't attend. Could you send me the minutes?", ar: "أخشى أن لا أستطيع الحضور. هل يمكنك إرسال لي محضر الاجتماع؟" },
    { s: "A", en: "Of course. I'll email you later.", ar: "بالطبع. سأرسل لك إيميلاً لاحقاً." }
  ]
},
{
  id: "a2-13", icon: "🎓", level: "A2",
  title: "الدراسة والعمل", titleEn: "Study & Work",
  goal: "تتحدث عن دراستك ووظيفتك وخططك.",
  words: [
    { en: "university", ar: "جامعة", pr: "يونيڤرسيتي", ex: { en: "I study at Sanaa University.", ar: "أدرس في جامعة صنعاء." } },
    { en: "degree", ar: "شهادة", pr: "دِگري", ex: { en: "I have a master's degree.", ar: "لدي شهادة ماجستير." } },
    { en: "exam", ar: "امتحان", pr: "إگزام", ex: { en: "I have an exam tomorrow.", ar: "لدي امتحان غداً." } },
    { en: "course", ar: "دورة", pr: "كورس", ex: { en: "I'm taking an English course.", ar: "آخذ دورة إنجليزية." } },
    { en: "subject", ar: "مادة", pr: "سَبزكت", ex: { en: "My favourite subject is history.", ar: "مادتي المفضلة التاريخ." } },
    { en: "homework", ar: "واجب", pr: "هوم وورك", ex: { en: "I have a lot of homework.", ar: "لدي واجب كثير." } },
    { en: "exam results", ar: "نتائج", pr: "ريزلتس", ex: { en: "I got good results.", ar: "حصلت على نتائج جيدة." } },
    { en: "experience", ar: "خبرة", pr: "إكسپيرِانس", ex: { en: "I have two years of experience.", ar: "لدي سنتا خبرة." } },
    { en: "interview", ar: "مقابلة", pr: "إنترڤيو", ex: { en: "I have a job interview on Monday.", ar: "لدي مقابلة عمل يوم الاثنين." } },
    { en: "skills", ar: "مهارات", pr: "سكيلز", ex: { en: "Computer skills are important.", ar: "مهارات الحاسوب مهمة." } },
    { en: "career", ar: "مسيرة مهنية", pr: "كيرير", ex: { en: "I want a career in IT.", ar: "أريد مسيرة في تقنية المعلومات." } }
  ],
  grammar: {
    title: "gerund بعد prepositions + résumé language",
    ar: "لغة الـ CV والمقابلات.",
    points: [
      "I'm good at problem solving. / bad at time management.",
      "interested in, keen on, afraid of, good at, bad at + noun/ing",
      "I have experience in training people.",
      "Responsibilities: I am responsible for…",
      "Achievements: I managed to… / I successfully…",
      "Looking for: I am looking for a position as…"
    ],
    table: [
      ["good at", "preposition", "preposition + noun/ing"],
      ["interested in", "preposition", "preposition + noun/ing"],
      ["responsible for", "preposition", "preposition + noun/ing"],
      ["experience in", "preposition", "preposition + noun/ing"]
    ]
  },
  talk: [
    { s: "A", en: "Tell me about yourself.", ar: "حدثني عن نفسك." },
    { s: "B", en: "I have a degree in English and two years of teaching experience.", ar: "لدي شهادة في الإنجليزية وسنتا خبرة في التدريس." },
    { s: "A", en: "What are your strengths?", ar: "ما نقاط قوتك؟" },
    { s: "B", en: "I'm good at explaining difficult ideas simply, and I work well in a team.", ar: "جيد في شرح الأفكار الصعبة ببساطة، وأعمل جيداً ضمن فريق." },
    { s: "A", en: "Why should we hire you?", ar: "لماذا يجب أن نوظفك؟" },
    { s: "B", en: "Because I'm reliable, I learn fast, and I really need this job.", ar: "لأنني موثوق، وأتعلم بسرعة، وأنا بحاجة فعلية لهذه الوظيفة." }
  ]
},
{
  id: "a2-14", icon: "📱", level: "A2",
  title: "التكنولوجيا", titleEn: "Technology",
  goal: "تتحدث عن الأجهزة والإنترنت والتطبيقات.",
  words: [
    { en: "computer", ar: "حاسوب", pr: "كمبيوتر", ex: { en: "I work on the computer all day.", ar: "أعمل على الحاسوب طوال اليوم." } },
    { en: "laptop", ar: "حاسوب محمول", pr: "لابتوب", ex: { en: "She bought a new laptop.", ar: "اشترت حاسوباً محمولاً جديداً." } },
    { en: "screen", ar: "شاشة", pr: "سكرين", ex: { en: "Don't look at the screen too long.", ar: "لا تنظر إلى الشاشة طويلاً." } },
    { en: "internet", ar: "إنترنت", pr: "إنتر نت", ex: { en: "The internet is slow today.", ar: "الإنترنت بطيء اليوم." } },
    { en: "website", ar: "موقع", pr: "ويب سايت", ex: { en: "I found a good website.", ar: "وجدت موقعاً جيداً." } },
    { en: "password", ar: "كلمة مرور", pr: "پاسوورد", ex: { en: "I forgot my password.", ar: "نسيت كلمة المرور." } },
    { en: "download", ar: "يحمل", pr: "دانلود", ex: { en: "Download the app, please.", ar: "حمّل التطبيق من فضلك." } },
    { en: "install", ar: "يثبّت", pr: "إنستول", ex: { en: "I need to install an update.", ar: "أحتاج تثبيت تحديث." } },
    { en: "click", ar: "ينقر", pr: "كليك", ex: { en: "Click on the green button.", ar: "انقر على الزر الأخضر." } },
    { en: "device", ar: "جهاز", pr: "ديڤايس", ex: { en: "This device is new.", ar: "هذا الجهاز جديد." } },
    { en: "network", ar: "شبكة", pr: "نتوورك", ex: { en: "The network is down.", ar: "الشبكة معطلة." } },
    { en: "print", ar: "يطبع", pr: "برنت", ex: { en: "Can you print this document?", ar: "هل يمكنك طباعة هذا المستند؟" } }
  ],
  grammar: {
    title: "تعبيرات Technology",
    ar: "أسئلة ومفردات تقنية أساسية.",
    points: [
      "How do I connect to the Wi-Fi?",
      "I can't log in. / I've forgotten my username.",
      "The app crashed. / It's not working.",
      "My phone is out of battery. — شحن: charging",
      "Have you backed up your files?",
      "Could you send me the file by email?"
    ]
  },
  talk: [
    { s: "A", en: "Excuse me, is the Wi-Fi working?", ar: "عذراً، هل الواي فاي يعمل؟" },
    { s: "B", en: "Yes, the password is on the wall.", ar: "نعم، كلمة المرور مكتوبة على الحائط." },
    { s: "A", en: "Thank you. Can I use your printer?", ar: "شكراً. هل يمكنني استخدام طابعةك؟" },
    { s: "B", en: "Of course. But my laptop is slow today.", ar: "بالطبع. لكن حاسوبي بطيء اليوم." },
    { s: "A", en: "No problem. You should install the latest update.", ar: "لا مشكلة. ينبغي أن تثبت آخر تحديث." }
  ]
},
{
  id: "a2-15", icon: "🔗", level: "A2",
  title: "جمل الوصل (who / which / that)", titleEn: "Relative Clauses",
  goal: "تصف شخصاً أو شيئاً وتضيف معلومات عنه.",
  words: [
    { en: "who", ar: "الذي (لشخص)", pr: "هو", ex: { en: "The man who called you is here.", ar: "الرجل الذي اتصل بك هنا." } },
    { en: "which", ar: "الذي (لشيء)", pr: "ويتش", ex: { en: "The book which you want is on the table.", ar: "الكتاب الذي تريده على الطاولة." } },
    { en: "that", ar: "الذي (للاثنين)", pr: "ذات", ex: { en: "That's the house that I like.", ar: "هذا هو البيت الذي أحبه." } },
    { en: "where", ar: "حيث", pr: "وير", ex: { en: "This is the park where we met.", ar: "هذه الحديقة حيث التقينا." } },
    { en: "when", ar: "حينما", pr: "وين", ex: { en: "I remember the day when we won.", ar: "أتذكر اليوم الذي فزنا فيه." } },
    { en: "whose", ar: "الذي لـ", pr: "هوز", ex: { en: "The man whose car is red is my uncle.", ar: "الرجلwhose سيارته حمراء عمي." } },
    { en: "relative clause", ar: "جملة وصفية", pr: "ريلاتيف كلوز", ex: { en: "A relative clause gives extra information.", ar: "جملة الوصل تعطي معلومات إضافية." } },
    { en: "define / define", ar: "يعرّف", pr: "ديفاين", ex: { en: "The person who called is Sara.", ar: "الشخص الذي اتصل هو سارة." } },
    { en: "define by", ar: "يُعرف بـ", pr: "ديفاين باي", ex: { en: "He's known by his kindness.", ar: "يُعرف بلطفه." } }
  ],
  grammar: {
    title: "جملة الوصل: who / which / that / where",
    ar: "نستعملها بعد الاسم مباشرة بدون فاصلة في المعنى المحدَّد.",
    points: [
      "The girl who sits next to me is from Egypt.",
      "The car which I bought is expensive.",
      "I know a man who speaks five languages.",
      "This is the restaurant where we had dinner.",
      "❌ The car that is red and it is fast ✅ The car that is red and fast",
      "بدون relative: The girl next to me is from Egypt."
    ],
    table: [
      ["people", "who / that", "the man who called"],
      ["things", "which / that", "the book which I read"],
      ["places", "where", "the city where I was born"],
      ["time", "when", "the day when we met"]
    ]
  },
  talk: [
    { s: "A", en: "Who is that man over there?", ar: "من ذلك الرجل هناك؟" },
    { s: "B", en: "He is the teacher who helped me last year.", ar: "هو المعلم الذي ساعدني العام الماضي." },
    { s: "A", en: "And what is that place behind him?", ar: "وما ذلك المكان خلفه؟" },
    { s: "B", en: "It's the library where I study English.", ar: "إنها المكتبة التي أدرس فيها الإنجليزية." }
  ]
},
{
  id: "a2-16", icon: "🔌", level: "A2",
  title: "أفعال مركبة (Phrasal Verbs)", titleEn: "Phrasal Verbs",
  goal: "تستخدم أفعال مثل give up و look after.",
  words: [
    { en: "give up", ar: "يستسلم / يقلع", pr: "گيف أب", ex: { en: "Don't give up! You can do it.", ar: "لا تستسلم! يمكنك فعل ذلك." } },
    { en: "look for", ar: "يبحث عن", pr: "لوك فور", ex: { en: "I'm looking for my keys.", ar: "أبحث عن مفاتيحي." } },
    { en: "look after", ar: "يعتني بـ", pr: "لوك آفتر", ex: { en: "She looks after her brother.", ar: "هي تعتني بأخيها." } },
    { en: "look forward to", ar: "يتطلع إلى", pr: "لوك فوروارد تو", ex: { en: "I look forward to your reply.", ar: "أتطلع لردك." } },
    { en: "wake up", ar: "يستيقظ", pr: "ويك أب", ex: { en: "I wake up at six.", ar: "أستيقظ في السادسة." } },
    { en: "get up", ar: "ينهض", pr: "گت أب", ex: { en: "He gets up early.", ar: "ينهض مبكراً." } },
    { en: "put on", ar: "يرتدي", pr: "پوت أون", ex: { en: "Put on your jacket.", ar: "ارتدي سترك." } },
    { en: "take off", ar: "يخلع / يقلع", pr: "تيك أوف", ex: { en: "The plane took off at six.", ar: "أقلعت الطائرة في السادسة." } },
    { en: "turn on / off", ar: "يشغل / يطفئ", pr: "ترن أون", ex: { en: "Turn off the lights.", ar: "أطفئ الأضواء." } },
    { en: "find out", ar: "يكتشف", pr: "فاوند أوت", ex: { en: "I found out the truth.", ar: "اكتشفت الحقيقة." } },
    { en: "run out of", ar: "ينفد منه", pr: "رَن أوت أَف", ex: { en: "We ran out of water.", ar: "نفد منا الماء." } },
    { en: "come back", ar: "يعود", pr: "كم بَك", ex: { en: "I'll come back soon.", ar: "سأعود قريباً." } }
  ],
  grammar: {
    title: "الفعل المركب: فعل + حرف",
    ar: "معظمها يمكن أن يكون قابلاً للفصل (separable) أو غير قابل.",
    points: [
      "فعل قابل للفصل: turn off → turn the light off ✅ / turn off the light ✅",
      "فعل غير قابل للفصل: look after → ❌ look the baby after",
      "look for → look for it ✅ / look it for ❌",
      "come back → come back ✅ / come it back ❌",
      "put on → put the coat on ✅ / put on the coat ✅"
    ],
    table: [
      ["Separable", "the object in the middle", "turn off the light → turn the light off"],
      ["Not separable", "object must follow", "look after the baby (❌ look the baby after)"],
      ["Inseparable with pronoun", "", "give it up (❌ give up it)"],
      ["3 positions", "", "pick it up / pick up it ❌ / pick up the book ✅"]
    ]
  },
  talk: [
    { s: "A", en: "You look tired. Don't give up!", ar: "تبدو متعباً. لا تستسلم!" },
    { s: "B", en: "I ran out of time yesterday.", ar: "نفد مني الوقت أمس." },
    { s: "A", en: "I hope you find out the result soon.", ar: "أتمنى أن تكتشف النتيجة قريباً." },
    { s: "B", en: "Thank you. I'm looking forward to it.", ar: "شكرا. أتطلع إليها." }
  ]
},
{
  id: "a2-17", icon: "💎", level: "A2", top: true,
  title: "الصفات المهمة في الوسط", titleEn: "Key Intermediate Adjectives",
  goal: "تصف المواقف والأشياء بصفات مستوى A2 بثقة.",
  words: [
    { en: "responsible", ar: "مسؤول", pr: "ريسپونسيبل", ex: { en: "You are responsible for your work.", ar: "أنت مسؤول عن عملك." } },
    { en: "different", ar: "مختلف", pr: "ديفرينت", ex: { en: "Our ideas are different.", ar: "أفكارنا مختلفة." } },
    { en: "possible", ar: "ممكن", pr: "بوسيبل", ex: { en: "Everything is possible.", ar: "كل شيء ممكن." } },
    { en: "available", ar: "متاح", pr: "أفيليبُل", ex: { en: "The room is available.", ar: "الغرفة متاحة." } },
    { en: "necessary", ar: "ضروري", pr: "نِسِسَري", ex: { en: "Practice is necessary.", ar: "التدريب ضروري." } },
    { en: "difficult", ar: "صعب", pr: "ديفيكُلت", ex: { en: "This question is difficult.", ar: "هذا السؤال صعب." } },
    { en: "similar", ar: "مشابه", pr: "سيميلَر", ex: { en: "Their answers are similar.", ar: "إجاباتهم متشابهة." } },
    { en: "common", ar: "شائع", pr: "كومِن", ex: { en: "This mistake is common.", ar: "هذا الخطأ شائع." } },
    { en: "special", ar: "مميز", pr: "سبِشَل", ex: { en: "Today is a special day.", ar: "اليوم يوم مميز." } },
    { en: "personal", ar: "شخصي", pr: "پيرسونَل", ex: { en: "This is my personal opinion.", ar: "هذه رأيي الشخصي." } },
  ],
  grammar: { title: "Order of Adjectives — ترتيب الصفات", ar: "عند اجتماع أكثر من صفة، هناك ترتيب ثابت في الإنجليزية.",
    points: ["الترتيب: Opinion → Size → Age → Shape → Color → Origin → Material → Purpose", "a beautiful small old round red wooden table", "صفة + noun : a difficult problem", "صفة + be + noun phrase : The problem is difficult.", "It is + adjective + to + verb : It is important to practise."]
    , table: [
      ["Order", "Type", "Example"],
      ["1", "Opinion", "nice, important"],
      ["2", "Size", "big, small"],
      ["3", "Age", "new, old"],
      ["4", "Color", "red, blue"]
    ]
  },
  talk: [
    { s: "A", en: "Is this course difficult?", ar: "هل هذه الدورة صعبة؟" },
    { s: "B", en: "It is difficult, but it is very important for my career.", ar: "إنها صعبة، لكنها مهمة جداً لوظيفتي." },
    { s: "A", en: "Is a teacher available now?", ar: "هل يوجد معلّم متاح الآن؟" },
    { s: "B", en: "Yes, and the class is special because it is small.", ar: "نعم، والشعبة مميزة لأنها صغيرة." },
  ]
},
{
  id: "a2-18", icon: "🗣️", level: "A2", top: true,
  title: "أفعال التواصل والتعبير", titleEn: "Communication Verbs",
  goal: "تناقش وتصف وتقترح بـ ١٢ فعلاً من أفعال التواصل.",
  words: [
    { en: "improve", ar: "يحسّن", pr: "إمبرووف", ex: { en: "I want to improve my English.", ar: "أريد تحسين لغتي." } },
    { en: "develop", ar: "يطوّر", pr: "ديفِلوب", ex: { en: "We develop new skills.", ar: "نطوّر مهارات جديدة." } },
    { en: "provide", ar: "يوفر / يقدّم", pr: "بروفايد", ex: { en: "The school provides books.", ar: "المدرسة توفر الكتب." } },
    { en: "accept", ar: "يقبل", pr: "أكسِبت", ex: { en: "I accept your idea.", ar: "أقبل فكرتك." } },
    { en: "refuse", ar: "يرفض", pr: "ريفيوز", ex: { en: "He refuses to wait.", ar: "هو يرفض الانتظار." } },
    { en: "suggest", ar: "يقترح", pr: "سَجِست", ex: { en: "I suggest a new plan.", ar: "أقترح خطة جديدة." } },
    { en: "recommend", ar: "يوصي بـ", pr: "ريكُمند", ex: { en: "I recommend this book.", ar: "أوصي بهذا الكتاب." } },
    { en: "describe", ar: "يصف", pr: "ديسكرايب", ex: { en: "Describe your family.", ar: "صف عائلتك." } },
    { en: "explain", ar: "يشرح", pr: "إكسبلاين", ex: { en: "The teacher explains the rule.", ar: "المعلم يشرح القاعدة." } },
    { en: "discuss", ar: "يناقش", pr: "دِسكَس", ex: { en: "We discuss the problem.", ar: "نناقش المشكلة." } },
    { en: "compare", ar: "يقارن", pr: "كومبير", ex: { en: "Compare the two answers.", ar: "قارن الإجابتين." } },
    { en: "continue", ar: "يستمر", pr: "كانتينيو", ex: { en: "Continue your work.", ar: "واصل عملك." } },
  ],
  grammar: { title: "Verb + To / Gerund — الفعل + المصدر", ar: "بعض الأفعال يليها to + verb وبعضها يليها ing، وهذا خطأ شائع.",
    points: ["to + verb : I want to improve. / I plan to discuss.", "verb + ing : I enjoy learning. / I keep practising.", "suggest / recommend + noun أو ing : I suggest practising.", "explain + noun : He explains the rule.", "compare A to/with B : Compare this to that."]
    , table: [
      ["Verb", "Pattern", "Example"],
      ["want", "to + V", "I want to learn."],
      ["enjoy", "V + ing", "I enjoy speaking."],
      ["suggest", "V + ing", "I suggest reading."]
    ]
  },
  talk: [
    { s: "A", en: "Can you explain this rule again?", ar: "هل يمكنك أن تشرح هذه القاعدة مرة أخرى؟" },
    { s: "B", en: "Sure. Let me discuss it and compare two examples.", ar: "بالتأكيد. دعني أنااقشها وأقارن بين مثالين." },
    { s: "A", en: "What do you recommend for speaking?", ar: "ماذا تنصح للتحدث؟" },
    { s: "B", en: "I suggest continuing with short dialogues every day.", ar: "أقترح الاستمرار في حوارات قصيرة كل يوم." },
  ]
},
{
  id: "a2-19", icon: "🛠️", level: "A2", top: true,
  title: "أفعال الحياة اليومية", titleEn: "Everyday Action Verbs",
  goal: "تدير أعمالك اليومية وتفاوض وتوافق بـ ٢٠ فعلاً عملياً.",
  words: [
    { en: "prevent", ar: "يمنع", pr: "بريفِنت", ex: { en: "Wash your hands to prevent illness.", ar: "اغسل يديك لمنع المرض." } },
    { en: "protect", ar: "يحمي", pr: "پروتِكت", ex: { en: "Helmets protect your head.", ar: "الخوذات تحمي رأسك." } },
    { en: "prepare", ar: "يحضّر", pr: "پريبير", ex: { en: "I prepare dinner every day.", ar: "أحضّر العشاء كل يوم." } },
    { en: "arrive", ar: "يصل", pr: "أرايف", ex: { en: "We arrive at nine.", ar: "نصل في التاسعة." } },
    { en: "return", ar: "يعود", pr: "ريتَن", ex: { en: "He returns home at six.", ar: "يعود إلى البيت في السادسة." } },
    { en: "borrow", ar: "يستعير", pr: "بورو", ex: { en: "Can I borrow your pen?", ar: "هل يمكنني استعارة قلمك؟" } },
    { en: "spend", ar: "ينفق / يقضي", pr: "سپِند", ex: { en: "I spend two hours studying.", ar: "أقضي ساعتين في الدراسة." } },
    { en: "save", ar: "يوصّل / يوفّر", pr: "سيف", ex: { en: "Save your money.", ar: "ادّخر أموالك." } },
    { en: "manage", ar: "يدير / ينجح في", pr: "مانيج", ex: { en: "She manages a big team.", ar: "تدير فريقاً كبيراً." } },
    { en: "succeed", ar: "ينجح", pr: "سَكسِيد", ex: { en: "You will succeed.", ar: "ستنجح." } },
    { en: "fail", ar: "يفشل", pr: "فيل", ex: { en: "He failed the test.", ar: "هو أخفق في الاختبار." } },
    { en: "reach", ar: "يبلغ / يصل إلى", pr: "ريتش", ex: { en: "We reach the top.", ar: "نبلغ القمة." } },
    { en: "keep", ar: "يحتفظ بـ / يبقي", pr: "كيب", ex: { en: "Keep your room clean.", ar: "حافظ على غرفتك نظيفة." } },
    { en: "lose", ar: "يفقد / يخسر", pr: "لووز", ex: { en: "Don't lose your ticket.", ar: "لا تفقد تذكرتك." } },
    { en: "join", ar: "ينضم إلى", pr: "جُوين", ex: { en: "Join our English club.", ar: "انضم إلى نادي الإنجليزية." } },
    { en: "agree", ar: "يوافق", pr: "أجْري", ex: { en: "I agree with you.", ar: "أوافقك الرأي." } },
    { en: "decide", ar: "يقرر", pr: "ديسايد", ex: { en: "We decide together.", ar: "نتقرر معاً." } },
    { en: "allow", ar: "يسمح", pr: "ألاو", ex: { en: "Phones are not allowed here.", ar: "الهواتف غير مسموح بها هنا." } },
    { en: "avoid", ar: "يتجنّب", pr: "أڤويد", ex: { en: "Avoid eating late.", ar: "تجنّب الأكل المتأخر." } },
    { en: "believe", ar: "يصدق", pr: "بيليف", ex: { en: "I believe you.", ar: "أصدقك." } },
  ],
  grammar: { title: "Present Perfect — المضارع التام", ar: "نستخدمه لحدث وقع في الماضي وأثره ممتد، مع have/has + التصريف الثالث.",
    points: ["have / has + past participle : I have arrived.", "مع already / just / yet : I have already arrived.", "مع for / since : I have worked here for two years.", "النفي: I haven't finished.", "السؤال: Have you ever failed?"]
    , table: [
      ["Subject", "Have/has", "Past Participle"],
      ["I / you / we / they", "have", "arrived"],
      ["he / she / it", "has", "arrived"],
      ["negative", "haven't / hasn't", "arrived"]
    ]
  },
  talk: [
    { s: "A", en: "Have you ever failed an exam?", ar: "هل سبق أن أخفقت في امتحان؟" },
    { s: "B", en: "Yes, but I prepared better and succeeded next time.", ar: "نعم، لكنيحضّرت أفضل ونجحت في المرة التالية." },
    { s: "A", en: "How much do you spend on books every month?", ar: "كم تنفق على الكتب كل شهر؟" },
    { s: "B", en: "I try to save money, so I borrow from the library.", ar: "أحاول أن أدّخر المال، فأستعير من المكتبة." },
  ]
},
{
  id: "a2-20", icon: "🚀", level: "A2", top: true, top: true,
  title: "أفعال البناء والإنجاز", titleEn: "Building & Achieving",
  goal: "تحدّث عن التحسين والإنجاز والوعود بـ ١٩ فعلاً متقدماً.",
  words: [
    { en: "build", ar: "يبني", pr: "بيلد", ex: { en: "They build a new school.", ar: "يبنون مدرسة جديدة." } },
    { en: "choose", ar: "يختار", pr: "تشوز", ex: { en: "Choose the right answer.", ar: "اختر الجواب الصحيح." } },
    { en: "create", ar: "يخلق / ينشئ", pr: "كرييت", ex: { en: "Artists create beautiful things.", ar: "الفنانون يبدعون أشياء جميلة." } },
    { en: "increase", ar: "يزيد", pr: "إنكريس", ex: { en: "Prices increase every year.", ar: "الأسعار ترتفع كل سنة." } },
    { en: "reduce", ar: "يقلّل / يخفّض", pr: "ريديوس", ex: { en: "Reduce your screen time.", ar: "قلّل وقت الشاشة." } },
    { en: "replace", ar: "يستبدل", pr: "ريپلايس", ex: { en: "Replace the old battery.", ar: "استبدل البطارية القديمة." } },
    { en: "require", ar: "يتطلّب", pr: "ريكوآير", ex: { en: "This job requires patience.", ar: "هذا العمل يتطلّب صبراً." } },
    { en: "respond", ar: "يستجيب / يردّ", pr: "ريسپوند", ex: { en: "She responds quickly.", ar: "تردّ بسرعة." } },
    { en: "produce", ar: "ينتج", pr: "پروديوس", ex: { en: "Factories produce cars.", ar: "المصانع تنتج السيارات." } },
    { en: "consider", ar: "يعتبر / يفكّر في", pr: "كونسيدَر", ex: { en: "Consider all the options.", ar: "فكّر في كل الخيارات." } },
    { en: "expect", ar: "يتوقع", pr: "إكسپِكت", ex: { en: "I expect a good result.", ar: "أتوقع نتيجة جيدة." } },
    { en: "promise", ar: "يعدّ", pr: "پرومِس", ex: { en: "I promise to help you.", ar: "أعدك بمساعدتك." } },
    { en: "solve", ar: "يحلّ", pr: "سولڤ", ex: { en: "Can you solve this puzzle?", ar: "هل تستطيع حلّ هذه المسألة؟" } },
    { en: "forget", ar: "ينسى", pr: "فورجِت", ex: { en: "Don't forget your keys.", ar: "لا تنسَ مفاتيحك." } },
    { en: "remind", ar: "يذكّر", pr: "ريمايند", ex: { en: "Remind me tomorrow.", ar: "ذكّريني غداً." } },
    { en: "invite", ar: "يدعو", pr: "إنفايت", ex: { en: "They invite us to dinner.", ar: "يدعونا إلى العشاء." } },
    { en: "introduce", ar: "يعرّف بـ", pr: "إنترديوس", ex: { en: "Let me introduce my brother.", ar: "دعني أعرّفك بأخي." } },
    { en: "apologize", ar: "يعتذر", pr: "أبولَجَيز", ex: { en: "He apologizes for the mistake.", ar: "يعتذر عن الخطأ." } },
    { en: "thank", ar: "يشكر", pr: "ثانك", ex: { en: "Thank you for your help.", ar: "شكراً على مساعدتك." } },
  ],
  grammar: { title: "Passive Voice — المبني للمجهول", ar: "نستخدمه حين يكون الفاعل مجهولاً أو غير مهم، ونركّز على الفعل.",
    points: ["am / is / are + past participle : The car is made in Japan.", "was / were + past participle : The decision was made yesterday.", "مع by لذكر الفاعل : It was solved by the teacher.", "المضارع: Cars are produced here.", "الأمر المسجّل: Please be seated."]
    , table: [
      ["Tense", "Passive", "Example"],
      ["Present", "is/are + V3", "English is spoken here."],
      ["Past", "was/were + V3", "The plan was created."],
      ["Future", "will be + V3", "The results will be produced."]
    ]
  },
  talk: [
    { s: "A", en: "How can we solve this problem?", ar: "كيف نحلّ هذه المشكلة؟" },
    { s: "B", en: "We need to consider every option and choose the best one.", ar: "نحتاج أن ننظر في كل الخيارات ونختار الأفضل." },
    { s: "A", en: "Will the new system be ready soon?", ar: "هل سيكون النظام الجديد جاهزاً قريباً؟" },
    { s: "B", en: "I promise to remind you when it is ready.", ar: "أعدك بأن أذكّرك عندما يجهز." },
  ]
},
{
  id: "a2-21", icon: "🧩", level: "A2", top: true, top: true,
  title: "أسماء المشكلات والقرارات", titleEn: "Problems & Decisions",
  goal: "تناقش المشكلات والقرارات والفرص بـ ٢٠ اسماً أساسياً.",
  words: [
    { en: "problem", ar: "مشكلة", pr: "پروبلِم", ex: { en: "We solve every problem.", ar: "نحلّ كل مشكلة." } },
    { en: "solution", ar: "حلّ", pr: "سوليوشِن", ex: { en: "This is the best solution.", ar: "هذا أفضل حل." } },
    { en: "reason", ar: "سبب", pr: "رييزِن", ex: { en: "What is the reason?", ar: "ما السبب؟" } },
    { en: "opportunity", ar: "فرصة", pr: "أوبَرتونتي", ex: { en: "This is a good opportunity.", ar: "هذه فرصة جيدة." } },
    { en: "challenge", ar: "تحدٍّ", pr: "تشالِنج", ex: { en: "Learning a language is a challenge.", ar: "تعلّم لغة تحدٍّ." } },
    { en: "ability", ar: "قدرة / موهبة", pr: "أبيليتي", ex: { en: "She has the ability to lead.", ar: "لديها القدرة على القيادة." } },
    { en: "advice", ar: "نصيحة", pr: "إدفايس", ex: { en: "His advice helped me.", ar: "نصيحته ساعدتني." } },
    { en: "amount", ar: "كمية / مبلغ", pr: "أماونت", ex: { en: "A small amount of salt.", ar: "كمية صغيرة من الملح." } },
    { en: "approach", ar: "نهج / يقترب", pr: "أپروتش", ex: { en: "We need a new approach.", ar: "نحتاج نهجاً جديداً." } },
    { en: "argument", ar: "جدل / حجة", pr: "أرجيومِنت", ex: { en: "The argument was long.", ar: "كان الجدل طويلاً." } },
    { en: "attention", ar: "انتباه", pr: "أتنشِن", ex: { en: "Pay attention to the teacher.", ar: "انتبه إلى المعلم." } },
    { en: "benefit", ar: "فائدة / منفعة", pr: "بِنِفِت", ex: { en: "Exercise has many benefits.", ar: "الرياضة لها فوائد كثيرة." } },
    { en: "choice", ar: "اختيار", pr: "تشويس", ex: { en: "You have a good choice.", ar: "اختيارك جيد." } },
    { en: "comment", ar: "تعليق", pr: "كومِنت", ex: { en: "Leave a comment below.", ar: "اترك تعليقاً بالأسفل." } },
    { en: "community", ar: "مجتمع / جماعة", pr: "كوميونيتي", ex: { en: "Our community is strong.", ar: "مجتمعنا قوي." } },
    { en: "concept", ar: "مفهوم", pr: "كونسِبْت", ex: { en: "This concept is new.", ar: "هذا المفهوم جديد." } },
    { en: "confidence", ar: "ثقة", pr: "كونفيدِنس", ex: { en: "Speak with confidence.", ar: "تكلّم بثقة." } },
    { en: "conflict", ar: "صراع / نزاع", pr: "كونفليكت", ex: { en: "They resolve the conflict.", ar: "يحلّون النزاع." } },
    { en: "contact", ar: "يتصل / تواصل", pr: "كونتاكْت", ex: { en: "Contact me later.", ar: "اتصل بي لاحقاً." } },
    { en: "decision", ar: "قرار", pr: "ديسيژِن", ex: { en: "It was a hard decision.", ar: "كان قراراً صعباً." } },
  ],
  grammar: { title: "Gerund & Infinitive Nouns — أسماء الـ ing / to", ar: "بعض الأسماء تليها of + ing وبعضها to + verb، وهي من أكثر الأخطاء شيوعاً.",
    points: ["noun + of + ing : the idea of learning / the cost of living", "noun + to + verb : the ability to speak / a chance to win", "advice (غير معدودة) : a good advice ✗ / good advice ✓", "make a decision / take advice / pay attention", "It is + adjective + for someone + to + verb"]
    , table: [
      ["Noun", "Pattern", "Example"],
      ["ability", "to + V", "ability to lead"],
      ["chance", "to + V", "opportunity to learn"],
      ["decision", "make a decision", "We made a decision."]
    ]
  },
  talk: [
    { s: "A", en: "I have a problem with my schedule.", ar: "لدي مشكلة في جدولي الزمني." },
    { s: "B", en: "What is the reason? Tell me and I will give you advice.", ar: "ما السبب؟ أخبرني وسأقدم لك نصيحة." },
    { s: "A", en: "I can't decide, and I lost my confidence.", ar: "لا أستطيع أن أقرر، وقد فقدت ثقتي." },
    { s: "B", en: "Contact me later. We will discuss the best choice together.", ar: "اتصل بي لاحقاً. سنناقش أفضل اختيار معاً." },
  ]
},
{
  id: "a2-22", icon: "🌍", level: "A2", top: true, top: true,
  title: "المعرفة والبيئة", titleEn: "Knowledge & Environment",
  goal: "تحدّث عن التعليم والبيئة والاقتصاد بـ ١٩ اسماً متقدماً.",
  words: [
    { en: "difference", ar: "فرق / اختلاف", pr: "ديفرينس", ex: { en: "I see the difference.", ar: "أرى الفرق." } },
    { en: "difficulty", ar: "صعوبة", pr: "ديفيكُلتي", ex: { en: "He has no difficulty.", ar: "ليس لديه صعوبة." } },
    { en: "direction", ar: "اتجاه / تعليمات", pr: "ديركشِن", ex: { en: "Go in this direction.", ar: "اذهب في هذا الاتجاه." } },
    { en: "disaster", ar: "كارثة", pr: "ديزاستَر", ex: { en: "The flood was a disaster.", ar: "الفيضان كان كارثة." } },
    { en: "economy", ar: "اقتصاد", pr: "إيكونَمي", ex: { en: "The economy is growing.", ar: "الاقتصاد ينمو." } },
    { en: "education", ar: "تعليم", pr: "إديوكيشِن", ex: { en: "Education is a right.", ar: "التعليم حق." } },
    { en: "effect", ar: "أثر / تأثير", pr: "إفِكت", ex: { en: "The medicine has a quick effect.", ar: "للدواء تأثير سريع." } },
    { en: "effort", ar: "جهد", pr: "إفَرت", ex: { en: "Success needs effort.", ar: "النجاح يحتاج جهداً." } },
    { en: "energy", ar: "طاقة", pr: "إينَرجي", ex: { en: "Children have lots of energy.", ar: "الأطفال لديهم طاقة كثيرة." } },
    { en: "environment", ar: "بيئة", pr: "إنڤايَرونمِنت", ex: { en: "Protect the environment.", ar: "احمِ البيئة." } },
    { en: "equipment", ar: "معدات", pr: "إكويپمِنت", ex: { en: "The lab has new equipment.", ar: "المختبر لديه معدات جديدة." } },
    { en: "evidence", ar: "دليل", pr: "إيفيدِنس", ex: { en: "The evidence is clear.", ar: "الدليل واضح." } },
    { en: "exchange", ar: "تبادل", pr: "إكستشينج", ex: { en: "We exchange ideas.", ar: "نبادل الأفكار." } },
    { en: "expert", ar: "خبير", pr: "إكسبَرت", ex: { en: "She is an expert in medicine.", ar: "هي خبيرة في الطب." } },
    { en: "feature", ar: "ميزة / خاصية", pr: "فييتشَر", ex: { en: "This feature is useful.", ar: "هذه الميزة مفيدة." } },
    { en: "feedback", ar: "ملاحظات / تغذية راجعة", pr: "فيدباك", ex: { en: "Your feedback helps me.", ar: "ملاحظاتك تساعدني." } },
    { en: "function", ar: "وظيفة / دالة", pr: "فَنكشِن", ex: { en: "The heart has an important function.", ar: "للقلب وظيفة مهمة." } },
    { en: "goal", ar: "هدف", pr: "جول", ex: { en: "My goal is to speak well.", ar: "هدفي أن أتحدّث جيداً." } },
    { en: "guidance", ar: "إرشاد / توجيه", pr: "جايْدِنس", ex: { en: "Students need guidance.", ar: "الطلاب يحتاجون إلى إرشاد." } },
  ],
  grammar: { title: "Relative Clauses — الجمل الوصفية", ar: "نستخدم who للأشخاص و which/that للأشياء لوصف الاسم بإيجاز.",
    points: ["who + جملة : The expert who helped us is here.", "which / that + جملة : The book which I read was good.", "الاختياري: The man (who) I met was kind.", "where للمكان : the school where I studied", "whose للملكية : the student whose answer was right"]
    , table: [
      ["Pronoun", "For", "Example"],
      ["who", "people", "the teacher who taught me"],
      ["which", "things", "the course which I chose"],
      ["where", "places", "the city where I live"]
    ]
  },
  talk: [
    { s: "A", en: "Why is education so important for the economy?", ar: "لماذا التعليم مهم جداً للاقتصاد؟" },
    { s: "B", en: "Because it has a direct effect and gives people energy to succeed.", ar: "لأنه له تأثير مباشر ويمنح الناس طاقة للنجاح." },
    { s: "A", en: "What equipment do we need for the project?", ar: "ما المعدات التي نحتاجها للمشروع؟" },
    { s: "B", en: "Ask the expert. She will give us feedback and guidance.", ar: "اسأل الخبيرة. ستعطينا ملاحظات وإرشاداً." },
  ]
}
];
