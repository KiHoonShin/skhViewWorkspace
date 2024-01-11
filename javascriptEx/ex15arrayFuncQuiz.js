let cat = {
  kind: '고양이',
  age: 5
}
let dog = {
  kind: '개',
  age: 4
}
let rabbit = {
  kind: '토끼',
  age: 0.5
}
let hamster = {
  kind: '햄스터',
  age: 1
}

let pets = [cat, dog, rabbit, hamster, cat];

// pets.forEach(obj => console.log(obj));

console.log('1번')
// 1. 동물의 kind가 개 인것을 찾아라
// for (let i = 0; i < pets.length; i += 1) {
//   if (pets[i].kind == "개") {
//     console.log(pets[i]);
//   }
// }
let res = pets.find((obj) => obj.kind === '개');
console.log(res);
console.log('2번')
// 2. 동물의 kind가 고양이가 아닌것만 빼서 배열로 만들어라
// for (let i = 0; i < pets.length; i += 1) {
//   if (pets[i].kind != "고양이") {
//     console.log(pets[i]);
//   }
// }
let q2 = pets.filter((obj) => obj.kind != "고양이");
console.log(q2);


console.log('3번')
// 3. 총 동물의 평균 나이를 구해라

console.log('4번')
// 4. 동물 나이순으로 내림차순 정렬


// let result = pets.age.reduce((p, n) => p + n, 0);
// console.log(result);
