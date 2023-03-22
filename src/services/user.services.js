const Users = require("../models/user.models")


class UsersServices {
    static async create(newUser){
        try {
            const userCreated = await Users.create(newUser)
            return userCreated;
        } catch (error) {
            throw error;
        }
    }
    static async update(id, updateUserData) {
        try {
            const updateUser = await Users.update(updateUserData, {
                where: { id }
            })
            return updateUser;
        } catch (error) {
            throw error
        }
    }
}

module.exports = UsersServices;