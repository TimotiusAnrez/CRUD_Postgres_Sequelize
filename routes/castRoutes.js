const express = require('express')
const castRouter = express.Router()
const CastController = require('../controllers/castController')

castRouter.get('/', CastController.show)

castRouter.get('/add', CastController.createForm)
castRouter.post('/add', CastController.createData)

castRouter.get('/edit/:id', CastController.updateForm)
castRouter.post('/edit/:id', CastController.updateData)

castRouter.get('/delete/:id', CastController.delete)


module.exports = castRouter