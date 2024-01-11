// while , for, do while

let i = 1;
while (i <= 10) {
  console.log(i);
  i += 1;
}

i = 100;
do {
  if (i == 99) {
    i -= 1;
    continue;
  }
  console.log(i);
  if (i == 95) {
    break;
  }
  i -= 1;
} while (i > 90);

// for - in : key를 출력하는 for문 : 배열에서 키는 index 출력 , 객체에서 키는 key가 나오는 것

let array = [10, 20, 30, 40, 50, 60]; // 웬만하면 어레이에 같은 타입만 쓰자 !

for (let i in array) {
  console.log(i)
}

console.log('-------------------')

// for - of // iterable한 객체만 사용할 수 있다 : looping 할 수 있는 타입만 가능하다
for (let i of array) {
  console.log(i)
}

let dog = {
  name: '바둑이',
  age: 5,
  owner: { name: "신기훈" }
}

for (let key in dog) {
  // console.log('key = ', key, ", value=", dog[key]);
  console.log(`key = , ${key}, , value=, ${dog[key]}`);
}

// for (let key of dog) {
//   console.log(key);
// } -> dog is not iterable 에러뜸