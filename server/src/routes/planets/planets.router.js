const express = require('express');
const cors = require('cors');
const {httpGetAllPlanets, } = require('./planets.controller');

const planetsRouter = express.Router();

planetsRouter.get('/', cors(), httpGetAllPlanets);

module.exports = planetsRouter;