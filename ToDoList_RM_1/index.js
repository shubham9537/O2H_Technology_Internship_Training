

const taskInput=document.getElementById("input-box")
const addButton=document.getElementById("submit-btn")
const totalTask=document.getElementById('totaltask')
const completedTask=document.getElementById('completedtask')

const taskList=document.getElementById('task-list')



function updateCounter(){
    const total=taskList.children.length
    const completed=taskList.querySelectorAll(".completed").length;

    totalTask.textContent=total 
    completedTask.textContent=completed 
    
}
function addTask(){
    const taskText=taskInput.value.trim();
    if(taskText==="") {
        return 
    }
    const li=document.createElement("li")

    li.innerHTML=`
    <input type="checkbox"/>
     <span class="task-text">${taskText}</span>
     <button class="edit">Edit</button>
     <button class="delete">Delete</button>`;

    taskList.appendChild(li)
    taskInput.value=""
    updateCounter()
}




addButton.addEventListener("click",addTask)
taskInput.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        addTask()
    }
})



taskList.addEventListener("click",(e)=>{
    const li=e.target.closest("li")

    if(e.target.type==="checkbox"){
        li.classList.toggle("completed")
        updateCounter()

    }

    if(e.target.classList.contains("delete")){
        li.remove()
        updateCounter()

    }

    //edit 
    if(e.target.classList.contains("edit")){
        const span=li.querySelector(".task-text")
        const input=document.createElement("input")
        input.type="text"
        input.value=span.textContent

        li.replaceChild(input,span)
        e.target.textContent="Save"
        e.target.classList.replace("edit","save")
    }

    //save edit task

    else if(e.target.classList.contains("save")){
        const input=li.querySelector(".task-text")
        const span=document.createElement("span")

        span.className-"task-text"
        span.textContent=input.value.trim() || "unititle task"
        li.replaceChild(span,input)
        e.target.textContent="Edit"
        e.target.classList.replace("save","edit")
    }
})

