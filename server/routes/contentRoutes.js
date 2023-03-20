const {postVideo, postMusic, postArticle}=require("../controllers/contentController")
const express=require("express")
const router=express.Router();
const isAuthenticated=require("../auth/auth")


router.route('/postVideo').post(postVideo)
router.route('/postMusic').post(postMusic)
router.route('/postArticle').post(postArticle)
// router.route('/login').post(loginUser)
// router.route('/logout').get(logoutUser)
// router.route('/myPostedItems').get(isAuthenticated,getMyPostedItems)
// router.route("/me").get(isAuthenticated,getMyProfile)

module.exports=router