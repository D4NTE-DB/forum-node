const { Router } = require("express");
const { createPost, getPostWithAnswers, getAllPosts, updatePost } = require("../controllers/post.cotrollers");

const router = Router();

router.get("/api/v1/posts", getAllPosts )

router.post("/api/v1/posts", createPost)

router.get("/api/v1/posts/:postId/answers", getPostWithAnswers)

router.put("/api/v1/posts/:id", updatePost)
//editar una publicacion 
module.exports = router;