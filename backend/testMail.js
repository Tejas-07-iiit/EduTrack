require("dotenv").config();
const nodemailer = require("nodemailer");

async function test() {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        logger: true,
        debug: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS
        }
    });

    try {
        await transporter.verify();
        console.log("Success!");
    } catch(err) {
        console.error("Error:", err);
    }
}
test();
