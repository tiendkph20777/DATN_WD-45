import mongoose from "mongoose";

const productDetailSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    size: Number,
    quantity: Number,
},
    {
        timestamps: true,
        versionKey: false
    },
);

export default mongoose.model("ProductDetail", productDetailSchema);
