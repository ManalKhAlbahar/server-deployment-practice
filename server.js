'use strict'

const express = require('express');
const app = express();

function start(port) {
    app.listen(port, () => {
        console.log(`running on port ${port}`)
    })
}

app.get('/', (req, res) => {
    res.send('Home Route')
})

app.get('/data', (req, res) => {
    res.status(200).json({
        name: 'Manal',
        lastName: 'Albahar',
        email: 'manal.albahar@gmail.com'
    })
})

module.exports = {
    app: app,
    start: start,
}

