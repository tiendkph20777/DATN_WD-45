import express from 'express';
import { createCartDetail, updateCartDetail, deleteCartDetail,getCartDetailById } from '../controller/cartDetail';

const carDetailRouter = express.Router();

carDetailRouter.post('/addCart/:productDetailId', createCartDetail);
carDetailRouter.get('/:cartDetailId', getCartDetailById); 
carDetailRouter.put('/:cartDetailId', updateCartDetail);
carDetailRouter.delete('/:cartDetailId', deleteCartDetail);

export default carDetailRouter;