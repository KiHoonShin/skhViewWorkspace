// 코드를 DRY 하게 짜라
// D : don't   R : repeat   Y : yourself ==> 반복되는 코드는 함수로 만들어서 재사용해라

for (let i = 1; i <= 5; i += 1) {
  console.log(i);
}

for (let i = 6; i <= 15; i += 1) {
  console.log(i);
}

for (let i = 15; i >= 4; i -= 1) {
  console.log(i);
}

function printArray(a, b) {
  if (a < b) {
    for (let i = a; i <= b; i += 1) {
      console.log(i + " ");
    }
  } else if (a > b) {
    for (let i = a; i >= b; i -= 1) {
      console.log(i);
    }
  }
}

// printArray(1, 5);
printArray(15, 4);