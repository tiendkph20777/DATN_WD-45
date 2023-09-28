import express from 'express';
import { createBrand, getAllBrands, getBrand, updateBrand, removeBrand } from '../controller/brand'

const brandRouter = express.Router();

brandRouter.post('/brand/add', createBrand);
brandRouter.get('/brand', getAllBrands);
brandRouter.get('/brand/:id', getBrand);
brandRouter.put('/brand/:id/update', updateBrand);
brandRouter.delete('/brand/:id', removeBrand);

export default brandRouter;
