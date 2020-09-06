const express = require("express")
const app = express()
const port = 3300 || process.env.PORT

app.use("/api", require("./routes/user.js"))
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})
