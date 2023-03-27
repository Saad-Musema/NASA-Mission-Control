const express = require('express');
const cors = require('cors');
const {getAllPlanets, } = require('./planets.controller');

const planetsRouter = express.Router();

planetsRouter.get('/planets', cors(), getAllPlanets);

module.exports = planetsRouter;