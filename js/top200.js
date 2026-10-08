/* =========================================================
   أهم ٢٠٠ كلمة — A1 + A2
   ترتيب: من الأهم إلى الأقل أهمية داخل كل مجموعة.
   المجموعات: ضمائر ← أفعال ← صفات ← أسماء ← أدوات ربط.
   التوليد: /tmp/opencode/build_top200.py
   ========================================================= */
window.TOP200 = [
  {
    id: "pron", icon: "\ud83d\udd24",
    title: "ضمائر وأسئلة الاستفهام", titleEn: "Pronouns & Questions",
    desc: "أساس بناء الجملة — احفظها أولاً.",
    words: ["i", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them", "my", "your", "his", "our", "their", "this", "what", "how", "why"]
  },
  {
    id: "verb", icon: "\u26a1",
    title: "الأفعال", titleEn: "Verbs",
    desc: "أقوى ٨٠ فعلاً في اللغة الإنجليزية.",
    words: ["know", "go", "get", "make", "take", "see", "think", "say", "come", "give", "find", "look", "eat", "put", "ask", "tell", "talk", "understand", "drink", "read", "write", "play", "learn", "walk", "run", "sit", "stand", "listen", "speak", "sleep", "keep", "spend", "return", "continue", "decide", "allow", "agree", "avoid", "expect", "believe", "choose", "lose", "join", "reach", "fail", "succeed", "save", "borrow", "arrive", "prepare", "protect", "manage", "require", "respond", "consider", "increase", "reduce", "replace", "prevent", "develop", "improve", "provide", "accept", "refuse", "suggest", "explain", "discuss", "describe", "compare", "recommend", "build", "create", "produce", "solve", "forget", "remind", "invite", "introduce", "promise", "apologize", "thank"]
  },
  {
    id: "adj", icon: "\ud83c\udff7\ufe0f",
    title: "الصفات", titleEn: "Adjectives",
    desc: "صفات تصف بها الأشياء والأشخاص.",
    words: ["good", "new", "old", "big", "small", "important", "happy", "bad", "sad", "easy", "hard", "long", "fast", "slow", "wrong", "same", "high", "low", "possible", "different", "necessary", "difficult", "common", "special", "similar", "available", "personal", "responsible"]
  },
  {
    id: "noun", icon: "\ud83d\udce6",
    title: "الأسماء", titleEn: "Nouns",
    desc: "أكثر الأسماء استخداماً في الحياة اليومية والعمل.",
    words: ["people", "day", "man", "woman", "friend", "boy", "girl", "thing", "month", "dog", "cat", "animal", "tree", "bird", "sea", "sky", "flower", "moon", "star", "problem", "reason", "education", "decision", "advice", "goal", "ability", "energy", "effort", "effect", "attention", "benefit", "choice", "difference", "opportunity", "challenge", "contact", "comment", "community", "amount", "confidence", "direction", "approach", "conflict", "environment", "economy", "equipment", "evidence", "exchange", "expert", "feature", "feedback", "function", "guidance", "concept", "difficulty", "argument", "disaster", "solution"]
  },
  {
    id: "prep", icon: "\ud83d\udd17",
    title: "أدوات الربط وحروف الجر", titleEn: "Linking Words & Prepositions",
    desc: "تربط جملك وتعطيها معنى.",
    words: ["and", "but", "or", "because", "if", "with", "from", "to", "of", "without", "so", "very"]
  },
];
window.TOP_RANK = {
  "i": 1, "you": 2, "he": 3, "she": 4, "it": 5, "we": 6, "they": 7, "me": 8, "him": 9, "her": 10,
  "us": 11, "them": 12, "my": 13, "your": 14, "his": 15, "our": 16, "their": 17, "this": 18, "what": 19, "how": 20,
  "why": 21, "know": 22, "go": 23, "get": 24, "make": 25, "take": 26, "see": 27, "think": 28, "say": 29, "come": 30,
  "give": 31, "find": 32, "look": 33, "eat": 34, "put": 35, "ask": 36, "tell": 37, "talk": 38, "understand": 39, "drink": 40,
  "read": 41, "write": 42, "play": 43, "learn": 44, "walk": 45, "run": 46, "sit": 47, "stand": 48, "listen": 49, "speak": 50,
  "sleep": 51, "keep": 52, "spend": 53, "return": 54, "continue": 55, "decide": 56, "allow": 57, "agree": 58, "avoid": 59, "expect": 60,
  "believe": 61, "choose": 62, "lose": 63, "join": 64, "reach": 65, "fail": 66, "succeed": 67, "save": 68, "borrow": 69, "arrive": 70,
  "prepare": 71, "protect": 72, "manage": 73, "require": 74, "respond": 75, "consider": 76, "increase": 77, "reduce": 78, "replace": 79, "prevent": 80,
  "develop": 81, "improve": 82, "provide": 83, "accept": 84, "refuse": 85, "suggest": 86, "explain": 87, "discuss": 88, "describe": 89, "compare": 90,
  "recommend": 91, "build": 92, "create": 93, "produce": 94, "solve": 95, "forget": 96, "remind": 97, "invite": 98, "introduce": 99, "promise": 100,
  "apologize": 101, "thank": 102, "good": 103, "new": 104, "old": 105, "big": 106, "small": 107, "important": 108, "happy": 109, "bad": 110,
  "sad": 111, "easy": 112, "hard": 113, "long": 114, "fast": 115, "slow": 116, "wrong": 117, "same": 118, "high": 119, "low": 120,
  "possible": 121, "different": 122, "necessary": 123, "difficult": 124, "common": 125, "special": 126, "similar": 127, "available": 128, "personal": 129, "responsible": 130,
  "people": 131, "day": 132, "man": 133, "woman": 134, "friend": 135, "boy": 136, "girl": 137, "thing": 138, "month": 139, "dog": 140,
  "cat": 141, "animal": 142, "tree": 143, "bird": 144, "sea": 145, "sky": 146, "flower": 147, "moon": 148, "star": 149, "problem": 150,
  "reason": 151, "education": 152, "decision": 153, "advice": 154, "goal": 155, "ability": 156, "energy": 157, "effort": 158, "effect": 159, "attention": 160,
  "benefit": 161, "choice": 162, "difference": 163, "opportunity": 164, "challenge": 165, "contact": 166, "comment": 167, "community": 168, "amount": 169, "confidence": 170,
  "direction": 171, "approach": 172, "conflict": 173, "environment": 174, "economy": 175, "equipment": 176, "evidence": 177, "exchange": 178, "expert": 179, "feature": 180,
  "feedback": 181, "function": 182, "guidance": 183, "concept": 184, "difficulty": 185, "argument": 186, "disaster": 187, "solution": 188, "and": 189, "but": 190,
  "or": 191, "because": 192, "if": 193, "with": 194, "from": 195, "to": 196, "of": 197, "without": 198, "so": 199, "very": 200,
};
window.TOP_GROUP = {
  "i": "pron", "you": "pron", "he": "pron", "she": "pron", "it": "pron", "we": "pron", "they": "pron", "me": "pron", "him": "pron", "her": "pron",
  "us": "pron", "them": "pron", "my": "pron", "your": "pron", "his": "pron", "our": "pron", "their": "pron", "this": "pron", "what": "pron", "how": "pron",
  "why": "pron", "know": "verb", "go": "verb", "get": "verb", "make": "verb", "take": "verb", "see": "verb", "think": "verb", "say": "verb", "come": "verb",
  "give": "verb", "find": "verb", "look": "verb", "eat": "verb", "put": "verb", "ask": "verb", "tell": "verb", "talk": "verb", "understand": "verb", "drink": "verb",
  "read": "verb", "write": "verb", "play": "verb", "learn": "verb", "walk": "verb", "run": "verb", "sit": "verb", "stand": "verb", "listen": "verb", "speak": "verb",
  "sleep": "verb", "keep": "verb", "spend": "verb", "return": "verb", "continue": "verb", "decide": "verb", "allow": "verb", "agree": "verb", "avoid": "verb", "expect": "verb",
  "believe": "verb", "choose": "verb", "lose": "verb", "join": "verb", "reach": "verb", "fail": "verb", "succeed": "verb", "save": "verb", "borrow": "verb", "arrive": "verb",
  "prepare": "verb", "protect": "verb", "manage": "verb", "require": "verb", "respond": "verb", "consider": "verb", "increase": "verb", "reduce": "verb", "replace": "verb", "prevent": "verb",
  "develop": "verb", "improve": "verb", "provide": "verb", "accept": "verb", "refuse": "verb", "suggest": "verb", "explain": "verb", "discuss": "verb", "describe": "verb", "compare": "verb",
  "recommend": "verb", "build": "verb", "create": "verb", "produce": "verb", "solve": "verb", "forget": "verb", "remind": "verb", "invite": "verb", "introduce": "verb", "promise": "verb",
  "apologize": "verb", "thank": "verb", "good": "adj", "new": "adj", "old": "adj", "big": "adj", "small": "adj", "important": "adj", "happy": "adj", "bad": "adj",
  "sad": "adj", "easy": "adj", "hard": "adj", "long": "adj", "fast": "adj", "slow": "adj", "wrong": "adj", "same": "adj", "high": "adj", "low": "adj",
  "possible": "adj", "different": "adj", "necessary": "adj", "difficult": "adj", "common": "adj", "special": "adj", "similar": "adj", "available": "adj", "personal": "adj", "responsible": "adj",
  "people": "noun", "day": "noun", "man": "noun", "woman": "noun", "friend": "noun", "boy": "noun", "girl": "noun", "thing": "noun", "month": "noun", "dog": "noun",
  "cat": "noun", "animal": "noun", "tree": "noun", "bird": "noun", "sea": "noun", "sky": "noun", "flower": "noun", "moon": "noun", "star": "noun", "problem": "noun",
  "reason": "noun", "education": "noun", "decision": "noun", "advice": "noun", "goal": "noun", "ability": "noun", "energy": "noun", "effort": "noun", "effect": "noun", "attention": "noun",
  "benefit": "noun", "choice": "noun", "difference": "noun", "opportunity": "noun", "challenge": "noun", "contact": "noun", "comment": "noun", "community": "noun", "amount": "noun", "confidence": "noun",
  "direction": "noun", "approach": "noun", "conflict": "noun", "environment": "noun", "economy": "noun", "equipment": "noun", "evidence": "noun", "exchange": "noun", "expert": "noun", "feature": "noun",
  "feedback": "noun", "function": "noun", "guidance": "noun", "concept": "noun", "difficulty": "noun", "argument": "noun", "disaster": "noun", "solution": "noun", "and": "prep", "but": "prep",
  "or": "prep", "because": "prep", "if": "prep", "with": "prep", "from": "prep", "to": "prep", "of": "prep", "without": "prep", "so": "prep", "very": "prep",
};
