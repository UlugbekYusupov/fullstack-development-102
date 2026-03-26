// let taskDB = [
//   {
//     id: 1,
//     title: "task 1",
//     description: "Description 1",
//     status: "Pending",
//   },
//   {
//     id: 2,
//     title: "task 2",
//     description: "Description 2",
//     status: "in-progress",
//   },
//   {
//     id: 3,
//     title: "task 3",
//     description: "Description 3",
//     status: "Completed",
//   },
// ];

// const taskList = document.getElementById("taskList");
// const addTask = document.getElementById("addTask");
// const modal = document.getElementById("modal");
// const closeBtn = document.getElementById("closeBtn");
// const saveBtn = document.getElementById("saveBtn");

// addTask.addEventListener("click", () => toggle("flex"));
// closeBtn.addEventListener("click", () => toggle("none"));

// saveBtn.addEventListener("click", function () {
//   const title = document.getElementById("title");
//   const description = document.getElementById("description");
//   const status = document.getElementById("status");

//   if (title.value !== "" && description.value !== "" && status.value !== "") {
//     const newTask = {
//       id: taskDB.length + 1,
//       title: title.value,
//       description: description.value,
//       status: status.value,
//     };
//     taskDB.unshift(newTask);

//     title.value = "";
//     description.value = "";
//     status.value = "pending";

//     toggle("none");
//     render();
//   } else {
//     alert("No data provided");
//   }
// });

// function toggle(str) {
//   modal.style.display = str;
// }

// function render() {
//   taskList.innerHTML = "";

//   taskDB.forEach(function (task) {
//     let data = `
//         <div class="task">
//             <div class="task-header">
//             <div class="task-title">${task.title}</div>
//             <span class="badge pending">${task.status}</span>
//             </div>
//             <div class="task-desc">${task.description}</div>
//             <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
//         </div>
//         `;
//     taskList.innerHTML += data;
//   });
// }
// render();

// function deleteTask(id) {
//   taskDB = taskDB.filter(function (task) {
//     return task.id != id;
//   });
//   render();
// }
