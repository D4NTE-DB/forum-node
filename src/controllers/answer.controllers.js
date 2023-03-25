const AnswersServices = require("../services/answer.services");
const PostsServices = require("../services/post.services");

const createAnswer = async (req, res) => {
    try {
        const newAnswer = req.body
        const answer = await AnswersServices.create(newAnswer);
        res.status(201).json(answer);
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteAnswer = async (req, res) => {
    try {
        const {id} = req.params;
        await AnswersServices.delete(id)
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createAnswer, deleteAnswer
}