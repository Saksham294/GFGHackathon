const Music = require("../models/musicModel")
const Video = require("../models/videoModel")
const Article = require("../models/articleModel")
const Post = require("../models/postModel")
const cloudinary = require("cloudinary")
const Doctor = require("../models/doctorModel")


exports.postVideo = async (req, res) => {
    try {
        const { title, imgUrl, url, category } = req.body
        let video = await Video.findOne({ url })
        if (video) {
            return res
                .status(400)
                .json({ success: false, message: "Video already exists" });
        }

        const myCloud = await cloudinary.v2.uploader.upload(imgUrl, {
            folder: "video_thumbnails"
        })

        video = await Video.create({
            title, imgUrl: {
                public_id: myCloud.public_id, url: myCloud.secure_url
            },url,
            category
        })
        res.status(200).json({
            success: true,
            message: "Video posted successfully"
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.postMusic = async (req, res) => {
    try {
        const { title, imgUrl, url, category } = req.body
        let music = await Music.findOne({ url })
        if (music) {
            return res
                .status(400)
                .json({ success: false, message: "Video already exists" });
        }
        const myCloud = await cloudinary.v2.uploader.upload(imgUrl, {
            folder: "music_thumbnails"
        })
        music = await Music.create({
            title,  imgUrl: {
                public_id: myCloud.public_id, url: myCloud.secure_url
            },url, category
        })
        res.status(200).json({
            success: true,
            message: "Music posted successfully"
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.postArticle = async (req, res) => {
    try {
        const { title, imgUrl, url, content, category } = req.body
        let article = await Article.findOne({ url })
        if (article) {
            return res
                .status(400)
                .json({ success: false, message: "Video already exists" });
        }

        const myCloud = await cloudinary.v2.uploader.upload(imgUrl, {
            folder: "article_thumbnails"
        })

        article = await Article.create({
            title, imgUrl: {
                public_id: myCloud.public_id, url: myCloud.secure_url
            }, url, content, category
        })
        res.status(200).json({
            success: true,
            message: "Article posted successfully"
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.getAllVideos = async (req, res) => {
    try {
        const videos = await Video.find()
        res.status(200).json({
            success: true,
            videos
        })

    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find()
        res.status(200).json({
            success: true,
            articles
        })

    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.getAllMusic = async (req, res) => {
    try {
        const music = await Music.find()
        res.status(200).json({
            success: true,
            music
        })

    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.filterVideosByCategory = async (req, res) => {
    try {
        const videos = await Video.find({ category: req.params.category })
        res.status(200).json({
            success: true,
            videos
        })

    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.filterMusicByCategory = async (req, res) => {
    try {
        let music = await Music.find({})

        music = music.filter((item) => item.category === req.params.category)
        res.status(200).json({
            success: true,
            music
        })

    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.filterArticlesByCategory = async (req, res) => {
    try {
        const articles = await Article.find({ category: req.params.category })
        res.status(200).json({
            success: true,
            articles
        })

    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.newPost = async (req, res) => {
    try {
        const { title, description, image } = req.body;
        const doctor = await Doctor.findById(req.doctor._id)

        const myCloud = await cloudinary.v2.uploader.upload(image, {
            folder: "posts_images"
        })


        const post = await Post.create({
            title, description,
            image: {
                public_id: myCloud.public_id, url: myCloud.secure_url
            }
            ,doctor
        })

        doctor.posts.push(post._id)

        res.status(200).json({
            success: true,
            post
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("doctor")
        res.status(200).json({
            success: true,
            posts
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate("doctor")
        res.status(200).json({
            success: true,
            post
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}