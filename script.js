// ==============================
// Quiz Questions
// ==============================
const questions = [
  // Multiple Choice Questions (MCQs)
  {
    type: "mcq",
    question: "حمد کا مطلب کیا ہے؟",
    options: ["دعا", "تعریف", "سوال", "جواب"],
    answer: "تعریف"
  },
  {
    type: "mcq",
    question: "شاعر نے قدرت کی کن چیزوں کا ذکر کیا؟",
    options: ["گاڑی", "کمپیوٹر", "زمین و آسمان", "موبائل"],
    answer: "زمین و آسمان"
  },
  {
    type: "mcq",
    question: "Who is praised in this poem?",
    options: ["The Prophet (PBUH)", "A king", "Allah Almighty", "A poet"],
    answer: "Allah Almighty"
  },
  {
    type: "mcq",
    question: "تسبیح کا مطلب ہے:",
    options: ["Prayer", "Praise of Allah", "Complaint", "Question"],
    answer: "Praise of Allah"
  },
  {
    type: "mcq",
    question: "Which element of nature is not mentioned in the poem?",
    options: ["Sky", "Light", "River", "Car"],
    answer: "Car"
  },
  {
    type: "mcq",
    question: "نعت کس کی تعریف ہے؟",
    options: ["استاد", "نبی کریم ﷺ", "شاعر", "بزرگ"],
    answer: "نبی کریم ﷺ"
  },
  {
    type: "mcq",
    question: '"سیرت" کا مطلب ہے؟',
    options: ["مال", "زمین", "کردار", "علم"],
    answer: "کردار"
  },
  {
    type: "mcq",
    question: "Who is the central figure in this poem?",
    options: ["Allah", "Prophet Muhammad ﷺ", "A king", "A warrior"],
    answer: "Prophet Muhammad ﷺ"
  },
  {
    type: "mcq",
    question: '"ہدایت" means:',
    options: ["Darkness", "Guidance", "Light", "War"],
    answer: "Guidance"
  },
  {
    type: "mcq",
    question: "شاعر نے کس کے اخلاق کی بات کی ہے؟",
    options: ["والدین", "استاد", "حضور اکرم ﷺ", "دوست"],
    answer: "حضور اکرم ﷺ"
  },

  // Short Answer Questions
  {
    type: "short-answer",
    question: "نظم کا بنیادی پیغام کیا ہے؟"
  },
  {
    type: "short-answer",
    question: "شاعر کے نزدیک قدرت کس کی گواہی دیتی ہے؟"
  },
  {
    type: "short-answer",
    question: "تسبیح کا مطلب اپنے الفاظ میں بیان کریں۔"
  },
  {
    type: "short-answer",
    question: "What is the poet thankful for?"
  },
  {
    type: "short-answer",
    question: "What should a human being do in response to nature's beauty?"
  },
  {
    type: "short-answer",
    question: "نعت میں شاعر نے نبی ﷺ کی کون سی صفات بیان کی ہیں؟"
  },
  {
    type: "short-answer",
    question: "نعت لکھنے کا مقصد کیا ہے؟"
  },
  {
    type: "short-answer",
    question: 'What is "Aqeedat" in English?'
  },
  {
    type: "short-answer",
    question: "How does the poet express love for the Prophet ﷺ?"
  },
  {
    type: "short-answer",
    question: "Why is the life of the Prophet ﷺ a role model?"
  },

  // Fill in the Blank Questions
  {
    type: "fill-in-the-blank",
    question: "حمد کا مطلب ہے __________۔",
    answer: "تعریف"
  },
  {
    type: "fill-in-the-blank",
    question: "ہر چیز اللہ کی __________ کرتی ہے۔",
    answer: "تعریف"
  },
  {
    type: "fill-in-the-blank",
    question: "شاعر کے مطابق زمین و آسمان اللہ کی __________ ہیں۔",
    answer: "نشانیاں"
  },
  {
    type: "fill-in-the-blank",
    question: "Nature reflects the __________ of God.",
    answer: "glory"
  },
  {
    type: "fill-in-the-blank",
    question: "The poem teaches us to be __________.",
    answer: "thankful"
  },
  {
    type: "fill-in-the-blank",
    question: "نعت میں نبی ﷺ کی __________ بیان کی جاتی ہے۔",
    answer: "نبی"
  },
  {
    type: "fill-in-the-blank",
    question: "سیرت سے مراد نبی ﷺ کی __________ ہے۔",
    answer: "سیرت"
  },
  {
    type: "fill-in-the-blank",
    question: "The poem is filled with __________ for the Prophet ﷺ.",
    answer: "love"
  },
  {
    type: "fill-in-the-blank",
    question: "Prophet Muhammad ﷺ was a symbol of __________.",
    answer: "perfection"
  },
  {
    type: "fill-in-the-blank",
    question: "The poet finds __________ in the Prophet’s ﷺ teachings.",
    answer: "guidance"
  },

  // True/False Questions
  {
    type: "true-false",
    question: "حمد صرف انسانوں کی تعریف ہے۔",
    options: ["True", "False"],
    answer: "False"
  },
  {
    type: "true-false",
    question: "شاعر نے اللہ کی نشانیاں بیان کیں۔",
    options: ["True", "False"],
    answer: "True"
  },
  {
    type: "true-false",
    question: "The poem is about human emotions.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    type: "true-false",
    question: "Nature is silent in praising God.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    type: "true-false",
    question: "The sky and earth glorify Allah.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    type: "true-false",
    question: "نعت صرف کتابوں میں لکھی جاتی ہے۔",
    options: ["True", "False"],
    answer: "False"
  },
  {
    type: "true-false",
    question: "نبی کریم ﷺ کی سیرت کامل نمونہ ہے۔",
    options: ["True", "False"],
    answer: "True"
  },
  {
    type: "true-false",
    question: "The poem ignores the Prophet’s ﷺ teachings.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    type: "true-false",
    question: "Poet shows deep love for Prophet ﷺ.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    type: "true-false",
    question: "Naat is about the love of Allah.",
    options: ["True", "False"],
    answer: "False"
  }
];


// ==============================
// Variables
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
// Init
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
    if (getCookie("quizTaken")) {
        showPage("code");
    } else {
        startQuiz();
    }
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
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
});

// ==============================
// Core Functions
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
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    const scorableCount = questions.filter(q => q.answer).length;
    scoreEl.textContent = `${score} / ${scorableCount}`;
    showPage("score");
}

// ==============================
// Utility Functions
// ==============================
function showPage(name) {
    Object.values(pages).forEach(p => p.style.display = 'none');
    pages[name].style.display = 'block';
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
// Incognito Mode Detection
// ==============================
function detectIncognito() {
    return new Promise(resolve => {
        const fs = window.RequestFileSystem || window.webkitRequestFileSystem;
        if (!fs) {
            resolve(false); // Browser doesn't support detection
        } else {
            fs(window.TEMPORARY, 100, () => resolve(false), () => resolve(true));
        }
    });
}
