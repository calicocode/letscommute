const router = require("express").Router();
const mongoose = require("mongoose");
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const Vehicle = require("../models/Vehicle.model");
const User = require("../models/User.model");

router.get("/vehicle", isAuthenticated, (req, res, next) => {
  Vehicle.find({owner: req.payload._id})
  .then((userVehicles) => { res.json(userVehicles);
  })
  .catch((err) => {
    res.status(500).json({
      message: "error trying to get a vehicle",
      error: err,
  })
})
})

//  POST /api/vehicles  -  Creates a new vehicle
router.post("/vehicle", isAuthenticated,(req, res, next) => {
  const { vehicle, imageUrl } = req.body;

  const newVehicleDetails = {
    owner: req.payload._id,
    vehicle: vehicle,
    imageUrl: imageUrl,
  };

  Vehicle.create(newVehicleDetails)
    .then((response) => res.status(201).json(response))
    .catch((err) => {
      console.log("error creating a new vehicle", err);
      res.status(500).json({
        message: "error creating a new vehicle",
        error: err,
      });
    });
});

router.put('/rides/vehicle', (req, res, next) => {
  const { vehicleId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(vehicleId)) {
      res.status(400).json({ message: 'Specified vehicle id is not valid' });
      return;
  }

  const newVehicleDetails = {
      vehicle: req.body.vehicle,
      vehicleImage: req.body.vehicleImage,
  }
})

module.exports = router;
