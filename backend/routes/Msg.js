const express = require("express")
const Auth = require("../Middleware/Auth")
const Router = express.Router()
const Message = require("../models/msg.model")

Router.post("/msg",Auth,async (req,res)=> {

    try {
        const bd = req.body
        // console.log(bd)

        const m = await new Message({
            email : bd.email,
            Msg : bd.Msg
        })

        await m.save()
        res.status(200).json("Send Successfully")

    } catch (error) {
        console.log("Something Went to wrong in the Message : " , error.message)
    }
})

module.exports = Router