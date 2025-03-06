export const verifyUserFields = (req, res, next) => {
    
    const {first_name, last_name, email, password} = req.body;
    
    try {
        if(!first_name || !last_name || !email || !password){
            return res.json({message : 'Tous les champs sont requis'})
        }
        next()
    } catch (error) {
        return res.status(400).json({message : `Problème de serveur`})
    }
}