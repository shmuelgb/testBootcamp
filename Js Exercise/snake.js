let lastRenderTime = 0;
const snakeSpeed = 5;
const gameBoard = document.querySelector("#game-board");
let inputDirection = { x: 0, y: 0 };
let LastInputDirection = { x: 0, y: 0 };
const food = { x: 0, y: 0 };
gameBoard.appendChild;
const snakeBody = [
  { x: 11, y: 11 },
  { x: 12, y: 11 },
  { x: 13, y: 11 },
  { x: 14, y: 11 },
];

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / snakeSpeed) return;
  lastRenderTime = currentTime;

  updateSnake();
  drawSnake(gameBoard);
  updateFood();
  drawFood(gameBoard);
}
window.requestAnimationFrame(main);

function getInputDirection() {
  return inputDirection;
}

window.addEventListener("keydown", (e) => {
  LastInputDirection = inputDirection;
  switch (e.key) {
    case "ArrowUp":
      if (LastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (LastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (LastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (LastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

function updateSnake() {
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

function drawSnake(gameBoard) {
  gameBoard.innerHTML = "";
  snakeBody.forEach((segment) => {
    const snakeEl = document.createElement("div");
    snakeEl.style.gridRow = segment.y;
    snakeEl.style.gridColumn = segment.x;
    snakeEl.classList.add("snake");
    gameBoard.appendChild(snakeEl);
  });
}

function exspendSnake() {
  snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
}
function onSnake(foofPosition) {
  return snakeBody.some((segment) => {
    return foofPosition.x === segment.x && foofPosition.y === segment.y;
  });
}

function updateFood() {
  if (onSnake(food)) {
    exspendSnake(1);
  }
}

function drawFood(gameBoard) {
  //   gameBoard.innerHTML = "";
  const foodEl = document.createElement("div");
  foodEl.style.gridRow = food.y;
  foodEl.style.gridColumn = food.x;
  foodEl.classList.add("food");
  gameBoard.appendChild(foodEl);
}
