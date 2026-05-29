const express = require("express");
const users = express.Router();

users.get('/', function (req, res) {
  res.json({
    "mensaje":"Veremos a todos los usuarios",
    "nombre": "adso",
    "anio" : 2026
 })
})

users.post('/', function (req, res) {
  res.json({
    "mensaje":"Vamos a crear un usuario",
    "nombre": "adso",
    "anio" : 2026
 })
})

module.exports = users;