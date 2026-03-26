const taskList = document.getElementById('task-list');
const modalOverlay = document.getElementById('modal-overlay');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const saveTaskBtn = document.getElementById('save-task-btn');

// Initial Data
let tasks = [
    { title: "Task 1", desc: "Description for Task 1", status: "pending" },
    { title: "Task 2", desc: "Description for Task 2", status: "in progress" },
    { title: "Task 3", desc: "Description for Task 3", status: "completed" }
];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const statusClass = task.status.replace(/\s+/g, '-');
        const card = document.createElement('div');
        card.className = 'task-card';
        card.innerHTML = `
            <span class="status-badge status-${statusClass}">${task.status}</span>
            <h3>${task.title}</h3>
            <p>${task.desc}</p>
            <button class="btn-delete" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(card);
    });
}

// Function to add new task
saveTaskBtn.addEventListener('click', () => {
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;
    const status = document.getElementById('task-status').value;

    if (title && desc) {
        tasks.push({ title, desc, status });
        renderTasks();
        closeModal();
        // Clear inputs
        document.getElementById('task-title').value = "";
        document.getElementById('task-desc').value = "";
    } else {
        alert("Please fill in all fields");
    }
});

// Delete Task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Modal Toggle Functions
function openModal() { modalOverlay.style.display = 'flex'; }
function closeModal() { modalOverlay.style.display = 'none'; }

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Initial Render
renderTasks();