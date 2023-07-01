const express = require('express');
const cors = require('cors');

const {getAllLaunches} = require('./launches.controller');

const launchesRouter = express.Router()

launchesRouter.get('/launches', cors(), getAllLaunches);


module.exports = launchesRouter;