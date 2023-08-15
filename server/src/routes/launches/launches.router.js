const express = require('express');
const cors = require('cors');

const {httpGetAllLaunches,
        httpAddNewLaunch,
} = require('./launches.controller');

const launchesRouter = express.Router()

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);


module.exports = launchesRouter;