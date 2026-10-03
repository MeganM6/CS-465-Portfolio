const express = require('express');
const router = express.Router();

const ctrlTravel = require('../controllers/travel');

router
    .route('/trips')
    .get(ctrlTravel.tripsList);

router
    .route('/trips/:tripCode')
    .get(ctrlTravel.tripsFindByCode);

module.exports = router;