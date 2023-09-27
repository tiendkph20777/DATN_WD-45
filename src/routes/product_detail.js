import express from 'express';
import { createProductDetail, getAllProductDetails, getProductDetailById, updateProductDetail, removeProductDetail } from '../controller/product_detail';
import { checkPermission } from '../middleware/checkPermission';
// import { check } from '../middlewares/check';

const productDetailRouter = express.Router();

productDetailRouter.post('/productdetail/add',checkPermission,  createProductDetail);
productDetailRouter.get('/productdetail', getAllProductDetails);
productDetailRouter.get('/productdetail/:id', getProductDetailById);
productDetailRouter.put('/productdetail/:id/update',checkPermission,  updateProductDetail);
productDetailRouter.delete('/productdetail/:id',checkPermission,  removeProductDetail);

export default productDetailRouter;
