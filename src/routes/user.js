import express from 'express';
import { getAllUsers, getOneUserById, updateUser, deleteUser } from '../controller/user';
import user from '../model/user';

const userRouter = express.Router();

userRouter.get('/user', getAllUsers)
userRouter.get('/user/:id', getOneUserById)
// userRouter.post('/user/add', createUser)
userRouter.put('/user/:id/update', updateUser)
userRouter.delete('/user/:id', deleteUser)

export default userRouter
