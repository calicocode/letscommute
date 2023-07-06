const router = require("express").Router();

const mongoose = require("mongoose");

const Ride = require("../models/Ride.model");
const Vehicle = require("../models/Vehicle.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");

//  POST /api/rides
router.post("/rides", isAuthenticated, (req, res, next) => {
  const {
    fromCity,
    toCity,
    intervalOfRides,
    seats,
    driver,
    vehicle,
    vehicleImage,
    probationaryDriversLicense,
  } = req.body;

  const newRide = {
    fromCity: fromCity,
    toCity: toCity,
    intervalOfRides: intervalOfRides,
    seats: seats,
    driver: req.payload._id,
    vehicle: vehicle,
    vehicleImage: vehicleImage,
    probationaryDriversLicense: probationaryDriversLicense,
  };

  Ride.create(newRide)
    .then((response) => res.status(201).json(response))
    .catch((err) => {
      console.log("error creating a new ride", err);
      res.status(500).json({
        message: "error creating a new ride",
        error: err,
      });
    });
});

// GET /api/rides -  Retrieves all of the rides
router.get("/rides", (req, res, next) => {
  Ride.find()
    .populate("vehicle")
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log("error getting list of rides", err);
      res.status(500).json({
        message: "error getting list of rides",
        error: err,
      });
    });
});

//  GET /api/rides/:rideId  -  Get details of a specific ride by id
router.get("/rides/:rideId", (req, res, next) => {
  const { rideId } = req.params;


  if (!mongoose.Types.ObjectId.isValid(rideId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Ride.findById(rideId)
    .populate({path: "vehicle", populate: {path: "owner", select: "-password"}})
    .then((ride) => res.json(ride))
    .catch((err) => {
      console.log("error getting details of a ride", err);
      res.status(500).json({
        message: "error getting details of a ride",
        error: err,
      });
    });
});

// PUT /api/ride/:rideId  -  Updates a specific ride by id
router.put("/rides/:rideId", (req, res, next) => {
  const { rideId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(rideId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  const newDetails = {
    fromCity: req.body.fromCity,
    toCity: req.body.toCity,
    intervalOfRides: req.body.intervalOfRides,
    seats: req.body.seats,
    driver: req.body.driver,
    vehicle: req.body.vehicle,
    vehicleImage: req.body.vehicleImage,
    probationaryDriversLicense: req.body.probationaryDriversLicense,
  };

  Ride.findByIdAndUpdate(rideId, newDetails, { new: true })
    .then((updatedRide) => res.json(updatedRide))
    .catch((err) => {
      console.log("error updating ride", err);
      res.status(500).json({
        message: "error updating ride",
        error: err,
      });
    });
});

// DELETE /api/rides/:rideId  -  Delete a specific ride by id
router.delete("/rides/:rideId", (req, res, next) => {
  const { rideId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(rideId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Ride.findByIdAndRemove(rideId)
    .then(() =>
      res.json({ message: `Ride with id ${rideId} was removed successfully.` })
    )
    .catch((err) => {
      console.log("error deleting ride", err);
      res.status(500).json({
        message: "error deleting ride",
        error: err,
      });
    });
});

module.exports = router;
