const crypto = require("crypto")

const otp = (req,res,next) => {
    
    const num = crypto.randomInt(10**7, 10**8);
    console.log(num,"asfsf");
    
    req.user = num

    // if(!otp1) {
    //     console.log("There is no otp")
    // }
    next()
}

module.exports = otp