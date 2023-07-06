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
        "https://www.mivodo.com/wp-content/uploads/2021/02/seat-alhambra-grosser-van-fuer-familien.jpg",
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Vehicle = model("Vehicle", vehicleSchema);

module.exports = Vehicle;
