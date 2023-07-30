const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 20;
const gridSizeX = canvas.width / gridSize;
const gridSizeY = canvas.height / gridSize;
const snakeSpeed = 150; // in milliseconds

let snake = [{ x: gridSizeX / 2, y: gridSizeY / 2 }];
let direction = { x: 0, y: 0 };
let food = { x: Math.floor(Math.random() * gridSizeX), y: Math.floor(Math.random() * gridSizeY) };

function drawSnake() {
    ctx.fillStyle = "green"; // Set snake color (you can choose your own color)
    
    // Loop through each segment of the snake and draw it on the canvas
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x * gridSize, snake[i].y * gridSize, gridSize, gridSize);
    }
}

function drawFood() {
    ctx.fillStyle = "red"; // Set food color (you can choose your own color)
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function moveSnake() {
    const newHead = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y
    };
    snake.unshift(newHead);

    if (newHead.x === food.x && newHead.y === food.y) {
        food = { x: Math.floor(Math.random() * gridSizeX), y: Math.floor(Math.random() * gridSizeY) };
    } else {
        snake.pop();
    }
}

function handleKeyPress(event) {
    const keyPressed = event.key;
    
    switch (keyPressed) {
        case "ArrowUp":
            direction = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            direction = { x: 0, y: 1 };
            break;
        case "ArrowLeft":
            direction = { x: -1, y: 0 };
            break;
        case "ArrowRight":
            direction = { x: 1, y: 0 };
            break;
    }
}

function checkCollision() {
    const head = snake[0];

    // Check for collisions with walls
    if (head.x < 0 || head.x >= gridSizeX || head.y < 0 || head.y >= gridSizeY) {
        return true;
    }

    // Check for collisions with the snake's body
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }

    return false;
}

function updateGame() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move snake
    moveSnake();

    // Check for collisions
    if (checkCollision()) {
        alert("Game Over!");
        // Reset snake, food, score, etc.
        snake = [{ x: gridSizeX / 2, y: gridSizeY / 2 }];
        direction = { x: 0, y: 0 };
        food = { x: Math.floor(Math.random() * gridSizeX), y: Math.floor(Math.random() * gridSizeY) };
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

