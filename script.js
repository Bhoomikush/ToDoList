const inputBox=document.getElementById("inputBox");
const addBtn=document.getElementById("addBtn");
const todoList=document.getElementById("todoList");

let editingLi=null;
let editingText=null; // remembers the OLD text while editing

// Add Todo
const addTodo=()=>{

  const inputText=inputBox.value.trim();

  if(inputText.length<=0){
    alert("You must write something in your to do");
    return;
  }

  // Save Edited Todo
  if(editingLi){

    editingLi.querySelector("p").textContent=inputText;
    editLocaltodos(editingText, inputText);

    editingLi=null;
    editingText=null;

    addBtn.textContent="Add";

    inputBox.value="";

    return;
  }

  // Create LI
  const li=document.createElement("li");

  const p=document.createElement("p");
  p.textContent=inputText;
  li.appendChild(p);

  // Edit Button
  const editBtn=document.createElement("button");
  editBtn.textContent="Edit";
  editBtn.classList.add("btn","editBtn");
  li.appendChild(editBtn);

  // Delete Button
  const deleteBtn=document.createElement("button");
  deleteBtn.textContent="Remove";
  deleteBtn.classList.add("btn","deleteBtn");
  li.appendChild(deleteBtn);

  todoList.appendChild(li);

  saveLocalTodo(inputText);

  inputBox.value="";
};

// Update Todo
const updateTodo=(e)=>{

  const buttonText=e.target.textContent.trim();

  // Remove Todo
  if(buttonText==="Remove"){
    const li=e.target.parentElement;
    todoList.removeChild(li);
    deleteLocalTodos(li);
  }

  // Edit Todo
  if(buttonText==="Edit"){
    const li=e.target.parentElement;

    editingText=li.querySelector("p").textContent; // save OLD text first
    inputBox.value=editingText;
    inputBox.focus();

    addBtn.textContent="Save";
    editingLi=li;
  }
};

// Save Local Todo
const saveLocalTodo=(todo)=>{
  let todos = localStorage.getItem("todos")===null ? [] : JSON.parse(localStorage.getItem("todos"));
  todos.push(todo);
  localStorage.setItem("todos",JSON.stringify(todos));
};

// Get Local Todos
const getlocalTodos=()=>{
  let todos = localStorage.getItem("todos")===null ? [] : JSON.parse(localStorage.getItem("todos"));

  todos.forEach((todo)=>{
    const li=document.createElement("li");

    const p=document.createElement("p");
    p.textContent=todo;
    li.appendChild(p);

    const editBtn=document.createElement("button");
    editBtn.textContent="Edit";
    editBtn.classList.add("btn","editBtn");
    li.appendChild(editBtn);

    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Remove";
    deleteBtn.classList.add("btn","deleteBtn");
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });
};

// Delete Local Todo
const deleteLocalTodos=(todo)=>{
  let todos = localStorage.getItem("todos")===null ? [] : JSON.parse(localStorage.getItem("todos"));

  const todoText=todo.children[0].textContent;
  const todoIndex=todos.indexOf(todoText);

  if(todoIndex>-1){
    todos.splice(todoIndex,1);
  }

  localStorage.setItem("todos",JSON.stringify(todos));
};

// Edit Local Todo
const editLocaltodos=(oldTodo,newTodo)=>{
  let todos = JSON.parse(localStorage.getItem("todos"));
  let todoIndex = todos.indexOf(oldTodo);

  if(todoIndex>-1){
    todos[todoIndex]=newTodo;
  }

  localStorage.setItem("todos",JSON.stringify(todos));
};

// Load Todos
document.addEventListener("DOMContentLoaded",getlocalTodos);

// Add Todo
addBtn.addEventListener("click",addTodo);

// Update Todo
todoList.addEventListener("click",updateTodo);