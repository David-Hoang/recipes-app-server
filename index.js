import express from 'express';
import connectDB from './client/db.js';
import 'dotenv/config';
import usersRouter from "./routes/usersRouters.js";
import recipesRouter from "./routes/recipesRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api', usersRouter)
app.use('/api', recipesRouter)

connectDB()
app.listen(3000, () => {
    console.log('Welcome to the server 3000');
})