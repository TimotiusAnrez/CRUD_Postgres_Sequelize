const express = require('express')
const mainRouter = express.Router()
const moviesRouter = require('./moviesRouter')
const productionRouter = require('./productionRouter')
const castRouter = require('./castRoutes')
mainRouter.get('/', (req, res) => {
    res.render('landing')
})


//route for movies
mainRouter.use('/movies', moviesRouter)
//route for production house
mainRouter.use('/studio', productionRouter)

//for later casts
mainRouter.use('/casts', castRouter)


module.exports = mainRouter