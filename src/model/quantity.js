import mongoose from "mongoose";

const quantitySchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    size: Number,
    count: Number,
},
    {
        timestamps: true,
        versionKey: false
    },
);

export default mongoose.model("Quantity", quantitySchema);
