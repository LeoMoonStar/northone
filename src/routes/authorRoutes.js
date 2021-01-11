const cors = require("cors");
const express = require("express");
const authorRouter = express.Router();
const authorFunc = require('./utility/author')

authorRouter.get('/all',authorFunc.getAllAuthor)

module.exports = authorRouter
