const express = require('express')
//import express from "express"
const configViewEngine = require('./configs/viewEngine');
//import configViewEngine from "./configs/viewEngine";

const app = express()
const port = 3000
configViewEngine(app);

app.get('/', (req, res) => {
    res.render('test/index.ejs');
})

app.get('/about', (req, res) => {
    res.send('Make by Thuan.')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})