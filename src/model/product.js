import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sku: { type: String, default: "" },
    image: {
        type: String,
        required: true
    },
    image01: String,
    image02: String,
    image03: String,
    image04: String,
    price: {
        type: Number,
        required: true
    },
    price_sale: Number,
    brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
    },
    status: String,
    description: String,
    rate: Number
},
    {
        timestamps: true,
        versionKey: false
    })

export default mongoose.model("Product", productSchema);
