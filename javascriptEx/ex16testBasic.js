// 자바스크립트에서 랜덤으로 값을 가져오기
console.log(Math.random()); // 무작위 1이하의 실수 값
console.log(Math.random() * 10); // 0 ~ 9 // 10은 개수
console.log(Math.random() * 100); // 0 ~ 99 // 100은 개수

// 1 ~ 100
console.log(Math.random() * 10 + 1); // (0 ~ 9) +1 => 1 ~ 10


/*
  1. 1 ~ 100 사이의 숫자를 랜덤으로 저장하고 그 수가 짝수인지
  홀수인지 출력하는 checkNum 함수를 만든 후 호출


  2. 배열에 랜덤으로 (-100 ~ 100) 사이의 숫자 4개를 저장 후 전부 홀수인지 검사하는
    isAllOddNum 함수를 만드시오. 전부 홀수입니다 , 아닙니다
 */


// -------------------- 문제 1 ------------

function getRandNum(min, max) {
  return parseInt(Math.random() * (max - min + 1)) + min;
}

function checkNum(rNum) {
  console.log(rNum);
  if (rNum % 2 == 0) {
    console.log("짝수");
  } else {
    console.log("홀수");
  }
}
checkNum(getRandNum(1, 100));

// -------------------- 문제 2 ------------

function isAllOddNum() {
  let array = [];
  for (let i = 0; i < 4; i += 1) {
    getRandNum(-100, 100);
    array.push(getRandNum(-100, 100));
  }
  console.log(array);
  let res = array.filter(val => val % 2 == 0);
  console.log(res.length);
  if (res.length > 0) {
    console.log("전부 홀수가 아닙니다")
  } else {
    console.log("전부 홀수입니다.")
  }
}

isAllOddNum();

// ---------------- 강사님이 푼 답 ( 다른 방식으로 푸는 법도 익히기 ) --------------
function getRandNum(min, max) {
  return parseInt(Math.random() * (max - min + 1)) + min;
}

function checkNum(num) {
  return num % 2 == 0 ? `${num} 은 짝수` : `${num} 은 홀수`;
}
/*
    1. 1~100 사이의 숫자를 랜덤으로 저장하고 그수가 짝수인지
      홀수인지 출력하는 checkNum 함수를 만든후 호출 
*/
console.log(checkNum(getRandNum(1, 100)));
/*  
     2. 배열에 랜덤으로(-100 ~ 100 사이의 숫자를 4개를 저장후 전부 홀수인지 검사하는 
       isAllOddNum 함수를 만드시오 , 전부 홀수입니다, 아닙니다 
 */

function isAllOddNum() {
  let arr = [0, 0, 0, 0];
  for (idx in arr) {
    arr[idx] = getRandNum(-100, 100);
  }
  arr = [1, -3, -99, 1];
  console.log(arr);

  let cnt = arr.reduce((cnt, value) => {
    //console.log(`value = ${value} cnt = ${cnt}`);
    return value % 2 !== 0 ? cnt += 1 : cnt;
  }, 0);

  return cnt === arr.length ? '전부 홀수값입니다' : '홀수가 아닌 값이 있습니다';

}

console.log(isAllOddNum());