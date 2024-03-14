var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'Game Pages/Quiz Game/USA Map.png';
document.getElementById("quiz").src = imgArray.src;

var questions = [
  "USA"
];
questions.push(imgArray);

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
