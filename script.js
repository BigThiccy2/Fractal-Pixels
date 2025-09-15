    const gridContainer = document.getElementById('pixel-grid-container');
    const gridSize = 30; // Example
    for (let i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        gridContainer.appendChild(pixel);
    }

        const canvas = document.getElementById('pixelCanvas');
    const ctx = canvas.getContext('2d');