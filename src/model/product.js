import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
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
    color: {
        type: String,
        required: true
    },
    status: String,
    detail_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quantity",
    },
    description: String,
    rate: Number
},
    {
        timestamps: true,
        versionKey: false
    })

export default mongoose.model("Product", productSchema);
