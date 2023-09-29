// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema({
//     user_id: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User"
//     },
//     cart_id: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Cart",
//     },
//     address: {
//         type: Text,
//         require: true
//     },
//     tel: {
//         type: Number,
//         require: true
//     },
//     status: {
//         type: String,
//         default: "xác nhận",
//         enum: ["xác nhận", "chuẩn bị hàng", "đợi vận chuyển", "đang vận chuyển", "thành công"]
//     },
//     content: { type: Text }
// },
//     {
//         timestamps: true,
//         versionKey: false
//     }
// )
// export default mongoose.model("Order", orderSchema);