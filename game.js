function draw() {
const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

const gridSize = 20;
const gridSizeX = canvas.width / gridSize;
const gridSizeY = canvas.height / gridSize;
const snakeSpeed = 150; // in milliseconds

let snake = [{ x: gridSizeX / 2, y: gridSizeY / 2 }];
let direction = { x: 0, y: 0 };
let food = { x: Math.floor(Math.random() * gridSizeX), y: Math.floor(Math.random() * gridSizeY) };

function drawSnake() {
    // Add your snake drawing code here
}

function drawFood() {
    // Add your food drawing code here
}

function moveSnake() {
    // Add code to move the snake
}

function handleKeyPress(event) {
    // Add code to handle key press and update direction
}

function checkCollision() {
    // Add code to check for collisions with walls and snake's body
}

function updateGame() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move snake
    moveSnake();

    // Check for collisions
    if (checkCollision()) {
        // Game over logic
        // Reset snake, food, score, etc.
        return;
    }

    // Draw snake and food
    drawSnake();
    drawFood();

    // Schedule the next update
    setTimeout(updateGame, snakeSpeed);
}

// Add event listener for key presses
document.addEventListener("keydown", handleKeyPress);

// Start the game
updateGame();
