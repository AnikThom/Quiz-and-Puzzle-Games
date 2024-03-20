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
      question: "What Color is This",
      image:"./US States/AL-Alabama.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Alabama"
    },
    {
      question: "What Color is This",
      image:"./US States/AK-Arizona.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Arizona"
    },

    {
      question: "What Color is This",
      image: "./US States/AR-Arkansas.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Arkansas"
    },
    {
      question: "What Color is This",
      image: "./US States/AK-Alaska.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Alaska"
        },
        
    {
      question: "What Color is This",
      image: "./US States/CA-California.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "California"
    },
    {
      question: "What Color is This",
      image: "./US States/CO-Colorado.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Colorado"
    },
    {
      question: "What Color is This",
      image: "./US States/CT-Connecticut.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Connecticut"
    },
    {
      question: "What Color is This",
      image: "./US States/DE-Delaware.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Delaware"
    },
    {
      question: "What Color is This",
      image: "./US States/FL-Florida.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Florida"
    },
    {
      question: "What Color is This",
      image: "./US States/GA-Georgia.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Georgia"
    },
    {
      question: "What Color is This",
      image: "./US States/HI-Hawaii.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Hawaii"
    },
    {
      question: "What Color is This",
      image:"./US States/ID-Idaho.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Idaho"
    },
    {
      question: "What Color is This",
      image: "./US States/IL-Illinois.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Illinois"
    },
    {
      question: "What Color is This",
      image: "./US States/IN-Indiana.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Indiana"
    },
    {
      question: "What Color is This",
      image: "./US States/IA-Iowa.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Iowa"
    },
    {
      question: "What Color is This",
      image: "./US States/KS-Kansas.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Kansas"
    },
    {
      question: "What Color is This",
      image: "./US States/KY-Kentucky.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Kentucky"
    },
    {
      question: "What Color is This",
      image: "./US States/LA-Louisiana.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Louisiana"
    },
    {
      question: "What Color is This",
      image: "./US States/ME-Maine.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Maine"
    },
    {
      question: "What Color is This",
      image: "./US States/MD-Maryland.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Maryland"
    },
    {
      question: "What Color is This",
      image: "./US States/MA-Massachusetts.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Massachusetts"
    },
    {
      question: "What Color is This",
      image: "./US States/MI-Michigan.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Michigan"
    },
    {
      question: "What Color is This",
      image: "./US States/MN-Minnesota.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Minnesota"
    },
    {
      question: "What Color is This",
      image: "./US States/MS-Mississippi.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Mississippi"
    },
    {
      question: "What Color is This",
      image: "./US States/MO-Missouri.png",
      answers: ["Anti-Flash White", "Antique White", "Atomic Tangerine", "Black", "Byzantium", "Caput Mortuum", 
        "Charcoal", "Cinereous", "Columbia Blue", "Cool Gray", "Coquelicot", "Crimson", "Dark Green", "Dark Purple", 
        "Dun", "English Violet", "French Gray", "Light Blue", "Moonstone", "Payne's Gray", "Puce", "Raisin Black", 
        "Salmon Pink", "Space Cadet", "Wenge"],
      correctAnswer: "Missouri"
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
