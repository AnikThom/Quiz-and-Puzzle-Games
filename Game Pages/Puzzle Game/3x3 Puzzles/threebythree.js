
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

document.getElementById('imageSelector').addEventListener('change', function() {
    const selectedImage = this.value;
    const puzzleImage = document.getElementById('image');
    puzzleImage.onload = function() {
        initializePuzzle();
    };
    puzzleImage.src = selectedImage;
});

function initializePuzzle() {
    const image = document.getElementById('image');
    const pieceBoard = document.getElementById('piece-board');
    const puzzleBoard = document.getElementById('puzzle-board');

    if (pieceBoard.children.length > 0) {
        pieceBoard.innerHTML = '';
    }

    puzzleBoard.innerHTML = '';

    const imgWidth = image.width / 6;
    const imgHeight = image.height / 6;

    const pieceWidth = imgWidth / 3;
    const pieceHeight = imgHeight / 3;

    const pieces = [];
    for (let i = 0; i < 9; i++) {
        const piece = document.createElement('div');
        piece.className = 'puzzle-piece';
        piece.draggable = true;
        piece.style.backgroundImage = `url(${image.src})`;
        piece.style.backgroundSize = `${imgWidth}px ${imgHeight}px`;
        piece.style.backgroundPosition = `-${(i % 3) * pieceWidth}px -${Math.floor(i / 3) * pieceHeight}px`;
        piece.id = `piece${i}`;
        piece.addEventListener('dragstart', dragStart);
        pieces.push(piece);
    }

    shuffleArray(pieces);

    pieces.forEach(piece => pieceBoard.appendChild(piece));

    pieces.forEach(piece => piece.addEventListener('dragstart', dragStart));
    pieces.forEach(piece => piece.addEventListener('dragover', allowDrop));
    pieces.forEach(piece => piece.addEventListener('drop', drop));

    


    for (let i = 0; i < 9; i++) {
        const dropZone = document.createElement('div');
        dropZone.className = 'board-grid';
        dropZone.id = `drop${i}`;
        dropZone.setAttribute('data-correct-position', i);
        dropZone.addEventListener('drop', drop);
        dropZone.addEventListener('dragover', allowDrop);
        puzzleBoard.appendChild(dropZone);
    }
}

  document.getElementById('imageSelector').addEventListener('change', function() {
    const selectedImage = this.value;
    const puzzleImage = document.getElementById('image');
    puzzleImage.src = selectedImage;
    initializePuzzle();

    
});
  function shufflePieces() {
    const pieceBoard = document.getElementById('piece-board');
    const pieces = Array.from(pieceBoard.children);
    shuffleArray(pieces);
    pieceBoard.innerHTML = '';
    pieces.forEach(piece => pieceBoard.appendChild(piece));
}

document.getElementById('shuffleButton').addEventListener('click', shufflePieces);

  
  function checkPuzzle() {
    const puzzleBoard = document.getElementById('puzzle-board');
    const dropZones = puzzleBoard.querySelectorAll('.board-grid');
    let correctCount = 0;

    dropZones.forEach(dropZone => {
        const correctPosition = parseInt(dropZone.getAttribute('data-correct-position'));
        const puzzlePiece = dropZone.querySelector('.puzzle-piece');
        
        if (puzzlePiece && puzzlePiece.id === `piece${correctPosition}`) {
            correctCount++;
        }
    });
     const button = document.getElementById('button');
     const overlay = document.getElementById('overlay');
    if (correctCount === 9) {
        button.style.display = 'inline-block';
        overlay.style.display = 'inline-block';
        button.textContent = 'You Completed the Puzzle! Click Here to Return to Home!';
        button.addEventListener('click', function () {
            window.location.href = '../puzzlegame.html';
        });

        document.body.appendChild(button);
    } else {
        overlay.style.display = 'none';
        button.style.display = 'none';
        
    }
}


  function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
  }

  function allowDrop(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(data);
    const dropzone = event.target;

    if (dropzone.classList.contains('board-grid')) {
      dropzone.appendChild(draggableElement);
        checkPuzzle();
    }
  }

  window.onload = initializePuzzle;
