import mongoose from 'mongoose';

const cartDetailSchema = new mongoose.Schema({
  cart_id: {
    type: mongoose.SchemaType
  },
  productDetailId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductDetail",
  },
  quantity: {
    type: Number,
  }
}, {
  timestamps: true,
  versionKey: false
});

export default mongoose.model('CartDetail', cartDetailSchema);