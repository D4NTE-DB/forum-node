const Answers = require("../models/answer.models");
const Posts = require("../models/post.models");

class AnswersServices {
    static async create(newAnswer) {
        try {
            const result = await Answers.create(newAnswer)
            return result;
        } catch (error) {
            throw error
        }
    }
    
}

module.exports = AnswersServices;