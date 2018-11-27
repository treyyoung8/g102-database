const express = require('express')
const app = express()
const port = process.env.PORT || 3001

const data = [
    {
        name: 'Trey',
        fave_animal: 'https://images-na.ssl-images-amazon.com/images/I/61irQrNjgnL._SY679_.jpg',
        previous_occupation: 'General Manager',
        hometown_lat: 37.2638,
        hometown_long: 122.0230,
        useless_superpower: 'super deaf'
    }
]

app.get('/', (req, res, next) => {
    res.send('aye mang')
})


app.listen(port, console.log(`yo ${port}`))