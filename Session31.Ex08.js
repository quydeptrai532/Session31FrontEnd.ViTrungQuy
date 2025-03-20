let todoList = [
    {
        id: 1,
        task: "Hit the gym",
        completed: false,
    },
    {
        id: 2,
        task: "Pay bills",
        completed: true,
    },
    {
        id: 3,
        task: "Meet george",
        completed: false,
    },
    {
        id: 4,
        task: "Buy eggs",
        completed: false,
    },
    {
        id: 5,
        task: "Read a book",
        completed: false,
    },
    {
        id: 6,
        task: "Organize office",
        completed: false,
    },
]

let div=document.getElementsByTagName("div")[0]
let input=document.getElementById("add")
let form=document.getElementsByTagName("form")[0]
function toDo(){
    div.innerHTML=todoList.map(todo=>{
        return `<p> <span>${todo.completed ? `&#10004;<s>${todo.task}</s>`:`${todo.task}` }</span> <span>X</span></p>`
    }).join("")
}
toDo()
form.addEventListener("submit",function(event){
    event.preventDefault()
    let newTask=input.value
    if(newTask!==""){
        todoList.push({id:todoList.length+1,task:newTask,completed:false})
        input.value=""
        toDo()
    }
})