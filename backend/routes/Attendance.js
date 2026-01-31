const express = require("express")
const Attendance = require("../models/Attendance.model")
const Auth = require("../Middleware/Auth")
const router = express.Router()
const Subject = require("../models/subject.model")

router.use(express.json())

router.post("/Attendance" , Auth , async (req,res)=>{
    try {
        const userid = req.user.userId 

        console.log(userid)
        
        const {scode , present , absent} = req.body
        const subject_id = await Subject.findOne({scode : scode})
        
        const user = await Attendance.findOne({userid : userid , scode : subject_id._id})

        console.log(user)

        const pday = user.pday; 
        const aday = user.aday; 
        const tday = user.tday; 

        if(present){
            const ack = await Attendance.updateOne(
                {_id : userid , scode : subject_id._id} , 
                {$set :{
                    pday : pday += 1,
                    tday : tday += 1
                }})
            }
        if(absent) {
            const ack = await Attendance.updateOne(
                {_id : userid , scode : subject_id._id} , 
                {$set :{
                    aday : aday += 1,
                    tday : tday += 1
            }})
        }

        if(ack.acknowledged){
            res.status(200).json({})
        }
        else {
            console.log("Please Try Again")
        }

    } catch (error) {
        res.status(500).json("Error")
        console.log("Something Went Wrong : " , error.message)
    }
})

module.exports = router;