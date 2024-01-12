class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('자자');
  }
}

class Teacher extends Person {
  constructor(name, age, teacherNo) {
    super(name, age); // new Person(name, age);
    this.teacherNo = teacherNo;
  }
  teach() {
    console.log('가르친다');
  }
}

class Student extends Person {
  constructor(name, age, stuNo, grade) {
    super(name, age);
    this.stuNo = stuNo;
    this.grade = grade;
  }
  study() {
    console.log('공부한다')
  }
  // 오버라이딩 => 부모의 메서드를 자식이 재정의 하는 것
  eat() {
    console.log('급식먹자');
  }
}

const Kim = new Person('김씨', 20, 1234);
console.log(Kim);

const Park = new Teacher('박씨', 30, 12341234);
console.log(Park);

const Lee = new Student('이씨', 15, 20241234, 5);
console.log(Lee);

Kim.eat();
Park.teach();
Lee.eat();