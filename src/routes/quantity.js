import express from 'express';
import { createQuantity, getAllQuantity, getAllQuantityByProduct, getquantityByIdProduct, removeQuantityProduct, updateQuantity } from '../controller/quantity';

const quantityRouter = express.Router();

quantityRouter.post('/quantity/add', createQuantity);
quantityRouter.get('/quantity/:product_id', getAllQuantityByProduct);
quantityRouter.get('/quantity', getAllQuantity);
quantityRouter.get('/quantity/:product_id/:size', getquantityByIdProduct);
quantityRouter.put('/quantity/:product_id/:size/update', updateQuantity);
quantityRouter.delete('/quantity/:product_id/:size', removeQuantityProduct);


export default quantityRouter;
