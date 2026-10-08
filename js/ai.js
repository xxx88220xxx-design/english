/* =========================================================
   AI ENGINE  —  مبني على قواعد (Rule-based NLU)
   بدون إنترنت · يعمل 100% داخل المتصفح
   ========================================================= */
window.AI = (function () {

  /* ---------- 1. تصحيح الأخطاء الشائعة ---------- */
  const CORRECTIONS = [
    { bad: /\bi am agree\b/i, fix: "I agree", why: "بعد am لا يأتي الفعل إلا بعد to: I agree / I am not agree." },
    { bad: /\bhe (?:don't|do not)\b/i, fix: "he doesn't", why: "في الغائب المفرد نستعمل doesn't وليس don't." },
    { bad: /\bshe (?:don't|do not)\b/i, fix: "she doesn't", why: "في الغائب المفرد نستعمل doesn't." },
    { bad: /\bit (?:don't|do not)\b/i, fix: "it doesn't", why: "في الغائب المفرد نستعمل doesn't." },
    { bad: /\bdoesn't has\b/i, fix: "doesn't have", why: "بعد doesn't يأتي الفعل بصورته الأساسية: doesn't have." },
    { bad: /\bdoesn't goes\b/i, fix: "doesn't go", why: "بعد doesn't لا نضيف s/j: doesn't go." },
    { bad: /\bdidn't went\b/i, fix: "didn't go", why: "بعد didn't يأتي الفعل بصورته الأساسية: didn't go." },
    { bad: /\bdidn't went\b/i, fix: "didn't go", why: "بعد didn't يأتي الفعل بصورته الأساسية." },
    { bad: /\bdidn't saw\b/i, fix: "didn't see", why: "بعد didn't يأتي الفعل بصورته الأساسية: didn't see." },
    { bad: /\bdidn't bought\b/i, fix: "didn't buy", why: "بعد didn't يأتي الفعل بصورته الأساسية: didn't buy." },
    { bad: /\bdidn't ate\b/i, fix: "didn't eat", why: "بعد didn't يأتي الفعل بصورته الأساسية: didn't eat." },
    { bad: /\bi am agree\b/i, fix: "I don't agree", why: "قل: I agree / I disagree." },
    { bad: /\bhow (?:you|do you) (?:call|name)\?/i, fix: "What is your name?", why: "للسؤال عن الاسم: What is your name?" },
    { bad: /\bhow old you are\b/i, fix: "How old are you?", why: "السؤال: How old are you? — I am 20." },
    { bad: /\bwhere (?:you are|you)\?$/i, fix: "Where are you?", why: "السؤال يحتاج are: Where are you?" },
    { bad: /\bwhere do you (?:from|come from)? ?(you)?\b/i, fix: "Where are you from?", why: "الصيغة الصحيحة: Where are you from?" },
    { bad: /\bmy name is ali\b/i, fix: "My name is Ali", why: "الأسماء تبدأ بحرف كبير." },
    { bad: /\bi (?:have|has) (\d+) years\b/i, fix: "I am $1 years old", why: "للعمر: I am 20 years old." },
    { bad: /\bi (?:have|has) (\d+) years old\b/i, fix: "I am $1 years old", why: "لا نقول have … years old بل am." },
    { bad: /\bwhat (?:is|are) your (?:name|names)\?/i, fix: "What is your name?", why: "your name مفرد ⇒ What is." },
    { bad: /\bhow much (?:is|are) it costs\b/i, fix: "How much is it?", why: "لا تستعمل costs بعد is." },
    { bad: /\bhow much costs\b/i, fix: "How much does it cost?", why: "مع how much + does للأفعال." },
    { bad: /\bhow many (?:is|are)\b/i, fix: "How many are there?", why: "للعدد: How many are there…?" },
    { bad: /\bi am boring\b/i, fix: "I am bored", why: "boring للمما-description و bored للمشاعر." },
    { bad: /\b(i|you|he|she|they) (?:like|likes) to (?:eat|go|see|play|swim|run) (?:the|a|an)? ?\w+ing\b/i, fix: "rephrase with -ing", why: "بعد like نستعمل ing: I like swimming." },
    { bad: /\bhe (?:don't|do not|doesn't) like\b/i, fix: "He doesn't like", why: "مع he/she/it ⇒ doesn't." },
    { bad: /\bwe (?:don't|do not|doesn't)\b/i, fix: "we don't", why: "مع we ⇒ don't وليس doesn't." },
    { bad: /\bpeople (?:is|has)\b/i, fix: "people are / have", why: "people جمع ⇒ are / have." },
    { bad: /\binformations\b/i, fix: "information", why: "information غير قابلة للجمع." },
    { bad: /\badvices\b/i, fix: "advice", why: "advice غير قابلة للجمع." },
    { bad: /\badvices\b/i, fix: "advice", why: "غير قابلة للجمع." },
    { bad: /\bequipments\b/i, fix: "equipment", why: "غير قابلة للجمع." },
    { bad: /\bfurnitures\b/i, fix: "furniture", why: "غير قابلة للجمع." },
    { bad: /\bhomeworks\b/i, fix: "homework", why: "غير قابلة للجمع." },
    { bad: /\bknows? (?:me|him|her|us|them)\b/i, fix: "know me / him / her", why: "لا نستعمل to بعد know." },
    { bad: /\bdiscuss about\b/i, fix: "discuss", why: "لا نستعمل about مع discuss." },
    { bad: /\bdepend of\b/i, fix: "depend on", why: "دائماً depend on." },
    { bad: /\bconsist of\b/i, fix: "consist of", why: "consist of صحيح." },
    { bad: /\binformations?\s*are\b/i, fix: "information is", why: "information مفرد." },
    { bad: /\bone informations\b/i, fix: "some information", why: "لا نستعمل one مع information." },
    { bad: /\bof course\b/i, fix: "Of course", why: "OOf course بحرف O كبير." },
    { bad: /\bthank you for\b\s*$/i, fix: "thank you for…", why: "تحتاج مفعولاً بعد for." },
    { bad: /\bmore better\b/i, fix: "much better", why: "لا نقول more better، نقول much better." },
    { bad: /\bmore best\b/i, fix: "much the best", why: "استعمل much the best." },
    { bad: /\bmost best\b/i, fix: "the best", why: "استعمل the best." },
    { bad: /\bmost tallest\b/i, fix: "the tallest", why: "استعمل the tallest." },
    { bad: /\bmost easiest\b/i, fix: "the easiest", why: "استعمل the easiest." },
    { bad: /\bvery (?:better|worse|bigger|smaller|cheaper)\b/i, fix: "much …", why: "مع الصفات المقارنة نستعمل much وليس very." },
    { bad: /\bopen the light\b/i, fix: "turn on the light", why: "لإضاءة المصباح: turn on." },
    { bad: /\bclose the light\b/i, fix: "turn off the light", why: "لإطفاء المصباح: turn off." },
    { bad: /\bi no have\b/i, fix: "I don't have", why: "للنفي: I don't have." },
    { bad: /\bi no like\b/i, fix: "I don't like", why: "للنفي: I don't like." },
    { bad: /\bam not agree\b/i, fix: "don't agree", why: "قل: I disagree / I don't agree." },
    { bad: /\bmy name's ali\b/i, fix: "My name is Ali", why: "الأسماء كبيرة." },
    { bad: /\byou are welcome a lot\b/i, fix: "You're very welcome", why: "you're very welcome." },
    { bad: /\bexcuse me i\b/i, fix: "Excuse me, I…", why: "فاصلة بعدExcuse me." },
    { bad: /\bfrom where\b/i, fix: "where … from", why: "where + subject + from." },
    { bad: /\bwhat age\b/i, fix: "how old", why: "للسؤال عن العمر: How old are you?" },
    { bad: /\byour welcome\b/i, fix: "you're welcome", why: "You're welcome (.you are)." },
    { bad: /\bi want that you\b/i, fix: "I want you to", why: "I want you to …" },
    { bad: /\bi want to that you\b/i, fix: "I want you to", why: "I want you to …" },
    { bad: /\bexplain me\b/i, fix: "explain to me", why: "explain something to someone." },
    { bad: /\bcall me to phone\b/i, fix: "call me", why: "call me." },
    { bad: /\bmarried with\b/i, fix: "married to", why: "married to." },
    { bad: /\bdiscuss with me\b/i, fix: "discuss with me", why: "discuss with me صحيح." },
    { bad: /\barrived to\b/i, fix: "arrived at / in", why: "arrived at (place) / arrived in (city)." },
    { bad: /\benter to\b/i, fix: "enter", why: "enter بدون to." },
    { bad: /\breturn back\b/i, fix: "return / go back", why: "لا نقول return back." },
    { bad: /\brepeat again\b/i, fix: "repeat", why: "لا نقول repeat again." },
    { bad: /\bpast history\b/i, fix: "history", why: "لا نقول past history." },
    { bad: /\bexactly the same\b/i, fix: "exactly the same", why: "صحيح." },
    { bad: /\bi have a question for you\b/i, fix: "May I ask you something?", why: "صياغة أكثر طبيعية." },
    { bad: /\bwhat do you do\b\??$/i, fix: "What do you do? (work)", why: "تُستعمل للسؤال عن العمل." },
    { bad: /\bi very like\b/i, fix: "I like … very much", why: "بعد like يأتي المفعول مباشرة." },
    { bad: /\bi very love\b/i, fix: "I love … very much", why: "بعد love يأتي المفعول مباشرة." },
    { bad: /\bi very thanks\b/i, fix: "Thank you very much", why: "بعد very يأتي الصفة." },
    { bad: /\bat the moment i\b/i, fix: "At the moment, I…", why: "فاصلة بعد At the moment." },
    { bad: /\binformations?\s*on\b/i, fix: "information about", why: "information about." },
    { bad: /\bno\b/, fix: null, why: null } // placeholder, ignore
  ];
  CORRECTIONS.pop();

  function correct(text) {
    const out = [], seen = new Set();
    for (const c of CORRECTIONS) {
      const m = text.match(c.bad);
      if (!m) continue;
      const key = m[0].toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      let fix = c.fix;
      if (m[1] && /\$\{?1\}?/.test(fix)) fix = fix.replace(/\$\{?1\}?/, m[1]);
      out.push({ original: m[0], fix, why: c.why });
      if (out.length >= 4) break;
    }
    return out;
  }

  /* ---------- 2. بنك المحادثات العادي ---------- */
  const SMALLTALK = [
    { keys: ["hello", "hi", "hey", "good morning", "good evening", "السلام", "مرحبا", "اهلا"],
      rep: ["Hello! Great to see you. How are you today?",
            "Hi! I'm doing well, thank you. And you?",
            "Hey! Nice to talk to you. How's your day going?"],
      ar: ["مرحباً! سعيد أن أراك. كيف حالك اليوم؟",
           "أهلا! أنا بخير شكراً. وأنت؟",
           "أهلاً! من دTalking أن أسمعك. كيف يومك؟"] },
    { keys: ["how are you", "how r u", "how are you doing", "كيف حالك"],
      rep: ["I'm fine, thank you! I study English every day. And you?",
            "I'm very good, thanks! Busy but happy. How about you?",
            "I'm okay, thanks. A little tired, but fine. You?"],
      ar: ["أنا بخير شكراً! أدرس الإنجليزية كل يوم. وأنت؟",
           "أنا بخير جداً، شكراً! مشغول لكن سعيد. وأنت؟",
           "أنا بخير، شكراً. متعب قليلاً لكن جيد. وأنت؟"] },
    { keys: ["how are you doing", "whats up", "what is up", "كيف الحال"],
      rep: ["Not bad! I'm learning new words today. You?",
            "I'm fine! Just finished my lunch. How about you?"],
      ar: ["لا بأس! أتعلم كلمات جديدة اليوم. وأنت؟",
           "أنا بخير! انتهيت من غدائي للتو. وأنت؟"] },
    { keys: ["what is your name", "whats your name", "who are you", "اسمك", "من انت"],
      rep: ["My name is Sara. Nice to meet you! What's your name?",
            "I'm Alex. Nice to meet you! Where are you from?"],
      ar: ["اسمي سارة. سعدت بلقائك! ما اسمك؟",
           "أنا أليكس. سعدت بلقائك! من أين أنت؟"] },
    { keys: ["where are you from", "what country are you from", "من وين", "من أين"],
      rep: ["I'm from Yemen, but I live in Saudi Arabia now. And you?",
            "I'm from Egypt. I've lived here for three years. You?"],
      ar: ["أنا من اليمن، لكنني أعيش في السعودية الآن. وأنت؟",
           "أنا من مصر. أعيش هنا منذ ثلاث سنوات. وأنت؟"] },
    { keys: ["how old are you", "your age", "كم عمرك"],
      rep: ["I'm twenty-five years old. How about you?",
            "I'm thirty. I feel young! And you?"],
      ar: ["عمري خمسة وعشرون سنة. And you?",
           "عمري ثلاثون. أشعر شاباً! وأنت؟"] },
    { keys: ["thank you", "thanks", "شكرا", "مشكور"],
      rep: ["You're welcome! / My pleasure.",
            "No problem at all! Happy to help.",
            "Any time! Glad I could help."],
      ar: ["على الرحب والسعة!",
           "لا مشكلة على الإطلاق! سعيدة بمساعدتي.",
           "في أي وقت! سعيدة أنني ساعدتك."] },
    { keys: ["goodbye", "bye", "see you", "مع السلامة", "الى اللقاء", "مع الفراق"],
      rep: ["Goodbye! Have a nice day. See you again!",
            "Bye! It was nice talking to you. Take care!",
            "See you soon! Good luck with your English!"],
      ar: ["مع السلامة! يوم سعيد. أراك مرة أخرى!",
           "مع السلامة! كان من دTalking أن أسمعك. اعتنِ بنفسك!",
           "أراك قريباً! حظاً موفقاً في الإنجليزية!"] },
    { keys: ["see you tomorrow", "see you later", "اراك"],
      rep: ["See you tomorrow! Don't forget to review the words.",
            "See you later! Have a good evening."],
      ar: ["أراك غداً! لا تنسَ مراجعة الكلمات.",
           "أراك لاحقاً! أمسي سعيداً."] },
    { keys: ["excuse me", "sorry", "آسف", "عذرا"],
      rep: ["No problem, don't worry about it!",
            "It's okay. Don't say sorry."],
      ar: ["لا مشكلة، لا تقلق!",
           "لا بأس. لا تعتذر."] },
    { keys: ["good morning", "صباح"],
      rep: ["Good morning! Did you sleep well?",
            "Good morning! What are your plans today?"],
      ar: ["صباح الخير! هل نمت جيداً؟",
           "صباح الخير! ما خططك اليوم؟"] },
    { keys: ["good night", "تصبح على خير", "مساء الخير"],
      rep: ["Good night! Sweet dreams.",
            "Good night! See you in the morning."],
      ar: ["تصبح على خير! أحلام سعيدة.",
           "تصبح على خير! أراك في الصباح."] },
    { keys: ["i am learning english", "study english", "أتعلم الانجليزية", "ادرس انجليزي"],
      rep: ["That's wonderful! English is very useful. How long have you been learning?",
            "Great! Keep going. Practice a little every day, and you will improve fast."],
      ar: ["رائع! الإنجليزية مفيدة جداً. منذ كم تتعلمها؟",
           "ممتاز! استمر. تدرب قليلاً كل يوم وستتحسن بسرعة."] },
    { keys: ["how can i learn english", "how to learn", "كيف اتعلم الانجليزية"],
      rep: ["Try these three things: 1) Listen every day. 2) Speak without fear of mistakes. 3) Review words with flashcards.",
            "The best way is to use English every day, even a little. Read, listen and speak!"],
      ar: ["جرّب هذه الأشياء الثلاثة: ١) استمع كل يوم. ٢) تحدث دون خوف من الأخطاء. ٣) راجع الكلمات ببطاقات.",
           "أفضل طريقة هي استعمال الإنجليزية كل يوم ولو قليلاً. اقرأ واستمع وتحدث!"] },
    { keys: ["do you speak arabic", "تتكلم عربية"],
      rep: ["Yes, I speak Arabic. But I need English for my work, so I'm practising every day!",
            "A little. My English is better than my Arabic, I'm afraid!"],
      ar: ["نعم، أتحدث العربية. لكنني أحتاج الإنجليزية للعمل، لذا أتدرب كل يوم!",
           "قليلاً. الإنجليزية أفضل من عربيتي للأسف!"] },
    { keys: ["weather", "الطقس", "الجو"],
      rep: ["It's sunny today, isn't it? Perfect for a walk!",
            "The weather here is warm. In winter it's cold and rainy."],
      ar: ["الجو مشمس اليوم، أليس كذلك؟ مثالي للتجول!",
           "الطقس هنا دافئ. في الشتاء بارد وممطر."] },
    { keys: ["weekend", "نهاية الاسبوع", "عطلة"],
      rep: ["What are you doing this weekend? I plan to study.",
            "I usually rest on Friday and go out on Saturday. You?"],
      ar: ["ماذا ستفعل نهاية الأسبوع هذا؟ أنوي أن أدرس.",
           "عادة أرتاح يوم الجمعة وأخرج يوم السبت. وأنت؟"] },
    { keys: ["food", "eat", "الطعام", "اكل"],
      rep: ["I love Arabic food! Do you like cooking?",
            "I usually eat rice and chicken. Delicious and cheap! You?"],
      ar: ["أحب الطعام العربي! هل تحب الطبخ؟",
           "عادة آكل أرزاً ودجاجاً. لذيذ ورخيص! وأنت؟"] },
    { keys: ["hobby", "free time", "الهواية", "وقت الفراغ"],
      rep: ["My hobby is reading and walking. I love it! You?",
            "I play football at the weekend. And on weekdays I study English."],
      ar: ["هوايتي القراءة والمشي. أحبها! وأنت؟",
           "ألعب كرة القدم نهاية الأسبوع. وفي أيام الأسبوع أدرس الإنجليزية."] },
    { keys: ["help me", "i need help", "ساعدني", "احتاج مساعدة"],
      rep: ["Of course! What do you need help with? English or something else?",
            "Tell me the problem and we'll solve it together."],
      ar: ["بالطبع! بماذا تحتاج مساعدة؟ الإنجليزية أم شيء آخر؟",
           "أخبرني بالمشكلة وسنحلها معاً."] },
    { keys: ["i am bored", "مللت", "زهقان"],
      rep: ["Let's do something fun! We can chat, or you can review some new words.",
            "Then let's talk about something interesting. What do you like most?"],
      ar: ["لنفعل شيئاً ممتعاً! يمكننا الدردشة، أو مراجعة كلمات جديدة.",
           "إذن لنتحدث عن شيء مثير. ماذا تحب أكثر؟"] },
    { keys: ["i don't understand", "no entiendo", "ما فهمت"],
      rep: ["No problem. Let me explain it again in a simpler way.",
            "It's okay. Try to use the sentence in a real example. That helps a lot."],
      ar: ["لا مشكلة. دعني أشرحها مرة أخرى بطريقة أبسط.",
           "لا بأس. حاول استعمال الجملة في مثال حقيقي. هذا يساعد كثيراً."] },
    { keys: ["what do you think", "رايك"],
      rep: ["I think it's a great idea! Let's do it.",
            "In my opinion, it's interesting, but it might be difficult. What do you say?"],
      ar: ["أعتقد أنها فكرة عظيمة! لنفعلها.",
           "في رأيي، إنها مثيرة لكنها قد تكون صعبة. ماذا تقول؟"] },
    { keys: ["motivate me", "شجعني", "التشجيع"],
      rep: ["You can do it! Remember: you don't learn a language in one day. Keep practising every day!",
            "Every expert was once a beginner. You have already learned a lot. Keep going!"],
      ar: ["يمكنك فعل ذلك! تذكر: لا تتعلم لغة في يوم واحد. واصل التدريب كل يوم!",
           "كل خبير كان مبتدئاً يوماً ما. لقد تعلمت الكثير بالفعل. استمر!"] }
  ];

  /* ---------- 3. بنك الأسئلة ---------- */
  const ASKERS = [
    "What is your name?",
    "How old are you?",
    "Where are you from?",
    "What do you do?",
    "Where do you live?",
    "Do you have brothers or sisters?",
    "What do you like to eat?",
    "What is your favourite colour?",
    "Do you speak English?",
    "What do you do in your free time?",
    "When do you wake up?",
    "Are you a student?",
    "What is your favourite day of the week?",
    "How do you learn English?",
    "What do you want to be?",
    "Do you like your city?",
    "What is the weather like today?",
    "How often do you exercise?"
  ];

  /* ---------- 4. سيناريوهات تمثيل الأدوار ---------- */
  const SCENARIOS = [
    {
      id: "cafe", icon: "☕", title: "في المقهى", ar: "طلب مشروبات وطعام",
      role: "You are the barista. Greet the customer and take their order.",
      start: "Hi there! What can I get for you today?",
      startAr: "أهلاً! ماذا تحب أن أحضر لك اليوم؟",
      turns: [
        { expect: ["coffee", "tea", "latte", "americano", "drink", "water", "juice", "قهوة", "شاي", "ماء", "عصير", "أريد", "I'd like", "I want", "can i have", "give me"],
          reply: "Sure. What size would you like — small, medium or large?",
          replyAr: "بالتأكيد. أي حجم تريد — صغير أم متوسط أم كبير؟",
          hint: "اطلب مشروباً: I would like a coffee, please." },
        { expect: ["small", "medium", "large", "big", "صغير", "كبير", "متوسط"],
          reply: "Got it. And would you like anything to eat with that?",
          replyAr: "حسناً. هل تريد شيئاً لتأكله معه؟",
          hint: "حدد الحجم: A large one, please." },
        { expect: ["yes", "no", "sandwich", "cake", "toast", "نعم", "لا", "مع", "eat", "food", "جبن", "cheese"],
          reply: "Excellent! Is that for here or to go?",
          replyAr: "ممتاز! هل ستتناوله هنا أم تأخذه معك؟",
          hint: "أجب: Yes please / No thank you." },
        { expect: ["here", "go", "take", "delivery", "هنا", "معي", "خارج"],
          reply: "Perfect. That will be four dollars. How would you like to pay?",
          replyAr: "ممتاز. سيكون أربعة دولارات. كيف تود أن تدفع؟" }
      ]
    },
    {
      id: "shop", icon: "🛍️", title: "في المحل", ar: "الشراء وطلب المقاس",
      role: "You are a shop assistant. Help the customer find the right size.",
      start: "Hello! Can I help you find anything?",
      startAr: "مرحباً! هل يمكنني مساعدتك في إيجاد شيء؟",
      turns: [
        { expect: ["looking for", "want", "need", "size", "shoes", "shirt", "dress", "jacket", "أبحث", "أريد", "أحتاج", "مقاس", "حذاء", "قميص"],
          reply: "Of course. What size are you looking for?",
          replyAr: "بالطبع. أي مقاس تبحث عن؟",
          hint: "قل: I'm looking for a size 42." },
        { expect: ["size", "42", "40", "have", "do you have", "مقاس", "عندكم"],
          reply: "Let me check… Yes, we have it. Would you like to try it on?",
          replyAr: "دعني أتحقق… نعم، لدينا. هل تريد تجربته؟",
          hint: "قل: Do you have it in a bigger size?" },
        { expect: ["try", "yes", "no", "where", "fitting", "مجرب", "نعم", "لا", "أين", "قياس"],
          reply: "The fitting rooms are over there, on the left. I'll wait here.",
          replyAr: "غرف القياس هناك على اليسار. سأنتظرك هنا.",
          hint: "قل: Can I try it on?" },
        { expect: ["how much", "price", "cost", "كم", "سعر", "ثمن"],
          reply: "It's twenty-five dollars, but we have a special today: twenty-two.",
          replyAr: "إنه خمسة وعشرون دولاراً، لكن لدينا عرض اليوم: اثنان وعشرون." }
      ]
    },
    {
      id: "hotel", icon: "🏨", title: "استقبال الفندق", ar: "الحجز والاستفسار",
      role: "You are the receptionist. Check the guest in.",
      start: "Good evening, and welcome. Do you have a reservation?",
      startAr: "مساء الخير، أهلاً بك. هل لديك حجز؟",
      turns: [
        { expect: ["yes", "reservation", "booked", "name", "نعم", "حجز", "محجوز", "اسمي", "booking"],
          reply: "May I have your name, please? And how many nights will you stay?",
          replyAr: "ما اسمك من فضلك؟ وكم ليلة ستقيم؟",
          hint: "قل: Yes, under the name Ahmed, for two nights." },
        { expect: ["ahmed", "name", "two", "three", "night", "single", "double", "اسمي", "ليلتين", "بالسنة"],
          reply: "Perfect. A double room for two nights. The rate is ninety dollars per night, breakfast included.",
          replyAr: "ممتاز. غرفة مزدوجة لليلتين. السعر تسعون دولاراً لليلة، شامل الإفطار.",
          hint: "قل: That's fine. What time is breakfast?" },
        { expect: ["breakfast", "time", "what time", "when", "wifi", "password", "إفطار", "وقت", "متى", "واي فاي", "كلمة السر"],
          reply: "Breakfast is from seven to ten in the main restaurant. The Wi-Fi password is on your key card.",
          replyAr: "الإفطار من السابعة إلى العاشرة في المطعم الرئيسي. كلمة مرور الواي فاي على بطاقة المفتاح.",
          hint: "اسأل: What time is breakfast?" },
        { expect: ["check out", "leave", "luggage", "checkout", "متى", "الخروج", "أمتعة"],
          reply: "Check-out is at eleven. Would you like help with your luggage or a taxi?",
          replyAr: "الخروج في الحادية عشرة. هل تريد مساعدة في أمتعتك أو تاكسي؟",
          hint: "اسأل: What time is check-out?" }
      ]
    },
    {
      id: "doctor", icon: "🩺", title: "عند الطبيب", ar: "وصف الأعراض",
      role: "You are the doctor. Ask about the symptoms and give advice.",
      start: "Good morning. Please sit down. What seems to be the problem?",
      startAr: "صباح الخير. اجلس من فضلك. ما المشكلة؟",
      turns: [
        { expect: ["headache", "fever", "cold", "cough", "pain", "stomach", "sick", "صداع", "حمى", "برد", "سعال", "ألم", "مريض", "مغص"],
          reply: "I'm sorry to hear that. How long have you been feeling like this?",
          replyAr: "أسف لسماع ذلك. منذ متى وأنت تشعر بهذا؟",
          hint: "قل: I have a headache and a fever." },
        { expect: ["since", "yesterday", "days", "two", "three", "منذ", "أمس", "أيام", "يومين", "ثلاثة"],
          reply: "I see. Do you have any other symptoms? Any allergies to medicine?",
          replyAr: "فهمت. هل لديك أعراض أخرى؟ أي حساسية من الأدوية؟",
          hint: "قل: Since yesterday. No, I'm not allergic to anything." },
        { expect: ["allergic", "no", "yes", "tired", "dizzy", "غير", "حساسية", "نعم", "لا", "متعب", "دوار"],
          reply: "It's probably a common cold. I'll give you some medicine. You should rest and drink plenty of water.",
          replyAr: "من المحتمل أن يكون برداً عادياً. سأعطيك دواءً. ينبغي أن ترتاح وتشرب الكثير من الماء.",
          hint: "اسأل: Should I take any medicine?" },
        { expect: ["medicine", "how often", "days", "when", "better", "doctor", "دواء", "كم مرة", "متى", "أشعر", "طبيب"],
          reply: "Take one tablet three times a day after meals for five days. Come back if you're not better.",
          replyAr: "خذ قرصاً واحداً ثلاث مرات في اليوم بعد الأكل لمدة خمسة أيام. عد إذا لم تتحسن.",
          hint: "اسأل: How often should I take it?" }
      ]
    },
    {
      id: "interview", icon: "💼", title: "مقابلة عمل", ar: "التقديم لنفسك",
      role: "You are the HR manager. Interview the candidate.",
      start: "Good morning, thank you for coming. Please sit down. Can you tell me about yourself?",
      startAr: "صباح الخير، شكراً لحضورك. اجلس من فضلك.حدثني عن نفسك.",
      turns: [
        { expect: ["my name is", "i am", "i'm", "work", "study", "experience", "اسمي", "أنا", "عمل", "درس", "خبرة"],
          reply: "Thank you. And what is your main strength?",
          replyAr: "شكراً. وما هي نقاط قوتك الأساسية؟",
          hint: "قل: I have three years of experience and I am a hard worker." },
        { expect: ["strong", "good at", "able", "learn", "communicat", "team", "قوي", "جيد", "أتعلم", "تواصل", "فريق"],
          reply: "I see. And why do you want this job?",
          replyAr: "فهمت. ولماذا تريد هذه الوظيفة؟",
          hint: "قل: I am good at communicating and working in a team." },
        { expect: ["want", "because", "interested", "looking for", "growth", "أريد", "لأن", "مهتم", "أبحث", "تطور"],
          reply: "That's a good answer. Do you have any questions for us?",
          replyAr: "إجابة جيدة. هل لديك أي أسئلة لنا؟",
          hint: "قل: Because I want to grow in an international company." },
        { expect: ["when can i start", "questions", "salary", "hours", "متى", "أسئلة", "راتب", "ساعات", "ساعة", "doyou have"],
          reply: "We can offer you the position. You'll receive an email within three days. Thank you!",
          replyAr: "يمكننا أن نقدم لك الوظيفة. ستستلم إيميلاً خلال ثلاثة أيام. شكراً!",
          hint: "اسأل: When can I start?" }
      ]
    },
    {
      id: "dir", icon: "🗺️", title: "اسأل عن الطريق", ar: "في المدينة الجديدة",
      role: "You are a local. Give directions to the visitor.",
      start: "Excuse me, you look lost. Can I help you?",
      startAr: "عذراً، تبدو تائهاً. هل يمكنني مساعدتك؟",
      turns: [
        { expect: ["where", "how do i", "looking for", "can you tell me", "أين", "كيف أصل", "أبحث", "هل يمكنك"],
          reply: "Of course. Where would you like to go?",
          replyAr: "بالطبع. إلى أين تريد الذهاب؟",
          hint: "قل: Excuse me, how do I get to the train station?" },
        { expect: ["station", "bank", "museum", "airport", "hospital", "متحف", "محطة", "بنك", "مطار", "مستشفى"],
          reply: "Go straight for two blocks, then turn left at the traffic light.",
          replyAr: "اذهب مباشرة لمبنيين، ثم انعطف يساراً عند إشارة المرور.",
          hint: "قل: To the train station, please." },
        { expect: ["far", "walk", "time", "bus", "taxi", "بعيد", "مشي", "وقت", "حافلة", "تاكسي", "كم"],
          reply: "It's about fifteen minutes on foot, or five minutes by taxi. It's not far.",
          replyAr: "إنه حوالي خمس عشرة دقيقة مشياً، أو خمس دقائق بتاكسي. ليس بعيداً.",
          hint: "اسأل: Is it far? Can I walk there?" },
        { expect: ["thank", "thanks", "helpful", "great", "شكرا", "ممتن", "رائع", "ساعدتني"],
          reply: "You're welcome! Have a nice day in our city!",
          replyAr: "على الرحب والسعة! أمتع يوم في مدينتنا!",
          hint: "قل: Thank you very much for your help!" }
      ]
    }
  ];

  /* ---------- 5. محرك التحليل ---------- */
  function norm(s) {
    return (s || "").toLowerCase()
      .replace(/[ًٌٍَُِّْ]/g, "")
      .replace(/[؟?!.،,]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function score(text, keys) {
    const t = norm(text);
    let best = 0;
    for (const k of keys) {
      const kk = norm(k);
      if (!kk) continue;
      if (t === kk) { best = Math.max(best, 10); }
      else if (t.includes(kk)) { best = Math.max(best, kk.length); }
      else {
        // كلمة مفردة
        const words = kk.split(" ");
        if (words.length > 1 && words.every(w => t.includes(w))) best = Math.max(best, kk.length * 0.9);
      }
    }
    return best;
  }

  function answer(userText) {
    const t = norm(userText);
    const results = [];

    for (const g of SMALLTALK) {
      results.push({ s: score(userText, g.keys), g });
    }
    results.sort((a, b) => b.s - a.s);

    if (results[0] && results[0].s >= 2) {
      const g = results[0].g;
      const idx = Math.floor(Math.random() * g.rep.length);
      return { text: g.rep[idx], ar: g.ar[idx] || g.ar[0] };
    }

    // استفسار عن معنى كلمة
    const m = t.match(/(?:meaning of|what (?:does|is) mean(?:s)?|translate|معنى)\s+([a-z\u0600-\u06FF]+)/);
    if (m) {
      return { text: "Try looking in the Vocabulary section — every word there has Arabic meaning and pronunciation. Tip: you can also press 🔊 to hear any word.", ar: "جرّب قسم المفردات — كل كلمة فيه لها معنى عربي ونطق. اضغط 🔊 لسماع أي كلمة." };
    }

    // سؤال شخصي غير معروف -> نعيد توجيه
    if (t.endsWith("?") || t.includes("؟") || /^(what|who|where|when|why|how|do|does|did|is|are|can|will|would)\b/.test(t)) {
      const q = pick(ASKERS);
      return { text: "That's a good question! My turn: " + q, ar: "سؤال جيد! دوري: " + q };
    }

    return {
      text: "Interesting! Tell me more — for example: Why do you think that? / What happened? / Do you like it?",
      ar: "مثير للاهتمام! أخبرني أكثر — مثلاً: لماذا تعتقد ذلك؟ / ماذا حدث؟ / هل تحبه؟"
    };
  }

  return {
    correct,
    answer,
    SCENARIOS,
    ASKERS,
    pick,
    norm
  };
})();
