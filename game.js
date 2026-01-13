console.log("game.js lädt");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d", {alpha: false});

const keys = {};

window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

const paddle = {
  width: 20,
  height: 200,
  speed: 6,
  leftx: 10,
  rightx: 790,
  lefty: 200,
  righty: 200,
};

const filled = {
  x: 30,
  y: 30,
  dx: 4,
  dy: 3,
  width: 20,
  height: 20,
  background: "red",
};


const drawLine = (ctx, begin, end, stroke = "red", width = 1) => {
  if (stroke) ctx.strokeStyle = stroke;
  if (width) ctx.lineWidth = width;

  ctx.beginPath();
  ctx.moveTo(...begin);
  ctx.lineTo(...end);
  ctx.stroke();
}

function collision(ball, x, y1, y2, width) {
  const left = x - width / 2;
  const right = x + width / 2;
  const top = Math.min(y1,y2)
  const bottom = Math.max(y1, y2);

  const hit =
    ball.x < right &&
    ball.x + ball.width > left &&
    ball.y < bottom &&
    ball.y + ball.height > top;

  if (hit) {
    ball.dx *= -1;
    }

  return hit;
  }

function draw() {

  if (keys["w"]) paddle.lefty -= paddle.speed;
  if (keys["s"]) paddle.lefty += paddle.speed;

  if (keys["ArrowUp"]) paddle.righty -= paddle.speed;
  if (keys["ArrowDown"]) paddle.righty += paddle.speed;

  paddle.lefty = Math.max(0, Math.min(canvas.height - paddle.height, paddle.lefty));
  paddle.righty = Math.max(0, Math.min(canvas.height - paddle.height, paddle.righty));

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawLine(ctx, [paddle.leftx, paddle.lefty], [paddle.leftx, paddle.lefty + paddle.height], "#faa", paddle.width);
  drawLine(ctx, [paddle.rightx, paddle.righty], [paddle.rightx, paddle.righty + paddle.height], '#faa', paddle.width);

  collision(filled, paddle.leftx, paddle.lefty, paddle.lefty + paddle.height, paddle.width);
  collision(filled, paddle.rightx, paddle.righty, paddle.righty + paddle.height, paddle.width);

  ctx.fillStyle = filled.background;
  ctx.fillRect(filled.x, filled.y, filled.width, filled.height);

  filled.x += filled.dx;
  filled.y += filled.dy;

  if (filled.x <= 0 || filled.x + filled.width >= canvas.width) {
    filled.dx *= -1;
  }

  if (filled.y <= 0 || filled.y + filled.height >= canvas.height) {
    filled.dy *= -1;
  }
}

setInterval(draw, 16);

