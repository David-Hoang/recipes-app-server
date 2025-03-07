import { Router } from 'express';
import { getAllRecipes, createRecipe, showSingleRecipe, editRecipe, deleteRecipe} from "../controllers/recipeController.js";
import { verifyRecipeFields } from "../middlewares/verifyRecipeCreation.js";

const recipesRouter = Router();

recipesRouter.get('/recipes', getAllRecipes)

recipesRouter.post('/recipe', verifyRecipeFields, createRecipe)

recipesRouter.get('/recipe/:id', showSingleRecipe)

recipesRouter.put('/recipe/:id', editRecipe)

recipesRouter.delete('/recipe/:id', deleteRecipe)


export default recipesRouter