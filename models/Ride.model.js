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
      required: [true, "To City is required."],
    },
    intervalOfRides: {
      type: String,
    },

    seats: {
      type: Number,
    },

    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Ride = model("Ride", rideSchema);

module.exports = Ride;
