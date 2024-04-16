const tasks = [];

function addTask(task) {
    tasks.push(
        {
            task,
            completed: false
        }
    );
}

function listTasks() {
    return tasks;
}

function completeTask(index) {
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
    }
}

module.exports = { addTask, listTasks, completeTask };