import { Router } from 'express';
import { registerUser } from '../controllers/authController.js';
import { verifyUserFields } from "../middlewares/verifyUserCreation.js";

const authRouter = Router();

authRouter.post('/register', verifyUserFields, registerUser)

export default authRouter;