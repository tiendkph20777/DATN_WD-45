import express from 'express';
import { createProductDetail, getAllProductDetail, getAllProductDetailAllProduct, getProductDetailByIdProduct, removeAllProductDetail, removeProductDetailbyID, updateProductDetail } from '../controller/productDetail';

const productDetailRouter = express.Router();

productDetailRouter.post('/productdetail/add', createProductDetail);
productDetailRouter.get('/productdetail/:product_id', getAllProductDetailAllProduct);
productDetailRouter.get('/productdetail', getAllProductDetail); //đang lỗi
productDetailRouter.get('/productdetail/:product_id/:size', getProductDetailByIdProduct);
productDetailRouter.put('/productdetail/:product_id/:size/update', updateProductDetail);
productDetailRouter.delete('/productdetail/:product_id/:size', removeProductDetailbyID);
productDetailRouter.delete('/productdetail/:product_id/', removeAllProductDetail);


export default productDetailRouter;
