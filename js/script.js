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
    console.log(tasks)
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
    const sls = list.isComplete ? "task task__complit" : "task";
    const chec = list.isComplete ? "cheacked" :  "";
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


//фунццмя