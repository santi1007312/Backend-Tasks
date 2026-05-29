const express = require("express");
const tasks = express.Router();

tasks.get('/', function (req, res) {
  res.json({
    "mensaje":"veremos todas las tareas ",
    "nombre": "adso",
    "anio" : 2026
 })
})

tasks.post('/', function (req, res) {
  res.json({
    "mensaje":"Vamos a crear una tarea",
    "nombre": "adso",
    "anio" : 2026
 })
})

module.exports = tasks;