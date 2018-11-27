const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res, next) => {
    res.send('aye mang')
})


app.listen(port, console.log(`yo ${port}`))