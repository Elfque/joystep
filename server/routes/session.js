const express = require("express");
const sessionModel = require("../models/session");

const router = express.Router();

// CREATE USER
router.post("/create", async (req, res) => {
  const { name } = req.body;

  try {
    let session = await sessionModel.findOne({ name });

    if (session) return res.status(400).json({ msg: "Session already exists" });
    session = new sessionModel({ name });
    const savedSession = await session.save();

    res.status(201).json({ msg: "Success", savedSession });
  } catch (error) {
    console.log(error.message);
    res.send("Server Error");
  }
});

router.get("/", async (req, res) => {
  try {
    let sessions = await sessionModel.find({});
    res.send(sessions);
  } catch (error) {
    console.log(error.message);
    res.send("Server Error");
  }
});

module.exports = router;
