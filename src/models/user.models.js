const { DataTypes } = require("sequelize")
const db = require("../utils/database")


const Users = db.define("users", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING(30),
        
    },
    lastname:{
        type: DataTypes.STRING(30)
    },
    username:{
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
        validate:{
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING(30),
        allowNull: false,

    }

});

module.exports = Users;


// TODO obtener a un usuario con sus publicaciones