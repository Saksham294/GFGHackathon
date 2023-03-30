const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

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
    phone:{
        type:String,
        required: [true, "Please enter your phone number"],
    },
    latitude:{
        type:Number,
    },
    longitude:{
        type:Number,
    },
    isDoctor:{
        type:Boolean,
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    }],
})

doctorModel.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,10)
    }
  
    next()
  })

  doctorModel.methods.getJWTToken=function(){
    return jwt.sign({_id:this._id},process.env.JWTKEY,
        {expiresIn:"5d"})
}
doctorModel.methods.comparePassword=async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
}


module.exports=mongoose.model("Doctor",doctorModel)