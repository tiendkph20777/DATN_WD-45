import express from 'express';
import { getAllUsers, getOneUserById, updateUser, deleteUser, createStaff } from '../controller/user';
import { checkPermission } from '../middleware/checkPermission';


const userRouter = express.Router();

userRouter.get('/user', checkPermission, getAllUsers)
userRouter.get('/user/:id', checkPermission, getOneUserById)
userRouter.post('/user/add/staff', checkPermission, createStaff)
userRouter.put('/user/:id/update', checkPermission, updateUser)
userRouter.delete('/user/:id', checkPermission, deleteUser)

export default userRouter
