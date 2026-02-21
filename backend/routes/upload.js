const express = require("express")
const Auth = require("../Middleware/Auth")
const upload = require("../Middleware/upload")
const router = express.Router()
const uploadcontroller = require("../Controller/uploadcontroller")

router.post("/profile-picture" ,Auth, upload.single("profile"), uploadcontroller) 

module.exports = router