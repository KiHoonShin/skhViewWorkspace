// 고차함수 => 콜백함수를 사용한다.

// 콜백함수는 보통 화살표 함수를 많이 쓴다
let array = [3, 5, 8, 6, 7, 11, 15, 14, 22];

// 데이터를 처음부터 끝까지 한 개씩 차레대로 꺼내온다
// array.forEach(function(n){
//   console.log(n)
// });

// array.forEach((n) => {
//   console.log(n)
// });

// array.forEach(n => console.log(n));

// 문제 1 : 짝수만 출력
array.forEach(n => {
  if (n % 2 != 1) {
    console.log(n);
  }
});

// map() 데이터 셋을 가공해서 변환시켜 준다.
let result = array.map(x => x * 100);
console.log(result);
console.log(array);

// filter : 조건식이 있고 true 되는 값만 반환

result = array.filter(value => value % 2 == 0);

console.log(result);

console.log('---------------------')

// find : 조건에 해당되는 값 1개만 반환
result = array.find(value => value > 10);
console.log(result)
console.log('---------------------')
result = array.findIndex(value => value > 10);
console.log(result)


// -- reduce () : 총합

result = array.reduce((p, n) => p + n, 0); // 두번째 인자값 안 주면 디폴트 : 0
console.log(result)

// reduce 인자값을 2개를 받는다 (콜백함수(p , n) , 시작값)
// p = 이전 값 , n = 다음 값
// p = 0 ,  n = 3 , return 3+0 => p = 3
// p = 3 , n = 5 , return 3+5 => p = 8
// p = 8 , n = 8 , return 8+8 => p = 16 ........ => 91

// 짝수의 개수를 리턴 ( 누적값, 배열요소값 )
result = array.reduce((cnt, val) => {
  if (val % 2 != 0) {
    return cnt;
  } else {
    return cnt += 1;
  }
}, 0)

console.log(result);