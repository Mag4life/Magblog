const mongoose = require('mongoose')

const User = require('./user')

const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now},
    likes: {type: Number, default: 0},
    disLikes: {type: Number, default: 0},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})


postSchema.set('toJSON', {
    transform: (doc, post) => {
        post.id = post._id.toString()
        delete post._id
        delete post.__v
    }
})


const Post = mongoose.model('Post', postSchema)


module.exports = Post