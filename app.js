const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const knex = require('knex')
const queries = require('./queries')

app.get('/', (req, res, next) => {
    queries.getAll().then(response => res.send(response))
})


app.listen(port, console.log(`yo ${port}`))