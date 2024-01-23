const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');

const startBtn = document.querySelector(".startBtn");

// 정중앙에 위치시키기
let player = {
  x: canvas.width / 2 - 25,
  y: canvas.height / 2 - 25,
  size: 50,
  speed: 3
};
let key = {
  ArrowRight: false,
  ArrowLeft: false,
  ArrowUp: false,
  ArrowDown: false
}

let interval = null;
let imgReady = false;
let playerImg = new Image();
playerImg.src = './bug.png';

let backImg = new Image();
backImg.src = './background1.png';
let backX = 0;

let bulletList = []
let isOver = false;

function init() {
  playerImg.addEventListener("load", () => {
    imgReady = true;
  })
  backImg.addEventListener("load", () => {
    ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
  })
  document.addEventListener("keydown", e => keyHandler(e, true));
  document.addEventListener("keyup", e => keyHandler(e, false));
  // createBullets(10);
  startBtn.addEventListener("click", gameStart);
}

function drawPlayer() {
  ctx.beginPath();
  //이미지객체 , 시작좌표x, y  이미지크기 가로   세로 
  //ctx.rect(player.x, player.y, player.size, player.size);
  ctx.drawImage(playerImg, player.x, player.y, player.size, player.size);
  //ctx.fill();
  ctx.closePath();
}

function keyHandler(e, value) {
  if (key[e.key] !== undefined) {
    key[e.key] = value;
  }
}

function createBullets(size) {
  bulletList = [];
  for (let i = 0; i < size; i++) {
    let bullet = new Bullet();
    bullet.init(player.x, player.y);
    bulletList.push(bullet);
  }

}

function movePlayer() {
  if (key.ArrowRight && player.x < canvas.width - player.size) {
    player.x += player.speed;
  } else if (key.ArrowDown && player.y < canvas.height - player.size) {
    player.y += player.speed;
  } else if (key.ArrowUp && player.y > 0) {
    player.y -= player.speed;
  } else if (key.ArrowLeft && player.x > 0) {
    player.x -= player.speed;
  }
}


function render() {
  // 배경까지 다 사라진다
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 다시 배경 입히기
  backX += 1; // 배경 움직이게
  ctx.drawImage(backImg, backX, 0, canvas.width, canvas.height);

  // 빈 공간을 다시 배경으로 채워주기
  ctx.drawImage(backImg, backX - canvas.width, 0, canvas.width, canvas.height);

  // 배경 안 짤리게 하는법
  if (backX == canvas.width) {
    backX = 0;
  }

  if (!imgReady) return;
  drawPlayer();
  movePlayer();
  bulletList.forEach(bull => {
    bull.update(player.x, player.y)
  })

  bulletList.forEach(bull => {

    if (bull.isCollision(player.x + player.size / 2, player.y + player.size / 2, player.size / 2)) {
      setTimeout(() => {
        if (!isOver) gameOver();
        isOver = true;
        clearInterval(interval);
      }, 200);
    }

  })
  console.log("test = ", isOver);

  bulletList.forEach(bull => bull.render(ctx));

}

function gameOver() {
  // alert("게임오버");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backX = 0;
  ctx.drawImage(backImg, backX, 0, canvas.width, canvas.height);
  startBtn.style.visibility = "visible";
}

function gameStart() {
  isOver = false;
  startBtn.style.visibility = "hidden";

  //플레이어 초기값
  player.x = canvas.width / 2 - player.size / 2;
  player.y = canvas.height / 2 - player.size / 2;

  // 총알 초기화
  createBullets(10);

  // 게임 시작
  interval = setInterval(render, 10);
}

backImg.addEventListener("load", () => {
  ctx.drawImage(backImg, backX, 0, canvas.width, canvas.height);
})

init();