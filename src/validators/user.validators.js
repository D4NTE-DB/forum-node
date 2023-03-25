const { check, validationResult } = require("express-validator");
const validateResult = require("../utils/validate");


const createUserValidator = [
    check("username", "El nombre de usuario no debe estar vacio")
        .exists()
        .withMessage("el username debe existir")
        .notEmpty()
        .withMessage('El username no debe estar vacío')
        .isString()
        .withMessage("el username debe ser un string")
        .isLength({ min: 6 })
        .withMessage("El username debe tener una longitud minima de 6 caracteres"),

    check("email", "Error con el correo electronico")
        .exists()
        .withMessage("No se encontro la propiedad email")
        .notEmpty()
        .withMessage("No se encontro un valor para el email")
        .isString()
        .isLength({ min: 7, max: 50 })
        .withMessage("debe tener entre 7 y 50 caracteres"),

    check("password", "Error con la contraseña")
        .exists()
        .notEmpty()
        .isString()
        .isLength({ min: 6 })
    ,
    (req, res, next) => {
        validateResult(req, res , next)
    }
    
];

const updateUserValidator = []

module.exports = {
    createUserValidator
}
