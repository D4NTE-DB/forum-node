const Answers = require("../models/answer.models");
const Posts = require("../models/post.models");
const Categories = require("../models/category.models");
const Users = require("../models/user.models");

class PostsServices {
    static async create(newPost) {
        try {
            const result = await Posts.create(newPost)
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async postWithAnswers(postId) {
        try {
            const result = await Posts.findByPk(postId, {
                attributes: { exclude: ["categoryId"] },
                include: [
                    {
                        model: Answers,
                        include: {
                            model: Users,
                            attributes: ["username"]
                        }

                    },
                    {
                        model: Categories,
                        attributes: ["name"]
                    } //estan al mismo nivel por eso se usan de esta manera
                ],
            })
            return result;
        } catch (error) {
            throw error
        }
    }

    static async getAll() {
        try {
            const result = await Posts.findAll({
                attributes: {
                    exclude: [
                        "description",
                        "categoryId",
                        "author",
                        "category_id"
                    ]
                },
                include: [{
                    model: Users,
                    attributes: ["username"]
                },
                {
                    model: Categories,
                    attributes: ["name"]
                }]
            })
            return result;
        } catch (error) {
            throw error
        }
    }

    static async update(newData, id) {
        try {
            const result = await Posts.update(newData, {
                where: { id }
            });
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = PostsServices;