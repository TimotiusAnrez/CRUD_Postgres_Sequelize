const { ProductionHouses } = require('../models/index')

class StudioController {
    static show(req,res){
        ProductionHouses.findAll({order:[['name_prodHouse','ASC']]})
            .then((dataInput) => {
                res.render('studioList', {data:dataInput})
            })
    }
}
module.exports = StudioController