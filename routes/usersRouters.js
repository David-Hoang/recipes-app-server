import {Router} from 'express';
import { getAllUsers, createUser, showSingleUser, editUser, deleteUser } from "../controllers/userControllers.js";
import { verifyUserFields } from "../middlewares/verifyUserCreation.js";

const usersRouter = Router();

usersRouter.get('/users', getAllUsers)

usersRouter.post('/users', verifyUserFields ,createUser)

usersRouter.get('/user/:id', showSingleUser)

usersRouter.put('/user/:id', editUser)

usersRouter.delete('/user/:id', deleteUser)


export default usersRouter