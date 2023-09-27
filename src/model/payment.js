import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    cart_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        required: true,
    },
    amount: {
        type: String,
    },
    id_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    
    status: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
    },
    bill: {
        type: Number,
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)
export default mongoose.model("Payment",paymentSchema);