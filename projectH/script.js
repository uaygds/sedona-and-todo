const todoContainer = document.getElementById("main-container");

const btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click", (event) => {
  const todoInput = document.getElementById("input-add-todo");
  addTask(todoInput);
});

const getDate = function () {
  let today = new Date();
  let now = today.toLocaleDateString("en-US");
  return now;
};

const deleteTask = () => {
  this.parentNode.remove();
};

const addTask = (input) => {
  if (!input.value) return;
  const newCard = document.createElement("div");
  newCard.classList.add("task__main");
  let uniueId = Math.random().toString(16).slice(2);
  newCard.id = `card${uniueId}`;
  newCard.innerHTML = `
        <div class='task__item' id='gg'>
        <input type='checkbox' id='${uniueId}' class='complete'>
        <label class='complete-label' for='${uniueId}'></label>
        <div class='task__title'>
        ${input.value}
        </div>
        </div>
        <div class='task__date'>
        ${getDate()}
        </div>
        <div class='task__delete' id=''>
        </div>
        `;
  todoContainer.prepend(newCard);
  input.value = "";
};

//ready createpattern

const btnRemoveAll = document.getElementById("btn-remove-all");

btnRemoveAll.addEventListener("click", (event) => {
  deleteAll();
});

const deleteAll = () => {
  todoContainer.innerHTML = "";
};

//ready deleteAll button

const btnRemoveLast = document.getElementById("btn-remove-last");

btnRemoveLast.addEventListener("click", () => {
  deleteLast();
});

const deleteLast = () => {
  const lastItem = document.querySelector(".task__main");
  todoContainer.removeChild(lastItem);
};

//ready deleteLast button

const btnRemoveTask = todoContainer.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("task__delete") ||
    e.target.closest(".task__delete")
  ) {
    todoContainer.removeChild(e.target.parentNode);
  }
});

//ready delete select tasks

let count = 0;
let countComplete = 0;

const repeater = function () {
  count = document.getElementsByClassName("complete-label").length;
  document.getElementById("counter").innerHTML = count;
  countComplete = document.getElementsByClassName(
    "complete-label-active"
  ).length;
  document.getElementById("counter_complete").innerHTML = countComplete;
  return;
};

setInterval(repeater, 500);

//ready counters

todoContainer.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("complete-label") ||
    e.target.closest(".complete-label")
  ) {
    if (
      e.target.classList.contains("complete-label-active") ||
      e.target.closest(".complete-label-active")
    ) {
      e.target.classList.remove("complete-label-active");
      countComplete--;
    } else {
      e.target.classList.add("complete-label-active");
      countComplete++;
    }
  }
});

//ready checked

document.querySelector("#searching").oninput = function () {
  let val = this.value.trim();
  let arr = [];
  arr = document.getElementsByClassName("task__title");
  for (i = 0; i < arr.length; i++) {
    for (k = 0; k < arr[i].innerHTML.length; k++) {
      if (!arr[i].innerHTML.includes(val)) {
        if (val == " ") {
          arr[i].parentNode.parentNode.classList.remove("display__none");
        }
        arr[i].parentNode.parentNode.classList.add("display__none");
      } else {
        arr[i].parentNode.parentNode.classList.remove("display__none");
      }
    }
  }
};

//filter ready

const btnShowComplete = document.getElementById("show-complete");

const showOnlyCompleted = function () {
  let arr = document.querySelectorAll(".complete-label");
  arr.forEach((i) => {
    if (i.classList.contains("complete-label-active")) {
    } else if (!i.classList.contains("complete-label-active")) {
      i.parentNode.parentNode.classList.add("display__none");
    }
  });
};

btnShowComplete.onclick = () => {
  showOnlyCompleted();
};

//showOnlyComplete ready

const btnShowAll = document.getElementById("show-all");

const showAll = function () {
  let arr = document.querySelectorAll(".complete-label");
  arr.forEach((i) => {
    i.parentNode.parentNode.classList.remove("display__none");
  });
};

btnShowAll.onclick = () => {
  showAll();
};

//showAll ready
