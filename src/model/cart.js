import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    user_id: {
        type: String
    },
    products: [{
        cart_detail_id: {
            type: String
        },
    }]
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('Cart', cartSchema);