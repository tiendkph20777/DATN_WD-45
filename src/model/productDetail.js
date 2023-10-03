import mongoose from "mongoose";

const productDetailSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    size: {
        type: Number,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    color: {
        type: String,
        required: true
    },
},
    {
        timestamps: true,
        versionKey: false
    },
);

export default mongoose.model("ProductDetail", productDetailSchema);
