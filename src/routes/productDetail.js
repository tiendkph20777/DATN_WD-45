import express from 'express';
import { createProductDetail, getAllProductDetail, getAllProductDetailAllProduct, getProductDetailByIdProduct, removeProductDetailbyID, updateProductDetail } from '../controller/productDetail';
import { checkPermission } from '../middleware/checkPermission';

const productDetailRouter = express.Router();

productDetailRouter.post('/productdetail/add',checkPermission,  createProductDetail);
productDetailRouter.get('/productdetail/:product_id', getAllProductDetailAllProduct);
productDetailRouter.get('/productdetail', getAllProductDetail);
productDetailRouter.get('/productdetail/:product_id/:size/:color', getProductDetailByIdProduct);
productDetailRouter.put('/productdetail/:product_id/:size/update',checkPermission,  updateProductDetail);
productDetailRouter.delete('/productdetail/:product_id/:size/:color',checkPermission,  removeProductDetailbyID);


export default productDetailRouter;
