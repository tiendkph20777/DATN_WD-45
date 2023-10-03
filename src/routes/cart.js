import express from 'express';
import { getCartDetails, addToCart } from '../controller/cart';
import { findUserCart } from '../controller/auth';
const cartRouter = express.Router();

// // Thêm sản phẩm vào giỏ hàng
// cartRouter.post('/cart/add', addToCart);

// // Lấy thông tin giỏ hàng
// cartRouter.get('/cart', getCartDetails);
cartRouter.get('/cart/:cartID', findUserCart)
// export default cartRouter;

// // import express from 'express';
// // import { getCartDetails, addToCart } from '../controller/cart';
// // const cartRouter = express.Router();

// // // Thêm sản phẩm vào giỏ hàng
// // cartRouter.post('/cart/add', addToCart);

// // // Lấy thông tin giỏ hàng
// // cartRouter.get('/cart', getCartDetails);

// // export default cartRouter;