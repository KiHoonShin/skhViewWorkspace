// 비교연산자
// == , != , > , < , <= , >=

// 자바랑 동일한 부분
let num = 10;
console.log(num == 10)
console.log(num != 10)
console.log(num > 10)
console.log(num < 10)
console.log(num >= 10)
console.log(num <= 10)

// 자바스크립트에만 있는 것  ===
console.log('---------------------')
console.log(num == '10'); //true : 값만 비교한다
console.log(num === '10'); // false : 값 + type 을 비교한다
console.log(true == 'true'); // boolean 값은 안 된다

let number = 10;
let result = 1;
console.log(result);

result = number++;
console.log(result, number);