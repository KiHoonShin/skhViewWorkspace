// 접근제어자 - 캡슐화 => private getter setter

// java :  class Student(){ private int id; , private String name;}

// javascript : 프라이빗은 항상 #을 붙여야됨
// # 프라이빗은 -> 직접 접근이 불가능하다

class Student {
  static count = 0;
  #id;
  #name;
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
    Student.count += 1;
  }

  static fromObject(object) {
    if (!!object?.id && !!object?.name) {
      return new Student(object.id, object.name);
    }
  }

  static fromList(list) {
    if (!Array.isArray(list)) return null;
    return new Student(list[0], list[1]);
  }

  getName() {
    return this.#name;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get id() {
    return this.#id;
  }
  set id(id) {
    this.#id = id;
  }
}

const stu1 = new Student(2019122104, 'Park');
const stu2 = new Student(2019206028, 'Kim');
const stu3 = new Student(2019153237, 'Lee');

console.log(stu1); // Student {}
console.log(stu1.name); // undefined // get name(){} 사용하면 불러오기 가능 : Park
// console.log(stu1.getName());
console.log(stu2.name); // Kim
// 프라이빗 변수를 set 없이 직접 변경을 시키면 적용 안됨 [주의!] 에러는 안 띄운다 !
stu2.name = '신기훈'; // set name(name)이 호출 됨 => 값 변경
console.log(stu2.name); // 신기훈


const stu4 = Student.fromObject({ name: '홍길동', id: 1234123 });
console.log(stu4 instanceof Student);
console.log(stu4);
const stu5 = Student.fromList([12341234, '둘리']);
console.log(stu5);