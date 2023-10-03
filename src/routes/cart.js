import express from 'express';
import { getCart, addToCart } from '../controller/cart';
const cartRouter = express.Router();

// Thêm sản phẩm vào giỏ hàng
cartRouter.put('/cart/add/:productDetailID', addToCart);

// Lấy thông tin giỏ hàng
cartRouter.get('/cart/:user_id', getCart);

// Hiện thị chi tiết sản phẩm trong giỏ hàng
// cartRouter.get('/cart/:user_id', getCart);

export default cartRouter;
