require("dotenv").config()
const mongoose = require("mongoose");
const seeder = require("mongoose-seed");

const data = [{
    model: "User",
    documents: [{
        name: "Charles",
        temp: 0,
        systolic: 0,
        dystolic: 0,
        sp02: 0,
        pulseRate: 0
    }]
}];

// Connect to MongoDB via Mongoose
seeder.connect(process.env.DB_URL, function () {
    // Load Mongoose models
    seeder.loadModels(["src/models/User.js"]);

    // Clear specified collections
    seeder.clearModels(["User"], function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
            seeder.disconnect();
        });
    });
});