const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const knex = require('knex')
const queries = require('./queries')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
    queries.getAll().then(response => res.send(response))
})

app.get('/:id', (req, res, next) => {
    queries.getById(req.params.id).then(response => res.send(response))
})

app.post('/', (req, res, next) => {
    queries.createStudent(req.body).then(students => res.send(students))
})

app.listen(port, console.log(`yo ${port}`))