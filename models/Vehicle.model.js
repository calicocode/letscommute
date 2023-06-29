const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const vehicleSchema = new Schema(
  {
    vehicle: {
        type: String,
        required: [true, "Vehicle is required."],
      },
    vehicleImage: {
      type: Image,
    },
    probationaryDriversLicense: {
            type: String,
            enum: ["Yes", "No",],
          },
    carSharing: {
            type: String,
            enum: ["Yes", "No",],
          },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Vehicle = model("Vehicle", vehicleSchema);

module.exports = Vehicle;