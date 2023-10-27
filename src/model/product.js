import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sku: { type: String, default: "" },
    images: { type: String },
    price: {
        type: Number,
        required: true
    },
    price_sale: Number,
    brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
    },
    content: String,
    description: String,
    rate: Number
},
    {
        timestamps: true,
        versionKey: false
    })

export default mongoose.model("Product", productSchema);
