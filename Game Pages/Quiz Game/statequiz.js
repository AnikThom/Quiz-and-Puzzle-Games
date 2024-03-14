var questions = [
  {
  question: "What state is this?",
  a: "No Longer Human",
  b: "For the Tainted Sorrow",
  c: "Rashomon",
  d: "Unbreakable",
  answer: "A",
  img: "USA Map.png"
  }
  {
  question: "Who won the FIFA Women's World Cup in 2019?",
  a: "No Longer Human",
  b: "For the Tainted Sorrow",
  c: "Rashomon",
  d: "Unbreakable",
  answer: "B"
  }
  {
  question: "What is the smallest country in the world?",
  a: "No Longer Human",
  b: "For the Tainted Sorrow",
  c: "Rashomon",
  d: "Unbreakable",
  answer: "C"
  }
  {
  question: "Who invented the telephone?",
  a: "No Longer Human",
  b: "For the Tainted Sorrow",
  c: "Rashomon",
  d: "Unbreakable",
  answer: "D"
  }
];


function getRandomQuestion() {
  var randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function displayQuiz(maxQuestions) {
  var quiz = document.getElementById("quiz");
  var numQuestionsDisplayed = 0;


  while (numQuestionsDisplayed < maxQuestions) {
    var question = getRandomQuestion();

    var questionDiv = document.createElement("div");
    questionDiv.innerHTML = question;
    quiz.appendChild(questionDiv);

    numQuestionsDisplayed++;
  }
}

displayQuiz(10);

