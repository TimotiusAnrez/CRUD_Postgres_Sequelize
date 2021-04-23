const { route } = require("./moviesRouter");
const express = require('express')
const productionRouter = express.Router()
const StudioController = require('../controllers/studioController')

productionRouter.get('/', StudioController.show)


module.exports = productionRouter