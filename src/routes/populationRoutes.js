var cors = require('cors');
var express = require('express');
var populationRouter = express.Router();
var populationFun = require('./utility/population')

populationRouter.get('/all',populationFun.getAllPopulation)
   
  



module.exports = populationRouter
                         
                         