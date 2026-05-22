const express = require('express')
const tasks = require('./routes/tasks.routes.js');
const users = require('./routes/users.routes.js');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/tasks', tasks);
app.use('/users', users);
