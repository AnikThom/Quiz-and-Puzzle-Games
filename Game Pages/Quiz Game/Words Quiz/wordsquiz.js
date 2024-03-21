(function(){
let selectedQuestions;
let numCorrect = 0;

function buildQuiz(){
    const output = [];

    const shuffledQuestions = myQuestions.sort(() => Math.random() - 0.5);

    selectedQuestions = shuffledQuestions.slice(0, 10);

    selectedQuestions.forEach((currentQuestion, questionNumber) => {
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
                    <img src="${currentQuestion.image}" class= "img" alt="Question Image">
                </div>
                <div class="answers"> ${answers.join("")} </div>
            </div>`
        );


    });
      output.push(
        `<div class="slide">
            <div class="score">Your score:
        </div>`
    );

    quizContainer.innerHTML = output.join('');
}

  
  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');
    
    myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    if (answerContainer) {
      const selector = `input[name="question${questionNumber}"]:checked`;
      const selectedRadioButton = answerContainer.querySelector(selector);
    if (selectedRadioButton) {
      const userAnswer = selectedRadioButton.value;
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
      }
    }
  }
});
    
     resultsContainer.innerHTML = `${numCorrect} out of ${selectedQuestions.length}`;
     
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
      returnButton.style.display='none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-2){
      nextButton.style.display = 'none';
      returnButton.style.display='none';
      submitButton.style.display = 'inline-block';
      
    }
    else{
      nextButton.style.display = 'inline-block';
      returnButton.style.display='none';
      submitButton.style.display = 'none';
    }

        if(currentSlide === slides.length - 1) {
        nextButton.style.display = 'none';
        previousButton.style.display = 'none';
        returnButton.style.display='inline-block';
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
  const returnButton = document.getElementById('returnButton');
  

  const myQuestions = [
    {
      question: "What is the Definition of This Word?",
      image:"./Words/adumbrate.png",
      answers: ["a severe critic", "a sacrifice of a thousand", "a guiding belief or principle", "an instrument for measuring magnetic declination", 
                "showing or pointing out directly", "to hide under a false appearance", "a light stroking movement used in massage", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "a strong fiber obtained from various </br>tropical American plants", "disease or inflammation", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "the scientific study of smells or of the sense of smell", "a person who lives on the coast", "a family of Pinnipedia consisting of the eared seals", "a property affecting the sense of taste", 
                "a stem without leaves", "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", "regularly dividing by fours", 
                "used to express surprise or anger"],
      correctAnswer: "to foreshadow vaguely"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/aristarch.png",
      answers: ["to foreshadow vaguely", "a sacrifice of a thousand", "a guiding belief or principle", "an instrument for measuring magnetic declination", 
                "showing or pointing out directly", "to hide under a false appearance", "a light stroking movement used in massage", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "a strong fiber obtained from various </br>tropical American plants", "disease or inflammation", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "the scientific study of smells or of the sense of smell", "a person who lives on the coast", "a family of Pinnipedia consisting of the eared seals", "a property affecting the sense of taste", 
                "a stem without leaves", "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", "regularly dividing by fours", 
                "used to express surprise or anger"],
      correctAnswer: "a severe critic"
    },

    {
      question: "What is the Definition of This Word?",
      image:"./Words/chiliomb.png",
      answers: ["to foreshadow vaguely", "a severe critic", "a guiding belief or principle", "an instrument for measuring magnetic declination", 
                "showing or pointing out directly", "to hide under a false appearance", "a light stroking movement used in massage", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "a strong fiber obtained from various </br>tropical American plants", "disease or inflammation", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "the scientific study of smells or of the sense of smell", "a person who lives on the coast", "a family of Pinnipedia consisting of the eared seals", "a property affecting the sense of taste", 
                "a stem without leaves", "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", "regularly dividing by fours", 
                "used to express surprise or anger"],
      correctAnswer: "a sacrifice of a thousand"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/credo.png",
      answers: ["to foreshadow vaguely", "a severe critic", "a sacrifice of a thousand", "an instrument for measuring magnetic declination", 
                "showing or pointing out directly", "to hide under a false appearance", "a light stroking movement used in massage", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "a strong fiber obtained from various </br>tropical American plants", "disease or inflammation", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "the scientific study of smells or of the sense of smell", "a person who lives on the coast", "a family of Pinnipedia consisting of the eared seals", "a property affecting the sense of taste", 
                "a stem without leaves", "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", "regularly dividing by fours", 
                "used to express surprise or anger"],
      correctAnswer: "a guiding belief or principle"
        },
        
    {
      question: "What is the Definition of This Word?",
      image:"./Words/declinometer.png",
      answers: ["to foreshadow vaguely", "a severe critic", "a sacrifice of a thousand", "a guiding belief or principle", 
                "showing or pointing out directly", "to hide under a false appearance", "a light stroking movement used in massage", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "a strong fiber obtained from various </br>tropical American plants", "disease or inflammation", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "the scientific study of smells or of the sense of smell", "a person who lives on the coast", "a family of Pinnipedia consisting of the eared seals", "a property affecting the sense of taste", 
                "a stem without leaves", "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", "regularly dividing by fours", 
                "used to express surprise or anger"],
      correctAnswer: "an instrument for measuring magnetic declination"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/deictic.png",
      answers: ["to foreshadow vaguely", "a severe critic", "a sacrifice of a thousand", "a guiding belief or principle", "an instrument for measuring magnetic declination", 
                "to hide under a false appearance", "a light stroking movement used in massage", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "a strong fiber obtained from various </br>tropical American plants", "disease or inflammation", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "the scientific study of smells or of the sense of smell", "a person who lives on the coast", "a family of Pinnipedia consisting of the eared seals", "a property affecting the sense of taste", 
                "a stem without leaves", "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", "regularly dividing by fours", 
                "used to express surprise or anger"],
      correctAnswer: "showing or pointing out directly"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/dissimulate.png",
      answers: ["to foreshadow vaguely", "a severe critic", "a sacrifice of a thousand", "a guiding belief or principle", "an instrument for measuring magnetic declination", 
                "showing or pointing out directly", "a light stroking movement used in massage", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "a strong fiber obtained from various </br>tropical American plants", "disease or inflammation", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "the scientific study of smells or of the sense of smell", "a person who lives on the coast", "a family of Pinnipedia consisting of the eared seals", "a property affecting the sense of taste", 
                "a stem without leaves", "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", "regularly dividing by fours", 
                "used to express surprise or anger"],
      correctAnswer: "to hide under a false appearance"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/effleurage.png",
      answers: ["to foreshadow vaguely", "a severe critic", "a sacrifice of a thousand", "a guiding belief or principle", "an instrument for measuring magnetic declination", 
                "showing or pointing out directly", "to hide under a false appearance", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "a strong fiber obtained from various </br>tropical American plants", "disease or inflammation", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "the scientific study of smells or of the sense of smell", "a person who lives on the coast", "a family of Pinnipedia consisting of the eared seals", "a property affecting the sense of taste", 
                "a stem without leaves", "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", "regularly dividing by fours", 
                "used to express surprise or anger"],
      correctAnswer: "a light stroking movement used in massage"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/intergrade.png",
      answers: ["to foreshadow vaguely", "a severe critic", "a sacrifice of a thousand", "a guiding belief or principle", "an instrument for measuring magnetic declination", 
                "showing or pointing out directly", "to hide under a false appearance", "a light stroking movement used in massage", 
                "a strong fiber obtained from various </br>tropical American plants", "disease or inflammation", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "the scientific study of smells or of the sense of smell", "a person who lives on the coast", "a family of Pinnipedia consisting of the eared seals", "a property affecting the sense of taste", 
                "a stem without leaves", "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", "regularly dividing by fours", 
                "used to express surprise or anger"],
      correctAnswer: "to merge gradually one with another through </br>a continuous series of intermediate forms"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/istle.png",
      answers: ["to foreshadow vaguely", "a severe critic", "a sacrifice of a thousand", "a guiding belief or principle", "an instrument for measuring magnetic declination", 
                "showing or pointing out directly", "to hide under a false appearance", "a light stroking movement used in massage", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "disease or inflammation", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "the scientific study of smells or of the sense of smell", "a person who lives on the coast", "a family of Pinnipedia consisting of the eared seals", "a property affecting the sense of taste", 
                "a stem without leaves", "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", "regularly dividing by fours", 
                "used to express surprise or anger"],
      correctAnswer: "a strong fiber obtained from various </br>tropical American plants"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/itis.png",
      answers: ["to foreshadow vaguely", "a severe critic", "a sacrifice of a thousand", "a guiding belief or principle", "an instrument for measuring magnetic declination", 
                "showing or pointing out directly", "to hide under a false appearance", "a light stroking movement used in massage", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "a strong fiber obtained from various </br>tropical American plants", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "the scientific study of smells or of the sense of smell", "a person who lives on the coast", "a family of Pinnipedia consisting of the eared seals", "a property affecting the sense of taste", 
                "a stem without leaves", "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", "regularly dividing by fours", 
                "used to express surprise or anger"],
      correctAnswer: "disease or inflammation"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/mutualism.png",
      answers: ["to foreshadow vaguely", "a severe critic", "a sacrifice of a thousand", "a guiding belief or principle", "an instrument for measuring magnetic declination", 
                "showing or pointing out directly", "to hide under a false appearance", "a light stroking movement used in massage", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "a strong fiber obtained from various </br>tropical American plants", "disease or inflammation", 
                "the scientific study of smells or of the sense of smell", "a person who lives on the coast", "a family of Pinnipedia consisting of the eared seals", "a property affecting the sense of taste", 
                "a stem without leaves", "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", "regularly dividing by fours", 
                "used to express surprise or anger"],
      correctAnswer: "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/olfactology.png",
      answers: ["to foreshadow vaguely", "a severe critic", "a sacrifice of a thousand", "a guiding belief or principle", "an instrument for measuring magnetic declination", 
                "showing or pointing out directly", "to hide under a false appearance", "a light stroking movement used in massage", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "a strong fiber obtained from various </br>tropical American plants", "disease or inflammation", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "a person who lives on the coast", "a family of Pinnipedia consisting of the eared seals", "a property affecting the sense of taste", 
                "a stem without leaves", "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", "regularly dividing by fours", 
                "used to express surprise or anger"],
      correctAnswer: "the scientific study of smells or of the sense of smell"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/orarian.png",
      answers: ["to foreshadow vaguely", "a severe critic", "a sacrifice of a thousand", "a guiding belief or principle", "an instrument for measuring magnetic declination", 
                "showing or pointing out directly", "to hide under a false appearance", "a light stroking movement used in massage", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "a strong fiber obtained from various </br>tropical American plants", "disease or inflammation", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "the scientific study of smells or of the sense of smell", "a family of Pinnipedia consisting of the eared seals", "a property affecting the sense of taste", 
                "a stem without leaves", "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", "regularly dividing by fours", 
                "used to express surprise or anger"],
      correctAnswer: "a person who lives on the coast"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/otarine.png",
      answers: ["to foreshadow vaguely", "a severe critic", "a sacrifice of a thousand", "a guiding belief or principle", "an instrument for measuring magnetic declination", 
                "showing or pointing out directly", "to hide under a false appearance", "a light stroking movement used in massage", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "a strong fiber obtained from various </br>tropical American plants", "disease or inflammation", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "the scientific study of smells or of the sense of smell", "a person who lives on the coast", "a property affecting the sense of taste", 
                "a stem without leaves", "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", "regularly dividing by fours", 
                "used to express surprise or anger"],
      correctAnswer: "a family of Pinnipedia consisting of the eared seals"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/sapor.png",
      answers: ["to foreshadow vaguely", "a severe critic", "a sacrifice of a thousand", "a guiding belief or principle", "an instrument for measuring magnetic declination", 
                "showing or pointing out directly", "to hide under a false appearance", "a light stroking movement used in massage", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "a strong fiber obtained from various </br>tropical American plants", "disease or inflammation", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "the scientific study of smells or of the sense of smell", "a person who lives on the coast", "a family of Pinnipedia consisting of the eared seals",
                "a stem without leaves", "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", "regularly dividing by fours", 
                "used to express surprise or anger"],
      correctAnswer: "a property affecting the sense of taste"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/scapiform.png",
      answers: ["to foreshadow vaguely", "a severe critic", "a sacrifice of a thousand", "a guiding belief or principle", "an instrument for measuring magnetic declination", 
                "showing or pointing out directly", "to hide under a false appearance", "a light stroking movement used in massage", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "a strong fiber obtained from various </br>tropical American plants", "disease or inflammation", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "the scientific study of smells or of the sense of smell", "a person who lives on the coast", "a family of Pinnipedia consisting of the eared seals", "a property affecting the sense of taste", 
                "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", "regularly dividing by fours", 
                "used to express surprise or anger"],
      correctAnswer: "a stem without leaves"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/technography.png",
      answers: ["to foreshadow vaguely", "a severe critic", "a sacrifice of a thousand", "a guiding belief or principle", "an instrument for measuring magnetic declination", 
                "showing or pointing out directly", "to hide under a false appearance", "a light stroking movement used in massage", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "a strong fiber obtained from various </br>tropical American plants", "disease or inflammation", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "the scientific study of smells or of the sense of smell", "a person who lives on the coast", "a family of Pinnipedia consisting of the eared seals", "a property affecting the sense of taste", 
                "a stem without leaves", "regularly dividing by fours", 
                "used to express surprise or anger"],
      correctAnswer: "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/tetrachotomous.png",
      answers: ["to foreshadow vaguely", "a severe critic", "a sacrifice of a thousand", "a guiding belief or principle", "an instrument for measuring magnetic declination", 
                "showing or pointing out directly", "to hide under a false appearance", "a light stroking movement used in massage", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "a strong fiber obtained from various </br>tropical American plants", "disease or inflammation", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "the scientific study of smells or of the sense of smell", "a person who lives on the coast", "a family of Pinnipedia consisting of the eared seals", "a property affecting the sense of taste", 
                "a stem without leaves", "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", 
                "used to express surprise or anger"],
      correctAnswer: "regularly dividing by fours"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/zounds.png",
      answers: ["to foreshadow vaguely", "a severe critic", "a sacrifice of a thousand", "a guiding belief or principle", "an instrument for measuring magnetic declination", 
                "showing or pointing out directly", "to hide under a false appearance", "a light stroking movement used in massage", "to merge gradually one with another through </br>a continuous series of intermediate forms", 
                "a strong fiber obtained from various </br>tropical American plants", "disease or inflammation", "the doctrine or practice of mutual dependence as the </br>condition of individual and social welfare", 
                "the scientific study of smells or of the sense of smell", "a person who lives on the coast", "a family of Pinnipedia consisting of the eared seals", "a property affecting the sense of taste", 
                "a stem without leaves", "the description of arts and crafts especially with reference </br>to their ethnic distribution and historical development", "regularly dividing by fours", 
                ],
      correctAnswer: "used to express surprise or anger"
    }
  ];

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(currentSlide);

  submitButton.addEventListener('click', function() {
    showResults();
    showNextSlide();
});

returnButton.addEventListener('click', function() {
    window.location.href = "../quizgame.html";
});
  
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
