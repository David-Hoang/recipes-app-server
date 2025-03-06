import User from "../models/user.js";

// List all user
export const getAllUsers = async (req, res) => {
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
}

// Add new user
export const createUser = async (req, res) => {
    const {first_name, last_name, email, password} = req.body;

    try {
        await User.create({
                first_name,
                last_name,
                email,
                password
            })
        return res.status(201).json({message : `L'utilisateur ${first_name} a été ajouté !`})
    } catch (error) {
        return res.status(400).json({message : `Problème de serveur`})
    }
}

// Show one single user
export const showSingleUser = async (req, res) => {
    const {id} = req.params;
    
    try {
        const getUserById = await User.findById(id);
        return res.status(200).json(getUserById);
    } catch (error) {
        return res.status(404).json({message : `Utilisateur introuvable`})
    }
    
}

// Edit one user
export const editUser = async (req, res) => {
    const {id} = req.params;
    const {first_name, last_name, email, password} = req.body;

    try {
        const contentToUpdate = {
            first_name,
            last_name,
            email,
            password
        }
        const updateUserById = await User.findByIdAndUpdate(id, contentToUpdate, {'new' : true});
        return res.status(200).json(updateUserById);
    } catch (error) {
        return res.status(404).json({message : `Utilisateur introuvable`})
    }
    
}

//Delete user 
export const deleteUser = async (req, res) => {
    const {id} = req.params;

    try {
        const deleteUserById = await User.findOneAndDelete(id);
        return res.status(200).json(deleteUserById);
    } catch (error) {
        return res.status(404).json({message : `Utilisateur introuvable`})
    }
}