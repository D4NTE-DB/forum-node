const { Router } = require('express');
const Categories = require('../models/category.models');
const Posts = require('../models/post.models');
const Users = require('../models/user.models');
const { createUser, updateUser } = require("../controllers/user.controllers");
const { createUserValidator } = require('../validators/user.validators');


const router = Router();

// * SELECT * FROM users JOIN posts ON user.id-post.author WHERE users.id-1;

router.get('/api/v1/users/:id/posts', async (req, res) => {
    try {
        const { id } = req.params
        const userPosts = await Users.findByPk(id, {
            attributes: ["username"],
            include: {
                model: Posts,
                attributes: ["title"],
                include: {
                    model: Categories,
                    attributes: ["name"]
                }
            },
        })
        res.json(userPosts)
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post("/api/v1/users", createUserValidator ,createUser)
router.put("/api/v1/users", updateUser)


module.exports = router;

//TODO
// * Users
// * crear usuarios
// * editar usuarios
// ! Posts
// ! un usuario pueda crear una publicacion
// ! un usuario pueda editar una publicacion
// ! un usuario pueda obtener todsa las publicaciones
// ! un usuario pueda obtener una publicacion con todos sus mensajes
// ! publicacion debe incluir su author al igual que el mensaje
// Answers
// un usuario puede crear una respuesta para una publicacion
// un usuario puede editar su respuesta
// un usuario pueda elimiar una respuesta