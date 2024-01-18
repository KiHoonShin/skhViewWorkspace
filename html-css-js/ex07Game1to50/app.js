const container = document.querySelector(".container");
const start = document.querySelector("#start");
const boxs = [...document.querySelectorAll(".box")];
const restart = document.querySelector(".restart");
const timer = document.querySelector(".timer");

let setIdx = 0;
boxs.forEach(box =>{
  box.setAttribute("data-idx" , setIdx++);
})

let front = [];
let back = [];

function init(){
  for(let i = 1; i <= 25; i+=1){
    front.push(i);
    back.push(i+25);
  }
}
// init();

function shuffle(){
  for(let i = 0; i < 500; i+=1){
    let r = Math.floor(Math.random()*24);
    let temp = front[0];
    front[0] = front[r];
    front[r] = temp;

    let temp2 = back[0];
    back[0] = back[r];
    back[r] = temp2;
  }
}
// shuffle();

let gameNum = 1;
// 게임시작 누르면 front 생성
start.addEventListener('click', ()=>{
  timer.style.visibility = "inherit";
  const interval = setInterval(changeTime, 10);
  start.style.display = "none";
  init();
  shuffle();
  // front.forEach((num) =>{
  //   container.innerHTML += `
  //     <div class="box">${num}</div>
  //   `;
  // })
  let frontIdx = 0;
  boxs.forEach((box)=>{
    box.innerHTML = front[frontIdx++];
  })
  container.style.visibility = "inherit";
})

let backIdx = 0;
boxs.forEach((box)=>{
  box.addEventListener('click', e=>{
    console.log(e.target);
    if(e.target.innerHTML == gameNum){
      e.target.innerHTML = back[backIdx++];
      if(gameNum >= 26){
        e.target.classList.add("hide");
      }
      gameNum++;
      if(gameNum == 5){
        container.style.visibility = "hidden";
        restart.style.visibility = "inherit";
        clearInterval(interval);
        return;
      }
    } else{
      let r = Math.floor(Math.random()*25);
      // boxs[r].style.backgroundColor = "beige";
      console.log(boxs.find(box => box.innerHTML == gameNum));
      boxs.find(box => box.innerHTML == gameNum).classList.add("hint");
      setTimeout(() => {
        boxs.find(box => box.innerHTML == gameNum).classList.remove("hint");
      }, 20);
    }
  })
})

// if(gameNum == 51){
//   container.style.visibility = "hidden";
//   restart.style.display = "block";
// }

restart.addEventListener('click', ()=>{
  gameNum = 1;
  backIdx = 0;
  init();
  shuffle();
  let frontIdx = 0;
  boxs.forEach((box)=>{
    box.innerHTML = front[frontIdx++];
  })
  container.style.visibility = "inherit";
})

const startTime = new Date().getTime();
let changeTime = () => {
  const now = new Date().getTime();
  const remain = now - startTime;
  const remainSec = (remain / 1000).toFixed(0);
  let minute = 0;
  let sec = 0;
  let milsec = remainSec;
  if(milsec == 60){
    minute += 1;
    milsec = 0;
  }
  let label = `0${minute}:${milsec}`;

  timer.innerHTML = label;
}

// const interval = setInterval(changeTime, 10);