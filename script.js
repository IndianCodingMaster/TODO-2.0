const input = document.querySelector(".input");
const ul = document.querySelector(".ul");
const clearBtn = document.querySelector(".clear");

const todos = [];

function addTask() {
  if (input.value === "") {
    alert("Please Enter Something.......");
  } else {
    const li = document.createElement("li");
    const todo = input.value;
    li.innerHTML = `
                <div>
                  <span><input type="checkbox" /></span>
                  <span>${todo}</span>
                </div>
                <button class="delete-btn"><i class="fa-solid fa-xmark"></i></button>
            `;
    ul.appendChild(li);
    todos.push(todo);
    console.log(todos);
    input.value = "";
    saveTodo();

    const deleteBtn = li.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {
      ul.removeChild(li);
      // saveTodo();
    });
  }
}

clearBtn.addEventListener("click", () => {
  ul.innerHTML = "";
  // saveTodo();
});

function saveTodo() {
  JSON.stringify(localStorage.setItem("todos", todos));
}

// function showTodo() {
//   ul.innerHTML = localStorage.getItem("todos");
// }

// showTodo();
