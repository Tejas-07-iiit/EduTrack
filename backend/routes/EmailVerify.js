const express = require("express")
const { validOtps } = require("../MemoryBank");
const router = express.Router()

router.post("/emailverify", (req,res)=> {
    try {
        const providedOtp = req.body.otp;
        console.log("Verifying token:", providedOtp);

        if (!validOtps.has(providedOtp)) {
           return res.json({message : "Otp Is not valid"})
        }
        
        validOtps.delete(providedOtp); // Prevent reuse of the OTP
        res.status(200).json({message : "email is verified"})
        
    } catch (error) {
        console.log("Email Is not verified : ", error.message)
        res.status(500).json({message : "email is not verified"})
    }
})

module.exports = router