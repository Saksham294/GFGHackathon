const { registerUser,
    loginUser,
    logoutUser,
    getMyProfile,
    getDoctorProfile,
    loginDoctor,
    registerDoctor,
    getDoctor,
    findAllDoctorsNearby,
logoutDoctor } = require("../controllers/userController")
const express = require("express")
const router = express.Router();
const isAuthenticated = require("../auth/auth")
const isDocAuthenticated = require("../auth/docAuth")


router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route("/me").get(isAuthenticated, getMyProfile)
router.route('/logout').get(logoutUser)
router.route("/doctors").get(findAllDoctorsNearby)
router.route("/doctors/:id").get(isAuthenticated, getDoctorProfile)
router.route("/doctor/register").post(registerDoctor)
router.route("/doctor/login").post(loginDoctor)
router.route("/doctor/logout").get(logoutDoctor)
router.route("/doctor/me").get(isDocAuthenticated, getDoctor)



module.exports = router