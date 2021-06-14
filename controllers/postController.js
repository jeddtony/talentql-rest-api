const {successResponse, errorResponse, notFoundResponse} = require('../helpers');
const uploadImageMiddleware = require('../middlewares/uploadImageMiddleware');
const PostRepository = require('../repository/postRepository');

exports.getAllPosts = async(req, res, next) => {
    let posts = await PostRepository.getPosts();
    return successResponse(res, 'All posts', posts);
}

// This should be used when displaying a users feed
// It displays the posts of the signed in user
exports.getPostsForOneUser = async(req, res, next) => {
    let userId = req.user._id;
    let userName = req.user.name;
    // console.log(user);
    let posts = await PostRepository.getPostsByUser(userId);
    return successResponse(res, `Posts for ${userName}`, posts);
}

// This returns a single post
exports.getOnePost = async(req, res, next) => {
    let postId = req.params.id;

    let post = await PostRepository.getOnePost(postId);
    if(!post){
        return notFoundResponse(res, 'This post does not exist', {});
    }
    return successResponse(res, 'Post detail', post);
}

exports.createPost = async(req, res, next) => {

    // process.exit();


    await uploadImageMiddleware(req, res)

    // console.log('showing the req file', req.files);
    // process.exit();
        let {title, body} = req.body;
    if(!title) {
        return errorResponse(res, 'Title is required', {title, body});
    }

    if(!body){
        return errorResponse(res, 'Body is required', {title, body});
    }
    let fileName;
    if(req.files && req.files[0]){
        fileName = req.files[0].originalname;
    }

    console.log('this is the file name', fileName);

    let userId = req.user._id;
    let post ;
    if(fileName){
        post = await PostRepository.createPost(title, body, userId, __baseUrl + '/posts/img/' + fileName);
    } else{
        post = await PostRepository.createPost(title, body, userId);
    }
    
    if(!post){
        return errorResponse(res, 'Error storing post', {title, body});
    }
    return successResponse(res, 'Post created successfully', post);
}

exports.updatePost = async (req, res, next) => {
    let postId = req.params.id;
    let {title, body} = req.body;
    if(!title){
        return errorResponse(res, 'Title is required', {title, body});
    }

    if(!body){
        return errorResponse(res, 'Body is required', {title, body});
    }
    let post = await PostRepository.editPost(postId, title, body);
    if(!post){
        return notFoundResponse(res, 'The selected post does not exist', {title, body});
    }

    return successResponse(res, 'Post updated successfully', post);
}

exports.deletePost = async (req, res, next) => {
    let postId = req.params.id;

    let post = await PostRepository.deletePost(postId);
    if(!post){
        return notFoundResponse(res, 'The selected post does not exist')
    }

    return successResponse(res, 'The selected post has been deleted', post);
}

exports.getImage = async(req, res) => {
    let {name} = req.params;
    return res.sendFile(__basedir + '/storage/uploads/' + name);
}