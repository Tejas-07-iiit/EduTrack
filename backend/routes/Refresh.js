const express = require("express")
const router = express.Router();
require("dotenv").config()

const cookieParser = require("cookie-parser");
router.use(cookieParser());

let count = 0;
router.post("/refresh", (req, res) => {    
    
    try {
        const token = req.cookies.token; 
        
        if (!token && count != 0) {
            count += 1;
            return res.status(401).json({ message: "Unauthorized" });
        }
        
        const dc = jwt.verify(token, process.env.JWT_SECRET);

        return res.status(200).json({dc});
        
    }
    catch (error) {
        if(count !== 0){
            console.log("something went wrong : " , error.message)
            return res.status(401).json({ message: "Invalid token" });
        }
    }
});

module.exports = router;