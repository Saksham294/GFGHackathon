const mongoose=require("mongoose")

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required: [true, "Please enter a title"],
    },
    description:{
        type:String,
        required: [true, "Please enter a description"],
    },
    image:{
        public_id: String,
        url: String,
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor",

    },
})


module.exports=mongoose.model("Post",postSchema)