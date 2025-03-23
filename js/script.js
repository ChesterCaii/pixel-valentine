document.addEventListener('DOMContentLoaded', () => {
    const flower = document.getElementById('flower');
    const flowerContainer = document.querySelector('.flower-container');
    const messageContainer = document.querySelector('.message-container');
    const valentinePhoto = document.getElementById('valentine-photo');
    const pixelAnimations = document.getElementById('pixel-animations');
    const dancingCouple = document.getElementById('dancing-couple');
    const twerkingMonkey = document.getElementById('twerking-monkey');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    let hasClicked = false;
    
    // Create sprite sheets immediately but keep them hidden
    setTimeout(() => {
        createCoupleSprite();
        createMonkeySprite();
    }, 1000);
    
    // Function to create sprite sheet for the dancing couple
    function createCoupleSprite() {
        console.log("Creating couple sprite");
        // Create a canvas for the couple sprite sheet
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set the canvas size for 8 frames
        canvas.width = 1200; // 8 frames x 150px width
        canvas.height = 150;
        
        // Draw a colorful couple directly (no need to wait for image)
        for (let i = 0; i < 8; i++) {
            const frameX = i * 150;
            
            ctx.save();
            
            // Draw background
            ctx.fillStyle = '#ffe6e6';
            ctx.fillRect(frameX, 0, 150, 150);
            
            const offsetY = Math.sin(i * Math.PI / 4) * 10;
            
            // Draw first person
            ctx.fillStyle = '#ff6b81';
            // Head
            ctx.fillRect(frameX + 40, 20 + offsetY, 25, 25);
            // Body
            ctx.fillRect(frameX + 45, 45 + offsetY, 15, 30);
            // Arms with different positions
            if (i % 2 === 0) {
                ctx.fillRect(frameX + 30, 50 + offsetY, 15, 8);
                ctx.fillRect(frameX + 60, 50 + offsetY, 15, 8);
            } else {
                ctx.fillRect(frameX + 30, 45 + offsetY, 15, 8);
                ctx.fillRect(frameX + 60, 45 + offsetY, 15, 8);
            }
            // Legs with different positions
            if (i % 4 < 2) {
                ctx.fillRect(frameX + 40, 75 + offsetY, 10, 20);
                ctx.fillRect(frameX + 55, 75 + offsetY, 10, 20);
            } else {
                ctx.fillRect(frameX + 35, 75 + offsetY, 10, 20);
                ctx.fillRect(frameX + 60, 75 + offsetY, 10, 20);
            }
            
            // Draw second person
            ctx.fillStyle = '#4a90e2';
            // Head
            ctx.fillRect(frameX + 90, 25 + offsetY, 25, 25);
            // Body
            ctx.fillRect(frameX + 95, 50 + offsetY, 15, 30);
            // Arms with different positions
            if (i % 2 === 0) {
                ctx.fillRect(frameX + 80, 55 + offsetY, 15, 8);
                ctx.fillRect(frameX + 110, 55 + offsetY, 15, 8);
            } else {
                ctx.fillRect(frameX + 80, 50 + offsetY, 15, 8);
                ctx.fillRect(frameX + 110, 50 + offsetY, 15, 8);
            }
            // Legs with different positions
            if (i % 4 < 2) {
                ctx.fillRect(frameX + 90, 80 + offsetY, 10, 20);
                ctx.fillRect(frameX + 105, 80 + offsetY, 10, 20);
            } else {
                ctx.fillRect(frameX + 85, 80 + offsetY, 10, 20);
                ctx.fillRect(frameX + 110, 80 + offsetY, 10, 20);
            }
            
            // Add ground
            ctx.fillStyle = '#ff94a4';
            ctx.fillRect(frameX + 10, 130, 130, 10);
            
            // Add hearts or effects
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(frameX + 70, 10 + (i * 3) % 20, 5, 5);
            
            ctx.fillStyle = '#ffcc00';
            ctx.fillRect(frameX + 110 + (i * 2) % 15, 15 + (i * 4) % 25, 4, 4);
            
            ctx.restore();
        }
        
        // Save the sprite sheet and apply to the dancing couple element
        const dataURL = canvas.toDataURL();
        dancingCouple.style.backgroundImage = `url(${dataURL})`;
    }
    
    // Function to create sprite sheet for the twerking monkey
    function createMonkeySprite() {
        console.log("Creating monkey sprite");
        // Create a canvas for the monkey sprite sheet
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set the canvas size for 6 frames
        canvas.width = 600; // 6 frames x 100px width
        canvas.height = 120;
        
        // Draw the pixel art monkey frames directly
        for (let i = 0; i < 6; i++) {
            const frameX = i * 100;
            
            // Clear frame background
            ctx.fillStyle = '#ffe6e6';
            ctx.fillRect(frameX, 0, 100, 120);
            
            // Basic monkey shape
            ctx.fillStyle = '#8B4513'; // Brown color
            
            // Draw different frames of twerking animation
            ctx.save();
            
            // Body
            ctx.fillRect(frameX + 35, 40, 30, 40);
            
            // Head
            ctx.fillRect(frameX + 30, 20, 40, 30);
            
            // Face
            ctx.fillStyle = '#FFE4C4'; // Light color for face
            ctx.fillRect(frameX + 35, 25, 30, 20);
            
            // Eyes
            ctx.fillStyle = '#000000';
            ctx.fillRect(frameX + 40, 30, 5, 5);
            ctx.fillRect(frameX + 55, 30, 5, 5);
            
            // Smile
            ctx.fillRect(frameX + 45, 40, 10, 3);
            
            // Arms
            ctx.fillStyle = '#8B4513';
            ctx.fillRect(frameX + 25, 45, 10, 20);
            ctx.fillRect(frameX + 65, 45, 10, 20);
            
            // Legs and twerk positions
            if (i % 2 === 0) {
                // Regular position
                ctx.fillRect(frameX + 35, 80, 10, 25);
                ctx.fillRect(frameX + 55, 80, 10, 25);
            } else {
                // Twerk position - legs wider and slightly bent
                ctx.fillRect(frameX + 25, 80, 10, 25);
                ctx.fillRect(frameX + 65, 80, 10, 25);
                
                // Add some motion lines
                ctx.strokeStyle = '#FFFFFF';
                ctx.beginPath();
                ctx.moveTo(frameX + 40, 90);
                ctx.lineTo(frameX + 60, 90);
                ctx.stroke();
            }
            
            // Tail
            ctx.beginPath();
            ctx.moveTo(frameX + 50, 80);
            
            // Make the tail wiggle in different frames
            if (i % 3 === 0) {
                ctx.quadraticCurveTo(frameX + 70, 90, frameX + 80, 70);
            } else if (i % 3 === 1) {
                ctx.quadraticCurveTo(frameX + 75, 100, frameX + 85, 80);
            } else {
                ctx.quadraticCurveTo(frameX + 65, 85, frameX + 75, 65);
            }
            
            ctx.stroke();
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 3;
            ctx.stroke();
            
            ctx.restore();
        }
        
        // Save the sprite sheet and apply to the twerking monkey element
        const dataURL = canvas.toDataURL();
        twerkingMonkey.style.backgroundImage = `url(${dataURL})`;
    }

    // Apply pixel effect to the image
    function pixelateImage() {
        const img = valentinePhoto;
        const pixelSize = 8; // Size of each pixel block
        
        // Create canvas element
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas dimensions
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Wait for the image to load
        img.onload = function() {
            // Draw image to canvas at a small size to create pixelation
            ctx.drawImage(img, 0, 0, img.width / pixelSize, img.height / pixelSize);
            
            // Scale the small image back up with pixelated rendering
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(canvas, 0, 0, img.width / pixelSize, img.height / pixelSize, 
                         0, 0, canvas.width, canvas.height);
            
            // Replace original image with pixelated version
            img.src = canvas.toDataURL();
            
            // Show the pixelated image
            setTimeout(() => {
                valentinePhoto.classList.add('show');
            }, 500);
        };
        
        // Add a pixel art border style
        img.classList.add('pixel-border');
    }

    // Initialize pixelation once image source is set
    if (valentinePhoto.complete) {
        pixelateImage();
    } else {
        valentinePhoto.onload = pixelateImage;
    }

    // Create floating hearts animation
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 3 + 's';
        document.body.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    // Yes button interaction
    yesBtn.addEventListener('click', () => {
        // Hide the no button
        noBtn.style.display = 'none';
        
        // Change message
        document.getElementById('valentine-message').textContent = 'I love you! ❤️';
        
        // Animate the photo
        valentinePhoto.classList.add('accepted');
        
        // Bloom the flower
        flower.classList.add('bloom');
        
        // Show and animate the pixel animations
        pixelAnimations.style.display = 'flex';
        dancingCouple.classList.add('animate');
        twerkingMonkey.classList.add('animate');
        
        // Create hearts animation
        setInterval(createHeart, 300);
        
        // Initial hearts
        for (let i = 0; i < 15; i++) {
            setTimeout(createHeart, i * 150);
        }

        // Make flower bounce happily
        flower.style.animation = 'bounce 0.5s ease infinite alternate';
    });

    // No button interaction - make it harder to say no by moving the button
    noBtn.addEventListener('mouseover', () => {
        const containerWidth = document.querySelector('.container').clientWidth;
        const containerHeight = document.querySelector('.container').clientHeight;
        
        const randomX = Math.floor(Math.random() * (containerWidth - 100));
        const randomY = Math.floor(Math.random() * (containerHeight - 50));
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    });
    
    // Add bounce animation for the flower when accepted
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0% { transform: translateY(0); }
            100% { transform: translateY(-15px); }
        }
    `;
    document.head.appendChild(style);
}); 