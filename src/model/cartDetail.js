import mongoose from 'mongoose';

const cartDetailSchema = new mongoose.Schema({
  product_detail_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductDetail",
  },
  cart_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart"
  },
  quantity: {
    type: Number,
    require: true
  },
  transicence: {
    type: Number,
  }
}, {
  timestamps: true,
  versionKey: false
});

export default mongoose.model('CartDetail', cartDetailSchema);