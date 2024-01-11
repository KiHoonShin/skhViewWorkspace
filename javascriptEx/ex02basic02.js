
// 산술 연산자

console.log( 10 + 3);
console.log( 10 - 3);
console.log( 10 * 3);
console.log( 10 / 3);  // java는 정수 / 정수 -> 정수가 나오는데 :: JS는 정수 / 정수 => 실수가 나옴
console.log( 10 % 3);
console.log(Math.pow(10,3));  // 거듭제곱
console.log(10**3); // 거듭제곱  10*10*10

console.log(2 - "test");
console.log(10 / 0); // Infinity :: java에서는 에러 뜬다
console.log(0 / 10);  // 0

// String의 종류 ""(쌍따옴표: 더블 쿼테이션) , ''(홀따옴표 : 싱글 쿼테이션), ``(백틱)

let intro = '신기훈\n입니다 \\';
console.log(intro);
intro = "'신기훈' 입니다 ";
console.log(intro);
intro = '"신기훈" 입니다' ;
console.log(intro);

// `` 스트링 템플릿을 만들 수 있다
const name = "신기훈";
const job = "학생";
intro = `저는 ${name} 입니다 직업은 ${job}입니다`;
console.log(intro);

// boolean 타입은 동일하다

let isDead = true;
console.log(isDead);
console.log(!isDead);
console.log(!!isDead);

// falsy value : 값으로 인식하지 않는 값

console.log(!!0); // 숫자 0 
console.log(!!""); // 문자 빈문자열 
console.log(!!null);  // 비어있는 주소값
console.log(!!undefined); 
console.log(!!NaN);

// let cat = undefined; -> 쓰지 마라
// = cat;  

// let cant = null; 비어있다는 표시 null로만 표시하기



// truly value 

console.log(!!10); // 0 제외한 모든 숫자 
console.log(!!-10.123); // 음수도 동일
console.log(!!"test"); // 비어있지 않는 모든 문자 
console.log(!![]);    // new Array();    new ArrayList();
console.log(!!{});    // new Object();
console.log(!!Infinity);

// symbol 타입 : 유일무이한 값
const num1 = '1';
const num2 = '1';
console.log(num1 == num2); // true

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1)
console.log(symbol2)
console.log(symbol1 == symbol2) // false

// 오브젝트 타입 -> java map : key 와 value로 이루어져있다

const dog = { // key값에서는 원시값(: 주의!! string은 js에서 원시값임 )만 들어갈 수 있는데 웬만하면 string만 사용하자
  10 : '십',
  undefined : '정의되지않는값',
  null:'비어있는값',
  //[] : 참조값은 key로 못쓴다
    name : '바둑이',
    age : 4,
    isOwner : true
}

console.log(dog); //{ name: '바둑이', age: 4, isOwner: true }

// 오브젝트 값(속성값) 접근 방법 2가지 .  ['']
console.log(dog.name);
console.log(dog['name']); // dog[name]하면 에러 뜬다/ 꼭 스트링으로 key 값 넣어주기 ! '' , " " 사용

function getKeyValue(object, key){
  console.log(object[key]);
}

function getKeyValue2(object, key){
  console.log(object.key); // 순수하게 key 하는 속성값을 객체 안에서 찾는 것 : 동적으로 못 바꾼다
}

// if(key == 'age'){
//   console.log(object.age);
// }

getKeyValue(dog, 'age');
getKeyValue(dog, 'isOwner');
getKeyValue(dog, 'name');

getKeyValue2(dog, 'age');

// 객체 값 추가
dog['ownerName'] = "제임스";
console.log(dog);

dog.ownerAge = 10;
console.log(dog);

// 객체 값 삭제
delete dog.ownerAge;
delete dog['ownerName'];
console.log(dog);