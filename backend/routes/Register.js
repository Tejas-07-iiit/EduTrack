const express = require("express")
const User = require("../models/user.model")
const router = express.Router();


// End Point -> Register
router.post("/register", async (req,res) => {
    try {
        const newuser = new User({
            f_name : req.body.f_name,
            l_name : req.body.l_name,
            email : req.body.email,
            password : req.body.password
        })
        
        await newuser.save()
        console.log("object")

        res.json({
            name : req.body.name
        })
    } catch (error) {
        res.status(500).json("Error")
        console.log("Something went wrong : " , error.message)
    }
})

module.exports = router;