const express = require("express")
const router = express.Router()
const User = require("../models/User")

// GET DATA FOR FRONTEND
router.get("/user", async (req, res) => {
    const allUsers = await User.find({})
    res.json(allUsers)
})
// POST DATA FROM FRONTEND TO BACK
router.post("/user/vitals", async (req, res) => {
    // console.log(req.body);
    const {temp, systolic, dystolic, sp02, pulseRate } = req.body.vitals
    const { _id } = req.body
    const filter = { _id }
    const update = { 
        temp,
        systolic,
        dystolic,
        sp02,
        pulseRate
    }
    const user = await User.findOneAndUpdate(filter, update)
    const updated = await User.findOne(filter)
    res.json(updated)
})

module.exports = router