import express from 'express';
import { createComment, getAllComment, getComment, updateComment, removeComment } from '../controller/comment'

const commentRouter = express.Router();

commentRouter.post('/comment/add', createComment);
commentRouter.get('/comment', getAllComment);
commentRouter.get('/comment/:id', getComment);
commentRouter.put('/comment/:id/update', updateComment);
commentRouter.delete('/comment/:id', removeComment);

export default commentRouter;
