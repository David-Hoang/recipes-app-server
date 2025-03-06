import express from 'express';
import connectDB from './client/db.js';
import 'dotenv/config';
import usersRouter from "./routes/usersRouters.js";

const app = express();

connectDB()

app.use('/api', usersRouter)

app.listen(3000, () => {
    console.log('Welcome to the server 3000');
})