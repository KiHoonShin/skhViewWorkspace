// 배열의 함수들 ....

// 배열 자체를 수정하는가? 새로운 배열을 만드는가

const fruit = ['바나나', '사과', '포도', '딸기', '샤인머스켓', '사과']; // new Array(['바나나', '사과', '포도', '딸기', '샤인머스켓'])

console.log(fruit.length); //6

console.log(fruit.indexOf('사과')); // 1
console.log(fruit.indexOf('사과', 2)); // 5
console.log(fruit.includes('용과')); // false

// 배열 자체를 수정
console.log(fruit.push('파인애플'));
console.log(fruit);
console.log(fruit.push('수박', '망고'));
console.log(fruit);
// console.log(fruit.push(['멜론', '귤', '감', '배'])); 2차원 배열이 됨
console.log(fruit);

console.dir(fruit);
console.log(fruit.pop());

// 앞에다가 추가
fruit.unshift('용과');

// 제일 앞에거 삭제
fruit.shift();

// 배열자르기
// splice(시작인덱스, 개수)
fruit.splice(0, 3);
console.log(fruit);

// 두번째 인자값이 없으면 배열 끝까지 삭제
fruit.splice(3);
console.log(fruit);

fruit = ['바나나', '사과', '포도', '딸기', '샤인머스켓', '사과'];

// 배열 추가
let moreFruit = ['망고', '용과'];
// let newFruit = fruit.concat(moreFruit);
// console.log(newFruit);

// ... speread 연산자를 사용하면 쉽게 배열을 복사할 수 있다
let newFruit = [...fruit, ...moreFruit];
console.log(newFruit);

console.log(newFruit.join()); // 바나나,사과,포도,딸기,샤인머스켓,사과,망고,용과
console.log(newFruit.join('/')); // 바나나/사과/포도/딸기/샤인머스켓/사과/망고/용과
console.log(newFruit.join(', ')); // 바나나, 사과, 포도, 딸기, 샤인머스켓, 사과, 망고, 용과

let numbers = [1, 9, 7, 5, 2, 4];
let copyNumbers = [...numbers].sort(); // 오름차순
// console.log(numbers.sort()); // 오름차순 정렬
console.log(numbers);
console.log(copyNumbers);
// copyNumbers.sort((a, b) => a > b ? -1 : 1); // 내림차순 정렬
// console.log(copyNumbers);
copyNumbers.reverse(); // 오름차순일때 내림차순으로 정렬됨
console.log(copyNumbers);

