import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    cate_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    description: {
        type: String,
    },
    rate: {
        type: Number,
    }

},
    {
        timestamps: true,
        versionKey: false
    })

export default mongoose.model("Product", productSchema);
