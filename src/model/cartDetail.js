import mongoose from 'mongoose';

const cartDetailSchema = new mongoose.Schema({
  product_detail_id: {
    type: String
  },
  quantity: {
    type: Number,
    require: true
  },
  color: {
    type: String,
  },
  size: {
    type: Number,
  },
  price: {
    type: Number,
  },
  transicence: {
    type: Number,
  }

}, {
  timestamps: true,
  versionKey: false
});

export default mongoose.model('CartDetail', cartDetailSchema);