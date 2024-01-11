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

// 1. 동물의 kind가 개 인것을 찾아라
let res = pets.find((obj) => obj.kind === '개');
console.log('1번 : ',res);
console.log('------------------')
// 2. 동물의 kind가 고양이가 아닌것만 빼서 배열로 만들어라
let q2 = pets.filter((obj) => obj.kind != "고양이");
console.log('2번 : ',q2);

console.log('------------------')
// 3. 총 동물의 평균 나이를 구해라
let q3 = pets.reduce((p , n)=> {
return p + n.age ;
},0);
console.log('3번 : ' , q3 / pets.length);

console.log('------------------')

// 4. 동물 나이순으로 내림차순 정렬

console.log('4번')
let copy = [...pets];
copy.sort((a,b)=> a.age > b.age ? -1 : 1);
console.log(copy);


