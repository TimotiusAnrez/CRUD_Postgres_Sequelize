const {Movies,Cast} = require('../models/index')

class Controller {
    //read function
    static show(req,res){
        Cast.findAll()
            .then((dataInput) => {                
                // res.send(dataInput)
                
                res.render('castList', {data:dataInput})
            })
            .catch((err) => {
                console.log(err.stack)
                res.send(err)
            })
    }
    //this is where the url get 
    static createForm(req, res){
        res.render('addCast')
    }
    //this is where the url post
    static createData(req, res){
        let data = req.body
        // res.send(data)
        Cast.create(data)
            .then((data) => {
                res.redirect('/casts')
                
            })
            .catch((err) => {
                console.log(err)
                res.send(err)
            })
    }
    //this is for update function
    static updateForm(req,res){
        let idInput = +req.params.id
        Cast.findByPk(idInput)
            .then((dataInput) => {
                // res.send(dataInput)
                res.render('editCast',{data:dataInput})
            })
            .catch((err) => {
                console.log(err)
                res.send(err)
            })        
    }
    static updateData(req,res){
        let dataId = +req.params.id
        res.send(req.body)
        Cast.update({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            phone_number:req.body.phone_number,
            birth_year:req.body.birth_year,
            gender:req.body.gender
        },{where:{id:dataId}})

            .then((data) => {
                res.redirect('/casts')
            })
            .catch((err) => {
                res.send(err)
            })
    }
    //this is for delete function
    static delete(req,res){
        let idInput = +req.params.id

        Cast.destroy({where:{id:idInput}})
            .then((data) => {
                res.redirect('/casts')
            })
            .catch((err) => {
                console.log(err)
                res.send(err)
            })
    }
}

module.exports = Controller