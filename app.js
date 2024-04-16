const taskManager = require('./task-manager')

taskManager.addTask('Buy groceries');
taskManager.addTask('Finish assignment');
taskManager.addTask('Go to school node');
taskManager.completeTask(0)
taskManager.completeTask(1)
taskManager.listTasks().forEach((task, index) => {
    console.log(`Task ${index + 1}: ${task.task} (Completed: ${task.completed})`);
});

const app = require('express')();

app.use(/\/admin\/.*/, (req, res, next) => {
    if (!req.user.isAdmin) {
        res.status(401).send('Unauthorized');
    } else {
        next();
    }
});

app.get('/admin/users/:id', (req, res) => {
    res.send(app.database.users[req.params.id]);
});