/* =========================================================
   A0 → A1  CURRICULUM
   Each unit: id, icon, title(ar), title(en), goal(ar),
   words[{en, ar, pr, ex{en,ar}}],
   grammar{title, ar, points[], table?,},
   talk[{s, en, ar}]  (dialogue)
   ========================================================= */
window.DATA_A1 = [
{
  id: "a1-01", icon: "👋", level: "A1",
  title: "التحيات والتعريف بالنفس", titleEn: "Greetings & Introductions",
  goal: "تعرّف بنفسك واسأل عن اسم غيرك وعمره.",
  words: [
    { en: "hello", ar: "مرحبا", pr: "هَلّو", ex: { en: "Hello, my name is Ali.", ar: "مرحبا، اسمي علي." } },
    { en: "hi", ar: "أهلا", pr: "هاي", ex: { en: "Hi! How are you?", ar: "أهلا! كيف حالك؟" } },
    { en: "good morning", ar: "صباح الخير", pr: "غود مورنينغ", ex: { en: "Good morning, everyone.", ar: "صباح الخير للجميع." } },
    { en: "good evening", ar: "مساء الخير", pr: "غود إيفنينغ", ex: { en: "Good evening, sir.", ar: "مساء الخير يا سيدي." } },
    { en: "good night", ar: "تصبح على خير", pr: "غود نايت", ex: { en: "Good night, see you tomorrow.", ar: "تصبح على خير، أراك غدا." } },
    { en: "goodbye", ar: "مع السلامة", pr: "غودباي", ex: { en: "Goodbye, have a nice day.", ar: "مع السلامة، يوم سعيد." } },
    { en: "please", ar: "من فضلك", pr: "بليز", ex: { en: "Water, please.", ar: "ماء من فضلك." } },
    { en: "thank you", ar: "شكرا", pr: "ثانك يو", ex: { en: "Thank you very much.", ar: "شكرا جزيلا." } },
    { en: "sorry", ar: "آسف", pr: "سوري", ex: { en: "Sorry, I am late.", ar: "آسف، أنا متأخر." } },
    { en: "yes", ar: "نعم", pr: "يِس", ex: { en: "Yes, I understand.", ar: "نعم، أنا أفهم." } },
    { en: "no", ar: "لا", pr: "نو", ex: { en: "No, I don't smoke.", ar: "لا، أنا لا أدخن." } },
    { en: "name", ar: "اسم", pr: "نَيْم", ex: { en: "What is your name?", ar: "ما اسمك؟" } },
    { en: "nice to meet you", ar: "سعدت بلقائك", pr: "نايس تو ميت يو", ex: { en: "Nice to meet you, Sara.", ar: "سعدت بلقائك يا سارة." } },
    { en: "how are you", ar: "كيف حالك", pr: "هاو آر يو", ex: { en: "How are you today?", ar: "كيف حالك اليوم؟" } },
    { en: "I am fine", ar: "أنا بخير", pr: "آي آم فاين", ex: { en: "I am fine, thank you.", ar: "أنا بخير، شكرا." } }
  ],
  grammar: {
    title: "فعل be: am / is / are",
    ar: "نستخدم am مع I، و is مع he/she/it، و are مع you/we/they.",
    points: [
      "I am a student. — أنا طالب.",
      "She is a teacher. — هي معلمة.",
      "They are friends. — هم أصدقاء.",
      "السؤال: Are you a student? — Yes, I am. / No, I'm not.",
      "النفي: I am not tired. — أنا لست متعبا.",
      "الاختصار: I am → I'm ، is not → isn't ، are not → aren't"
    ],
    table: [
      ["I", "am", "I'm"], ["He / She / It", "is", "he's"],
      ["You / We / They", "are", "you're"], ["منفي", "am not / is not / are not", "isn't / aren't"]
    ]
  },
  talk: [
    { s: "A", en: "Hello! My name is Ali.", ar: "مرحبا! اسمي علي." },
    { s: "B", en: "Hi Ali. I'm Sara. Nice to meet you.", ar: "أهلا علي. أنا سارة. سعدت بلقائك." },
    { s: "A", en: "Nice to meet you too. How are you?", ar: "سعدت بلقائك أنا أيضاً. كيف حالك؟" },
    { s: "B", en: "I'm fine, thank you. And you?", ar: "أنا بخير شكرا. وأنت؟" },
    { s: "A", en: "I'm fine. Where are you from?", ar: "أنا بخير. من أين أنت؟" },
    { s: "B", en: "I'm from Yemen. See you later!", ar: "أنا من اليمن. أراك لاحقاً!" }
  ]
},
{
  id: "a1-02", icon: "🔤", level: "A1",
  title: "الأبجدية ونطق الحروف", titleEn: "The Alphabet & Spelling",
  goal: "تكتب أي كلمة بالإنجليزية وتقرؤها بشكل صحيح.",
  words: [
    { en: "the alphabet", ar: "الأبجدية", pr: "ذي ألبابيت", ex: { en: "The English alphabet has 26 letters.", ar: "الأبجدية الإنجليزية فيها ٢٦ حرفا." } },
    { en: "letter", ar: "حرف", pr: "ليتر", ex: { en: "This letter is 'B'.", ar: "هذا الحرف هو B." } },
    { en: "spell", ar: "يكتب تهجئة", pr: "سبيل", ex: { en: "How do you spell your name?", ar: "كيف تكتب اسمك؟" } },
    { en: "capital letter", ar: "حرف كبير", pr: "كابيتال", ex: { en: "Start with a capital letter.", ar: "ابدأ بحرف كبير." } },
    { en: "uppercase", ar: "أحرف كبيرة", pr: "أبر كيس", ex: { en: "Write it in uppercase.", ar: "اكتبه بأحرف كبيرة." } },
    { en: "lowercase", ar: "أحرف صغيرة", pr: "لو كيس", ex: { en: "This is lowercase: 'b'.", ar: "هذا حرف صغير: b." } },
    { en: "vowel", ar: "حركة", pr: "فوِئل", ex: { en: "A, E, I, O and U are vowels.", ar: "A و E و I و O و U هي الحركات." } },
    { en: "consonant", ar: "ساكن", pr: "كونسَنت", ex: { en: "B is a consonant.", ar: "حرف B ساكن." } },
    { en: "pronounce", ar: "ينطق", pr: "برا نَونس", ex: { en: "How do you pronounce this word?", ar: "كيف تنطق هذه الكلمة؟" } },
    { en: "double", ar: "مكرر", pr: "دَبل", ex: { en: "The letter 'l' is double in 'hello'.", ar: "حرف l مكرر في كلمة hello." } }
  ],
  grammar: {
    title: "Questions with: What / Who / How / Where / When / Why",
    ar: "هذه أهم أسئلة اللغة الإنجليزية. تذكّر их جيداً.",
    points: [
      "What is your name? — ما اسمك؟",
      "Who is he? — من هو هو؟ (سؤال عن شخص)",
      "How are you? — كيف حالك؟",
      "Where are you from? — من أين أنت؟",
      "When is the class? — متى الحصة؟",
      "Why do you study English? — لماذا تدرس الإنجليزية؟",
      "قاعدة: نضع do/does/is/are قبل الفاعل: Where are you from؟"
    ]
  },
  talk: [
    { s: "A", en: "Excuse me, how do you spell 'restaurant'?", ar: "عذراً، كيف تكتب كلمة restaurant؟" },
    { s: "B", en: "R-E-S-T-A-U-R-A-N-T.", ar: "ر-إ-س-ت-و-ر-ا-ن-ت." },
    { s: "A", en: "Thank you! And how do you pronounce it?", ar: "شكرا! وكيف تنطقها؟" },
    { s: "B", en: "It's like 'rest and rant'.", ar: "مثل «ريست آند رانت» تقريباً." },
    { s: "A", en: "Got it. Thank you very much!", ar: "فهمت. شكراً جزيلاً!" }
  ]
},
{
  id: "a1-03", icon: "🔢", level: "A1",
  title: "الأرقام من 0 إلى 100", titleEn: "Numbers 0–100",
  goal: "تقول أي رقم وتسأل عن السعر والكمية.",
  words: [
    { en: "zero / nought", ar: "صفر", pr: "زيرو", ex: { en: "Zero degrees.", ar: "صفر درجة." } },
    { en: "one / two / three", ar: "واحد اثنان ثلاثة", pr: "ون تو ثري", ex: { en: "I have three brothers.", ar: "لدي ثلاثة إخوة." } },
    { en: "four / five / six", ar: "أربعة خمسة ستة", pr: "فور فايف سيكس", ex: { en: "The price is six dollars.", ar: "السعر ستة دولارات." } },
    { en: "seven / eight / nine", ar: "سبعة ثمانية تسعة", pr: "سيفن إيت ناين", ex: { en: "My phone is 2009… sorry, nine.", ar: "هاتفي 2009… آسف، تسعة." } },
    { en: "ten", ar: "عشرة", pr: "تِن", ex: { en: "I work ten hours.", ar: "أعمل عشر ساعات." } },
    { en: "eleven", ar: "أحد عشر", pr: "إليفِن", ex: { en: "Eleven people are here.", ar: "أحد عشر شخص هنا." } },
    { en: "twelve", ar: "اثنا عشر", pr: "تْوِلف", ex: { en: "Twelve months in a year.", ar: "اثنا عشر شهراً في السنة." } },
    { en: "thirteen", ar: "ثلاثة عشر", pr: "ثيرتين", ex: { en: "Thirteen, please.", ar: "ثلاثة عشر من فضلك." } },
    { en: "twenty", ar: "عشرون", pr: "توينتي", ex: { en: "I have twenty dollars.", ar: "لدي عشرون دولارا." } },
    { en: "thirty", ar: "ثلاثون", pr: "ثيرتي", ex: { en: "He is thirty years old.", ar: "هو في الثلاثين من عمره." } },
    { en: "hundred", ar: "مئة", pr: "هَندرِد", ex: { en: "One hundred people.", ar: "مئة شخص." } },
    { en: "thousand", ar: "ألف", pr: "ثَوزَند", ex: { en: "Two thousand euros.", ar: "ألفا يورو." } },
    { en: "number", ar: "رقم", pr: "نَمبر", ex: { en: "What is your phone number?", ar: "ما رقم هاتفك؟" } },
    { en: "how much", ar: "كم الثمن", pr: "هاو مَتش", ex: { en: "How much is this?", ar: "كم سعر هذا؟" } },
    { en: "how many", ar: "كم العدد", pr: "هاو ميني", ex: { en: "How many people are there?", ar: "كم عدد الناس؟" } }
  ],
  grammar: {
    title: "How much و How many",
    ar: "how many للم countable (قابل للعد) و how much للuncountable أو للأسعار.",
    points: [
      "How many books? (للأعداد القابلة للعد) — How many + noun بالجمع",
      "How much water? (غير قابل للعد) — How much + uncountable noun",
      "How much is this? (للسعر) — استعملها معStuff",
      "How many apples do you want? — أ combien تريد؟",
      "There are: There is one book. / There are five books."
    ],
    table: [
      ["How many + plural", "How many students?"],
      ["How much + uncountable", "How much sugar?"],
      ["How much is / are", "How much is the ticket?"]
    ]
  },
  talk: [
    { s: "A", en: "Excuse me, how much is this shirt?", ar: "عذراً، كم سعر هذا القميص؟" },
    { s: "B", en: "It's fifteen dollars.", ar: "إنه خمسة عشر دولارا." },
    { s: "A", en: "How many shirts do you have?", ar: "كم قميصاً لديك؟" },
    { s: "B", en: "We have twenty shirts, in five colors.", ar: "لدينا عشرون قميصاً، بخمسة ألوان." },
    { s: "A", en: "I want two. How much water do I need?", ar: "أريد اثنين. كم لتر ماء أحتاج؟" }
  ]
},
{
  id: "a1-04", icon: "🎨", level: "A1",
  title: "الألوان والأشكال", titleEn: "Colors & Shapes",
  goal: "تصف لون وشكل أي شيء من حولك.",
  words: [
    { en: "color", ar: "لون", pr: "كَلر", ex: { en: "What color is your car?", ar: "ما لون سيارتك؟" } },
    { en: "red", ar: "أحمر", pr: "رِد", ex: { en: "The apple is red.", ar: "التفاحة حمراء." } },
    { en: "blue", ar: "أزرق", pr: "بلو", ex: { en: "The sky is blue.", ar: "السماء زرقاء." } },
    { en: "green", ar: "أخضر", pr: "غرين", ex: { en: "The grass is green.", ar: "العشب أخضر." } },
    { en: "yellow", ar: "أصفر", pr: "يِلو", ex: { en: "I like yellow flowers.", ar: "أحب الأزهار الصفراء." } },
    { en: "black", ar: "أسود", pr: "بلاك", ex: { en: "I wear black clothes.", ar: "ألبس ملابس سوداء." } },
    { en: "white", ar: "أبيض", pr: "وايت", ex: { en: "The wall is white.", ar: "الجدار أبيض." } },
    { en: "brown", ar: "بني", pr: "براون", ex: { en: "Her hair is brown.", ar: "شعرها بني." } },
    { en: "pink", ar: "وردي", pr: "بِنك", ex: { en: "She likes pink.", ar: "هي تحب الوردي." } },
    { en: "grey", ar: "رمادي", pr: "غري", ex: { en: "The sky is grey today.", ar: "السماء رمادية اليوم." } },
    { en: "shape", ar: "شكل", pr: "شيب", ex: { en: "It's a round shape.", ar: "إنه شكل دائري." } },
    { en: "circle", ar: "دائرة", pr: "سِركل", ex: { en: "Draw a circle.", ar: "ارسم دائرة." } },
    { en: "square", ar: "مربع", pr: "سكوير", ex: { en: "A square has four sides.", ar: "للمربع أربعة أضلاع." } },
    { en: "triangle", ar: "مثلث", pr: "ترايانجل", ex: { en: "It is a triangle.", ar: "إنه مثلث." } },
    { en: "light", ar: "فاتح", pr: "لايت", ex: { en: "I like light blue.", ar: "أحب الأزرق الفاتح." } }
  ],
  grammar: {
    title: "صفات اللون و th adjectives",
    ar: "نصف الأشياء بشيء + It is / They are + لون.",
    points: [
      "The car is red. — السيارة حمراء.",
      "The bag is black. — الحقيبة سوداء.",
      "عندنا كلمات: a white house, a big car, a new phone.",
      "لون + اسم: a red car (لا نقول the red car إلا إذا عرف اللون).",
      "There is a blue pen. / There are two blue pens."
    ]
  },
  talk: [
    { s: "A", en: "What color do you like?", ar: "أي لون تحب؟" },
    { s: "B", en: "I like light blue and white.", ar: "أحب الأزرق الفاتح والأبيض." },
    { s: "A", en: "Me too. Look at my new bag — it's black.", ar: "وأنا أيضاً. انظر حقيبتي الجديدة — سوداء." },
    { s: "B", en: "It's nice! Is it a square bag?", ar: "حلوة! هل هي حقيبة مربعة؟" }
  ]
},
{
  id: "a1-05", icon: "👨‍👩‍👧", level: "A1",
  title: "العائلة", titleEn: "Family",
  goal: "تحدث عن أفراد عائلتك.",
  words: [
    { en: "family", ar: "عائلة", pr: "فامِلي", ex: { en: "I have a big family.", ar: "لدي عائلة كبيرة." } },
    { en: "father / dad", ar: "أب", pr: "فاذر", ex: { en: "My father is a doctor.", ar: "أبي طبيب." } },
    { en: "mother / mum", ar: "أم", pr: "مَذَر", ex: { en: "My mother cooks well.", ar: "أمي تطبخ جيداً." } },
    { en: "brother", ar: "أخ", pr: "براذَر", ex: { en: "I have one brother.", ar: "لدي أخ واحد." } },
    { en: "sister", ar: "أخت", pr: "سِستر", ex: { en: "My sister is 20.", ar: "أختي عمرها ٢٠." } },
    { en: "son", ar: "ابن", pr: "سَن", ex: { en: "Their son is young.", ar: "ابنهم صغير." } },
    { en: "daughter", ar: "ابنة", pr: "دوتر", ex: { en: "Their daughter is a nurse.", ar: "ابنتهم ممرضة." } },
    { en: "grandfather", ar: "جد", pr: "غراند فاذر", ex: { en: "My grandfather is 70.", ar: "جدي عمره ٧٠." } },
    { en: "grandmother", ar: "جدة", pr: "غراند مَذَر", ex: { en: "My grandmother likes tea.", ar: "جتي تحب الشاي." } },
    { en: "uncle", ar: "خال / عم", pr: "أَنكل", ex: { en: "My uncle is in Yemen.", ar: "خالي في اليمن." } },
    { en: "aunt", ar: "خالتي / عمّة", pr: "آنت", ex: { en: "My aunt lives in Aden.", ar: "عمتي تعيش في عدن." } },
    { en: "husband", ar: "زوج", pr: "هَزبَند", ex: { en: "Her husband works hard.", ar: "زوجها يعمل بجد." } },
    { en: "wife", ar: "زوجة", pr: "وايف", ex: { en: "His wife is a teacher.", ar: "زوجته معلمة." } },
    { en: "child / children", ar: "طفل / أطفال", pr: "تشيلد", ex: { en: "The children are playing.", ar: "الأطفال يلعبون." } },
    { en: "baby", ar: "رضيع", pr: "بيبي", ex: { en: "The baby is sleeping.", ar: "الرضيع نائم." } }
  ],
  grammar: {
    title: "أداة have / has والجمع",
    ar: "have مع I/you/we/they و has مع he/she/it.",
    points: [
      "I have a brother. — I don't have a brother.",
      "She has two sisters. — She doesn't have any sisters.",
      "Do you have children? — Yes, I do. / No, I don't.",
      "Does he have a car? — Yes, he does.",
      "الجمع: child→children, person→people, man→men, woman→women."
    ],
    table: [
      ["I / You / We / They", "have"], ["He / She / It", "has"],
      ["سؤال", "Do you have…? / Does he have…?"], ["منفي", "don't have / doesn't have"]
    ]
  },
  talk: [
    { s: "A", en: "Do you have a big family?", ar: "هل لديك عائلة كبيرة؟" },
    { s: "B", en: "Yes, I do. I have four people in my family.", ar: "نعم، لدي أربعة أشخاص في عائلتي." },
    { s: "A", en: "Who are they?", ar: "من هم؟" },
    { s: "B", en: "My father, my mother, my brother and me.", ar: "أبي وأمي وأخي وأنا." },
    { s: "A", en: "Do you have a grandmother?", ar: "هل عندك جدة؟" },
    { s: "B", en: "Yes, I have one. She's 75 years old.", ar: "نعم، عندي واحدة. عمرها ٧٥ سنة." }
  ]
},
{
  id: "a1-06", icon: "🍎", level: "A1",
  title: "الطعام والشراب", titleEn: "Food & Drink",
  goal: "تطلب وجبة وتسأل عن المأكولات.",
  words: [
    { en: "food", ar: "طعام", pr: "فود", ex: { en: "The food is delicious.", ar: "الطعام لذيذ." } },
    { en: "water", ar: "ماء", pr: "ووتر", ex: { en: "A glass of water, please.", ar: "كوب ماء من فضلك." } },
    { en: "bread", ar: "خبز", pr: "بريد", ex: { en: "I eat bread every day.", ar: "آكل الخبز كل يوم." } },
    { en: "rice", ar: "أرز", pr: "رايس", ex: { en: "Rice with chicken.", ar: "أرز مع دجاج." } },
    { en: "milk", ar: "حليب", pr: "ملك", ex: { en: "Do you drink milk?", ar: "هل تشرب الحليب؟" } },
    { en: "tea", ar: "شاي", pr: "تي", ex: { en: "I want a cup of tea.", ar: "أريد كوب شاي." } },
    { en: "coffee", ar: "قهوة", pr: "كوفي", ex: { en: "Coffee with milk, please.", ar: "قهوة بالحليب من فضلك." } },
    { en: "juice", ar: "عصير", pr: "جوس", ex: { en: "Orange juice, please.", ar: "عصير برتقال من فضلك." } },
    { en: "egg", ar: "بيضة", pr: "إگ", ex: { en: "I want two eggs.", ar: "أريد بيضتين." } },
    { en: "chicken", ar: "دجاج", pr: "تشِكِن", ex: { en: "The chicken is hot.", ar: "الدجاج ساخن." } },
    { en: "fish", ar: "سمك", pr: "فش", ex: { en: "Do you eat fish?", ar: "هل تأكل السمك؟" } },
    { en: "meat", ar: "لحم", pr: "ميت", ex: { en: "I don't eat meat.", ar: "أنا لا آكل اللحم." } },
    { en: "apple", ar: "تفاحة", pr: "آبل", ex: { en: "An apple a day.", ar: "تفاحة في اليوم." } },
    { en: "sugar", ar: "سكر", pr: "شُگَر", ex: { en: "No sugar, please.", ar: "بدون سكر من فضلك." } },
    { en: "delicious", ar: "لذيذ", pr: "دِلِشَس", ex: { en: "It is very delicious.", ar: "إنه لذيذ جداً." } },
    { en: "hungry", ar: "جائع", pr: "هَنگري", ex: { en: "I am hungry.", ar: "أنا جائع." } }
  ],
  grammar: {
    title: "a / an + some",
    ar: "نستعمل a قبل الصوت consonant و an قبل الصوت vowel، و some مع الجمع.",
    points: [
      "an apple (صوت أوله vowel)، a banana (consonant)",
      "some bread, some water, some rice (غير قابل للعد)",
      "some eggs, some apples (قابل للعد)",
      "أخطاء شائعة: ❌ I want a water ✅ I want some water",
      "I want an egg and some bread."
    ]
  },
  talk: [
    { s: "A", en: "Are you hungry?", ar: "هل أنت جائع؟" },
    { s: "B", en: "Yes, very hungry! What's good today?", ar: "نعم، جائع جداً! ما الطيب اليوم؟" },
    { s: "A", en: "The chicken with rice is delicious.", ar: "الدجاج مع الأرز لذيذ." },
    { s: "B", en: "Good. Can I have a fork, please?", ar: "حسناً. هل يمكنني الحصول على شوكة من فضلك؟" },
    { s: "A", en: "Here you are.", ar: "تفضل." },
    { s: "B", en: "Thank you. The food is very good.", ar: "شكرا. الطعام جيد جداً." }
  ]
},
{
  id: "a1-07", icon: "📅", level: "A1",
  title: "أيام الأسبوع والشهور", titleEn: "Days & Months",
  goal: "تتحدث عن المواعيد والأيام.",
  words: [
    { en: "Monday", ar: "الاثنين", pr: "مانداي", ex: { en: "See you on Monday.", ar: "أراك يوم الاثنين." } },
    { en: "Tuesday", ar: "الثلاثاء", pr: "تيوزداي", ex: { en: "I work on Tuesday.", ar: "أعمل يوم الثلاثاء." } },
    { en: "Wednesday", ar: "الأربعاء", pr: "وِدنزداي", ex: { en: "Class is on Wednesday.", ar: "الحصة يوم الأربعاء." } },
    { en: "Thursday", ar: "الخميس", pr: "ثرزداي", ex: { en: "Thank you Thursday!", ar: "شكراً يوم الخميس!" } },
    { en: "Friday", ar: "الجمعة", pr: "فرايداي", ex: { en: "Friday is my favorite day.", ar: "الجمعة يومي المفضل." } },
    { en: "Saturday", ar: "السبت", pr: "ساترداي", ex: { en: "I rest on Saturday.", ar: "أرتاح يوم السبت." } },
    { en: "Sunday", ar: "الأحد", pr: "صَندي", ex: { en: "Sunday is a holiday.", ar: "الأحد يوم عطلة." } },
    { en: "week", ar: "أسبوع", pr: "ويك", ex: { en: "A week has seven days.", ar: "الأسبوع سبعة أيام." } },
    { en: "January", ar: "يناير", pr: "جانيواري", ex: { en: "My birthday is in January.", ar: "عيد ميلادي في يناير." } },
    { en: "February", ar: "فبراير", pr: "فِبرواري", ex: { en: "It's cold in February.", ar: "الجو بارد في فبراير." } },
    { en: "March", ar: "مارس", pr: "مارتش", ex: { en: "Spring starts in March.", ar: "الربيع يبدأ في مارس." } },
    { en: "April", ar: "أبريل", pr: "إبريل", ex: { en: "April is warm.", ar: "أبريل دافئ." } },
    { en: "May", ar: "مايو", pr: "مي", ex: { en: "I will travel in May.", ar: "سأسافر في مايو." } },
    { en: "June", ar: "يونيو", pr: "جون", ex: { en: "June is hot.", ar: "يونيو حار." } },
    { en: "year", ar: "سنة", pr: "يير", ex: { en: "Happy New Year!", ar: "سنة سعيدة!" } }
  ],
  grammar: {
    title: "في / على / يوم + be",
    ar: "نستعمل prepositions مع الأيام والشهور.",
    points: [
      "on Monday — يوم الاثنين (يوم محدد)",
      "in January — في يناير (شهر)",
      "in 2025 — في سنة (أرقام)",
      "at night — في الليل، in the morning — في الصباح",
      "on Monday morning — يوم الاثنين صباحاً",
      "What day is today? — اليوم ثلاثاء."
    ],
    table: [
      ["in", "in the morning, in May, in 2025"],
      ["on", "on Monday, on Friday, on my birthday"],
      ["at", "at night, at noon, at the weekend"]
    ]
  },
  talk: [
    { s: "A", en: "What day is it today?", ar: "ما اليوم اليوم؟" },
    { s: "B", en: "It's Wednesday, May 5th.", ar: "الأربعاء، ٥ مايو." },
    { s: "A", en: "When is your birthday?", ar: "متى عيد ميلادك؟" },
    { s: "B", en: "It's on August 20th.", ar: "في ٢٠ أغسطس." },
    { s: "A", en: "See you on Sunday!", ar: "أراك يوم الأحد!" }
  ]
},
{
  id: "a1-08", icon: "🕐", level: "A1",
  title: "الساعة والوقت", titleEn: "Time",
  goal: "تسأل عن الوقت وتحدد الموعد.",
  words: [
    { en: "time", ar: "وقت", pr: "تايم", ex: { en: "What time is it?", ar: "كم الساعة؟" } },
    { en: "hour", ar: "ساعة", pr: "أور", ex: { en: "One hour, please.", ar: "ساعة واحدة من فضلك." } },
    { en: "minute", ar: "دقيقة", pr: "مِنيت", ex: { en: "It's five minutes late.", ar: "إنه متأخر خمس دقائق." } },
    { en: "o'clock", ar: "تمام الساعة", pr: "اوكلاک", ex: { en: "It's three o'clock.", ar: "إنه الثالثة تماماً." } },
    { en: "morning", ar: "صباح", pr: "مورنينغ", ex: { en: "Good morning!", ar: "صباح الخير!" } },
    { en: "afternoon", ar: "بعد الظهر", pr: "آفترنون", ex: { en: "See you this afternoon.", ar: "أراك بعد الظهر." } },
    { en: "evening", ar: "مساء", pr: "إيفنينغ", ex: { en: "Good evening, everyone.", ar: "مساء الخير للجميع." } },
    { en: "night", ar: "ليل", pr: "نايت", ex: { en: "Good night.", ar: "تصبح على خير." } },
    { en: "early", ar: "مبكر", pr: "إرلي", ex: { en: "I am early.", ar: "أنا مبكر." } },
    { en: "late", ar: "متأخر", pr: "ليت", ex: { en: "Don't be late!", ar: "لا تتأخر!" } },
    { en: "now", ar: "الآن", pr: "ناو", ex: { en: "I am busy now.", ar: "أنا مشغول الآن." } },
    { en: "today", ar: "اليوم", pr: "تودَي", ex: { en: "What are you doing today?", ar: "ماذا ستفعل اليوم؟" } },
    { en: "tomorrow", ar: "غداً", pr: "تومورو", ex: { en: "See you tomorrow.", ar: "أراك غداً." } },
    { en: "half past", ar: "النصف بعد", pr: "هَف باست", ex: { en: "It's half past three.", ar: "إنه الثالثة والنصف." } },
    { en: "quarter", ar: "ربع", pr: "كوارتر", ex: { en: "A quarter to five.", ar: "خمس إلا ربعاً." } }
  ],
  grammar: {
    title: "السؤال عن الوقت + present simple مع الأوقات",
    ar: "استعمل present simple للروتين اليومي.",
    points: [
      "What time is it? — It is seven o'clock.",
      "It's half past two. / It's a quarter to six.",
      "I get up at six every day. = أستيقظ في السادسة كل يوم.",
      "I work from nine to five. = أعمل من التاسعة إلى الخامسة.",
      "at + time (7:00, noon) / in + part of day (in the morning)"
    ]
  },
  talk: [
    { s: "A", en: "What time does the class start?", ar: "متى تبدأ الحصة؟" },
    { s: "B", en: "It starts at nine o'clock.", ar: "تبدأ في التاسعة." },
    { s: "A", en: "OK. What time do you finish?", ar: "حسناً. متى تنتهي؟" },
    { s: "B", en: "I finish at half past one.", ar: "أنتهي في الواحدة والنصف." },
    { s: "A", en: "Thank you. See you tomorrow morning!", ar: "شكرا. أراك غداً صباحاً!" }
  ]
},
{
  id: "a1-09", icon: "🏠", level: "A1",
  title: "أشياء المنزل", titleEn: "Home & Objects",
  goal: "تصف بيتك والأشياء حولك.",
  words: [
    { en: "house", ar: "بيت", pr: "هاوس", ex: { en: "This is my house.", ar: "هذا بيتي." } },
    { en: "room", ar: "غرفة", pr: "روم", ex: { en: "My room is small.", ar: "غرفتي صغيرة." } },
    { en: "kitchen", ar: "مطبخ", pr: "كيتشن", ex: { en: "She is in the kitchen.", ar: "هي في المطبخ." } },
    { en: "bedroom", ar: "غرفة نوم", pr: "بِد روم", ex: { en: "The bedroom is big.", ar: "غرفة النوم كبيرة." } },
    { en: "bathroom", ar: "حمام", pr: "باث روم", ex: { en: "Where is the bathroom?", ar: "أين الحمام؟" } },
    { en: "door", ar: "باب", pr: "دور", ex: { en: "Open the door, please.", ar: "افتح الباب من فضلك." } },
    { en: "window", ar: "نافذة", pr: "ويندو", ex: { en: "Close the window.", ar: "أغلق النافذة." } },
    { en: "table", ar: "طاولة", pr: "تيبل", ex: { en: "The key is on the table.", ar: "المفتاح على الطاولة." } },
    { en: "chair", ar: "كرسي", pr: "شير", ex: { en: "Sit on the chair.", ar: "اجلس على الكرسي." } },
    { en: "bed", ar: "سرير", pr: "بِد", ex: { en: "The bed is comfortable.", ar: "السرير مريح." } },
    { en: "phone", ar: "هاتف", pr: "فون", ex: { en: "My phone is new.", ar: "هاتفي جديد." } },
    { en: "bag", ar: "حقيبة", pr: "باغ", ex: { en: "This bag is heavy.", ar: "هذه الحقيبة ثقيلة." } },
    { en: "book", ar: "كتاب", pr: "بوك", ex: { en: "This is a good book.", ar: "هذا كتاب جيد." } },
    { en: "key", ar: "مفتاح", pr: "كي", ex: { en: "I lost my key.", ar: "فقدت مفتاحي." } },
    { en: "towel", ar: "منشفة", pr: "تاول", ex: { en: "I need a clean towel.", ar: "أحتاج منشفة نظيفة." } }
  ],
  grammar: {
    title: "There is / There are + prepositions of place",
    ar: "There is للمفرد و There are للجمع.",
    points: [
      "There is a book on the table.",
      "There are two chairs in the room.",
      "في / على / تحت / بجانب / خلف / أمام",
      "in the kitchen — في المطبخ",
      "on the table — على الطاولة",
      "under the bed — تحت السرير",
      "Is there a bathroom? — Yes, there is."
    ],
    table: [
      ["in", "in the box, in the room"],
      ["on", "on the wall, on the table"],
      ["under", "under the bed, under the car"],
      ["next to / beside", "next to the door"],
      ["behind", "behind the house"]
    ]
  },
  talk: [
    { s: "A", en: "Is there a bathroom in your house?", ar: "هل يوجد حمام في بيتك؟" },
    { s: "B", en: "Yes, there is. It's next to the kitchen.", ar: "نعم يوجد. إنه بجانب المطبخ." },
    { s: "A", en: "And is there a table in the living room?", ar: "وهل توجد طاولة في غرفة المعيشة؟" },
    { s: "B", en: "No, there isn't, but there is a small one here.", ar: "لا، ليست كذلك، لكن هناك طاولة صغيرة هنا." }
  ]
},
{
  id: "a1-10", icon: "🧍", level: "A1",
  title: "جسم الإنسان", titleEn: "The Body",
  goal: "تصف أجزاء جسمك وتشير إلى الألم.",
  words: [
    { en: "head", ar: "رأس", pr: "هِد", ex: { en: "My head hurts.", ar: "رأسي يؤلمني." } },
    { en: "hair", ar: "شعر", pr: "هير", ex: { en: "She has long hair.", ar: "لديها شعر طويل." } },
    { en: "eye", ar: "عين", pr: "آي", ex: { en: "Close your eyes.", ar: "أغمض عينيك." } },
    { en: "ear", ar: "أذن", pr: "إير", ex: { en: "I have small ears.", ar: "لدي آذان صغيرة." } },
    { en: "nose", ar: "أنف", pr: "نوز", ex: { en: "Touch your nose.", ar: "المس أنفك." } },
    { en: "mouth", ar: "فم", pr: "ماوث", ex: { en: "Open your mouth.", ar: "افتح فمك." } },
    { en: "tooth / teeth", ar: "سن / أسنان", pr: "توذ", ex: { en: "My teeth are white.", ar: "أسناني بيضاء." } },
    { en: "face", ar: "وجه", pr: "فيس", ex: { en: "Wash your face.", ar: "اغسل وجهك." } },
    { en: "hand", ar: "يد", pr: "هاند", ex: { en: "Raise your hand.", ar: "ارفع يدك." } },
    { en: "arm", ar: "ذراع", pr: "آرم", ex: { en: "He broke his arm.", ar: "كسر ذراعه." } },
    { en: "leg", ar: "ساق", pr: "لِگ", ex: { en: "My legs are tired.", ar: "ساقاي متعبتان." } },
    { en: "foot / feet", ar: "قدم / قدمان", pr: "فوت", ex: { en: "My feet hurt.", ar: "قدمي تؤلمني." } },
    { en: "back", ar: "ظهر", pr: "باك", ex: { en: "My back hurts.", ar: "ظهري يؤلمني." } },
    { en: "stomach", ar: "معدة / بطن", pr: "ستَمم", ex: { en: "I have a stomach ache.", ar: "لدي ألم في معدتي." } }
  ],
  grammar: {
    title: "الضمائر he / she / it و الغائب المفرد",
    ar: "المبتدأ المفرد يستعمل he أو she أو it حسب النوع.",
    points: [
      "He — رجل أو ولد. She — امرأة أو بنت. It — شيء أو حيوان.",
      "He is my brother. She is my sister. It is a cat.",
      "في بعض الحالات نستخدم they إذا كان الخاطب رجلاً وامرأة معاً.",
      "I have a headache. — I have a toothache.",
      "My head / my back / my stomach hurts."
    ]
  },
  talk: [
    { s: "A", en: "What's wrong?", ar: "ما بك؟" },
    { s: "B", en: "I have a headache and a stomach ache.", ar: "لدي صداع وألم في معدتي." },
    { s: "A", en: "Do you have a fever?", ar: "هل عندك حمى؟" },
    { s: "B", en: "No, I don't. I just need water and rest.", ar: "لا. أحتاج ماء وراحة فقط." }
  ]
},
{
  id: "a1-11", icon: "🌤️", level: "A1",
  title: "الطقس والفصول", titleEn: "Weather & Seasons",
  goal: "تصف الجو في كل فصل من فصول السنة.",
  words: [
    { en: "weather", ar: "طقس", pr: "ويذر", ex: { en: "The weather is nice.", ar: "الطقس جميل." } },
    { en: "sun / sunny", ar: "شمس / مشمس", pr: "صَن", ex: { en: "It's sunny today.", ar: "الجو مشمس اليوم." } },
    { en: "rain / rainy", ar: "مطر / ممطر", pr: "رين", ex: { en: "It rains a lot in winter.", ar: "يمطر كثيراً في الشتاء." } },
    { en: "cloud / cloudy", ar: "سحابة / غائم", pr: " كلاود", ex: { en: "The sky is cloudy.", ar: "السماء غائمة." } },
    { en: "snow", ar: "ثلج", pr: "سنو", ex: { en: "It snows in the mountains.", ar: "يثلج في الجبال." } },
    { en: "wind / windy", ar: "ريح / عاصف", pr: "ويند", ex: { en: "It's windy today.", ar: "الجو عاصف اليوم." } },
    { en: "hot", ar: "حار", pr: "هات", ex: { en: "It's very hot in summer.", ar: "الجو حار جداً في الصيف." } },
    { en: "cold", ar: "بارد", pr: "كولد", ex: { en: "It's cold in winter.", ar: "الجو بارد في الشتاء." } },
    { en: "warm", ar: "دافئ", pr: "وورم", ex: { en: "The weather is warm.", ar: "الطقس دافئ." } },
    { en: "cool", ar: "معتدل بارد", pr: "كول", ex: { en: "It's cool in the evening.", ar: "الجو معتدل في المساء." } },
    { en: "spring", ar: "الربيع", pr: "سبرنغ", ex: { en: "Flowers open in spring.", ar: "تتفتح الزهور في الربيع." } },
    { en: "summer", ar: "الصيف", pr: "سَمر", ex: { en: "Summer is my favorite season.", ar: "الصيف فصلي المفضل." } },
    { en: "autumn / fall", ar: "الخريف", pr: "أوتَم", ex: { en: "Autumn is cool.", ar: "الخريف معتدل." } },
    { en: "winter", ar: "الشتاء", pr: "وينتر", ex: { en: "Winter is cold here.", ar: "الشتاء بارد هنا." } }
  ],
  grammar: {
    title: "طقس + it's / what's the weather",
    ar: "نستعمل it للحديث عن الطقس، لا he ولا she.",
    points: [
      "It is sunny today.",
      "It is not rainy. It is sunny.",
      "What's the weather like? — How's the weather?",
      "Is it cold outside? — Yes, it is.",
      "في الشتاء: In winter it snows. / it often snows."
    ]
  },
  talk: [
    { s: "A", en: "What's the weather like today?", ar: "كيف هو الطقس اليوم؟" },
    { s: "B", en: "It's sunny and warm.", ar: "الجو مشمس ودافئ." },
    { s: "A", en: "Great! Will you go out?", ar: "رائع! هل ستخرج؟" },
    { s: "B", en: "Yes, maybe. In winter it's cold and rainy here.", ar: "نعم، ربما. في الشتاء الجو بارد وممطر هنا." }
  ]
},
{
  id: "a1-12", icon: "💼", level: "A1",
  title: "الوظائف والمهارات", titleEn: "Jobs & Skills",
  goal: "تقول ماذا تعمل وما هي مهاراتك.",
  words: [
    { en: "job", ar: "وظيفة / عمل", pr: "جوب", ex: { en: "She has a good job.", ar: "لديها عمل جيد." } },
    { en: "work", ar: "يعمل", pr: "وورك", ex: { en: "I work in a hospital.", ar: "أعمل في مستشفى." } },
    { en: "doctor", ar: "طبيب", pr: "دكتور", ex: { en: "He is a doctor.", ar: "هو طبيب." } },
    { en: "nurse", ar: "ممرض", pr: "نَرس", ex: { en: "The nurse is very kind.", ar: "الممرضة طيبة جداً." } },
    { en: "teacher", ar: "معلم", pr: "تِيتشر", ex: { en: "My mother is a teacher.", ar: "أمي معلمة." } },
    { en: "student", ar: "طالب", pr: "ستودنت", ex: { en: "I am an English student.", ar: "أنا طالب لغة إنجليزية." } },
    { en: "engineer", ar: "مهندس", pr: "إنجنير", ex: { en: "He works as an engineer.", ar: "يعمل مهندساً." } },
    { en: "driver", ar: "سائق", pr: "درايفر", ex: { en: "He is a bus driver.", ar: "هو سائق حافلة." } },
    { en: "farmer", ar: "مزارع", pr: "فارمر", ex: { en: "My uncle is a farmer.", ar: "خالي مزارع." } },
    { en: "cook", ar: "طباخ", pr: "كوك", ex: { en: "My sister is a cook.", ar: "أختي طباخة." } },
    { en: "shop", ar: "متجر", pr: "شوب", ex: { en: "The shop opens at eight.", ar: "المتجر يفتح في الثامنة." } },
    { en: "office", ar: "مكتب", pr: "أوفس", ex: { en: "I work in an office.", ar: "أعمل في مكتب." } },
    { en: "company", ar: "شركة", pr: "كَمباني", ex: { en: "It's a big company.", ar: "إنها شركة كبيرة." } },
    { en: "busy", ar: "مشغول", pr: "بِزي", ex: { en: "I'm very busy today.", ar: "أنا مشغول جداً اليوم." } }
  ],
  grammar: {
    title: "السؤال عن العمل + want / need",
    ar: "نستعمل a / an للوظائف، و want و need للحديث عن الرغبات.",
    points: [
      "What's your job? — I'm a teacher.",
      "Where do you work? — I work in a shop.",
      "Do you like your job? — Yes, I do.",
      "I want to be a doctor. — أريد أن أكون طبيباً.",
      "I need a new job."
    ]
  },
  talk: [
    { s: "A", en: "What do you do?", ar: "ماذا تعمل؟" },
    { s: "B", en: "I'm a nurse. I work in a hospital.", ar: "أنا ممرضة. أعمل في مستشفى." },
    { s: "A", en: "Do you like it?", ar: "هل تحبين عملك؟" },
    { s: "B", en: "Yes, but I'm very busy. I want a holiday.", ar: "نعم، لكنني مشغولة جداً. أريد عطلة." }
  ]
},
{
  id: "a1-13", icon: "🏙️", level: "A1",
  title: "المدينة والاتجاهات", titleEn: "City & Directions",
  goal: "تسأل عن الطريق وتصف مكانك.",
  words: [
    { en: "city", ar: "مدينة", pr: "سيتي", ex: { en: "Cairo is a big city.", ar: "القاهرة مدينة كبيرة." } },
    { en: "street", ar: "شارع", pr: "ستريت", ex: { en: "It is on Green Street.", ar: "إنه في شارع جرين." } },
    { en: "road", ar: "طريق", pr: "رود", ex: { en: "The road is closed.", ar: "الطريق مغلق." } },
    { en: "shop / market", ar: "متجر / سوق", pr: "ماركيت", ex: { en: "The market is busy.", ar: "السوق مزدحم." } },
    { en: "bank", ar: "بنك", pr: "بانك", ex: { en: "Where's the bank?", ar: "أين البنك؟" } },
    { en: "hospital", ar: "مستشفى", pr: "هاسبتال", ex: { en: "Take me to the hospital.", ar: "خذني إلى المستشفى." } },
    { en: "park", ar: "حديقة", pr: "بارك", ex: { en: "The park is green.", ar: "الحديقة خضراء." } },
    { en: "near", ar: "قريب", pr: "نير", ex: { en: "My house is near the school.", ar: "بيتي قريب من المدرسة." } },
    { en: "far", ar: "بعيد", pr: "فار", ex: { en: "Is it far from here?", ar: "هل هو بعيد من هنا؟" } },
    { en: "left", ar: "يسار", pr: "لِفت", ex: { en: "Turn left.", ar: "انعطف يساراً." } },
    { en: "right", ar: "يمين", pr: "رايت", ex: { en: "Turn right.", ar: "انعطف يميناً." } },
    { en: "straight", ar: "مباشرة", pr: "ستريت", ex: { en: "Go straight ahead.", ar: "اذهب مباشرة." } },
    { en: "next to", ar: "بجانب", pr: "نيكس تو", ex: { en: "Next to the bank.", ar: "بجانب البنك." } }
  ],
  grammar: {
    title: "الاستفهام عن المكان + give / take",
    ar: "أسئلة الاتجاهات في المدينة — في المتاجر والمحطات.",
    points: [
      "Excuse me, where is the bank? — عذراً، أين البنك؟",
      "How do I get to the hospital? — كيف أصل إلى المستشفى؟",
      "Go straight and turn left.",
      "It's next to / near / far from the school.",
      "Give me two tickets, please. / Can you help me?"
    ]
  },
  talk: [
    { s: "A", en: "Excuse me, how do I get to the train station?", ar: "عذراً، كيف أصل إلى محطة القطار؟" },
    { s: "B", en: "Go straight, then turn right.", ar: "اذهب مباشرة ثم انعطف يميناً." },
    { s: "A", en: "Is it far from here?", ar: "هل هو بعيد من هنا؟" },
    { s: "B", en: "No, it's near. It's next to the bank.", ar: "لا، هو قريب. إنه بجانب البنك." },
    { s: "A", en: "Thank you very much!", ar: "شكراً جزيلاً!" }
  ]
},
{
  id: "a1-14", icon: "✅", level: "A1",
  title: "Present Simple (المضارع البسيط)", titleEn: "Present Simple",
  goal: "تتحدث عن العادات والحقائق اليومية.",
  words: [
    { en: "every day", ar: "كل يوم", pr: "إفري دَي", ex: { en: "I study every day.", ar: "أدرس كل يوم." } },
    { en: "usually", ar: "عادة", pr: "يوشوَلي", ex: { en: "I usually walk to work.", ar: "عادة أمشي إلى العمل." } },
    { en: "always", ar: "دائماً", pr: "أولويز", ex: { en: "He always drinks coffee.", ar: "هو دائماً يشرب القهوة." } },
    { en: "never", ar: "أبداً", pr: "نيفر", ex: { en: "She never smokes.", ar: "هي لا تدخن أبداً." } },
    { en: "sometimes", ar: "أحياناً", pr: "سايمتايمز", ex: { en: "I sometimes eat fish.", ar: "أحياناً آكل السمك." } },
    { en: "live", ar: "يعيش", pr: "ليف", ex: { en: "I live in Sanaa.", ar: "أعيش في صنعاء." } },
    { en: "study", ar: "يدرس", pr: "ستادي", ex: { en: "I study English.", ar: "أدرس الإنجليزية." } },
    { en: "watch", ar: "يشاهد", pr: "وتش", ex: { en: "I watch TV at night.", ar: "أشاهد التلفاز في الليل." } },
    { en: "clean", ar: "ينظف", pr: "كلين", ex: { en: "I clean my room.", ar: "أنظف غرفتي." } },
    { en: "help", ar: "يساعد", pr: "هَلب", ex: { en: "Can you help me?", ar: "هل يمكنك مساعدتي؟" } },
    { en: "start / begin", ar: "يبدأ", pr: "ستارت", ex: { en: "The shop starts at 8.", ar: "المتجر يفتح في الثامنة." } },
    { en: "finish", ar: "ينهي", pr: "فينِش", ex: { en: "I finish work at five.", ar: "أنهي العمل في الخامسة." } }
  ],
  grammar: {
    title: "قاعدة الـ s في الغائب",
    ar: "في الغائب المفرد (he/she/it) نضيف s أو es للفعل.",
    points: [
      "I work / He works.",
      "I study / She studies. (y → ies)",
      "I go / He goes. (o → es)",
      "I watch / She watches. (ch, sh, s, x, o → es)",
      "السؤال: Do you work? / Does he work?",
      "النفي: I don't work. / He doesn't work."
    ],
    table: [
      ["I / You / We / They", "work"], ["He / She / It", "works"],
      ["سؤال", "Do…? / Does…?"], ["منفي", "don't… / doesn't…"],
      ["y بعد حرف صامت", "study → studies"], ["ch/sh/s/x/o", "go → goes, watch → watches"]
    ]
  },
  talk: [
    { s: "A", en: "What do you do in the morning?", ar: "ماذا تفعل في الصباح؟" },
    { s: "B", en: "I usually get up at six and study English.", ar: "عادة أستيقظ في السادسة وأدرس الإنجليزية." },
    { s: "A", en: "Do you watch TV a lot?", ar: "هل تشاهد التلفاز كثيراً؟" },
    { s: "B", en: "No, I never watch TV. I always read books.", ar: "لا، لا أشاهد التلفاز أبداً. دائماً أقرأ كتباً." }
  ]
},
{
  id: "a1-15", icon: "🛍️", level: "A1",
  title: "التسوق والأسعار", titleEn: "Shopping & Money",
  goal: "تشتري وتتفاوض على السعر.",
  words: [
    { en: "money", ar: "مال / نقود", pr: "موني", ex: { en: "I don't have money today.", ar: "ليس لدي مال اليوم." } },
    { en: "price", ar: "سعر", pr: "برايس", ex: { en: "The price is high.", ar: "السعر مرتفع." } },
    { en: "expensive", ar: "غالٍ", pr: "إكسپنسِف", ex: { en: "This watch is expensive.", ar: "هذه الساعة غالية." } },
    { en: "cheap", ar: "رخيص", pr: "تشيب", ex: { en: "These shoes are cheap.", ar: "هذا الحذاء رخيص." } },
    { en: "buy", ar: "يشتري", pr: "باي", ex: { en: "I want to buy this.", ar: "أريد شراء هذا." } },
    { en: "sell", ar: "يبيع", pr: "سِل", ex: { en: "They sell fresh bread.", ar: "يبيعون خبزاً طازجاً." } },
    { en: "pay", ar: "يدفع", pr: "باي", ex: { en: "Can I pay by card?", ar: "هل يمكنني الدفع بالبطاقة؟" } },
    { en: "size", ar: "مقاس", pr: "سايز", ex: { en: "Do you have a bigger size?", ar: "هل لديك مقاس أكبر؟" } },
    { en: "try on", ar: "يجرب", pr: "تراى أون", ex: { en: "Can I try it on?", ar: "هل يمكنني تجربته؟" } },
    { en: "receipt", ar: "إيصال", pr: "رسِت", ex: { en: "Here is your receipt.", ar: "هذا إيصالك." } },
    { en: "change", ar: "باقي / تغيير", pr: "تشينج", ex: { en: "Here is your change.", ar: "هذا باقي حسابك." } },
    { en: "open", ar: "مفتوح", pr: "أوپن", ex: { en: "Is the shop open?", ar: "هل المحل مفتوح؟" } },
    { en: "closed", ar: "مغلق", pr: "كلوزِد", ex: { en: "It's closed now.", ar: "إنه مغلق الآن." } }
  ],
  grammar: {
    title: "want / would like / can I",
    ar: "تعبيرات الطلب في المحلات والمطاعم.",
    points: [
      "I want this one, please. / I'd like this one, please.",
      "How much is it? — It's ten dollars.",
      "Do you have a smaller one?",
      "Can I try it on? — Sure, of course.",
      "Can I pay by card? — Yes / No, cash only.",
      "Sorry, we don't have it. / Sorry, it's too expensive."
    ]
  },
  talk: [
    { s: "A", en: "Can I help you?", ar: "هل يمكنني مساعدتك؟" },
    { s: "B", en: "Yes, I'd like this T-shirt. How much is it?", ar: "نعم، أريد هذا القميص. كم سعره؟" },
    { s: "A", en: "It's fifteen dollars.", ar: "إنه خمسة عشر دولارا." },
    { s: "B", en: "Can I try it on? Do you have a bigger size?", ar: "هل يمكنني تجربته؟ هل لديكم مقاس أكبر؟" },
    { s: "A", en: "Yes, here you are. The fitting room is over there.", ar: "نعم، تفضل. غرفة القياس هناك." }
  ]
},
{
  id: "a1-16", icon: "🏨", level: "A1",
  title: "الفندق والسفر", titleEn: "Hotel & Travel",
  goal: "تحجز غرفة وتسأل عن رحلة.",
  words: [
    { en: "hotel", ar: "فندق", pr: "هو تِل", ex: { en: "The hotel is near the station.", ar: "الفندق قريب من المحطة." } },
    { en: "room", ar: "غرفة", pr: "روم", ex: { en: "I have a room for two nights.", ar: "لدي غرفة لليلتين." } },
    { en: "reservation", ar: "حجز", pr: "ريزَرفِشن", ex: { en: "I have a reservation.", ar: "لدي حجز." } },
    { en: "book", ar: "يحجز", pr: "بوك", ex: { en: "I want to book a room.", ar: "أريد حجز غرفة." } },
    { en: "ticket", ar: "تذكرة", pr: "تيكيت", ex: { en: "One ticket, please.", ar: "تذكرة واحدة من فضلك." } },
    { en: "train", ar: "قطار", pr: "ترين", ex: { en: "The train leaves at eight.", ar: "القطار يغادر في الثامنة." } },
    { en: "bus", ar: "حافلة", pr: "بَس", ex: { en: "The bus is coming.", ar: "الحافلة قادمة." } },
    { en: "plane", ar: "طائرة", pr: "بلين", ex: { en: "I fly by plane.", ar: "أسافر بالطائرة." } },
    { en: "airport", ar: "مطار", pr: "إيربورت", ex: { en: "The airport is far.", ar: "المطار بعيد." } },
    { en: "passport", ar: "جواز سفر", pr: "باسبورت", ex: { en: "Here is my passport.", ar: "هذا جواز سفري." } },
    { en: "luggage", ar: "أمتعة", pr: "لاگِج", ex: { en: "Where is my luggage?", ar: "أين أمتعتي؟" } },
    { en: "trip", ar: "رحلة", pr: "تريب", ex: { en: "Have a nice trip!", ar: "رحلة سعيدة!" } }
  ],
  grammar: {
    title: "want to / going to للمخططات",
    ar: "نعبّر عن النوايا والخطط المستقبلية.",
    points: [
      "I want to travel next year.",
      "I'm going to book a room tonight.",
      "Where are you going? — To Aden.",
      "How long are you going to stay? — Three days.",
      "I'm not going to fly. I'm going to take the train."
    ]
  },
  talk: [
    { s: "A", en: "Good evening. Do you have a reservation?", ar: "مساء الخير. هل لديك حجز؟" },
    { s: "B", en: "Yes, under the name Ahmed. For two nights.", ar: "نعم، باسم أحمد. لليلتين." },
    { s: "A", en: "That's fine. Breakfast is from seven to ten.", ar: "هذا جيد. الإفطار من السابعة إلى العاشرة." },
    { s: "B", en: "Thank you. What time do I need to leave the room?", ar: "شكرا. متى يجب أن أخرج من الغرفة؟" }
  ]
},
{
  id: "a1-17", icon: "🙋", level: "A1", top: true,
  title: "الضمائر وأسئلة الاستفهام", titleEn: "Pronouns & Question Words",
  goal: "تتعرّف على الضمائر وأهم أسئلة الاستفهام وتكوّن جملاً بسيطة.",
  words: [
    { en: "i", ar: "أنا", pr: "آي", ex: { en: "I am a student.", ar: "أنا طالب." } },
    { en: "you", ar: "أنتَ / أنتِ", pr: "يو", ex: { en: "You are my friend.", ar: "أنتَ صديقي." } },
    { en: "he", ar: "هو", pr: "هي", ex: { en: "He is a teacher.", ar: "هو معلّم." } },
    { en: "she", ar: "هي", pr: "شي", ex: { en: "She works at a hospital.", ar: "هي تعمل في مستشفى." } },
    { en: "it", ar: "هو/هي (لغير العاقل)", pr: "إت", ex: { en: "It is a big house.", ar: "إنه منزل كبير." } },
    { en: "we", ar: "نحن", pr: "وي", ex: { en: "We live in Riyadh.", ar: "نحن نعيش في الرياض." } },
    { en: "they", ar: "هم", pr: "ذي", ex: { en: "They are at school.", ar: "هم في المدرسة." } },
    { en: "me", ar: "ـني / إياي", pr: "مي", ex: { en: "Please help me.", ar: "من فضلك ساعدني." } },
    { en: "him", ar: "ـه / إياه", pr: "هِم", ex: { en: "I saw him yesterday.", ar: "رأيته أمس." } },
    { en: "her", ar: "ـها / إناثاً", pr: "هير", ex: { en: "I know her very well.", ar: "أعرفها جيداً جداً." } },
    { en: "us", ar: "ـنا / إيانا", pr: "أس", ex: { en: "Come with us.", ar: "تعال معنا." } },
    { en: "them", ar: "ـهم / إياهم", pr: "ذِم", ex: { en: "I met them at the park.", ar: "لقيتهم في الحديقة." } },
    { en: "my", ar: "ـي (ملكي)", pr: "ماي", ex: { en: "This is my book.", ar: "هذا كتابي." } },
    { en: "your", ar: "ـك (ملكك)", pr: "يور", ex: { en: "What is your name?", ar: "ما اسمك؟" } },
    { en: "his", ar: "ـه (ملكه)", pr: "هِز", ex: { en: "His car is new.", ar: "سيارته جديدة." } },
    { en: "our", ar: "ـنا (ملكنا)", pr: "آور", ex: { en: "Our house is big.", ar: "منزلنا كبير." } },
    { en: "their", ar: "ـهم (ملكهم)", pr: "ذير", ex: { en: "Their school is near.", ar: "مدرستهم قريبة." } },
    { en: "this", ar: "هذا / هذه", pr: "ذِس", ex: { en: "This is my pen.", ar: "هذا قلمي." } },
    { en: "what", ar: "ماذا / ما", pr: "وات", ex: { en: "What is this?", ar: "ما هذا؟" } },
    { en: "why", ar: "لماذا", pr: "واي", ex: { en: "Why are you sad?", ar: "لماذا أنت حزين؟" } },
    { en: "how", ar: "كيف", pr: "هاو", ex: { en: "How old are you?", ar: "كم عمرك؟" } },
  ],
  grammar: { title: "The Pronouns — الضمائر", ar: "الضمير يحلّ محل الاسم، ولكل ضمير صيغة في الفاعل والمفعول والملكية.",
    points: ["Subject (فاعل): I, you, he, she, it, we, they", "Object (مفعول): me, you, him, her, it, us, them", "Possessive (ملكية): my, your, his, her, its, our, their", "What? = ماذا / ما — Why? = لماذا — How? = كيف", "Example: She helps me with my homework."]
    , table: [
      ["Subject", "Object", "Possessive"],
      ["I", "me", "my"],
      ["he", "him", "his"],
      ["she", "her", "her"],
      ["we", "us", "our"],
      ["they", "them", "their"]
    ]
  },
  talk: [
    { s: "A", en: "What is your name?", ar: "ما اسمك؟" },
    { s: "B", en: "My name is Sara. And you?", ar: "اسمي سارة. وأنت؟" },
    { s: "A", en: "I am Omar. Why are you learning English?", ar: "أنا عمر. لماذا تتعلّمين الإنجليزية؟" },
    { s: "B", en: "Because I want to travel, and it is easy to learn.", ar: "لأنني أريد أن أسافر، وسهلة التعلّم." },
  ]
},
{
  id: "a1-18", icon: "🏃", level: "A1", top: true,
  title: "الأفعال اليومية الأساسية", titleEn: "Basic Daily Verbs",
  goal: "تحفظ أهم ٢٠ فعلاً وتستخدمها في جمل يومية بسيطة.",
  words: [
    { en: "get", ar: "يحصل على", pr: "جِت", ex: { en: "I get up at six.", ar: "أستيقظ في السادسة." } },
    { en: "give", ar: "يعطي", pr: "جِف", ex: { en: "Give me the book, please.", ar: "أعطني الكتاب من فضلك." } },
    { en: "take", ar: "يأخذ", pr: "تيك", ex: { en: "Take your bag with you.", ar: "خذ حقيبتك معك." } },
    { en: "put", ar: "يضع", pr: "بوت", ex: { en: "Put the cup on the table.", ar: "ضع الكوب على الطاولة." } },
    { en: "make", ar: "يصنع", pr: "مييك", ex: { en: "She makes good tea.", ar: "هي تصنع شاياً جيداً." } },
    { en: "come", ar: "يأتي", pr: "كَم", ex: { en: "Come here, please.", ar: "تعال إلى هنا من فضلك." } },
    { en: "go", ar: "يذهب", pr: "جو", ex: { en: "I go to work every day.", ar: "أذهب إلى العمل كل يوم." } },
    { en: "say", ar: "يقول", pr: "سيي", ex: { en: "He says hello every morning.", ar: "هو يقول صباح الخير كل صباح." } },
    { en: "tell", ar: "يخبر", pr: "تِل", ex: { en: "Tell me your name.", ar: "أخبرني باسمك." } },
    { en: "ask", ar: "يسأل", pr: "آسك", ex: { en: "She asks a question.", ar: "هي تسأل سؤالاً." } },
    { en: "talk", ar: "يتكلم", pr: "تووك", ex: { en: "We talk in English.", ar: "نتكلم بالإنجليزية." } },
    { en: "know", ar: "يعرف", pr: "نوه", ex: { en: "I know the answer.", ar: "أعرف الجواب." } },
    { en: "think", ar: "يفكر", pr: "ثِنك", ex: { en: "I think it is easy.", ar: "أظن أنه سهل." } },
    { en: "understand", ar: "يفهم", pr: "أندرستاند", ex: { en: "I don't understand you.", ar: "لا أفهمك." } },
    { en: "see", ar: "يرى", pr: "سيي", ex: { en: "I see a bird in the tree.", ar: "أرى طائراً في الشجرة." } },
    { en: "look", ar: "ينظر", pr: "لووك", ex: { en: "Look at the blackboard.", ar: "انظر إلى السبورة." } },
    { en: "find", ar: "يجد", pr: "فايند", ex: { en: "I can't find my key.", ar: "لا أجد مفتاحي." } },
    { en: "eat", ar: "يأكل", pr: "إيت", ex: { en: "We eat dinner at eight.", ar: "نتناول العشاء في الثامنة." } },
    { en: "drink", ar: "يشرب", pr: "درينك", ex: { en: "Drink some water, please.", ar: "اشرب بعض الماء من فضلك." } },
    { en: "sleep", ar: "ينام", pr: "سليب", ex: { en: "I sleep at eleven.", ar: "أنام في الحادية عشرة." } },
  ],
  grammar: { title: "Simple Present — المضارع البسيط", ar: "نستخدم المضارع البسيط للعادات والحقائق، ونضيف s للفاعل he/she/it.",
    points: ["I / you / we / they + verb : I go to school.", "he / she / it + verb + s : She goes to school.", "النفي: don't / doesn't + verb : I don't know.", "السؤال: Do / Does + subject + verb ? : Do you understand?", "المصدر بعد to : I want to eat."]
    , table: [
      ["Subject", "Verb", "Example"],
      ["I", "know", "I know the answer."],
      ["he", "knows", "He knows the answer."],
      ["they", "know", "They know the answer."]
    ]
  },
  talk: [
    { s: "A", en: "What do you do every morning?", ar: "ماذا تفعل كل صباح؟" },
    { s: "B", en: "I get up, take a shower, and eat breakfast.", ar: "أستيقظ، آخذ دشاً، وأتناول الفطور." },
    { s: "A", en: "What time do you go to work?", ar: "متى تذهب إلى العمل؟" },
    { s: "B", en: "I go at seven, and I come back at four.", ar: "أذهب في السابعة وأعود في الرابعة." },
  ]
},
{
  id: "a1-19", icon: "📖", level: "A1", top: true,
  title: "الحركة والتعلّم", titleEn: "Movement & Learning",
  goal: "تصف حركاتك اليوم وتحدث عن تعلّمك للغة.",
  words: [
    { en: "run", ar: "يجري", pr: "رَن", ex: { en: "He runs every morning.", ar: "هو يجري كل صباح." } },
    { en: "walk", ar: "يمشي", pr: "ووك", ex: { en: "I walk to school.", ar: "أمشي إلى المدرسة." } },
    { en: "sit", ar: "يجلس", pr: "سِت", ex: { en: "Sit here, please.", ar: "اجلس هنا من فضلك." } },
    { en: "stand", ar: "يقف", pr: "ستاند", ex: { en: "Stand up, please.", ar: "قف من فضلك." } },
    { en: "read", ar: "يقرأ", pr: "رِيد", ex: { en: "I read a story every night.", ar: "أقرأ قصة كل ليلة." } },
    { en: "write", ar: "يكتب", pr: "رايت", ex: { en: "Write your name here.", ar: "اكتب اسمك هنا." } },
    { en: "listen", ar: "يستمع", pr: "لِيسِن", ex: { en: "Listen to the teacher.", ar: "استمع إلى المعلم." } },
    { en: "speak", ar: "يتحدّث", pr: "سبييك", ex: { en: "I speak a little English.", ar: "أتحدث قليلاً من الإنجليزية." } },
    { en: "play", ar: "يلعب", pr: "بلاي", ex: { en: "The children play in the garden.", ar: "الأطفال يلعبون في الحديقة." } },
    { en: "learn", ar: "يتعلّم", pr: "لِيرن", ex: { en: "I learn English every day.", ar: "أتعلّم الإنجليزية كل يوم." } },
  ],
  grammar: { title: "Imperatives & Can — الأمر وقدرة", ar: "صيغة الأمر تبدأ بالفعل مباشرة، و can تعبّر عن القدرة.",
    points: ["الأمر: Sit down. / Stand up. / Open the book.", "النفي بالأمر: Don't run in the class.", "can + verb : I can speak English.", "النفي: I can't write it.", "السؤال: Can you read this?"]
    , table: [
      ["Positive", "Negative", "Question"],
      ["I can read", "I can't read", "Can you read?"],
      ["He can write", "He can't write", "Can he write?"]
    ]
  },
  talk: [
    { s: "A", en: "Can you speak English slowly?", ar: "هل يمكنك أن تتكلم الإنجليزية ببطء؟" },
    { s: "B", en: "Yes. Listen to me and repeat after me.", ar: "نعم. استمع إليّ وكرّر ورائي." },
    { s: "A", en: "How often do you read in English?", ar: "كم مرة تقرأ بالإنجليزية؟" },
    { s: "B", en: "I read and write every day after work.", ar: "أقرأ وأكتب كل يوم بعد العمل." },
  ]
},
{
  id: "a1-20", icon: "⭐", level: "A1", top: true, top: true,
  title: "الصفات الأساسية", titleEn: "Essential Adjectives",
  goal: "تصف الأشياء والأشخاص بـ ١٨ صفة أساسية.",
  words: [
    { en: "good", ar: "جيد", pr: "جود", ex: { en: "This is a good book.", ar: "هذا كتاب جيد." } },
    { en: "bad", ar: "سيء", pr: "باد", ex: { en: "The weather is bad today.", ar: "الطقس سيء اليوم." } },
    { en: "big", ar: "كبير", pr: "بِج", ex: { en: "They live in a big house.", ar: "هم يعيشون في منزل كبير." } },
    { en: "small", ar: "صغير", pr: "سمول", ex: { en: "I have a small bag.", ar: "عندي حقيبة صغيرة." } },
    { en: "new", ar: "جديد", pr: "نيو", ex: { en: "She has a new phone.", ar: "عندها هاتف جديد." } },
    { en: "old", ar: "قديم / كبير السن", pr: "أولد", ex: { en: "My grandfather is old.", ar: "جدي كبير في السن." } },
    { en: "happy", ar: "سعيد", pr: "هابي", ex: { en: "I am happy today.", ar: "أنا سعيد اليوم." } },
    { en: "sad", ar: "حزين", pr: "ساد", ex: { en: "Why are you sad?", ar: "لماذا أنت حزين؟" } },
    { en: "fast", ar: "سريع", pr: "فاست", ex: { en: "This car is very fast.", ar: "هذه السيارة سريعة جداً." } },
    { en: "slow", ar: "بطيء", pr: "سلو", ex: { en: "The bus is slow today.", ar: "الحافلة بطيئة اليوم." } },
    { en: "easy", ar: "سهل", pr: "إيزي", ex: { en: "This lesson is easy.", ar: "هذه الدورة سهلة." } },
    { en: "hard", ar: "صعب", pr: "هارد", ex: { en: "The exam is hard.", ar: "الاختبار صعب." } },
    { en: "wrong", ar: "خاطئ", pr: "رونج", ex: { en: "Your answer is wrong.", ar: "جوابك خاطئ." } },
    { en: "same", ar: "نفس / مماثل", pr: "سَيم", ex: { en: "We are in the same class.", ar: "نحن في نفس الشعبة." } },
    { en: "important", ar: "مهم", pr: "إمبورتانت", ex: { en: "English is important.", ar: "الإنجليزية مهمة." } },
    { en: "long", ar: "طويل", pr: "لونج", ex: { en: "It is a long road.", ar: "إنها طريق طويل." } },
    { en: "high", ar: "عالٍ", pr: "هاي", ex: { en: "The mountain is high.", ar: "الجبل مرتفع." } },
    { en: "low", ar: "منخفض", pr: "لوه", ex: { en: "The price is low.", ar: "السعر منخفض." } },
  ],
  grammar: { title: "Adjectives & How — الصفات", ar: "الصفة تأتي قبل الاسم أو بعد فعل الكينونة، ونسأل عنها بـ How.",
    points: ["الصفة قبل الاسم: a big house", "الصفة بعد فعل الكينونة: The house is big.", "How + adjective : How old? / How tall? / How much?", "المقارنة: big → bigger → the biggest", "المقارنة مع than : This book is easier than that one."]
    , table: [
      ["Adjective", "Comparative", "Superlative"],
      ["good", "better", "the best"],
      ["bad", "worse", "the worst"],
      ["easy", "easier", "the easiest"],
      ["big", "bigger", "the biggest"]
    ]
  },
  talk: [
    { s: "A", en: "Is the exam hard or easy?", ar: "هل الاختبار صعب أم سهل؟" },
    { s: "B", en: "It is easy, but the questions are long.", ar: "سهل، لكن الأسئلة طويلة." },
    { s: "A", en: "Is your school far from your house?", ar: "هل مدرستك بعيدة عن منزلك؟" },
    { s: "B", en: "No, it is near, so I walk there fast.", ar: "لا، إنها قريبة، فأمشي إليها بسرعة." },
  ]
},
{
  id: "a1-21", icon: "🌳", level: "A1", top: true, top: true,
  title: "الناس والطبيعة", titleEn: "People & Nature",
  goal: "تسمّي أفراد العائلة والحيوانات وعناصر الطبيعة.",
  words: [
    { en: "man", ar: "رجل", pr: "مَن", ex: { en: "The man is my uncle.", ar: "الرجل عمي." } },
    { en: "woman", ar: "امرأة", pr: "وومِن", ex: { en: "She is a nice woman.", ar: "هي امرأة طيبة." } },
    { en: "boy", ar: "ولد", pr: "بوي", ex: { en: "The boy is ten years old.", ar: "الولد عمره عشر سنوات." } },
    { en: "girl", ar: "بنت", pr: "جِرل", ex: { en: "The girl reads a book.", ar: "البنت تقرأ كتاباً." } },
    { en: "people", ar: "ناس", pr: "بييبل", ex: { en: "Many people are here.", ar: "الكثير من الناس هنا." } },
    { en: "friend", ar: "صديق", pr: "فريند", ex: { en: "He is my best friend.", ar: "هو أفضل صديق لي." } },
    { en: "thing", ar: "شيء", pr: "ثِنج", ex: { en: "I need one thing only.", ar: "أحتاج شيئاً واحداً فقط." } },
    { en: "day", ar: "يوم", pr: "ديي", ex: { en: "Have a nice day.", ar: "أتمنى لك يوماً جيداً." } },
    { en: "month", ar: "شهر", pr: "مَنث", ex: { en: "January is a cold month.", ar: "يناير شهر بارد." } },
    { en: "dog", ar: "كلب", pr: "دوج", ex: { en: "The dog is friendly.", ar: "الكلب ودود." } },
    { en: "cat", ar: "قطة", pr: "كات", ex: { en: "The cat sleeps on the bed.", ar: "القطة تنام على السرير." } },
    { en: "bird", ar: "طائر", pr: "بِرد", ex: { en: "A bird is singing.", ar: "طائر يغنّي." } },
    { en: "tree", ar: "شجرة", pr: "تري", ex: { en: "The tree is very tall.", ar: "الشجرة طويلة جداً." } },
    { en: "sky", ar: "سماء", pr: "سكاي", ex: { en: "The sky is blue.", ar: "السماء زرقاء." } },
    { en: "sea", ar: "بحر", pr: "سيي", ex: { en: "We swim in the sea.", ar: "نسبح في البحر." } },
    { en: "flower", ar: "زهرة", pr: "فلاور", ex: { en: "She buys a red flower.", ar: "تشتري زهرة حمراء." } },
    { en: "animal", ar: "حيوان", pr: "أنيمَل", ex: { en: "The horse is a strong animal.", ar: "الحصان حيوان قوي." } },
    { en: "moon", ar: "قمر", pr: "مُون", ex: { en: "The moon is bright tonight.", ar: "القمر ساطع الليلة." } },
    { en: "star", ar: "نجمة", pr: "ستار", ex: { en: "I see a star in the sky.", ar: "أرى نجمة في السماء." } },
  ],
  grammar: { title: "There is / There are — يوجد", ar: "نستخدم There is للمفرد و There is/are للجمع عند الحديث عن الوجود.",
    points: ["There is + singular : There is a cat in the garden.", "There are + plural : There are many birds in the sky.", "النفي: There isn't / There aren't", "السؤال: Is there...? / Are there...?", "الجمع المنتظم: tree → trees, flower → flowers"]
    , table: [
      ["Singular", "Plural"],
      ["a tree", "trees"],
      ["a flower", "flowers"],
      ["a bird", "birds"],
      ["a man", "men"]
    ]
  },
  talk: [
    { s: "A", en: "Look at the sky! Is it clear?", ar: "انظر إلى السماء! هل هي صافية؟" },
    { s: "B", en: "Yes, and you can see the moon and the stars.", ar: "نعم، ويمكنك رؤية القمر والنجوم." },
    { s: "A", en: "Are there any animals in the park?", ar: "هل هناك حيوانات في الحديقة؟" },
    { s: "B", en: "Yes, there are dogs, cats, and many birds.", ar: "نعم، هناك كلاب وقطوط وطيور كثيرة." },
  ]
},
{
  id: "a1-22", icon: "🔗", level: "A1", top: true, top: true,
  title: "أدوات الربط والحرف", titleEn: "Linking Words & Prepositions",
  goal: "تربط جملك بأدوات مثل because و if و but بشكل صحيح.",
  words: [
    { en: "with", ar: "مع", pr: "ويث", ex: { en: "Come with me.", ar: "تعال معي." } },
    { en: "without", ar: "بدون", pr: "ويذاوت", ex: { en: "He left without his bag.", ar: "غادر بدون حقيبته." } },
    { en: "from", ar: "من", pr: "فروم", ex: { en: "I am from Egypt.", ar: "أنا من مصر." } },
    { en: "to", ar: "إلى", pr: "تو", ex: { en: "I go to school.", ar: "أذهب إلى المدرسة." } },
    { en: "of", ar: "لـ / مِن", pr: "أوف", ex: { en: "The door of the house.", ar: "باب المنزل." } },
    { en: "and", ar: "و", pr: "آند", ex: { en: "I read and write.", ar: "أقرأ وأكتب." } },
    { en: "but", ar: "لكن", pr: "بَت", ex: { en: "It is small but nice.", ar: "إنه صغير لكنه جميل." } },
    { en: "or", ar: "أو", pr: "أور", ex: { en: "Tea or coffee?", ar: "شاي أم قهوة؟" } },
    { en: "because", ar: "لأن", pr: "بيكوز", ex: { en: "I am late because of the rain.", ar: "تأخرت بسبب المطر." } },
    { en: "if", ar: "إذا", pr: "إف", ex: { en: "If you study, you pass.", ar: "ذا درست نجحت." } },
    { en: "so", ar: "لذلك / جداً", pr: "سو", ex: { en: "It is very cold, so I stay home.", ar: "الجو بارد جداً فبقيت في البيت." } },
    { en: "very", ar: "جداً", pr: "فيري", ex: { en: "The test is very easy.", ar: "الاختبار سهل جداً." } },
  ],
  grammar: { title: "Conjunctions & Prepositions — أدوات الربط", ar: "تربط الأدوات بين الجملتين، وحرف الجر يحدد العلاقة المكانية أو الزمانية.",
    points: ["and للمتابعة / but لل contrast / or للاختيار", "because + جملة : I study because I want to pass.", "if + جملة ماضٍ بسيط : If you study, you pass.", "with = مع / without = بدون / from = من / to = إلى", "so = لذلك : It rained, so I stayed home."]
    , table: [
      ["Tool", "Use", "Example"],
      ["and", "معلومة إضافية", "I read and write."],
      ["but", "معارضة", "small but nice"],
      ["or", "اختيار", "tea or coffee"],
      ["because", "سبب", "because of the rain"]
    ]
  },
  talk: [
    { s: "A", en: "Why didn't you come yesterday?", ar: "لماذا لم تأتِ أمس؟" },
    { s: "B", en: "Because it was raining, so I stayed home.", ar: "لأنه كان تمطر، فبقيت في البيت." },
    { s: "A", en: "Do you want tea or coffee?", ar: "هل تريد شاي أم قهوة؟" },
    { s: "B", en: "Tea, please, with a little sugar.", ar: "شاي من فضلك، مع قليل من السكر." },
  ]
}
];
