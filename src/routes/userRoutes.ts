import express  from "express";
import { create, del, getAll, getUser, update } from "../controllers/usersController.ts";

const userRouter = express.Router()

userRouter.get('/users', getAll)
userRouter.get('/users/:id', getUser)
userRouter.post('/users', create)
userRouter.put('/users/:id', update)
userRouter.delete('/users/:id', del)

export default userRouter