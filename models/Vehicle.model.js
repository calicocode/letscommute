const { Schema, model } = require("mongoose");

const vehicleSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    vehicle: {
      type: String,
      required: [true, "Vehicle is required."],
    },
    imageUrl: {
      type: String,
      default:
        "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg",
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Vehicle = model("Vehicle", vehicleSchema);

module.exports = Vehicle;
