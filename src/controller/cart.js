// import Cart from '../model/cart';
// import productDetail from '../model/productDetail';

// export const addToCart = async (req, res) => {
//   /*
//     user_id:
//     isGuest:
//     products: [
//     ],
//     total_money: {
//       type: Number,
//       default: 0,
//     }*/
//   const { user_id, product_id, sizeProduct, quantity } = req.body;
//   try {
//     const existingQuantity = await productDetail.findOne({ id_product, sizeProduct });
//     if (!existingQuantity) {
//       res.status(400).json({ message: "Không tìm thấy sản phẩm trong kho" });
//       return;
//     }
//     if (quantity > existingQuantity.count) {
//       res.status(400).json({ message: "Số lượng quá giới hạn" });
//       return;
//     }
//     const cartItem = new Cart({
//       id_user,
//       id_product,
//       sizeProduct,
//       quantity,
//     });

//     const cart = await cartItem.save();
//     res.status(201).json(cart);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// }


// export const getCartDetails = async (req, res) => {
//   try {
//     const { id_user } = req.params
//     const cartItems = await Cart.find().populate('id_user').populate('id_product');
//     res.status(200).json(cartItems);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }