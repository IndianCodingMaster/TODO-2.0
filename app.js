let todo = JSON.parse(localStorage.getItem("todo")) || [];
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const addButton = document.querySelector(".add-btn");
const deleteAllButton = document.querySelector(".clear");
addButton.addEventListener("click", addTask);
deleteAllButton.addEventListener("click", deleteAllTasks);

displayTasks();

function addTask() {
  const newTask = todoInput.value.trim();

  if (newTask !== "") {
    todo.push({ text: newTask, completed: false });
    saveToLocalStorage();
    todoInput.value = "";
    displayTasks();
  }
}

function displayTasks() {
  todoList.innerHTML = "";
  todo.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
                  <div>
                    <span class="check"><input class="checkbox" type="checkbox" /></span>
                    <span>${item.text}</span>
                  </div>
                  <button class="deleteBtn"><i class="fa-solid fa-xmark"></i></button>
            `;
    todoList.appendChild(li);

    const checkbox = li.querySelector(".checkbox");
    const check = li.querySelector(".check");
    checkbox.addEventListener("change", () => {
      item.completed = !item.completed;
      saveToLocalStorage();
      displayTasks();
    });

    if (item.completed) {
      li.classList.add("completed");
      check.innerHTML = '<i class="fa-solid fa-check"></i>';
    } else {
      li.classList.remove("completed");
    }
  });

  todoCount.textContent = todo.length;
}

function deleteAllTasks() {
  todo = [];
  saveToLocalStorage();
  displayTasks();
}

function saveToLocalStorage() {
  localStorage.setItem("todo", JSON.stringify(todo));
}

todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});
