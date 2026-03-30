const express = require("express")
const router = express.Router()
const crypto = require("crypto")
const nodemailer = require("nodemailer")
const otp = require("../Middleware/Otp")

router.post("/sendmail" , otp,(req,res)=> {
    try {
        
        async function sendMail() {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
            user: "isd20t22@gmail.com",
            pass: "pawt oxbk amls pxkf" // NOT your real password
            }
        });

        let info = await transporter.sendMail({
            from: '"Edu Track" isd20t22@gmail.com>',
            to: `${req.body.email}`,
            subject: "OTP-EduTrack",
            text: `EduTrack`,
            html: `<b>This is a test email ${req.user}</b>`
        });

        console.log("Message sent:", info.messageId);
        }           

        sendMail();

        res.status(200).json({message : "email send"})
    } catch (error) {
        console.log("Email Is not verified : ", error.message)
        res.status(500).json({message : "email not send"})
    }
    
})

module.exports = router