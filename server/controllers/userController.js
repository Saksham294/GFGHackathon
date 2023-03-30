const User = require("../models/userModel")
const Doctor = require("../models/doctorModel")
const Post = require("../models/postModel")

const cloudinary = require("cloudinary")

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, city, avatar } = req.body;
    //get user location using html5 geolocation api



    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const myCloud = await cloudinary.v2.uploader.upload(avatar, {
      folder: "users_avatars"
    })

    user = await User.create({
      name, email, password, city, avatar: {
        public_id: myCloud.public_id, url: myCloud.secure_url
      }

    })

    res.status(200).json({
      user,
      success: true,
      message: "User registered successfully"
    })

  } catch (error) {

    console.log(error)
    res.status(404).json({
      success: false,
      message: error.message
    })
  }
}

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email })
      .select("+password")


    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password",
      });
    }

    const token = await user.getJWTToken();

    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(201).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

exports.logoutUser = async (req, res) => {
  try {
    res.cookie("token", "none", {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true
    });
    res.status(200).json({
      success: true,
      message: "Logged out successfully"
    })

  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message
    })
  }
}

exports.getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

exports.findDoctor = async (req, res) => {
  try {
    const doctors = await Doctor.find({ city: req.user.city })
    res.status(200).json({
      success: true,
      doctors
    })

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })

  }
}

exports.getDoctorProfile = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id)
    res.status(200).json({
      success: true,
      doctor
    })

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })

  }
}

exports.registerDoctor = async (req, res, next) => {
  try {
    const { name, email, avatar, password, phone,
      city
    } = req.body;
    let doctor = await Doctor.findOne({ email });
    if (doctor) {
      return res.status(400).json({ success: false, message: "Doctor already exists" });
    }
    const myCloud = await cloudinary.v2.uploader.upload(avatar, {
      folder: "doctor_avatars"
    })
    doctor = await Doctor.create({
      name, email, password, phone, city, avatar: {
        public_id: myCloud.public_id, url: myCloud.secure_url
      }

    })

    res.status(200).json({
      success: true,
      doctor
    })
  }
  catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}


exports.loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;

    const doctor = await Doctor.findOne({ email })
      .select("+password")
    if (!doctor) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }

    const isMatch = await doctor.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password",
      });
    }

    const token = await doctor.getJWTToken();

    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(201).cookie("token", token, options).json({
      success: true,
      doctor,
      token,
    });

  }
  catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

exports.logoutDoctor = async (req, res) => {
  try {
    res.cookie("token", "none", {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true
    });
    res.status(200).json({
      success: true,
      message: "Logged out successfully"
    })

  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message
    })
  }
}

exports.getDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.doctor._id)
    res.status(200).json({
      success: true,
      doctor,
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

exports.findAllDoctorsNearby = async (req, res) => {
  try {
    

    const doctors = await Doctor.find()

    res.status(200).json({
      success: true,
      doctors
    })

  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: error.message
    })

  }
}

