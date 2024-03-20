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
      question: "What Color is This?",
      image:"./Colors/Anti-Flash White.png",
      answers: ["Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Anti-Flash White"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Antique White.png",
      answers: ["Anti-Flash White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Antique White"
    },

    {
      question: "What Color is This?",
      image:"./Colors/Atomic Tangerine.png",
      answers: ["Anti-Flash White", "Antique White", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Atomic Tangerine"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Black.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Black"
        },
        
    {
      question: "What Color is This?",
      image:"./Colors/Byzantium.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Byzantium"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Caput Mortuum.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Caput Mortuum"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Charcoal.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Charcoal"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Cinereous.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Cinereous"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Columbia Blue.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Columbia Blue"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Cool Gray.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Cool Gray"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Coquelicot.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Coquelicot"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Crimson.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Crimson"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Dark Green.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Dark Green"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Dark Purple.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Dark Purple"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Dun.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Dun"
    },
    {
      question: "What Color is This?",
      image:"./Colors/English Violet.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "English Violet"
    },
    {
      question: "What Color is This?",
      image:"./Colors/French Gray.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "French Gray"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Light Blue.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Light Blue"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Moonstone.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Moonstone"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Payne's Gray.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Payne's Gray"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Puce.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Puce"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Raisin Black.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Raisin Black"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Salmon Pink.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Space Cadet", "Wenge"],
      correctAnswer: "Salmon Pink"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Space Cadet.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Wenge"],
      correctAnswer: "Space Cadet"
    },
    {
      question: "What Color is This?",
      image:"./Colors/Wenge.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet"],
      correctAnswer: "Wenge"
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
    window.location.href = '../quizgame.html';
});
  
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
