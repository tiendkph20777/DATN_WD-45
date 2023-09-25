import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    tel: {
        type: Number,
    },
    role_id: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: "Role",

    },
    purchase_history_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Purchase_history"
        }
    ],
    cart_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart"
    },
    address: {
        type: String,
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

export default mongoose.model("User", userSchema);