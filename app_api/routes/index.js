
const express = require('express');
const router = express.Router();

const ctrlTravel = require('../controllers/travel');

router
    .route('/trips')
    .get(ctrlTravel.tripsList)
    .post(ctrlTravel.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(ctrlTravel.tripsFindByCode)
    .put(ctrlTravel.tripsUpdateTrip)
    .delete(ctrlTravel.tripsDeleteTrip);

module.exports = router;
