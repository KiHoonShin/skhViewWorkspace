// 함수의 표현식 : 무명함수랑 세트로 온다

let callName = function printName(name) {
  console.log('이름은', name);
}

// printName('박연미');  => 안됨
callName('박연미');

// callAge(10); => 불가
// 주의 ! 함수의 표현식은 변수의 값으로 함수가 존재하기 때문에 함수 호이스팅이 안 된다.
let callAge = function (age) {
  console.log('나이는 ', age);
}
callAge(10);

