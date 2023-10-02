import { string } from "joi";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    tel: {
      type: Number,
    },
    role_id: {
      // type: mongoose.Schema.Types.ObjectId,
      type: String,
      ref: "Role",
    },
    gender:{
      type:String,
      required:true,
    },
    fullName:{
      type:String,
      required:true,
    },
    cart_id: {
      // 
      type:String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("User", userSchema);
