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
      answers: ["</br>a severe critic", "</br>a sacrifice of a thousand", "</br>a guiding belief or principle", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>showing or pointing out directly", "</br>to hide under a false appearance", "</br>a light stroking movement </br>used in massage", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "</br>disease or inflammation", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a person who lives on the coast", "</br>a family of Pinnipedia consisting </br>of the eared seals", "</br>a property affecting the </br>sense of taste", 
                "</br>a stem without leaves", "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", "</br>regularly dividing by fours", 
                "</br>used to express surprise or anger"],
      correctAnswer: "</br>to foreshadow vaguely"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/aristarch.png",
      answers: ["</br>to foreshadow vaguely", "</br>a sacrifice of a thousand", "</br>a guiding belief or principle", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>showing or pointing out directly", "</br>to hide under a false appearance", "</br>a light stroking movement </br>used in massage", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "</br>disease or inflammation", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a person who lives on the coast", "</br>a family of Pinnipedia consisting </br>of the eared seals", "</br>a property affecting the </br>sense of taste", 
                "</br>a stem without leaves", "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", "</br>regularly dividing by fours", 
                "</br>used to express surprise or anger"],
      correctAnswer: "</br>a severe critic"
    },

    {
      question: "What is the Definition of This Word?",
      image:"./Words/chiliomb.png",
      answers: ["</br>to foreshadow vaguely", "</br>a severe critic", "</br>a guiding belief or principle", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>showing or pointing out directly", "</br>to hide under a false appearance", "</br>a light stroking movement </br>used in massage", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "</br>disease or inflammation", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a person who lives on the coast", "</br>a family of Pinnipedia consisting </br>of the eared seals", "</br>a property affecting the </br>sense of taste", 
                "</br>a stem without leaves", "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", "</br>regularly dividing by fours", 
                "</br>used to express surprise or anger"],
      correctAnswer: "</br>a sacrifice of a thousand"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/credo.png",
      answers: ["</br>to foreshadow vaguely", "</br>a severe critic", "</br>a sacrifice of a thousand", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>showing or pointing out directly", "</br>to hide under a false appearance", "</br>a light stroking movement </br>used in massage", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "</br>disease or inflammation", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a person who lives on the coast", "</br>a family of Pinnipedia consisting </br>of the eared seals", "</br>a property affecting the </br>sense of taste", 
                "</br>a stem without leaves", "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", "</br>regularly dividing by fours", 
                "</br>used to express surprise or anger"],
      correctAnswer: "</br>a guiding belief or principle"
        },
        
    {
      question: "What is the Definition of This Word?",
      image:"./Words/declinometer.png",
      answers: ["</br>to foreshadow vaguely", "</br>a severe critic", "</br>a sacrifice of a thousand", "</br>a guiding belief or principle", 
                "</br>showing or pointing out directly", "</br>to hide under a false appearance", "</br>a light stroking movement </br>used in massage", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "</br>disease or inflammation", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a person who lives on the coast", "</br>a family of Pinnipedia consisting </br>of the eared seals", "</br>a property affecting the </br>sense of taste", 
                "</br>a stem without leaves", "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", "</br>regularly dividing by fours", 
                "</br>used to express surprise or anger"],
      correctAnswer: "</br>an instrument for measuring </br>magnetic declination"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/deictic.png",
      answers: ["</br>to foreshadow vaguely", "</br>a severe critic", "</br>a sacrifice of a thousand", "</br>a guiding belief or principle", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>to hide under a false appearance", "</br>a light stroking movement </br>used in massage", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "</br>disease or inflammation", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a person who lives on the coast", "</br>a family of Pinnipedia consisting </br>of the eared seals", "</br>a property affecting the </br>sense of taste", 
                "</br>a stem without leaves", "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", "</br>regularly dividing by fours", 
                "</br>used to express surprise or anger"],
      correctAnswer: "</br>showing or pointing out directly"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/dissimulate.png",
      answers: ["</br>to foreshadow vaguely", "</br>a severe critic", "</br>a sacrifice of a thousand", "</br>a guiding belief or principle", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>showing or pointing out directly", "</br>a light stroking movement </br>used in massage", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "</br>disease or inflammation", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a person who lives on the coast", "</br>a family of Pinnipedia consisting </br>of the eared seals", "</br>a property affecting the </br>sense of taste", 
                "</br>a stem without leaves", "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", "</br>regularly dividing by fours", 
                "</br>used to express surprise or anger"],
      correctAnswer: "</br>to hide under a false appearance"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/effleurage.png",
      answers: ["</br>to foreshadow vaguely", "</br>a severe critic", "</br>a sacrifice of a thousand", "</br>a guiding belief or principle", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>showing or pointing out directly", "</br>to hide under a false appearance", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "</br>disease or inflammation", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a person who lives on the coast", "</br>a family of Pinnipedia consisting </br>of the eared seals", "</br>a property affecting the </br>sense of taste", 
                "</br>a stem without leaves", "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", "</br>regularly dividing by fours", 
                "</br>used to express surprise or anger"],
      correctAnswer: "</br>a light stroking movement </br>used in massage"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/intergrade.png",
      answers: ["</br>to foreshadow vaguely", "</br>a severe critic", "</br>a sacrifice of a thousand", "</br>a guiding belief or principle", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>showing or pointing out directly", "</br>to hide under a false appearance", "</br>a light stroking movement </br>used in massage", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "</br>disease or inflammation", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a person who lives on the coast", "</br>a family of Pinnipedia consisting </br>of the eared seals", "</br>a property affecting the </br>sense of taste", 
                "</br>a stem without leaves", "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", "</br>regularly dividing by fours", 
                "</br>used to express surprise or anger"],
      correctAnswer: "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     "
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/istle.png",
      answers: ["</br>to foreshadow vaguely", "</br>a severe critic", "</br>a sacrifice of a thousand", "</br>a guiding belief or principle", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>showing or pointing out directly", "</br>to hide under a false appearance", "</br>a light stroking movement </br>used in massage", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>disease or inflammation", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a person who lives on the coast", "</br>a family of Pinnipedia consisting </br>of the eared seals", "</br>a property affecting the </br>sense of taste", 
                "</br>a stem without leaves", "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", "</br>regularly dividing by fours", 
                "</br>used to express surprise or anger"],
      correctAnswer: "</br>a strong fiber obtained from various </br>tropical American plants"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/itis.png",
      answers: ["</br>to foreshadow vaguely", "</br>a severe critic", "</br>a sacrifice of a thousand", "</br>a guiding belief or principle", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>showing or pointing out directly", "</br>to hide under a false appearance", "</br>a light stroking movement </br>used in massage", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a person who lives on the coast", "</br>a family of Pinnipedia consisting </br>of the eared seals", "</br>a property affecting the </br>sense of taste", 
                "</br>a stem without leaves", "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", "</br>regularly dividing by fours", 
                "</br>used to express surprise or anger"],
      correctAnswer: "</br>disease or inflammation"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/mutualism.png",
      answers: ["</br>to foreshadow vaguely", "</br>a severe critic", "</br>a sacrifice of a thousand", "</br>a guiding belief or principle", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>showing or pointing out directly", "</br>to hide under a false appearance", "</br>a light stroking movement </br>used in massage", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "</br>disease or inflammation", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a person who lives on the coast", "</br>a family of Pinnipedia consisting </br>of the eared seals", "</br>a property affecting the </br>sense of taste", 
                "</br>a stem without leaves", "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", "</br>regularly dividing by fours", 
                "</br>used to express surprise or anger"],
      correctAnswer: "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      "
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/olfactology.png",
      answers: ["</br>to foreshadow vaguely", "</br>a severe critic", "</br>a sacrifice of a thousand", "</br>a guiding belief or principle", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>showing or pointing out directly", "</br>to hide under a false appearance", "</br>a light stroking movement </br>used in massage", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "</br>disease or inflammation", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>a person who lives on the coast", "</br>a family of Pinnipedia consisting </br>of the eared seals", "</br>a property affecting the </br>sense of taste", 
                "</br>a stem without leaves", "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", "</br>regularly dividing by fours", 
                "</br>used to express surprise or anger"],
      correctAnswer: "</br>the scientific study of smells or of </br>the sense of smell"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/orarian.png",
      answers: ["</br>to foreshadow vaguely", "</br>a severe critic", "</br>a sacrifice of a thousand", "</br>a guiding belief or principle", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>showing or pointing out directly", "</br>to hide under a false appearance", "</br>a light stroking movement </br>used in massage", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "</br>disease or inflammation", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a family of Pinnipedia consisting </br>of the eared seals", "</br>a property affecting the </br>sense of taste", 
                "</br>a stem without leaves", "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", "</br>regularly dividing by fours", 
                "</br>used to express surprise or anger"],
      correctAnswer: "</br>a person who lives on the coast"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/otarine.png",
      answers: ["</br>to foreshadow vaguely", "</br>a severe critic", "</br>a sacrifice of a thousand", "</br>a guiding belief or principle", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>showing or pointing out directly", "</br>to hide under a false appearance", "</br>a light stroking movement </br>used in massage", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "</br>disease or inflammation", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a person who lives on the coast", "</br>a property affecting the </br>sense of taste", 
                "</br>a stem without leaves", "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", "</br>regularly dividing by fours", 
                "</br>used to express surprise or anger"],
      correctAnswer: "</br>a family of Pinnipedia consisting </br>of the eared seals"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/sapor.png",
      answers: ["</br>to foreshadow vaguely", "</br>a severe critic", "</br>a sacrifice of a thousand", "</br>a guiding belief or principle", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>showing or pointing out directly", "</br>to hide under a false appearance", "</br>a light stroking movement </br>used in massage", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "</br>disease or inflammation", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a person who lives on the coast", "</br>a family of Pinnipedia consisting </br>of the eared seals",
                "</br>a stem without leaves", "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", "</br>regularly dividing by fours", 
                "</br>used to express surprise or anger"],
      correctAnswer: "</br>a property affecting the </br>sense of taste"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/scapiform.png",
      answers: ["</br>to foreshadow vaguely", "</br>a severe critic", "</br>a sacrifice of a thousand", "</br>a guiding belief or principle", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>showing or pointing out directly", "</br>to hide under a false appearance", "</br>a light stroking movement </br>used in massage", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "</br>disease or inflammation", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a person who lives on the coast", "</br>a family of Pinnipedia consisting </br>of the eared seals", "</br>a property affecting the </br>sense of taste", 
                "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", "</br>regularly dividing by fours", 
                "</br>used to express surprise or anger"],
      correctAnswer: "</br>a stem without leaves"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/technography.png",
      answers: ["</br>to foreshadow vaguely", "</br>a severe critic", "</br>a sacrifice of a thousand", "</br>a guiding belief or principle", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>showing or pointing out directly", "</br>to hide under a false appearance", "</br>a light stroking movement </br>used in massage", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "</br>disease or inflammation", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a person who lives on the coast", "</br>a family of Pinnipedia consisting </br>of the eared seals", "</br>a property affecting the </br>sense of taste", 
                "</br>a stem without leaves", "</br>regularly dividing by fours", 
                "</br>used to express surprise or anger"],
      correctAnswer: "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     "
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/tetrachotomous.png",
      answers: ["</br>to foreshadow vaguely", "</br>a severe critic", "</br>a sacrifice of a thousand", "</br>a guiding belief or principle", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>showing or pointing out directly", "</br>to hide under a false appearance", "</br>a light stroking movement </br>used in massage", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "</br>disease or inflammation", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a person who lives on the coast", "</br>a family of Pinnipedia consisting </br>of the eared seals", "</br>a property affecting the </br>sense of taste", 
                "</br>a stem without leaves", "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", 
                "</br>used to express surprise or anger"],
      correctAnswer: "</br>regularly dividing by fours"
    },
    {
      question: "What is the Definition of This Word?",
      image:"./Words/zounds.png",
      answers: ["</br>to foreshadow vaguely", "</br>a severe critic", "</br>a sacrifice of a thousand", "</br>a guiding belief or principle", "</br>an instrument for measuring </br>magnetic declination", 
                "</br>showing or pointing out directly", "</br>to hide under a false appearance", "</br>a light stroking movement </br>used in massage", "to merge gradually one with     </br>another through a continuous series of    </br>intermediate forms     ", 
                "</br>a strong fiber obtained from various </br>tropical American plants", "</br>disease or inflammation", "the doctrine or practice of mutual     </br>dependence as the condition of individual      </br>and social welfare      ", 
                "</br>the scientific study of smells or of </br>the sense of smell", "</br>a person who lives on the coast", "</br>a family of Pinnipedia consisting </br>of the eared seals", "</br>a property affecting the </br>sense of taste", 
                "</br>a stem without leaves", "the description of arts and crafts      </br>especially with reference to their     </br>ethnic distribution and historical development     ", "</br>regularly dividing by fours", 
                ],
      correctAnswer: "</br>used to express surprise or anger"
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
