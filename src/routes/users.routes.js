const express = require('express')

const users = express.Router();

const app = express()
const port = 3000

app.get('/users', (req, res) => {
  res.send({
    'HOla': "hola"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = users;