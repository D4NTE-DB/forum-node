const { Router } = require("express");
const { createPost, getPostWithAnswers } = require("../controllers/post.cotrollers");

const router = Router();

router.post("/api/v1/posts", createPost)

router.get("/api/v1/posts/:postId/answers", getPostWithAnswers)

module.exports = router;