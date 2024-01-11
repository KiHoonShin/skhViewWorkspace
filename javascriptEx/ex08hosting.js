
// 호이스팅이 먼저 실행된다

// 모든 변수 선언문이 코드 최상단으로 이동한 것처럼 동작을 한다
// var name;
// function sayHi() {
//   console.log("hello ");
// }



console.log(name);
var name = '신기훈';
console.log(name);


sayHi(); // => 출력 가능
function sayHi() {
  console.log("hello ");
}

// let과 const도 똑같이 호이스팅이 되지만 선언 전에 출력하면 undefined가 뜨는게 아니라
// 에러를 띄워준다. var은 그냥 실행
console.log(dog);
let dog = '바둑이';

// let const VS var

// var -> 함수 스코프 영역, 변수 선언전에 출력 가능 --> undefined 출력
// let, const -> 블록스코프 영역, 변수 선언전에 출력 불가능 --> 에러 발생

var i = 99;
for (var i = 1; i < 10; i += 1) {

}
console.log(i); // 10

// global 스코프 영역
let x = 10;

{
  // local 스코프 영역
  let x = 30;
  console.log(x);
}

let i = 99;

for (let i = 1; i < 10; i += 1) {

}
console.log(i);