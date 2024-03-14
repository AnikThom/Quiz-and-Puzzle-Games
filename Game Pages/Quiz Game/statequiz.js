var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/img/Splash_image1.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'images/img/Splash_image2.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'images/img/Splash_image3.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'images/img/Splash_image4.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'images/img/Splash_image5.jpg';

imgArray[5] = new Image();
imgArray[5].src = 'images/img/Splash_image6.jpg';

var questions = [
  "USA"
];
questions.push(existingImage);

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
