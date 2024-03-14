let newImage = new Image();
newImage.src = './Game Pages/Quiz Game/USA Map.png';

var questions = [
  "USA"
];
questions.push(newImage);

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
