//객체끼리 공유하는 자원 // 객체 생성하지 않고 바로 접근
// Student 클래스 만들어서 속성 id, name 만들기 : printInfo와 id와 name 출력되게
// static => 클래스 메서드 , 클래스 변수 => 클래스 이름으로 접근한다 : 객체 생성없이
class Student {
  static count = 0;
  constructor(id, name) {
    this.id = id;
    this.name = name;
    Student.count += 1;
  }

  getStuInfo = () => {
    console.log('---------------------')
    console.log(`id : ${this.id}`);
    console.log(`name : ${this.name}`);
  }
  // 스태틱 메서드 안에서는 static 변수만 사용하자
  static getTotalStuCnt = () => {
    return console.log(Student.count);
  }
}

console.log(Student.count);

const stu1 = new Student(2019122104, 'Park');
const stu2 = new Student(2019206028, 'Kim');
const stu3 = new Student(2019153237, 'Lee');

Student.getTotalStuCnt();

console.log(stu1);
console.log(stu2);
console.log(stu3);