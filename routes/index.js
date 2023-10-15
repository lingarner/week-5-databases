const express = require('express');
const router = new express.Router();
const controller = require('../controller/controller.js');

// route to get all trails
router.get('/', controller.getTrails)

// route to get one trail by id
router.get('/:_id', controller.getOneTrail)

// route to add a new trail to the db
router.post('/', controller.addTrail);

// route to delete a trail by an id
router.delete('/:_id', controller.deleteTrail)

// route to update db
router.put('/:_id', controller.updateTrail)

module.exports = router