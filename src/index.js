const express = require("express")
const app = express()
const port = 3300 || process.env.PORT

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





app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})
