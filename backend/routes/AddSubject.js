const express = require("express")
const Subject = require("../models/subject.model")
const Auth  = require("../Middleware/Auth")
const Attendance = require("../models/Attendance.model")

const router = express.Router()
router.use(express.json())

router.post("/addsubject" , Auth , async (req,res) => {

    try {
        const {sname , scode , credit , facultyname}  = req.body

        // console.log(req.body,"asdfasd")
        // console.log(req.user)

        const subject = new Subject({
            userid : req.user.userId,
            sname : sname,
            scode :scode,
            credit : credit,
            facultyname : facultyname
        })

        await subject.save();
        const sub = await Subject.find({userid : req.user.userId})
        // console.log(subject_id , "asdc")

        console.log(scode)
        const fsub = await Subject.find({scode:scode})
        console.log(fsub)

        const attendance = new Attendance({
            scode : fsub[0]._id,
            userid : req.user.userId,
            pday : 0,
            aday : 0,
            tday : 0
        })
        
        await attendance.save()

        console.log("Subject added successfully");
        res.status(200).json({sname,scode,credit,facultyname});
    }
    catch(error) {
        res.status(500).json("Error")
        console.log("Something went wrong : ",error.message);
    }
})

module.exports = router;