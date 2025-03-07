import Recipe from '../models/recipe.js';

// Show all recipes
export const getAllRecipes = async (req, res) => {

    try {
        const allRecipes = await Recipe.find().populate('author');

        if(allRecipes.length < 1){
            return res.status(400).json({message : 'Aucun utilisateur trouvé'})
        }else{
            return res.status(200).json(allRecipes);
        }
    } catch (error) {
        return res.status(500).json('Une erreur est survenue sur le serveur')
    }
    
}

// Add recipe
export const createRecipe = async (req, res) => {

    const {title, category, country, descriptions, ingredients, steps, author} = req.body;

    try {
        const newRecipe = await Recipe.create({
            title,
            category,
            country,
            descriptions,
            ingredients,
            steps,
            author
        })
        return res.status(201).json(newRecipe)
    } catch (error) {
        return res.status(500).json('Une erreur est survenue sur le serveur')
        
    }
}

//Show single recipe
export const showSingleRecipe = async (req, res) => {

    try {
        const {id} = req.params;
        const getRecipe = await Recipe.findById(id);

        if(!getRecipe){
            return res.status(404).json({message : `Recette introuvable`})

        }else{
            return res.status(200).json(getRecipe)
        }

    } catch (error) {
        return res.status(500).json('Une erreur est survenue sur le serveur')
        
    }

}

export const editRecipe = async (req, res) => {
    
    try {
        const {id} = req.params;
        const {title, category, country, descriptions, ingredients, steps, author} = req.body;

        const content = {
            title,
            category,
            country,
            descriptions,
            ingredients,
            steps,
            author
        }

        const updateRecipe = await Recipe.findByIdAndUpdate(id, content, {'new' : true})

        if(!updateRecipe){
            return res.status(404).json({message : `Recette introuvable`})
        }else{
            return res.status(200).json(updateRecipe);
        }

    } catch (error) {
        return res.status(500).json('Une erreur est survenue sur le serveur')
    }
}

export const deleteRecipe = async (req, res) => {
    const {id} = req.params;

    try {
        const deleteRecipeById = await Recipe.findByIdAndDelete(id);

        if(!deleteRecipeById){
            return res.status(404).json({message : `Recette introuvable`})
        }else{
            return res.status(200).json(deleteRecipeById);
        }
    } catch (error) {
        return res.status(500).json('Une erreur est survenue sur le serveur')
    }
}