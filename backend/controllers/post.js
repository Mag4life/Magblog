const Post = require('../models/post')


const controller = {}


/**
 * Gets the list of all posts
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
controller.getPosts = async (request, response) => {
    const posts = await Post.find({})
    response.send(posts)
}


/**
 * Return a single post given the post id
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
controller.getPost = async (request, response) => {
    const id = request.params.id
    await Post.findById(id).exec((error, post) => {
        if (error) return response.status(500).send(error)
        if (!post) return response.status(404).send({error: "No post found", id, post})
        response.send({post})
    })
}


/**
 * The Controller Below Creates a post if user is authenticated
 * In creation of a post you need ==> {title, body}
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
controller.addPost = async (request, response) => {
    const {title, body} = request.body
    if (!request.isAuthenticated) return response.status(401).send({error: "You are not authorized to add post"})

    const post = new Post({title, body})
    post.user = request.user
    try {
        const newPost = await post.save()
        response.status(201).send(newPost)
    } catch (exception) {
        response.status(500).send({error: exception})
    }
}


/**
 * Updates a post by taking in the ID
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
controller.updatePost = async (request, response) => {
    const id = request.param.id
    await Post.findById(id).exec((error, post)=> {
        if (post.user === request.user.id){
            response.send({message: "Matched"})
        } else {
            response.send({message: "NOT Matched"})
        }
    })
    // await Post.findByIdAndUpdate(id, request.body, (error, post) => {
    //     error ? response.status(500).send({error: "Internal Server Error"}) : {}
    //     response.status(201).send(post)
    // })
}


/**
 * Delete a post given id as params
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
controller.deletePost = async (request, response) => {
    const id = request.body.id
    await Post.findByIdAndDelete(id, (error, post) => {
        error ? response.atus(500).send({error: "Internal Server Error"}) : {}
        response.status(203).send({message: "Post Deleted Successfully"})
    })
}


module.exports = controller