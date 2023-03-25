const PostsServices = require("../services/post.services");




const createPost = async (req, res) => {
    try {
        const newPost = req.body
        const result = await PostsServices.create(newPost)
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error);
    }

};

const getPostWithAnswers = async (req, res) => {
    try {
        const { postId } = req.params;
        const postWithAnswers = await PostsServices.postWithAnswers(postId)
        res.json(postWithAnswers)
    } catch (error) {
        res.status(400).json(error)
    }
};

const getAllPosts = async (req, res) => {
    try {
        const posts = await PostsServices.getAll()
        res.json(posts)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const newData = req.body;
        await PostsServices.update(newData, id);
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createPost, getPostWithAnswers,getAllPosts, updatePost
}