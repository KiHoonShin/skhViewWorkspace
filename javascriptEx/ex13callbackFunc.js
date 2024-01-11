// 콜백함수 callback() : 나중에 부른다 : 함수를 호출하는 주체를 남(다른 함수)에게 
// 나를 호출할 권한을 준다.
function sayHi(name) {
  console.log('hello ~~', name, 'nice meet you !');
}
// sayHi();

function introduce(lastName, firstName, callback) {
  let fullName = lastName + firstName;
  callback(fullName);
}

// sayHi callback 함수가 된다 : introduce가 대신 sayHi를 호출 함
introduce('신', '기훈', sayHi);

let array = [3, 5, 8, 6, 7, 11, 15, 14, 22];

let printAll = function (n) {
  console.log(n);
}

array.forEach(printAll);