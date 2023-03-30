const { postVideo,
    postMusic,
    postArticle,
    getAllArticles,
    getAllVideos,
    getAllMusic,
    filterArticlesByCategory,
    filterMusicByCategory,
    filterVideosByCategory,
    newPost,
    getPost,
    getPosts
} = require("../controllers/contentController")
const express = require("express")
const router = express.Router();
const isAuthenticated = require("../auth/auth")
const isDocAuthenticated = require("../auth/docAuth")


router.route('/postVideo').post(postVideo)
router.route('/postMusic').post(postMusic)
router.route('/postArticle').post(postArticle)
router.route('/getAllVideos').get(getAllVideos)
router.route('/getAllArticles').get(getAllArticles)
router.route('/getAllMusic').get(getAllMusic)
router.route('/filterArticlesByCategory').get(filterArticlesByCategory)
router.route('/filterMusicByCategory').get(filterMusicByCategory)
router.route('/filterVideosByCategory').get(filterVideosByCategory)
router.route('/newPost').post(isDocAuthenticated,newPost)
router.route('/getPost').get(getPosts)
router.route('/getPost/:id').get(getPost)



module.exports = router