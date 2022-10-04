const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: { type: String },
    username: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    password: { type: String },
    role: { type: String }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
    versionKey: false,
  }
);

const User = model("User", userSchema);

module.exports = User;
