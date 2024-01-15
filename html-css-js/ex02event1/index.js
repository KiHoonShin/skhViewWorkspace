const horizontal = document.querySelector('.horizontal');
const vartical = document.querySelector('.vartical');
const target = document.querySelector('.target');
const loc = document.querySelector('.loc');

document.addEventListener('mousemove', e => {
  console.log(e.currentTarget);
  const x = e.clientX;
  const y = e.clientY;
  console.log("x = " + x + ", y = " + y);

  vartical.style.left = `${x}px` // 10px;
  horizontal.style.top = `${y}px`

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  loc.style.left = `${x}px`;
  loc.style.top = `${y}px`;

  loc.textContent = `x : ${x} , y : ${y}`
});

