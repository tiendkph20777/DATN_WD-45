import mongoose from "mongoose";
const { Schema } = mongoose;
const cartSchema = new mongoose.Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    isGuest: {
      type: Boolean,
      default: false,
    },
    product_detail_id: {
      type: Schema.Types.ObjectId,
      ref: "ProductDetail",
    },
    color: {
      type: String,
    },
    price: {
      type: Number,
    },
    cart_id: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
    },
    size: {
      type: Number,
    },
    quantity: {
      type: Number,
      default: 1
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("CartDetail", cartSchema);
