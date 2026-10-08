/* =========================================================
   القصص التفاعلية — قصة + معنى فوري + سؤال فهم بعد كل فقرة
   ========================================================= */
window.STORIES = [
  {
    level: "A1", icon: "🛒", title: "في السوق", ar: "تسوّق بصحبة سارة",
    paras: [
      { en: "Sarah goes to the market on Fridays. She likes to buy fruit and vegetables. The market is full of people and colors.",
        ar: "تذهب سارة إلى السوق يوم الجمعة. تحب أن تشتري فواكه وخضروات. السوق مليء بالناس والألوان.",
        q: "إلى أين تذهب سارة يوم الجمعة؟",
        opts: ["إلى السوق", "إلى المدرسة", "إلى المطار"], ans: 0 },
      { en: "Sarah wants some apples and bread. She asks, \"How much is this?\" The man says \"five dollars\". Sarah thinks it is expensive.",
        ar: "تريد سارة بعض التفاح والخبز. تسأل «كم سعر هذا؟» يقول الرجل «خمسة دولارات». تعتقد سارة أنه غالٍ.",
        q: "لماذا تعتقد سارة أن التفاح غالٍ؟",
        opts: ["لأنه بخمسة دولارات", "لأنه بدولارين", "لأنه لا يوجد تفاح"], ans: 0 },
      { en: "Sarah buys the apples. Then she drinks a cup of coffee with her friend. They talk and laugh. The market is a happy place.",
        ar: "تشتري سارة التفاح. ثم تشرب فنجان قهوة مع صديقتها. يتحدثان ويضحكان. السوق مكان سعيد.",
        q: "ماذا تفعل سارة مع صديقتها؟",
        opts: ["تشربان القهوة وتتحدثان", "تقودان السيارة", "تشاهدان التلفاز"], ans: 0 }
    ]
  },
  {
    level: "A1", icon: "🌅", title: "يوم أحمد", ar: "روتين يوم كامل",
    paras: [
      { en: "Ahmed wakes up early every morning. He says good morning to his family. Then he eats breakfast and drinks tea.",
        ar: "يستيقظ أحمد باكراً كل صباح. يقول صباح الخير لعائلته. ثم يأكل الفطور ويشرب الشاي.",
        q: "ماذا يفعل أحمد كل صباح؟",
        opts: ["يستيقظ باكراً", "ينام طوال اليوم", "يلعب كرة القدم"], ans: 0 },
      { en: "Ahmed goes to work by bus. He works in a small office. At twelve o'clock he has lunch with his friends.",
        ar: "يذهب أحمد إلى العمل بالحافلة. يعمل في مكتب صغير. عند الساعة الثانية عشرة يتغدى مع أصدقائه.",
        q: "كيف يذهب أحمد إلى العمل؟",
        opts: ["بالحافلة", "بالطائرة", "مشياً"], ans: 0 },
      { en: "In the evening, Ahmed goes home. He does his homework and watches TV. He sleeps at ten o'clock.",
        ar: "في المساء، يعود أحمد إلى البيت. يحل واجبه ويشاهد التلفاز. ينام عند الساعة العاشرة.",
        q: "متى ينام أحمد؟",
        opts: ["في العاشرة مساءً", "في الخامسة مساءً", "عند الظهر"], ans: 0 }
    ]
  },
  {
    level: "A2", icon: "✈️", title: "في المطار", ar: "رحلة أحلامه",
    paras: [
      { en: "Ahmed has already checked in online. He is at the airport now. He asks for a window seat and gives his passport.",
        ar: "أكمل أحمد تسجيل الدخول للرحلة إلكترونياً مسبقاً. هو في المطار الآن. يطلب مقعداً بجانب النافذة ويسلّم جواز سفره.",
        q: "ماذا يسلّم أحمد للموظف؟",
        opts: ["جواز سفره", "أمواله", "هاتفه"], ans: 0 },
      { en: "He has never flown with this airline before. The agent says: \"Do not worry. The flight is on time.\"",
        ar: "لم يطِر أبداً مع هذا الخط الجوي من قبل. يقول الموظف: «لا تقلق. الرحلة في وقتها».",
        q: "ماذا يقول الموظف عن الرحلة؟",
        opts: ["إنها في وقتها", "إنها متأخرة", "إنها غداً"], ans: 0 },
      { en: "At the gate, a loudspeaker welcomes everyone to Amman. Ahmed is happy. He has waited for this trip for a whole year.",
        ar: "عند البوابة، يرحّب مكبر صوت بالجميع في عمّان. أحمد سعيد. لقد انتظر هذه الرحلة سنة كاملة.",
        q: "لماذا أحمد سعيد؟",
        opts: ["لأنه انتظر الرحلة سنة كاملة", "لأنه وجد نقوداً", "لأنه فقد هاتفه"], ans: 0 }
    ]
  }
];

