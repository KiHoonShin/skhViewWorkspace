class App {
  constructor() {
    this.listDom = document.querySelector("#list");
    // this.todoList = []; //작업들을 저장하는 배열
    this.todoList = [];
    this.titleInput = document.querySelector("#title");
    this.contentInput = document.querySelector("#content");
    this.garbage = document.querySelector("#garbage");
    this.msgBox = document.querySelector(".msg-box");
    this.addBtn = document.querySelector("#addBtn");

    this.idx = 0;

    this.init();


  }
  
  //자기의 매서드인 init을 실행하는 거
  init(){
    this.addBtn.addEventListener("click" , ()=>{
    })
  }
  
  addToDo = () => {
    if(this.titleInput.value.trim() ==="" || this.contentInput.value.trim()==="" ){
      alert("필수값이 비어있습니다.")
      this.titleInput.value = '';
      this.contentInput.value = '';
      return;
    }
    this.todoList.push({idx , })
  }

// 로컬 스토리지에 저장되어있는 값을 가져온다 


}

window.onload = function() {
  window.app = new App();

};