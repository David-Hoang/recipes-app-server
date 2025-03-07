export const verifyRecipeFields = (req, res, next) => {
    
    const {title, category, country, descriptions, ingredients, steps, author} = req.body;
    
    try {
        if(!title || !category || !country || !descriptions || !ingredients || !steps || !author){
            return res.json({message : 'Tous les champs sont requis'})
        }
        next()
    } catch (error) {
        return res.status(400).json({message : `Problème de serveur`})
    }
}