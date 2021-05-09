let todoInput = document.getElementById("todo-input");
let todoList = document.getElementById("todos");
let todoContainer = document.getElementById("todo-container");
let todos = document.getElementById("todos");

let todoBtn = document
  .getElementById("todo-button")
  .addEventListener("click", () => {
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = todoInput.value;
    todoContainer.appendChild(paragraph);
    todoInput.value = "";
  });
