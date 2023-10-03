import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProduct, removeProduct } from '../controller/product'

const productRouter = express.Router();

productRouter.post('/product/add', createProduct);
productRouter.get('/product', getAllProducts);
productRouter.get('/product/:id', getProductById);
productRouter.put('/product/:id/update', updateProduct);
productRouter.delete('/product/:product_id', removeProduct);

export default productRouter;
