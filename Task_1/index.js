

// const fs=require("fs");
// const path="index.json"

// function getAll(){
//     const data=fs.readFileSync(path,"utf-8");
//     return JSON.parse(data);
// }

// function writeData(todoData){
//     fs.writeFileSync(path,JSON.stringify(todoData,null,2));
//     return;
// }

// console.log("Enter Task Number:")
// const rl=Readline.createInterface(({
//     input:process.stdin,
//     output:process.stdout
// }))

// function showAlltasks(){
//     const data=getAll()
//     data.forEach((item)=>{
//         console.log(item)
//     })
// }
// // const cmd=process.argv[2]

// // const task=process.argv.slice(0).join("")

// //console.log(task)

// // if(cmd=="add"){
    
// // }else if(cmd=="getAll"){
    
// // }else if(cmd=="delete"){
    
// // }

// function showMenu(){
//     console.log("Tasks are availble for You")
//     console.log("1.Add new Task")
//     console.log("2.Read Task")
//     console.log("3.Update Task")
//     console.log("4.Delete task")

//     rl.question("Enter Task to perform",handleMenu)


// }

// function handleMenu(option){
//     switch(option){

//         case 1:
//             rl.question("Enter a task title:",(title)=>{
//                 const currData=getAll();
//                 currData.push({title,status:"pending"});
//                 writeData(currData);
//                 console.log("Data added.")
//                 exit()
//             })
//             break
//         case 2:
//             break 
//         case 3:
//             break
//         default:
//             console.log("invalid option.")
//     }
// }
// // switch(cmd){
// //     case "1":{
        
// //         const currData=getAll();
        
// //         currData.push(task+":default");
// //         writeData(currData);
// //         console.log("Data added.")
// //         break;
// //     }

    
// //     case "2":
// //         const result=getAll();
// //         if(result.length==0){
// //             console.log("Insufficient data.")
// //             break;
// //         }
// //         result.forEach((item,i)=>{  
// //             console.log(item+" "+i)
// //         })
// //         break;
    

// //     case "3":
// //         const allData=getAll()
// //         const indx=Number(task)
// //         allData.splice(indx,1);
// //         writeData(allData)
// //         console.log("Deleted data.")
// //         break;

    

    

// //     default:
// //         console.log("Invalid option choosen")
        
// // }


// function exit(){
//     rl.close()
// }

// console.clear()
// showAlltasks()
// showMenu()


// const fs=require("fs");
// const path="index.json"


// function getAll(){
//     const data=fs.readFileSync(path,"utf-8");
//     return JSON.parse(data);
// }
 

// function writeData(todoData){
//     fs.writeFileSync(path,JSON.stringify(todoData,null,2));
//     return;
// }

// console.log("Tasks are availble for You")
// console.log("1.Add new Task")
// console.log("2.Read Task")
// console.log("3.Update Task")
// console.log("4.Delete task")

// while(true){
//     console.log("hello world")
//     const cmd=process.argv[0]

//     const task=process.argv.slice(0).join("")
    
//     if(task==="1"){
        
//         const currData=getAll();
        
//         currData.push(task+":default");
//         writeData(currData);
//         console.log("Data added.")
//         break;
//     }

    
//     else if(task==="2"){
//         const result=getAll();
//         if(result.length==0){
//             console.log("Insufficient data.")
//             break;
//         }
//         result.forEach((item,i)=>{  
//             console.log(item+" "+i)
//         })
//         break;

//     }
    

//     else if(task==="3"){
//         const allData=getAll()
//         const indx=Number(task)
//         allData.splice(indx,1);
//         writeData(allData)
//         console.log("Deleted data.")
//         break;

//     }

//     else{
//         exit();
//     }

    

    

    



// }


const fs = require("fs");
const readline = require("readline");

const FILE = "tasks.json";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getAllTasks() {
  if (!fs.existsSync(FILE)) return [];
  const data = fs.readFileSync(FILE, "utf-8");
  return JSON.parse(data);
}

function saveTasks(tasks) {
  fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));
}

function showMenu() {
  console.log("\n===== TASK MANAGER =====");
  console.log("1. Add Task");
  console.log("2. Read Tasks");
  console.log("3. Update Task");
  console.log("4. Delete Task");
  console.log("5. Exit");

  rl.question("Choose option: ", handleMenu);
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

  tasks.forEach((task, i) => {
    console.log(`${i}. ${task.text} [${task.status}]`);
  });

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


showMenu();
