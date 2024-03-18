(function(){

  function buildQuiz(){

    const output = [];
    
    const shuffledQuestions = myQuestions.sort(() => Math.random() - 0.5).slice(0, 2); // Shuffle and select 10 questions

    shuffledQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];

        const shuffledAnswers = currentQuestion.answers.slice().sort(() => Math.random() - 0.5);

        for(let i = 0; i < 3; i++){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${shuffledAnswers[i]}">
             <span> ${shuffledAnswers[i]} </span>
            </label>`
          );
        }

        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${currentQuestion.correctAnswer}">
             <span> ${currentQuestion.correctAnswer} </span>
            </label>`
        );

        answers.sort(() => Math.random() - 0.5);

        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} 
             <img src="${currentQuestion.image}" class= "img" alt="Question Image"></div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }
  function showResults(){


    const answerContainers = quizContainer.querySelectorAll('.answers');


    let numCorrect = 0;


    myQuestions.forEach( (currentQuestion, questionNumber) => {


      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;


      if(userAnswer === currentQuestion.correctAnswer){

        numCorrect++;

      }
    });


    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');



  const myQuestions = [
    {
      
      question: "Who invented JavaScript?",
      image:"USA_Map.png",
      answers: {
        a: "Crockford",
        b: "Sandberg",
        c: "Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      image:"Dictionary.png",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(currentSlide);

  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
