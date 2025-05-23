// ==============================
// Quiz Data
// ==============================
const questions = [
  { type: "mcq", question: "نعت کس کی تعریف ہے؟", options: ["استاد", "نبی کریم ﷺ", "شاعر", "بزرگ"], answer: "نبی کریم ﷺ" },
  { type: "mcq", question: '"سیرت" کا مطلب ہے؟', options: ["مال", "زمین", "کردار", "علم"], answer: "کردار" },
  { type: "mcq", question: "Who is the central figure in this poem?", options: ["Allah", "Prophet Muhammad ﷺ", "A king", "A warrior"], answer: "Prophet Muhammad ﷺ" },
  { type: "mcq", question: '"ہدایت" means:', options: ["Darkness", "Guidance", "Light", "War"], answer: "Guidance" },
  { type: "mcq", question: "شاعر نے کس کے اخلاق کی بات کی ہے؟", options: ["والدین", "استاد", "حضور اکرم ﷺ", "دوست"], answer: "حضور اکرم ﷺ" },

  { type: "short-answer", question: "نعت میں شاعر نے نبی ﷺ کی کون سی صفات بیان کی ہیں؟" },
  { type: "short-answer", question: "نعت لکھنے کا مقصد کیا ہے؟" },
  { type: "short-answer", question: 'What is "Aqeedat" in English?' },
  { type: "short-answer", question: "How does the poet express love for the Prophet ﷺ?" },
  { type: "short-answer", question: "Why is the life of the Prophet ﷺ a role model?" },

  { type: "fill-in-the-blank", question: "نعت میں نبی ﷺ کی __________ بیان کی جاتی ہے۔", answer: "نبی" },
  { type: "fill-in-the-blank", question: "سیرت سے مراد نبی ﷺ کی __________ ہے۔", answer: "سیرت" },
  { type: "fill-in-the-blank", question: "The poem is filled with __________ for the Prophet ﷺ.", answer: "love" },
  { type: "fill-in-the-blank", question: "Prophet Muhammad ﷺ was a symbol of __________.", answer: "perfection" },
  { type: "fill-in-the-blank", question: "The poet finds __________ in the Prophet’s ﷺ teachings.", answer: "guidance" },

  { type: "true-false", question: "نعت صرف کتابوں میں لکھی جاتی ہے۔", options: ["True", "False"], answer: "False" },
  { type: "true-false", question: "نبی کریم ﷺ کی سیرت کامل نمونہ ہے۔", options: ["True", "False"], answer: "True" },
  { type: "true-false", question: "The poem ignores the Prophet’s ﷺ teachings.", options: ["True", "False"], answer: "False" },
  { type: "true-false", question: "Poet shows deep love for Prophet ﷺ.", options: ["True", "False"], answer: "True" },
  { type: "true-false", question: "Naat is about the love of Allah.", options: ["True", "False"], answer: "False" }
];

// ==============================
// Constants & State
// ==============================
let currentQuestionIndex = 0;
let score = 0;
const predefinedCode = "334556";

// ==============================
// DOM Elements
// ==============================
const pages = {
  welcome: document.getElementById('welcome-page'),
  quiz: document.getElementById('quiz-page'),
  score: document.getElementById('score-page'),
  code: document.getElementById('code-page')
};

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');
const errorMsg = document.getElementById('error-message');

// ==============================
// Page Initialization
// ==============================
window.onload = async () => {
  const incognito = await detectIncognito();
  if (incognito) {
    alert("You cannot take the quiz in incognito/private mode.");
    window.location.href = "https://www.google.com";
    return;
  }

  if (getCookie("quizTaken")) {
    showPage("code");
  } else {
    showPage("welcome");
  }
};

// ==============================
// Event Listeners
// ==============================
document.getElementById('start-quiz-btn').addEventListener('click', () => {
  getCookie("quizTaken") ? showPage("code") : startQuiz();
});

document.getElementById('retake-quiz-btn').addEventListener('click', () => showPage("code"));

document.getElementById('submit-code-btn').addEventListener('click', () => {
  const code = document.getElementById('code-input').value.trim();
  if (code === predefinedCode) {
    eraseCookie("quizTaken");
    errorMsg.textContent = "";
    startQuiz();
  } else {
    errorMsg.textContent = "Incorrect Code. Please try again.";
  }
});

nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  currentQuestionIndex < questions.length ? loadQuestion() : finishQuiz();
});

// Lock quiz on tab switch or window blur
document.addEventListener("visibilitychange", () => {
  if (document.hidden && getCurrentPage() === "quiz") {
    lockQuiz();
  }
});

// ==============================
// Core Quiz Functions
// ==============================
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  setCookie("quizTaken", "true", 7);
  showPage("quiz");
  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentQuestionIndex];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';
  nextBtn.disabled = true;

  if (q.type === "short-answer" || q.type === "fill-in-the-blank") {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "code-input";
    input.placeholder = "Write your answer here...";
    optionsEl.appendChild(input);
    nextBtn.disabled = false;

    nextBtn.onclick = () => {
      const userInput = input.value.trim();
      if (q.type === "fill-in-the-blank" && userInput.toLowerCase() === q.answer.toLowerCase()) {
        score++;
      }
      nextQuestion();
    };
  } else {
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => {
        if (option === q.answer) score++;
        nextQuestion();
      };
      optionsEl.appendChild(btn);
    });
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  currentQuestionIndex < questions.length ? loadQuestion() : finishQuiz();
}

function finishQuiz() {
  const scorableCount = questions.filter(q => q.answer).length;
  scoreEl.textContent = `${score} / ${scorableCount}`;
  showPage("score");
}

function lockQuiz() {
  eraseCookie("quizTaken");
  alert("You switched tabs. The quiz is now locked.");
  showPage("code");
}

// ==============================
// Helper Functions
// ==============================
function showPage(name) {
  Object.values(pages).forEach(p => p.style.display = 'none');
  pages[name].style.display = 'block';
}

function getCurrentPage() {
  return Object.entries(pages).find(([, el]) => el.style.display === 'block')?.[0] || "";
}

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 86400000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
  return document.cookie.split("; ").find(row => row.startsWith(name + "="))?.split("=")[1];
}

function eraseCookie(name) {
  document.cookie = `${name}=; Max-Age=0; path=/`;
}

// ==============================
// Incognito Detection
// ==============================
function detectIncognito() {
  return new Promise(resolve => {
    const fs = window.RequestFileSystem || window.webkitRequestFileSystem;
    if (!fs) resolve(false);
    else fs(window.TEMPORARY, 100, () => resolve(false), () => resolve(true));
  });
}
