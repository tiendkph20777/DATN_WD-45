import express from 'express';
import { createCategory, getAllCategories, getCategory, updateCategory, removeCategory } from '../controller/category'
import { checkPermission } from '../middleware/checkPermission';

const categoryRouter = express.Router();

categoryRouter.post('/category/add',checkPermission,  createCategory);
categoryRouter.get('/category', getAllCategories);
categoryRouter.get('/category/:id', getCategory);
categoryRouter.put('/category/:id/update',checkPermission,  updateCategory);
categoryRouter.delete('/category/:id',checkPermission,  removeCategory);

export default categoryRouter;
