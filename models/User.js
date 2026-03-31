import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true
    },
    password: String,

    role: {
      type: String,
      enum: ["admin", "student", "teacher", "subscriber"],
      default: "student"
    },

    teacherRequest: {
      type: String,
      enum: ["none", "pending", "approved", "rejected"],
      default: "none"
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
