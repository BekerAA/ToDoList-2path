const dom = {
  new: document.getElementById("new--task"),
  add: document.getElementById("add"),
  tasks: document.getElementById("tasks"),
}

const tasks = [];

dom.add.onclick = () => {
  const taskNewTekst  = dom.new.value;
  if (taskNewTekst && repeatTask(taskNewTekst, tasks)){
    TaskNew(taskNewTekst, tasks);
    dom.new.value = "";
    renderTask(tasks);
  }
}

//функция по созданию задач
function TaskNew(text, link){
  const task = {
    text: text, 
    id: Date.now(),
    isComplete: false,
  }
  link.push(task)
}

//функция по отображению задачи на сайте
function renderTask(list){
  let html = '';
  list.forEach((task) => {
    const scl = task.isComplete ? "todo__task todo__task-complit" :  "todo__task";
    const chec = task.isComplete ? "cheacked": "";
    const htmlTask = `
    <div id="${task.id}" class="${scl}">
      <div><h6 class="task__text">${task.text}</h6></div>
      <div class="task__button">
        <div class="task__complit">
          <label >
            <input type="checkbox" ${chec}>
            <div class="chec-com"><h6>✓</h6></div> 
          </label> 
       </div>
        <div class="task__delete">
          <label>
            <input type="checkbox">
            <div class="chec-del"><h6>✖</h6></div>
          </label>
       </div>
      </div>
   </div>
    `;
    html = html + htmlTask;
  }) 
  dom.tasks.innerHTML = html;
}

//функция по проверке похожих задач а tasks
function repeatTask2(text,link){
  let repeat = true;
  link.forEach((task) => {
    if(task.text === text){
      alert('Чумба у тебя мало дел')
      repeat = false;
    }
  })
  return repeat
}

function repeatTask(text, link){
  let isNot = true;
  for (let i = 0; i < link.length; i++){
    if(link[i].text === text){
      alert("Чумба у тебя мало дел");
      isNot = false;
    }
  }
  return isNot;
}

dom.tasks.onclick = (event) => {
  const target = event.target;
  const isCompleteBtn = target.classList.contains("chec-com");
  console.log(isCompleteBtn)
}