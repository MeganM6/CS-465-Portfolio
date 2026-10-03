const mongoose = require('mongoose');
require('../models/travlr');
const Trip = mongoose.model('trips');

const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({});

        if (!trips || trips.length === 0) {
            return res
                .status(404)
                .json({ "message": "trips not found" });
        }

        return res
            .status(200)
            .json(trips);
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ message: err.message });
    }
};

const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({ code: req.params.tripCode });

        if (!trip) {
            return res
                .status(404)
                .json({ "message": "trip not found" });
        }

        return res
            .status(200)
            .json(trip);
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ message: err.message });
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};