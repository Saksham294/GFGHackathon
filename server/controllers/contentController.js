const Music =require("../models/musicModel")
const Video=require("../models/videoModel")
const Article=require("../models/articleModel")



exports.postVideo=async(req,res)=>{
    try {
        const {title,imgUrl,url}=req.body
        let video=await Video.findOne({url})
        if (video) {
            return res
              .status(400)
              .json({ success: false, message: "Video already exists" });
          }
        video=await Video.create({
            title,imgUrl,url
        })
        res.status(200).json({
            success:true,
            message:"Video posted successfully"
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.postMusic=async(req,res)=>{
    try {
        const {title,imgUrl,url}=req.body
        let music=await Music.findOne({url})
        if (music) {
            return res
              .status(400)
              .json({ success: false, message: "Video already exists" });
          }
        music=await Music.create({
            title,imgUrl,url
        })
        res.status(200).json({
            success:true,
            message:"Music posted successfully"
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.postArticle=async(req,res)=>{
    try {
        const {title,imgUrl,url,content}=req.body
        let article=await Article.findOne({url})
        if (article) {
            return res
              .status(400)
              .json({ success: false, message: "Video already exists" });
          }
        article=await Article.create({
            title,imgUrl,url,content
        })
        res.status(200).json({
            success:true,
            message:"Article posted successfully"
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}