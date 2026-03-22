const express = require("express")
const router = express.Router();
const controller = require("./readings_controller")
const {verifyToken,  verify_A, verify_APND} = require("./verify_token.js")


router.route("/")
     .get(verifyToken,verify_A,controller.getAllReadings)   //   verifyToken,verify_A,
     

router.route("/add")                   
     .post(controller.addNewReading);   // allowed for iot


router.route("/:id")
     .get(verifyToken,verify_APND,controller.getDevReadingById)    //     verifyToken,verify_APND,

module.exports = router ; 