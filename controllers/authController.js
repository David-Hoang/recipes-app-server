import User from '../models/user.js';
import bcrypt from 'bcryptjs';

export const registerUser = async (req, res) => {
    const {first_name, last_name, email, password} = req.body;

    try {
        const checkEmail = await User.exists({email});

        if(checkEmail){
            return res.status(400).json({message : `L'email existe déjà`})
        }else{

            const salt = bcrypt.genSaltSync(5);
            const hashPassword = bcrypt.hashSync(password, salt);

            await User.create({
                first_name,
                last_name,
                email,
                password : hashPassword
            });

            return res.status(201).json({message : `L'utilisateur ${first_name} a été créer`})
        }

    } catch (error) {
        return res.status(500).json('Une erreur est survenue sur le serveur')
        
    }
}