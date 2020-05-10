const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo')

router.get('/todos', function (req, res) {
    //get the data requested from the db
    Todo.find({})
        .then(function (todos) {
            res.send(todos)
        })
})

router.post('/todo', function (req, res) {
    const todo = new Todo({ text: req.body.text, completed: false })
    todo.save()
        .then(function (todo) {
            res.send(todo)
        })
})



router.delete('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    Todo.findOneAndDelete({ _id: todoID })
        .then(function (todo) {
            res.send(todo)
        })
})

module.exports = router