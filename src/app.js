const express = require('express')
const tasks = require('./routes/tasks.routes.js');
const users = require('./routes/users.routes.js');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.json({
    "mensaje":"Iniciando en el backend",
    "nombre": "Adso",
    "anio" : 2026
 })
})

app.use('/tasks', tasks);
app.use('/users' , users);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})