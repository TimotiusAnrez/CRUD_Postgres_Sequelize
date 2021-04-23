const express = require('express')
const MoviesRouter = express.Router()
const Controller = require('../controllers/controller')


//read function
MoviesRouter.get('/', Controller.show)

//Create function
MoviesRouter.get('/add', Controller.createForm)
MoviesRouter.post('/add', Controller.createData)

//Create cast function
MoviesRouter.get('/addTo/cast/:id',Controller.addCastForm)
MoviesRouter.post('/addTo/cast/:id',Controller.addCastData)

//Update function
MoviesRouter.get('/edit/:id', Controller.updateForm)
MoviesRouter.post('/edit/:id', Controller.updateData)

//Delete function
MoviesRouter.get('/delete/:id', Controller.delete)




module.exports = MoviesRouter