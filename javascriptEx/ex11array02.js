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

// 문제 : 함수로 위 반복문들을 출력하여라

function printArray(start, end) {
  if (isNaN(start) || isNaN(end)) return '숫자값을 넣어주세요 ';
  if (end < start) {
    let temp = start;
    start = end;
    end = temp;
  }
  let result = '';
  for (let i = start; i <= end; i += 1) {
    result += i + " ";
  }
  return result;
}

console.log(isNaN('test'));

console.log(printArray(1, 5));
console.log(printArray(6, 15));
console.log(printArray(15, 4));
console.log(printArray(1, 'test'));