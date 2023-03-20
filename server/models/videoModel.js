const mongoose=require("mongoose")

const videoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    imgUrl:{
        type:String,
    },
    url:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Video",videoSchema)