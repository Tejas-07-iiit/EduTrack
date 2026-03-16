const express = require("express")
const router = express.Router()
const News = require("../models/news.model")

router.post("/news",async (req,res)=>{
    try {
        const email = req.body.email

        const usr = new News({
            email : email
        })
        await usr.save()
        res.send(200).json("Email add in news")

    } catch (error) {
        console.log("Something went wrong in news : ",error.message)
        res.status(500)
    }
})

module.exports = router