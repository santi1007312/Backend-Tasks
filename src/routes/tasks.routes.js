const express = require('express')

const tasks = express.Router();

const app = express()
const port = 3000

app.get('/tasks', (req, res) => {
  res.send({
    'HOla': "hola"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = tasks;