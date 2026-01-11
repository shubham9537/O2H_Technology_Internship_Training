
const fs = require("fs");
const readline = require("readline");

const path= "./index.json";

const undoStack=[]
const redoStack=[]

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getAllTasks() {
  if (!fs.existsSync(path)) return [];
  const data = fs.readFileSync(path, "utf-8");
  return JSON.parse(data);
}

function saveTasks(tasks) {
  fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
}

function showMenu() {
  console.log("Task Handler CLI");
  console.log("1. Add Task");
  console.log("2. Read Tasks");
  console.log("3. Update Task");
  console.log("4. Delete Task");
  console.log("5. Exit");

  rl.question("Please select your  option: ", handleMenu);
}

function handleMenu(option) {
  switch (option) {
    case "1":
      addTask();
      break;
    case "2":
      readTasks();
      break;
    case "3":
      updateTask();
      break;
    case "4":
      deleteTask();
      break;
    case "5":
      console.log("Goodbye ");
      rl.close();
      break;
    default:
      console.log("Invalid option");
      showMenu();
  }
}

function addTask() {
  rl.question("Enter task: ", (text) => {
    if (!text.trim()) {
      console.log("Task cannot be empty");
      return showMenu();
    }

    const tasks = getAllTasks();
    tasks.push({ text, status: "pending" });
    saveTasks(tasks);

    console.log("Task added");
    showMenu();
  });
}

function readTasks() {
  const tasks = getAllTasks();

  if (tasks.length === 0) {
    console.log("No tasks found");
    return showMenu();
  }
  

  let pendingTasks=[]
  let completedTasks=[]

  tasks.forEach((task, i) => {
    if(task.status==="pending"){
        pendingTasks.push({...task,i})

    }
});
tasks.forEach((task, i) => {
    if(task.status==="done"){
        completedTasks.push({...task,i})

    }
});
if(pendingTasks.length===0){
    console.log("Great News You don't have any  pending Tasks.")
}else{
    console.log("Pending Tasks")
    pendingTasks.forEach((item,i)=>{

    console.log(`${i}. ${item.text} [${item.status}]`);
})
console.log("Try to complete your pending task as soon as possible.")

}

if(completedTasks.length===0){
    console.log("Not Good Bro Try to complete your tasks as soon as possible")
}else{
    console.log("Completed Task:")
completedTasks.forEach((item,i)=>{

    console.log(`${i}. ${item.text} [${item.status}]`);
})

}


  showMenu();
}

function updateTask() {
  const tasks = getAllTasks();

  if (tasks.length === 0) {
    console.log("No tasks to update");
    return showMenu();
  }

  tasks.forEach((task, i) => {
    console.log(`${i}. ${task.text} [${task.status}]`);
  });

  rl.question("Enter task index: ", (index) => {
    index = Number(index);

    if (isNaN(index) || !tasks[index]) {
      console.log("Invalid index");
      return showMenu();
    }

    rl.question(
      "1. Mark as done\n2. Edit text\nChoose option: ",
      (choice) => {
        if (choice === "1") {
          tasks[index].status = "done";
          saveTasks(tasks);
          console.log("Task marked as done");
        } else if (choice === "2") {
          rl.question("Enter new text: ", (newText) => {
            if (!newText.trim()) {
              console.log("Text cannot be empty");
            } else {
              tasks[index].text = newText;
              saveTasks(tasks);
              console.log("Task updated");
            }
            showMenu();
          });
          return;
        } else {
          console.log("Invalid choice");
        }
        showMenu();
      }
    );
  });
}


function deleteTask() {
  const tasks = getAllTasks();

  if (tasks.length === 0) {
    console.log("No tasks to delete");
    return showMenu();
  }

  tasks.forEach((task, i) => {
    console.log(`${i}. ${task.text} [${task.status}]`);
  });

  rl.question("Enter task index to delete: ", (index) => {
    index = Number(index);

    if (isNaN(index) || !tasks[index]) {
      console.log("Invalid index");
      return showMenu();
    }

    tasks.splice(index, 1);
    saveTasks(tasks);

    console.log("Task deleted");
    showMenu();
  });
}


function undo(){
  if(undoStack.length===0){
    console.log("Nothing to undo")
    return showMenu
  }
  const current=getAllTasks()
  redo.push(JSON.stringify(current))

  const prev=JSON.parse(undo.pop())
  saveTasks()

  console.log("Undo Successful")
  showMenu()

}

function redo(){
  if(redoStack.length===0){
    console.log("Nothing to redo")
    return showMenu()
  }

  const current=getAllTasks()

  undo.push(JSON.stringify(current))
  const next=JSON.parse(redo.pop())
  saveTasks(next)

  console.log("Redo Successful")
  showMenu()
}

showMenu();
