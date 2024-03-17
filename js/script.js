const dom = {
  new: document.getElementById('new--task'),
  add:document.getElementById("add"),
  tasks:document.getElementById("tasks"),
}
const tasks = []



//Функция по созданию задачи по клику

dom.add.onclick = () => {
  const value = dom.new.value;
  if (value && repedTask(value,tasks)){
    TaskNew(value, tasks);
    dom.new.value = "";
    renderTask(tasks);
  }
}

//Функция по созданию задачи 
function TaskNew(text, link){
  const task = {
    text: text, 
    id: Date.now(),
    isComplete: false,
  }
  link.push(task)
}

//Функция по определению повторов в задачах
function repedTask(text, tasks){
  const isTask = true;
  for (let i=0; i < tasks.length; i++){
    if (tasks[i].text === text){
      alert("Чумба у тебя мало дел? Хочешь еще поработать?")
      isTask = false;
    };
  };
  return isTask;
}

//Функция по отображению задачи
function renderTask(list){
  let html = "";
  list.forEach((task) => {
    const sls = task.isComplete ? "task task__complit" : "task";
    const chec = task.isComplete ? "cheacked" :  "";
    const htmlTask = `
        <div id = "${task.id}"class="${sls}">
          <div class="task__text"><h6>${task.text}</h6></div>
          <div class="task__button">
            <label class="chekbox" ${chec}>
              <input type="checkbox">
              <div class="chec">✓</div>
            </label>
            <div class="delbox">✖</div>
          </div>
        </div>
    `;
    html = html + htmlTask;
  })
  dom.tasks.innerHTML = html;
}


//Функция по отслеживаю клика по кнопкам в task
dom.tasks.onclick  =  (event) => {
  const target = event.target
  const isCompleteBtm = target.classList.contains('chec');
  const isDeleteBtn = target.classList.contains('delbox');
  if(isCompleteBtm){
    const task = target.parentElement.parentElement.parentElement
    const idTask = task.getAttribute('id')
    cheackedStatus(idTask, tasks);
    renderTask(tasks);
  }
  if(isDeleteBtn){
    const task = target.parentElement.parentElement;
    const idTask = task.getAttribute('id');
    deleteTask(idTask, tasks);
    renderTask(tasks);
    Emptiness(tasks);
  }
}


//Фуннкция по изменению положения 
function cheackedStatus(id, link){
  link.forEach((task) => {
    if (task.id == id) {
      task.isComplete = !task.isComplete
    }
  })
}

function deleteTask(id, list){
  list.forEach((task, idx) => {
    if (task.id == id){
      list.splice(idx, 1)
    }
  })
}

function Emptiness(list){
  const pm = list.length;
  if (pm === 0){
    const men  = `
    <div class="empty">
        <img src="/img/free-icon-man-8455575.png">
        <h6 class="empty__text">Список пуст</h6>
    </div>
    `
    dom.tasks.innerHTML = men;
  }
}
