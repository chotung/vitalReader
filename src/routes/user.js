const express = require("express")
const router = express.Router()
const User = require("../models/User")

// GET DATA FOR FRONTEND
router.get("/user", async (req, res) => {
    const allUsers = await User.find({})
    res.json(allUsers)
})
// UPDATES DATA FROM FRONTEND TO BACK
router.put("/user/vitals", async (req, res) => {
    const {temp, systolic, dystolic, sp02, pulseRate } = req.body
    const { _id } = req.body
    const filter = { _id }
    const update = { 
        temp,
        systolic,
        dystolic,
        sp02,
        pulseRate
    }
    try {
        const user = await User.findOneAndUpdate(filter, update);
        res.send("updated");

    } catch (error) {
        res.status(404).error(error)
    }
})

module.exports = router