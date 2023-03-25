const UsersServices = require("../services/user.services")


const createUser = async (req, res) => {
    try {
        const newUser = req.body
        //validar

        const result = await UsersServices.create(newUser)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateUser = async (req, res)=> {
    try {
        const {id} = req.params
        const updateUserData = req.body
        const userUpdated = await UsersServices.update(id, updateUserData)
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createUser,
    updateUser
}