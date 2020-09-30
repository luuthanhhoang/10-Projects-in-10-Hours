const quizData = [
  {
    question: "Which is the city of Nghe An province?",
    a: 'Vinh',
    b: 'Ha Noi',
    c: 'Ha Tinh',
    d: 'Quang Binh',
    correct: 'a'
  },
  {
    question: "What is the most used programing language in 2019?",
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'Javascript',
    correct: 'd'
  },
  {
    question: "Who is the President of VietNam?",
    a: 'Hoang Thanh Luu',
    b: 'Nguyen Xuan Phuc',
    c: 'Nguyen Phu Trong',
    d: 'Nguyen Thi Kim Ngan',
    correct: 'c'
  }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const buttonSubmit = document.getElementById('submit');
const answerEls = document.querySelectorAll(".answer");

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const getSelected = () => {
  let answer = undefined;

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  })

  return answer;
}

const loadQuiz = () => {
  desselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

const desselectAnswers = () => {
  answerEls.forEach(answerEl => {
    answerEl.checked = false;
  })
}

buttonSubmit.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2> Finished. Your answer is ${score}/${quizData.length}</h2>
        <button id="reload">Reload</button>
      `;

      const reloadEl = document.getElementById("reload");
      reloadEl.addEventListener("click", () => location.reload());
    }
    // currentQuiz < quizData.length ? loadQuiz() : quiz.innerHTML = `<h2> Finished. Your answer is ${score}/${quizData.length}</h2>
    // <button onClick="location.reload()>Reload</button>`;
  }
});

loadQuiz();