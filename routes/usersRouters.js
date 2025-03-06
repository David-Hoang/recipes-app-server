import {Router} from 'express';
import User from "../models/user.js";

const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
    try {
        const users = await User.find();

        if(users.length < 1){
            return res.status(400).json({message : 'Aucun utilisateur trouvé'})
        }else{
            return res.status(200).json(users);
        }

    } catch (error) {
        return res.status(500).json('Une erreur est survenue sur le serveur')
    }
})

export default usersRouter