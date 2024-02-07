let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

//empty array to store tasks
let arrayOfTasks = [];
if (localStorage.getItem("tasks") !== null) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}
//get tasks from local storage
getDataFromLocalStorage();

// add task
submit.onclick = function() {
  if (input.value !== ""){
    addTaskToArray(input.value);  //add task to array
    input.value = ""; //clear input field
  }
};

// select task element
tasks.addEventListener("click", (e) => {
  // delete button
  if (e.target.classList.contains("delete")) {
    // remove task from local storage
    deleteTaskFromLocalStorage(e.target.parentElement.getAttribute("data-id"));
    // remove task from array
    arrayOfTasks = arrayOfTasks.filter((task) => task.id !== parseInt(e.target.parentElement.getAttribute("data-id")));
    // remove task from page
    e.target.parentElement.remove();
  }
  // task element
  if (e.target.classList.contains("task")) {

  }
});

// add task to array
function addTaskToArray(taskText) {
  //task data
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  //push task to array
  arrayOfTasks.push(task);
  //add tasks to page
  addElementsToPageFrom(arrayOfTasks);
  //save tasks to local storage
  addDataToLocalStorageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
  //  clear the tasks div before adding new tasks
  tasks.innerHTML = "";
  //loop through the array of tasks
  arrayOfTasks.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";
    //check if task is completed
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    let span = document.createElement("span");
    span.className = "delete";
    span.appendChild(document.createTextNode("Delete"));
    div.appendChild(span);
    //add task to page
    tasks.appendChild(div);
  });
}

function addDataToLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks);
  }
}

function deleteTaskFromLocalStorage(id) {
  arrayOfTasks = arrayOfTasks.filter((task) => task.id !== parseInt(id));
  addDataToLocalStorageFrom(arrayOfTasks);
}