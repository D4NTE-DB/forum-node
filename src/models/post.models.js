const { DataTypes } = require("sequelize");
const db = require("../utils/database")

const Posts = db.define("posts", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    author:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'author'
    },
    // no puede existir un atributo con el mismo nombre
    // del modelo (el que esta entre comillas despues del define )
    categoryId: { // usamos camelCase en js
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "category_id" // SQL snake_case
    }
}, {
    timestamps: true,
    updatedAt: false,  
})

module.exports = Posts;