const router = require("express").Router();
const mongoose = require("mongoose");

const Vehicle = require("../models/Vehicle.model");
const User = require("../models/User.model");

//  POST /api/tasks  -  Creates a new vehicle
router.post("/vehicles", (req, res, next) => {
  const { vehicle, vehicleImage } = req.body;

  const newVehicleDetails = {
    owner: req.payload._id,
    vehicle: vehicle,
    vehicleImage: vehicleImage,
  };

  Vehicle.create(newVehicleDetails)
    .then((vehicleFromDB) => {
      return User.findByIdAndUpdate(userId, {
        $push: { vehicle: vehicleFromDB._id },
      });
    })
    .then((response) => res.status(201).json(response))
    .catch((err) => {
      console.log("error creating a new vehicle", err);
      res.status(500).json({
        message: "error creating a new vehicle",
        error: err,
      });
    });
});

module.exports = router;
