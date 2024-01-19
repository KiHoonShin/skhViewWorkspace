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
    // this.dragToDelete();
    const itemBox = [...document.querySelectorAll(".item")];
    this.dragToDelete();
  }
  // 초기 값 
  init() {
    this.addBtn.addEventListener("click", ()=>{
      // console.log(this.titleInput.value);
      // console.log(this.contentInput.value);
      if(!this.titleInput.value.trim() || !this.contentInput.value.trim()){
        alert('제목과 내용은 필수로 입력해야 합니다.');
        return;
      }
      let newData = {
        idx : ++this.idx,
        title : this.titleInput.value,
        content : this.contentInput.value
      }
      // let data = JSON.stringify(newData);
      // this.todoList.push(data);
      // localStorage.setItem("todo_list" , this.todoList);
      this.addList(newData);
      this.makeHTML();
    })
  };
  // 로컬스토리에서 저장되는 값 가져오는것

  // todo값 추가하는 것 
  addList(newData){
    let data = JSON.stringify(newData);
    this.todoList.push(data);
    localStorage.setItem("todo_list" , this.todoList);
  }
  // html에서 dom 객체 만드는것 
  makeHTML(){
    this.listDom.innerHTML += `
      <div class="item" data-idx = "${this.idx}" draggable = "true">
        <h4>${this.titleInput.value}</h4>
        <span class="msg">${this.contentInput.value}</span>
      </div>
    `;
    this.addToDom(this.idx);
    this.alertMsgBox();
    this.titleInput.value ='';
    this.contentInput.value = '';
  }

  addToDom(idx){
    let item = document.querySelector(`div[data-idx="${idx}"]`);
    item.addEventListener('dragstart',(e)=>{
      e.dataTransfer.setData("idx" , idx);
    });

  }

  //msg박스 띄우기
  alertMsgBox(){
    this.msgBox.innerHTML = "추가 완료";
    this.msgBox.classList.add("on");
    setTimeout(() => {
      this.msgBox.classList.remove("on");
    }, 1000);
  }


  //todo값 삭제하기 
  dragToDelete(){

    const itemBox = [...document.querySelectorAll(".item")];
    
    this.garbage.addEventListener('dragover', e=>{
      e.preventDefault();
    })
    this.garbage.addEventListener('drop', e=>{
      e.preventDefault();
      // let num = e.target.dataset.idx;
      let num = e.dataTransfer.getData("idx");
      // console.log(num);
      const delItem = itemBox.find(item => item.dataset.idx == num);
      console.log(delItem);
      // this.garbage.appendChild();
      this.garbage.innerHTML = "X";
    })
  }



}

const app = new App();