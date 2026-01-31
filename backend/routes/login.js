const express = require("express")
const router = express.Router();
const jwt = require("jsonwebtoken")

const cookieParser = require("cookie-parser");
router.use(cookieParser());
const User = require("../models/user.model")

// End Point -> Login
router.post("/login" , async (req,res)=>{
    
    try {
        const loginuser = await User.findOne({email:req.body.email})
        // Access Token 
        
        if (loginuser && (req.body.password === loginuser.password)) {
            const accessToken = jwt.sign(
           {
               userId: loginuser._id,
               email: loginuser.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "30m"
            }
        );
        //    console.log(accessToken)
        res.cookie("token", accessToken, {
            httpOnly: true,
            sameSite: "lax",
            secure: false
        });
        
        res.status(200).send(loginuser);
        
        console.log("User succesfully logged in");
    }
    
    else {
        console.log("Invalid Credentials")
        res.status(401)
        res.send()
    }
    
} catch (error) {
    res.status(500).json("Error")
    console.log("Failed to login : ", error.message)
    }
})

module.exports = router;