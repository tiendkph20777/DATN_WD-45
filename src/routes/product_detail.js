import express from 'express';
import { createProductDetail, getAllProductDetails, getProductDetailById, updateProductDetail, removeProductDetail } from '../controller/product_detail';
// import { check } from '../middlewares/check';

const productDetailRouter = express.Router();

productDetailRouter.post('/productdetail/add', createProductDetail);
productDetailRouter.get('/productdetail', getAllProductDetails);
productDetailRouter.get('/productdetail/:id', getProductDetailById);
productDetailRouter.put('/productdetail/:id/update', updateProductDetail);
productDetailRouter.delete('/productdetail/:id', removeProductDetail);

export default productDetailRouter;
