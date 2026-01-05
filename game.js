console.log("game.js lädt");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d", {alpha: false});

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


function draw() {

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawLine(ctx, [10, 200], [10, 400], '#faa', 20);
  drawLine(ctx, [790, 200], [790,400], '#faa', 20);

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
