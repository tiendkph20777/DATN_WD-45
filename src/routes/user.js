import express from 'express';
import { getAllUsers, getOneUserById, updateUser, deleteUser } from '../controller/user';
import { checkPermission } from '../middleware/checkPermission';


const userRouter = express.Router();

userRouter.get('/user', getAllUsers)
userRouter.get('/user/:id', getOneUserById)
// userRouter.post('/user/add', createUser)
userRouter.put('/user/:id/update',checkPermission,  updateUser)
userRouter.delete('/user/:id',checkPermission,  deleteUser)

export default userRouter
