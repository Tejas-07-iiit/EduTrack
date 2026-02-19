const express = require("express")
const Attendance = require("../models/Attendance.model")
const Auth = require("../Middleware/Auth")
const router = express.Router()
const Subject = require("../models/subject.model")

router.use(express.json())

const fetchdate = () => {
                   
        }

router.post("/Attendance" , Auth , async (req,res)=>{
    try {
        const userid = req.user.userId 

        const date1 = new Date()
    
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            
            const full_date = days[date1.getDay()] + " - " + date1.getDate() + " " + months[date1.getMonth()] + " " + date1.getFullYear() + " " +  date1.getHours() +  ":" + date1.getMinutes() + ":" + date1.getSeconds() ;
            // console.log(full_date)
            const date = full_date

        const {scode , present , absent} = req.body;

        // console.log(present)

        const user = await Attendance.findOne({userid : userid , scode : scode});
        // console.log(user)

        let pday = user.pday ; 
        let aday = user.aday ; 
        let tday = user.tday+1; 

        let ack;
        if(present){
            // console.log("i am in")
            pday += 1
            ack = await Attendance.updateOne(
                {_id : user._id}, 
                {
                    $set :{
                        pday : pday,
                        tday : tday
                },
                    $push : {
                        "Atime" : {att : "Present" , date : date}
                    }
                }
            )
            }
        
        if(absent) {
            aday += 1
            ack = await Attendance.updateOne(
                {_id : user._id} , 
                {
                    $set :{
                        aday : aday,
                        tday : tday 
                },
                    $push : {
                        Atime : {att : "Absent" , date : date}
                    }
                }
        )
        }
        // console.log(ack)
        if(ack.acknowledged){
            res.status(200).json(user)
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