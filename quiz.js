const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Mark Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>",
  },
  {
    question: "Which property is used in CSS to change text color?",
    options: ["font-color", "text-color", "color", "style"],
    answer: "color",
  },
  {
    question: "Which CSS property controls the spacing inside an element?",
    options: ["margin", "border", "padding", "spacing"],
    answer: "padding",
  },
  {
    question: "Which symbol is used for comments in CSS?",
    options: ["//", "<!-- -->", "#", "/* */"],
    answer: "/* */",
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "define"],
    answer: "var",
  },
  {
    question: "Which JavaScript method is used to select an element by ID?",
    options: [
      "getElementById()",
      "querySelectorAll()",
      "getElementsByClass()",
      "selectById()",
    ],
    answer: "getElementById()",
  },
  {
    question: "Which HTML tag is used to include JavaScript code?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: "<script>",
  },
  {
    question: "Which CSS property is used to make rounded corners?",
    options: ["corner-radius", "border-style", "border-radius", "round-corner"],
    answer: "border-radius",
  },
  {
    question: "Which JavaScript event occurs when a button is clicked?",
    options: ["onhover", "onchange", "onclick", "onsubmit"],
    answer: "onclick",
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const scoreText = document.getElementById("scoreText");

function loadQuestion() {
  optionEl.innerHTML = "";
  scoreText.innerText = "";

  const current = quizData[currentQuestion];
  questionEl.innerText = current.question;

  current.options.forEach((option) => {
    const div = document.createElement("div");
    div.classList.add("option");

    const label = document.createElement("label");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = option;

    label.appendChild(input);
    label.appendChild(document.createTextNode(" " + option));

    div.appendChild(label);
    optionEl.appendChild(div);
  });
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="answer"]:checked');

  if (!selected) {
    alert("Please select an option!");
    return;
  }

  if (selected.value === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.innerText = "Quiz Completed 🎉";
  optionEl.innerHTML = "";
  scoreText.innerText = `Your Score: ${score} / ${quizData.length}`;

  nextBtn.classList.add("hide");
  restartBtn.classList.remove("hide");
}

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  nextBtn.classList.remove("hide");
  restartBtn.classList.add("hide");
  loadQuestion();
});

loadQuestion();