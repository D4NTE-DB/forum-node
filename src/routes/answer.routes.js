const {Router} = require("express");
const { createAnswer } = require("../controllers/answer.controllers")

const router = Router();

router.post('/api/v1/answers', createAnswer);

module.exports = router;