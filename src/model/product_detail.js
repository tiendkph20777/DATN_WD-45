import mongoose from "mongoose";

const productDetailSchema = new mongoose.Schema({
    id_product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
},
    {
        timestamps: true,
        versionKey: false
    })

export default mongoose.model("ProductDetail", productDetailSchema);
