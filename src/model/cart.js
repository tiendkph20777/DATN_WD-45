import { number } from "joi";
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // id_product: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Product",
    //   required: true,
    // },
    transience:{
      type:Number,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Cart", cartSchema);
