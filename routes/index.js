const express = require('express');
const router = new express.Router();
const controller = require('../controller/controller.js');


// route to get all trails
router.get('/', controller.getTrails)

// route to get one trail by id
router.get('/:_id', controller.getOneTrail)




module.exports = router