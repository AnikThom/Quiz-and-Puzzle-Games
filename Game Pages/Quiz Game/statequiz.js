        const images = [

        ];
     
        const container = document.getElementById('image-container');
     
        for (let i = 0; i < images.length; i++) {
            const img = document.createElement('img');
            img.src = images[i];
            container.appendChild(img);
        }
