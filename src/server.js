const express = require('express')
//import express from "express"
const app = express()
const port = 3000
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/about', (req, res) => {
    res.send('Make by Thuan.')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})