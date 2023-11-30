import express from "express";
import { } from "../controller/payment";
import { createCheckout, getCheckout, getOneCheckout, removeCheckout, removeProductToCheckout, updateCheckout } from "../controller/checkout";
import { checkPermission } from "../middleware/checkPermission";
import { increaseProduct, reductionProduct } from "../controller/product";
const checkoutRouter = express.Router();
//Them vao don hang
checkoutRouter.post('/checkout/add', createCheckout);
//lay thong tin don hang
// checkoutRouter.get('/checkout', checkPermission, getCheckout);
// checkoutRouter.get('/checkout/:id', getOneCheckout);
// checkoutRouter.put('/checkout/:id/update', checkPermission, updateCheckout);
// checkoutRouter.delete('/checkout/:id', checkPermission, removeCheckout);

// Giảm số lượng sản phẩm
checkoutRouter.get('/reductionProduct/:product_id/:quantityProduct', reductionProduct);
// Tăng số lượng sản phẩm
checkoutRouter.get('/increaseProduct/:product_id/:quantityProduct', increaseProduct);

checkoutRouter.get('/checkout/:id', getOneCheckout);
checkoutRouter.get('/checkout/:cart_id/:productDetail_id', removeProductToCheckout);
checkoutRouter.put('/checkout/:id/update', updateCheckout);
checkoutRouter.delete('/checkout/:id', removeCheckout);

export default checkoutRouter;