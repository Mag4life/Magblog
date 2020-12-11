const router = require('express').Router()

const {getPosts, getPost, addPost, updatePost, deletePost} = require('../controllers/post')


router.get("/api/posts/", getPosts)
router.get("/api/posts/:id", getPost)
router.post("/api/posts/new/", addPost)
router.put("/api/posts/:id", updatePost)
router.delete("/api/posts/:id", deletePost)


module.exports = router
