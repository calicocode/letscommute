const { mongoose, Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const rideSchema = new Schema(
  {
    fromCity: {
        type: String,
        required: [true, "From City is required."],
      },
    toCity: {
      type: String,
      required: [true, "To City is required."]
    },
    IntervalOfRides: {
            type: String,
            enum: ["multiple times a Week","1 x Week", "Every 2 Weeks", "Every 2 Weeks", "Once a month",],
          },
    seats: {
            type: Number,
            enum: ["1", "2", "3", "4", "5", "6",],
          },
    Driver: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
          },
    
    vehicle: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicle"
          },
    vehicleImage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicle"
          },
    probationaryDriversLicense: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicle"
          },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Ride = model("Ride", rideSchema);

module.exports = Ride;