// Function to handle smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Sample Quiz related JavaScript
let currentQuestion = 0;
let score = 0;

const questions = [
  {
    question: "What is the objective of Space Chase?",
    answers: [
      { text: "Collecting stars", correct: false },
      { text: "Defeating cosmic threats", correct: true },
      { text: "Racing through space", correct: false },
    ],
  },
  {
    question: "In Stellar Odyssey, what is the primary activity?",
    answers: [
      { text: "Farming on alien planets", correct: false },
      { text: "Space exploration", correct: true },
      { text: "Solving puzzles", correct: false },
    ],
  },
  {
    question: "What is the main theme of Nebula Quest?",
    answers: [
      { text: "Deep sea exploration", correct: false },
      { text: "Journey through nebulae", correct: true },
      { text: "Time travel adventures", correct: false },
    ],
  },
];

function startQuiz() {
  const startButton = document.querySelector(".start-button");
  const quizContainer = document.getElementById("quiz-container");

  startButton.style.display = "none";
  quizContainer.style.display = "block";

  displayNextQuestion();
}

function displayNextQuestion() {
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");

  if (currentQuestion < questions.length) {
    questionElement.innerText = questions[currentQuestion].question;

    answerButtons.innerHTML = "";

    questions[currentQuestion].answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("answer-button");
      button.addEventListener("click", () => selectAnswer(answer));
      answerButtons.appendChild(button);
    });
  } else {
    showResults();
  }
}

function selectAnswer(answer) {
  if (answer.correct) {
    score++;
  }

  currentQuestion++;
  displayNextQuestion();
}

function showResults() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `
    <h2>You completed the quiz!</h2>
    <p>Your score: ${score} out of ${questions.length}</p>
  `;
}
