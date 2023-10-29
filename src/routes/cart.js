import express from 'express';
import { getCart, addToCart, getCartDetail, tokenUser } from '../controller/cart';
const cartRouter = express.Router();

// Thêm sản phẩm vào giỏ hàng
cartRouter.post('/cart/token', tokenUser);
cartRouter.post('/cart/add/:productDetailId/:user_id', addToCart);

// Lấy thông tin giỏ hàng
cartRouter.get('/cart/:user_id', getCart);

cartRouter.get('/cart/cart-detail', getCartDetail);

// Hiện thị chi tiết sản phẩm trong giỏ hàng
// cartRouter.get('/cart/:user_id', getCart);

export default cartRouter;
