# Valentine's Day Pixel Animation

A fun, interactive pixel art themed web application that displays a flower which blooms when clicked to reveal a Valentine's Day message and cute pixel animations.

## Features

- Interactive flower that blooms with a smooth CSS animation when clicked
- Automatically generated pixel art animations that appear after the flower blooms:
  - Pixel version of you and your girlfriend dancing
  - Twerking monkey animation created with pixel art
- Valentine's Day proposal message and interactive buttons
- "No" button runs away when hovered
- Fun heart animations when accepted
- Mobile-responsive design

## How to Run

1. Save your Valentine's photo as `valentine-photo.jpeg` in the `assets` folder
2. Open the `index.html` file in any modern web browser
3. No server or additional dependencies are required!

## Project Structure

```
valentine-app/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # CSS styles and animations
├── js/
│   └── script.js       # JavaScript for interactivity
└── assets/             # Folder for images and other assets
    └── valentine-photo.jpeg  # Your photo (will be pixelated automatically)
```

## How It Works

The application uses clever techniques to create a Valentine's experience:

1. **Dynamic Sprite Generation**: When you add your photo, the app automatically:
   - Pixelates your image
   - Creates a dancing animation of you and your girlfriend using your photo
   - Generates a twerking monkey pixel animation from scratch

2. **Interactive Sequence**:
   - Click the flower to make it bloom
   - Dancing animations appear
   - Valentine's message shows
   - When she clicks "Yes", hearts fill the screen and animations speed up

3. **Pixel Art Aesthetic**: All animations use the pixelated rendering style for a retro gaming look

## Browser Compatibility

This application works best in modern browsers that support CSS animations, Canvas, and modern JavaScript (Chrome, Firefox, Safari, Edge). 
=======
