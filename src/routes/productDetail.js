import express from 'express';
import { createProductDetail, getAllProductDetail, getAllProductDetailAllProduct, getProductDetailByIdProduct, removeProductDetailbyID, updateProductDetail } from '../controller/productDetail';

const productDetailRouter = express.Router();

productDetailRouter.post('/productdetail/add', createProductDetail);
productDetailRouter.get('/productdetail/:product_id', getAllProductDetailAllProduct);
productDetailRouter.get('/productdetail', getAllProductDetail);
productDetailRouter.get('/productdetail/:product_id/:size/:color', getProductDetailByIdProduct);
productDetailRouter.put('/productdetail/:product_id/:size/update', updateProductDetail);
productDetailRouter.delete('/productdetail/:product_id/:size/:color', removeProductDetailbyID);


export default productDetailRouter;
