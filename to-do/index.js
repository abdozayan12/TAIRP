class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

// Usage example
const myTaskList = new TaskList();
myTaskList.addTask('Task 1');
myTaskList.addTask('Task 2');
console.log(myTaskList.tasks); // Output: ['Task 1', 'Task 2']


