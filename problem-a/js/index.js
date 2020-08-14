'use strict';

/* your code goes here! */

const qs = (el) => {
  return document.querySelector(el);
};

const crNewEl = (el) => {
  return document.createElement(el);
};

class Task {
  constructor(desc, compl) {
    this.description = desc;
    this.complete = compl;
  }

  toggleFinished() {
    this.complete = !this.complete;
  }

  render() {
    let li = crNewEl('li');
    li.textContent = this.description;
    if (this.complete) li.classList.add("font-strike");
    li.addEventListener('click', () => {
      this.toggleFinished();
      li.classList.toggle("font-strike");
    });
    return li;
  }
}

class TaskList {
  constructor(tasks) {
    this.tasks = tasks;
  }

  addTask(desc) {
    let newTask = new Task(desc, false);
    this.tasks.push(newTask);
  }

  render() {
    let ol = crNewEl('ol');
    this.tasks.forEach(x => ol.appendChild(x.render()));
    return ol;
  }
}

class NewTaskForm {
  constructor(submitCallback) {
    this.submitCallback = submitCallback;
  }

  render() {
    let form = crNewEl('form');
    let input = crNewEl('input');
    input.classList.add('form-control', 'mb-3');
    input.setAttribute('placeholder', "What else do you have to do?");
    let btn = crNewEl('button');
    btn.classList.add('btn', 'btn-primary');
    btn.textContent = "Add task to list";
    form.appendChild(input);
    form.appendChild(btn);
    btn.addEventListener('click', e => {
      e.preventDefault();
      this.submitCallback(input.value);
    });
    return form;
  }
}

class App {
  constructor(parentElement, taskList) {
    this.parentElement = parentElement;
    this.taskList = taskList;
  }

  addTaskToList(desc) {
    this.taskList.addTask(desc);
    this.parentElement.innerHTML = null;
    this.render();
  }

  render() {
    let subtitle = crNewEl('p');
    subtitle.classList.add('lead');
    subtitle.textContent = "Things I have to do";
    this.parentElement.appendChild(subtitle);
    this.parentElement.appendChild(this.taskList.render());
    let newTaskForm = new NewTaskForm(this.addTaskToList.bind(this));
    this.parentElement.appendChild(newTaskForm.render());
  }
}

let tasks = [new Task("Make some classes", true),
  new Task("Arrow some functions",  false)];
let taskList = new TaskList(tasks);
let app = new App(qs('#app'), taskList);
app.render();




//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof Task !== 'undefined') 
    module.exports.Task = Task;
  if(typeof TaskList !== 'undefined') 
    module.exports.TaskList = TaskList;
  if(typeof NewTaskForm !== 'undefined') 
    module.exports.NewTaskForm = NewTaskForm;
  if(typeof App !== 'undefined') 
    module.exports.App = App;
}
