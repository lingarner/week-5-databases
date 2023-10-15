const model = require('../model/index')
const baseController = {}

baseController.getTrails =  async function(req, res) {
    // gets all the trails and info from db
    const listTrails = await model.getAllTrails();
    res.send(listTrails)
}

baseController.getOneTrail = async function(req, res){
    let trailID = req.params._id;
    // retrives all info for specified id 
    const one = await model.getOneTrail(trailID);
    res.send(one)
}



module.exports = baseController;