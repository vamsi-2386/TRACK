const ip = document.getElementById("ipbox");
const lst = document.getElementById("lst");
var cnt = 0;
function addtask(){
    if(ip.value == ''){
        alert("Please enter a Task");
        return;
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = ip.value;
        lst.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    ip.value = "";
    saveList();
}
lst.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveList();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveList();
    }
}, false);
function saveList(){
    localStorage.setItem("data",lst.innerHTML);
}
function displayTask(){
lst.innerHTML = localStorage.getItem("data");
}
displayTask();

function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById("date").textContent = `${date}`;
}
updateDateTime();
setInterval(updateDateTime, 1000);

function resetTasksIfDateChanged() {
    const storedDate = localStorage.getItem("date");
    const currentDate = new Date().toLocaleDateString();

    if (storedDate !== currentDate) {
        localStorage.clear();
        localStorage.setItem("date", currentDate);
    }
}
resetTasksIfDateChanged();
displayTask();
function saveCompletedTask(task) {
    const completedTasks = localStorage.getItem("completedTasks") || "";
    const currentDate = new Date().toLocaleDateString();
    localStorage.setItem("completedTasks", completedTasks + task + ":" + currentDate + ", ");
}
