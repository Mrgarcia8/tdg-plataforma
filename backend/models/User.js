import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;




