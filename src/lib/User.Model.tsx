// const { default: mongoose } = require("mongoose");
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const Schema = new mongoose.Schema(
  { 
    email: {
      type: String,
      required: true,
    }, 
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/*** middlewares ***/

Schema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

/*** middlewares ***/

Schema.methods.ConfirmPassword = async function (String_password : string) {
  const isMatch = bcrypt.compare(String_password, this.password);
  return isMatch;
};

Schema.methods.updatePassword = async function (String_password : string) {
    this.password = await bcrypt.hash(String_password, 10);
  return true;
};

export const UserModel = mongoose.models.user || mongoose.model("user", Schema);
