const mongoose=require("mongoose")

const doctorModel=new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Please enter a name"],
    },
    avatar: {
        public_id: String,
        url: String,
      },
    email:{
        type:String,
        required: [true, "Please enter an email"],
        unique: [true, "Email already exists"],
    },
    password:{
        type:String,
        required: [true, "Please enter a password"],
    },
    city:{
        type:String,
        required: [true, "Please enter your city"],
    },
    isDoctor:{
        type:Boolean,
    }
})

module.exports=mongoose.model("Doctor",doctorModel)