const express = require("express")
const router = express.Router()

router.post("/logout" , (req,res)=> {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none"
});
    res.json({message:"User Logout"})
})

module.exports = router;