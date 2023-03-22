const Users = require("./user.models")
const Posts = require("./post.models")
const Categories = require("./category.models");
const Answers = require("./answer.models");

const initModels = () => {
    // TODO relacion entre Users y Posts
    // * BelongsTo
    // * hasMany

    // user_id fk 

    Users.hasMany(Posts, {foreignKey: 'author'});
    Posts.belongsTo(Users, {foreignKey: 'author'}); 

    Categories.hasMany(Posts, {foreignKey: 'category_id'})
    Posts.belongsTo(Categories, {foreignKey: "category_id"})

    Posts.hasMany(Answers, {foreignKey: "postId"})
    Answers.belongsTo(Posts, { foreignKey: "postId" });

    Users.hasMany(Answers, {foreignKey: "author"})
    Answers.belongsTo(Users, {foreignKey: "author"})
}

module.exports = initModels;