const {Movies,ProductionHouses,Cast} = require('../models/index')
const productionhouses = require('../models/productionhouses')
const CastController = require('./castController')



class Controller {
    //read function
    static show(req,res){
        Movies.findAll({
            include: {
                model:ProductionHouses,
            },order:[['released_year','DESC']]
        })
            .then((dataInput) => {                
                // res.send(dataInput)
                res.render('movieList', {data:dataInput})
            })
            .catch((err) => {
                console.log(err.stack)
                res.send(err)
            })
    }
    //this is where the url get 
    static createForm(req, res){
        res.render('addMovie')
    }
    //this is where the url post
    static createData(req, res){
        let data = req.body
        Movies.create(data)
            .then((data) => {
                res.redirect('/movies')
            })
            .catch((err) => {
                console.log(err)
                res.render('addMovieError',{err})
            })
    }
    //this is where the url get
    static addCastForm(req,res){
        //remember eager loading
        let idInput = +req.params.id
        Movies.findByPk(idInput,{include:Cast})
            .then(data => {
                res.send(data)
            })
    }
    static addCastData(req,res){
        res.send('data added')
    }
    //this is for update function
    static updateForm(req,res){
        let idInput = +req.params.id
        Movies.findByPk(idInput,{include:{
            model:ProductionHouses
        }})
            .then((dataInput) => {
                // res.send(dataInput)
                res.render('editMovie',{data:dataInput})
            })
            .catch((err) => {
                res.send(err)
            })        
    }
    static updateData(req,res){
        let dataId = +req.params.id
        
        Movies.update({name:req.body.name,genre:req.body.genre,
            createdAt:req.body.createdAt,updatedAt:req.body.updatedAt,
            released_year:req.body.released_year,ProductionHouseId:req.body.ProductionHouseId},{where:{id:dataId}})
            .then((data) => {
                res.redirect('/movies')
            })
            .catch((err) => {
                res.send(err)
            })
    }
    //this is for delete function
    static delete(req,res){
        let idInput = +req.params.id

        Movies.destroy({where:{id:idInput}})
            .then((data) => {
                res.redirect('/movies')
            })
            .catch((err) => {
                console.log(err)
                res.send(err)
            })
    }
}

module.exports = Controller