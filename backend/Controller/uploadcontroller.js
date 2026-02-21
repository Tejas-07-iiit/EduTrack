const sharp = require("sharp")
const path = require("path")
const user = require("../models/user.model")

const upload = async (req , res) => {
    try {
        const uid = req.user.userId

        const opath = path.join(__dirname,"../uploads" , `${uid}.webp`)

        await sharp(req.file.buffer).resize(300,300).webp({quality:80}).toFile(opath)
        
        await user.findByIdAndUpdate(uid , 
            {profileimage : opath}
        )

        res.status(200).json({
            message : "Image Uploaded",
            image : opath
        })

    } catch (error) {
        res.status(500)   
        console.log("something went wrong : " , error.message)
    }
}

module.exports = upload;