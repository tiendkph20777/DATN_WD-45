import { number } from "joi";
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
    {
        // user_id: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "User",
        // },
        // id_product: {
        //   type: mongoose.Schema.Types.ObjectId,
        //   ref: "Product",
        //   required: true,
        // },
        cart_info: {
            type: String
        },
        transience: {
            type: Number,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default mongoose.model("Cart", cartSchema);
