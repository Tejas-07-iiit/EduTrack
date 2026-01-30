const jwt = require("jsonwebtoken");

const Auth = (req,res,next) => {
    const accesstoken = req.cookies.data;
    console.log(accesstoken)
    if(!accesstoken) {
        return res.send("Unautharized").status(401);
    }

    try {
        const dc = jwt.verify(accesstoken , "hi i am tejas")
        req.user = dc;
        next();
    } catch (error) {
        console.log("Unautharized account")
    }
}

export default Auth;