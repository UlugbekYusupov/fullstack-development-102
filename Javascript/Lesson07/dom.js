const theTaskList = document.getElementById('theTaskList');
const thePopupOverlay = document.getElementById('thePopupOverlay');
const openPopupButton = document.getElementById('openPopupButton');
const closePopupButton = document.getElementById('closePopupButton');
const saveTaskButton = document.getElementById('saveTaskButton');

let myMemoryList = [
    { title: "Task 1", note: "Description 1", status: "pending" },
    { title: "Task 2", note: "Description 2", status: "inProgress" },
    { title: "Task 3", note: "Description 3", status: "completed" }
];

function refreshTheScreen() {
    theTaskList.innerHTML = ""; 

    myMemoryList.forEach((item, position) => {
        const taskBox = document.createElement('div');
        taskBox.className = "singleTaskCard";
        taskBox.innerHTML = `
            <span class="statusLabel ${item.status}">${item.status}</span>
            <h3>${item.title}</h3>
            <p>${item.note}</p>
            <button class="removeBtn" onclick="throwAwayTask(${position})">Delete</button>
        `;
        theTaskList.appendChild(taskBox);
    });
}

saveTaskButton.addEventListener('click', () => {
    const titleFromUser = document.getElementById('userInputTitle').value;
    const noteFromUser = document.getElementById('userInputNote').value;
    const statusFromUser = document.getElementById('userSelectedStatus').value;

    if (titleFromUser !== "" && noteFromUser !== "") {
        myMemoryList.push({ 
            title: titleFromUser, 
            note: noteFromUser, 
            status: statusFromUser 
        });
        
        refreshTheScreen();
        hideThePopup();
        
        document.getElementById('userInputTitle').value = "";
        document.getElementById('userInputNote').value = "";
    }
});

function throwAwayTask(indexNumber) {
    myMemoryList.splice(indexNumber, 1);
    refreshTheScreen();
}

function showThePopup() { thePopupOverlay.style.display = "flex"; }
function hideThePopup() { thePopupOverlay.style.display = "none"; }

openPopupButton.onclick = showThePopup;
closePopupButton.onclick = hideThePopup;

refreshTheScreen();