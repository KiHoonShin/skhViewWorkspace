const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let key = {
  right : false,
  left : false,
  up : false,
  down: false
}

let player = {
  // x : 150,
  // y : 150,
  x : 0,
  y : 0,
  size : 50,
  color : 'blue'
}

let enemy = {
  // 40은 size / 2
  x : canvas.width / 2 - 40,
  y : canvas.height / 2 - 40,
  size : 80,
  color: 'green'
}
let isCenter = false;

makeEnemy = () => {
  ctx.beginPath();
  ctx.rect(enemy.x , enemy.y , enemy.size, enemy.size);
  ctx.fillStyle = "green";
  if(isCenter){
    ctx.fillStyle = "red";
  }
  ctx.fill();
  ctx.closePath();
}

makeEnemy();

makePlayer = () => {
  ctx.clearRect(player.x , player.y , player.size, player.size);
  movePlayer();
  ctx.beginPath();
  // if(player.x >= enemy.x - enemy.size && player.x < enemy.x + enemy.size &&
  //   player.y >= enemy.y - enemy.size && player.y < enemy.y + enemy.size){
  //   isCenter = true;
  // } else{
  //   isCenter = false;
  // }
  boxChange();
  ctx.rect(player.x , player.y , player.size, player.size);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
  
  makeEnemy();
}

// 박스 빨갛게 변하는 조건
boxChange = () =>{
  if(player.x >= enemy.x - 40 && player.x < enemy.x + enemy.size &&
    player.y >= enemy.y - 40 && player.y <= enemy.y + enemy.size){
    isCenter = true;
  } else{
    isCenter = false;
  }
}

movePlayer = () => {
  if(key.right == true && player.x < canvas.width - player.size){
    player.x += 5;
  } else if(key.down == true && player.y < canvas.height - player.size){
    player.y += 5;
  } else if(key.up == true && player.y > 0){
    player.y -= 5;
  } else if(key.left == true && player.x > 0){
    player.x -= 5;
  }
}

document.addEventListener("keydown" , e=>{
  if(e.keyCode === 39 || e.key === 'ArrowRight'){
    key.right = true;
  } else if(e.keyCode === 40 || e.key === 'ArrowDown'){
    key.down = true;
  } else if(e.keyCode === 38 || e.key === 'ArrowUp'){
    key.up = true;
  } else if(e.keyCode === 37 || e.key === 'ArrowLeft'){
    key.left = true;
  }
});

document.addEventListener("keyup" , e=>{
  if(e.keyCode === 39 || e.key === 'ArrowRight'){
    key.right = false;
  } else if(e.keyCode === 40 || e.key === 'ArrowDown'){
    key.down = false;
  } else if(e.keyCode === 38 || e.key === 'ArrowUp'){
    key.up = false;
  } else if(e.keyCode === 37 || e.key === 'ArrowLeft'){
    key.left = false;
  }
});

setInterval(makePlayer,10);

// --------------------- 강사님 답 ==>

// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext('2d');
// let key = {
//   right: false,
//   left: false,
//   up: false,
//   down: false
// }
// let player = {
//   x: 150,
//   y: 150,
//   size: 50,
//   color: 'blue',
//   speed: 5
// }
// let enemy = {
//   x: canvas.width / 2 - 40,
//   y: canvas.height / 2 - 40,
//   size: 80,
//   color: 'green'
// }

// document.addEventListener("keydown", e => {
//   keyHandler(e, true);
// })
// document.addEventListener("keyup", e => {
//   keyHandler(e, false);
// })

// function keyHandler(e, value) {
//   if (e.key === 'ArrowRight') {
//     key.right = value;
//   } else if (e.key === 'ArrowDown') {
//     key.down = value;
//   } else if (e.key === 'ArrowUp') {
//     key.up = value;
//   } else if (e.key === 'ArrowLeft') {
//     key.left = value;
//   }
// }

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawObj(enemy);
//   drawObj(player);
//   movePlayer();
//   isCollison();
// }

// function drawObj(obj) {
//   ctx.beginPath();
//   ctx.rect(obj.x, obj.y, obj.size, obj.size);
//   ctx.fillStyle = obj.color;
//   ctx.fill();
//   ctx.closePath();
// }

// function movePlayer() {
//   if (key.right && player.x < canvas.width - player.size) {
//     player.x += player.speed;
//   } else if (key.down && player.y < canvas.height - player.size) {
//     player.y += player.speed;
//   } else if (key.up && player.y > 0) {
//     player.y -= player.speed;
//   } else if (key.left && player.x > 0) {
//     player.x -= player.speed;
//   }
// }

// function inEnemy(px, py) {
//   // emeny.x < px < enmeny.x+ emeny.size;
//   // emeny.y < py < enmeny.y+ emeny.size;
//   return (enemy.x < px && px < enemy.x + enemy.size) &&
//     (enemy.y < py && py < enemy.y + enemy.size)
// }

// function collison() {
//   // 플레이어의 왼쪽 상단 모서리에 닿으면 
//   if (inEnemy(player.x, player.y)) return true;
//   // 플레이어의 오른쪽 상단 모서리에 닿으면 
//   else if (inEnemy(player.x + player.size, player.y)) return true;
//   // 플레이어의 왼쪽 하단 모서리에 닿으면 
//   else if (inEnemy(player.x, player.y + player.size)) return true;
//   // 플레이어의 오른쪽 하단 모서리에 닿으면 
//   else if (inEnemy(player.x + player.size, player.y + player.size)) return true;
//   // 플레이어가 닿지 않으면
//   else return false;
// }

// function isCollison() {
//   collison() ? enemy.color = 'red' : enemy.color = 'green';
// }

// //draw();
// setInterval(draw, 10);