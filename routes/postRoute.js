const router = require('express').Router();
const PostController = require('../controllers/postController');
const {auth} = require('../middlewares/authMiddleware');



router.use(auth);

router.get('/', PostController.getAllPosts);

router.get('/my-posts', PostController.getPostsForOneUser);

router.get('/:id', PostController.getOnePost);

router.post('/', PostController.createPost);

router.patch('/:id', PostController.updatePost)

router.delete('/:id', PostController.deletePost);

router.get('/img/:name', PostController.getImage);

module.exports = router;