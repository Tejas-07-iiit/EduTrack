const express = require("express")
const otp = require("../Middleware/Otp")
const router = express.Router()

router.post("/emailverify",otp,(req,res)=> {
    try {
        if(req.body.otp !== req.user){
           res.json({message : "Otp Is not valid"})
            return 
        }
        else {
            res.status(200).json({message : "email is verified"})
        }
    } catch (error) {
        console.log("Email Is not verified : ", error.message)
        res.status(500).json({message : "email is not verified"})
    }
    
})

module.exports = router