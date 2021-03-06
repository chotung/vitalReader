const express = require("express")
const app = express()
const port = process.env.PORT || 3300

require("dotenv").config()
const mongoose = require("mongoose")

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const db = mongoose.connection
db.on("error", console.error.bind(console, "Connection Error:"))
db.once("open", () => {
    console.log("We're connected!");
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api", require("./routes/user.js"))

app.get("/", (req, res) => {
    res.send("Welcome to Vital Reader API")   
})




app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})
