const { DataTypes } = require("sequelize");
const db = require("../utils/database")

const answers = db.define("answers", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    author: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // field: "post_id"
    },
},
    {
        timestamps: true,
        updatedAt: false
    }
) 

module.exports = answers;