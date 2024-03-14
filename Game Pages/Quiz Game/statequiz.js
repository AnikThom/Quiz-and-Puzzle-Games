        const images = [
'USA Map.png',
'./Game Pages/Quiz Game/Rainbow.png',
'Game Pages/Quiz Game/Dictionary.png'
        ];
     
        const container = document.getElementById('image-container');
     
        for (let i = 0; i < images.length; i++) {
            const img = document.createElement('img');
            img.src = images[i];
            container.appendChild(img);
        }
