const router = require("express").Router();
// const mongoose = require("mongoose");

const Vehicle = require("../models/Vehicle.model");
const Ride = require("../models/Ride.model");

//  POST /api/tasks  -  Creates a new task
router.post("/vehicles", (req, res, next) => {
    const { vehicle, vehicleImage, carSharing, userId} = req.body;

    const newVehicleDetails = { 
        vehicle: vehicle, 
        vehicleImage: vehicleImage, 
        carSharing: carSharing,
        userId: userId
    };

    Vehicle.create(newVehicleDetails)
        .then(VehicleFromDB => {
            return User.findByIdAndUpdate(userId, { $push: { vehicle: vehicleFromDB._id } });
        })
        .then(response => res.status(201).json(response))
        .catch(err => {
            console.log("error creating a new vehicle", err);
            res.status(500).json({
                message: "error creating a new vehicle",
                error: err
            });
        })
});

module.exports = router;
