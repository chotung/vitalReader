const express = require("express")
const router = express.Router()
// const User = require("../model/User")

// GET DATA FOR FRONTEND
router.get("/user", async (req, res) => {
    res.send("send user data to front")
})
// POST DATA FROM FRONTEND TO BACK
router.post("/user/vitals", async (req, res) => {
    // const {temp, bloodPressure, oximeter} = req.body.vitals
    // 
    res.send("hey you updated your vitals")
})

module.exports = router