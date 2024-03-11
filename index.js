const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config({ path: "./.env" })

const app = express()

// middlewares
app.use(express.json())
app.use(express.static("uploads")) // for access image data from backend
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

// routes
app.use("/api/admin", require("./routes/adminRoute"))
app.use("/api/public", require("./routes/publicRoute"))
app.use("/api/auth", require("./routes/authRoute"))
app.use("/api/order", require("./routes/orderRoute"))

// 404
app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource not found" })
})

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: err.message || "something went wrong" })
})

// db 
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("Mongo Connected")
    app.listen(process.env.PORT, console.log("Server Running"))
})
