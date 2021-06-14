const Post = require("../models/Post");

// Get all posts
exports.getPosts = async() => {
    try{
        let posts = await Post.find();
        return posts;
    }
    catch(e) {
        return [];
    }

}

// Fetches all the post for a user
exports.getPostsByUser = async(userId)=> {
    try {
        let posts = await Post.find({user: userId});
        return posts;
    } catch(e) {
        return []
    }
}

// create a post
exports.createPost = async(title, body, userId, fileName) => {
    try {
        let post = new Post();
        post.title = title;
        post.body = body;
        post.user = userId;
        post.image = fileName;
        post.save();
    
        return post;
    } catch(e) {
        return false;
    }
}

// Get one post 
exports.getOnePost = async (postId) => {
    let post = await Post.findById(postId);
    return post;
}

// Edit a post
exports.editPost = async(postId, title, body) => {
    let post = await Post.findById(postId);
    if(!post){
        return false;
    }
    post.title = title;
    post.body = body;
    post.save();
    return post;
}

// Delete a post
exports.deletePost = async(postId) => {
    let post = await Post.findOneAndDelete({_id: postId});
    return post;
}
