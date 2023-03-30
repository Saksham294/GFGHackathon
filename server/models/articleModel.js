const mongoose=require("mongoose")


const articleSchema=new mongoose.Schema({
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
    },
    content:{
        type:String,
        required:true,
    },
    category:{
        type:String,

    },
})


module.exports=mongoose.model("Article",articleSchema)