/* كلمات خارج المنهج → معنى ونطق عند الضغط عليها */
window.STORY_GLOSS = {
  sarah: { ar: "سارة (اسم بنت)", pr: "SA-ruh" },
  goes: { ar: "تذهب", pr: "ɡoʊz" },
  market: { ar: "سوق", pr: "MAR-kit" },
  fridays: { ar: "أيام الجمعة", pr: "FRAI-deiz" },
  likes: { ar: "تحب", pr: "LAIKS" },
  fruit: { ar: "فواكه", pr: "FROOT" },
  vegetables: { ar: "خضراوات", pr: "VEJ-tə-bəlz" },
  full: { ar: "ممتلئ", pr: "FUL" },
  colors: { ar: "ألوان", pr: "KUH-lərz" },
  wants: { ar: "تريد", pr: "WAHNTS" },
  apples: { ar: "تفاح", pr: "AP-əlz" },
  asks: { ar: "تسأل", pr: "ASKS" },
  says: { ar: "يقول", pr: "SEZ" },
  five: { ar: "خمسة", pr: "FAIV" },
  dollars: { ar: "دولارات", pr: "DAH-lərz" },
  thinks: { ar: "تعتقد", pr: "THINKS" },
  buys: { ar: "تشتري", pr: "BAIZ" },
  drinks: { ar: "تشرب", pr: "DRINKS" },
  cup: { ar: "فنجان", pr: "KUHP" },
  laugh: { ar: "يضحكون", pr: "LAF" },
  place: { ar: "مكان", pr: "PLEIS" },
  ahmed: { ar: "أحمد (اسم ولد)", pr: "AH-mad" },
  wakes: { ar: "يستيقظ", pr: "WEIKS" },
  every: { ar: "كل", pr: "EV-ri" },
  eats: { ar: "يأكل", pr: "EETS" },
  breakfast: { ar: "فطور", pr: "BREK-fəst" },
  works: { ar: "يعمل", pr: "WURKS" },
  "o'clock": { ar: "الساعة", pr: "ə-KLOK" },
  clock: { ar: "ساعة (قديمة)", pr: "KLOK" },
  lunch: { ar: "غداء", pr: "LUHNCH" },
  friends: { ar: "أصدقاء", pr: "FRENDZ" },
  home: { ar: "البيت", pr: "HOUM" },
  watches: { ar: "يشاهد", pr: "WAH-chiz" },
  tv: { ar: "تلفاز", pr: "TEE VEE" },
  sleeps: { ar: "ينام", pr: "SLEEPS" },
  checked: { ar: "أكمل التسجيل", pr: "CHEKT" },
  online: { ar: "عبر الإنترنت", pr: "ON-lain" },
  gives: { ar: "يسلّم", pr: "GIVZ" },
  flown: { ar: "طار (التصريف الثالث)", pr: "FLOWN" },
  airline: { ar: "خط جوي", pr: "AIR-lain" },
  agent: { ar: "موظف", pr: "EI-jənt" },
  worry: { ar: "قلق", pr: "WUH-ri" },
  loudspeaker: { ar: "مكبر صوت", pr: "LAUD-spee-kər" },
  welcomes: { ar: "يرحّب", pr: "WEL-kəmz" },
  everyone: { ar: "الجميع", pr: "EV-ri-wuhn" },
  amman: { ar: "عمّان", pr: "a-MAHN" },
  waited: { ar: "انتظر", pr: "WEI-tid" },
  whole: { ar: "كاملة", pr: "HOUL" }
};