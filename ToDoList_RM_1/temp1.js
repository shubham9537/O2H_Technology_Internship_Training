let tasks=JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));

}

function addTask(){
    const input=document.getElementById("taskInput")
    const text=input.value.trim()

    if(text===""){
        alert("task cannot be empty")
        return;
    }

    tasks.push({
        text:text,
        completed:false,
        isEditing:false
    })

    input.value="";
    saveTasks();
    renderTasks();
}


 function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
  }

function deleteTask(index){
    tasks.splice(index,1)
    saveTasks()
    renderTasks()

}

function editTask(index){
    tasks[index].isEditing=true 
    renderTasks()

}

function updateTask(index,newText){
    if(newText.trim()===""){
        alert("task cannot be empty")
        return;
    }


    tasks[index].text=newText 
    tasks[index].isEditing=false
    saveTasks();
    renderTasks();
}


function renderTasks(){
    const list=document.getElementById("taskList")
    list.innerHTML=""

    tasks.forEach((task,index)=>{
        const li=document.createElement("li")

        if(task.isEditing){
            const input=document.createElement("input")
            input.type="text"
            input.value=task.text 

            const saveBtn=document.createElement("button")
            saveBtn.textContent="Save"
            saveBtn.onclick=()=>updateTask(index,input.value)

            li.appendChild(input)
            li.appendChild(saveBtn)
        }else{
            const span=document.createElement("span")
            span.textContent=task.text 

            if(task.completed){
                span.classList.add("completed")
            }


            const actions=document.createElement("div")
            actions.className="actions"

            const completeBtn=document.createElement("button")
            completeBtn.textContent=task.completed?"Undo":"Complete"
            completeBtn.onclick=()=>toggleComplete(index)

            const editBtn=document.createElement("button")
            editBtn.textContent="Edit"
            editBtn.onclick=()=>editTask(index)


            const deleteBtn=document.createElement("button")
            deleteBtn.textContent="Delete"
            deleteBtn.onclick=()=>deleteTask(index)


            actions.appendChild(completeBtn)
            actions.appendChild(editBtn)
            actions.appendChild(deleteBtn)
            li.appendChild(span)
            li.appendChild(actions)


            
        }

        list.appendChild(li)
    })
}


document.getElementById("addBtn").addEventListener("click",addTask)

document.getElementById("taskInput").addEventListener("keypress",(e)=>{
    if(e.key==="Enter") addTask();
})


renderTasks()