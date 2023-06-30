const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    profileImage: {
      type: String,
      //required: [true, "Name is required."],
    },
    phoneNumber: {
      type: Number,
    },
    driver: {
      type: String,
      enum: ["Yes", "No"],
      required: [true, "This is required."],
    },
    probationaryDriver: {
      type: String,
      enum: ["Yes", "No"],
      required: [true, "This is required."],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
