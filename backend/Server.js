const express = require("express")
const connect = require("./config/db")
const app = express();
const cors = require("cors");

// Fix CORS - Allow multiple origins
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
  "http://localhost:3003",
  "https://edu-track-blush.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    console.log("Incoming origin:", origin);

    if (!origin) return callback(null, true);

    if (
      allowedOrigins.includes(origin) ||
      origin.endsWith(".vercel.app")
    ) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true
}));

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Body Access
app.use(express.json())

// connect With MongoDb
connect();

// Routes

// For Login
app.use("/api/" , require("./routes/login"))

// For Register
app.use("/api/", require("./routes/Register"))

// For Refresh
app.use("/api/" , require("./routes/Refresh"))

// For Add Subject and Attendance initialize
app.use("/api/" , require("./routes/AddSubject"))

// For Update Attendance 
app.use("/api/",  require("./routes/Attendance"))

// For Fetching All Subjects
app.use("/api/",require("./routes/Allsubject"))

// Delete Subject 
app.use("/api/" , require("./routes/DeleteSubejct"))

// For Fetching All Attendance
app.use("/api/" , require("./routes/Allattendance"))

// Edit initial Attendance
app.use("/api/" , require("./routes/EditAttendance"))

// serve static file (Profile image)
app.use("/api/uploads", express.static("uploads"));

// Use routes
app.use("/api", require("./routes/upload"));

// For Logout 
app.use("/api" , require("./routes/logout"))

// For fetch profile
app.use("/api" , require("./routes/Profile"))

// Send msg in contact page
app.use("/api",require("./routes/Msg"))

// NewsNewsletter emails 
app.use("/api",require("./routes/News"))

// send mail
app.use("/api",require("./routes/Email"))

// verify email
app.use("/api" ,require("./routes/EmailVerify"))

app.listen(process.env.PORT, ()=> {
  console.log("Your Server is running on port  : " , process.env.PORT)
})