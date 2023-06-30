const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router')

const app = express();

var launchLogStream = fs.createWriteStream(path.join(__dirname, "..", "/data", "access.log"))

app.use(morgan('combined', {stream: launchLogStream}));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(planetsRouter);

app.get('/' , (req, res) => {
    res.sendFile(__dirname, '..', 'index.html');
})

module.exports = app;