const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// ADD TASK

taskForm.addEventListener("submit", function(e){

  e.preventDefault();

  const taskText = taskInput.value.trim();

  if(taskText === ""){
    return;
  }

  // TASK ROW
  const taskRow = document.createElement("div");
  taskRow.classList.add("task-row");

  // TASK NAME
  const taskName = document.createElement("div");
  taskName.classList.add("task-name");
  taskName.textContent = taskText;

  // ACTIONS
  const actions = document.createElement("div");
  actions.classList.add("actions");

  // CHECKBOX
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("check");

  checkbox.addEventListener("change", function(){

    taskName.classList.toggle("completed");

  });

  // DELETE
  const deleteBtn = document.createElement("div");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = "&times;";

  deleteBtn.addEventListener("click", function(){

    taskRow.remove();

  });

  // APPEND
  actions.appendChild(checkbox);
  actions.appendChild(deleteBtn);

  taskRow.appendChild(taskName);
  taskRow.appendChild(actions);

  taskList.appendChild(taskRow);

  // CLEAR INPUT
  taskInput.value = "";

});

// EXISTING TASKS

const checks = document.querySelectorAll(".check");

checks.forEach(function(check){

  check.addEventListener("change", function(){

    const task =
      this.parentElement.previousElementSibling;

    task.classList.toggle("completed");

  });

});

const deletes = document.querySelectorAll(".delete");

deletes.forEach(function(btn){

  btn.addEventListener("click", function(){

    this.parentElement.parentElement.remove();

  });

});