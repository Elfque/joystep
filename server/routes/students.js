const express = require("express");
const sessionModel = require("../models/session");
const resultModel = require("../models/result");
const studentModel = require("../models/studentModel");
const resultObj = require("../constants/result_sample");

const router = express.Router();

// CREATE STUDENT
router.post("/create", async (req, res) => {
  const { firstName, lastName, studentClass } = req.body;

  try {
    let sessions = await sessionModel.find({}).sort({ createdAt: -1 });
    let student = await studentModel.findOne({
      firstName,
      lastName,
      session: sessions[0]._id,
      studentClass,
    });

    if (student) return res.status(400).json({ msg: "Student already exists" });

    student = new studentModel({
      ...req.body,
      session: sessions[0]._id,
    });

    const savedStudent = await student.save();

    let studentResult = new resultModel({
      student: savedStudent._id,
      session: sessions[0]._id,
      result: resultObj,
    });
    await studentResult.save();

    res.status(201).json({ msg: "Success", savedStudent });
  } catch (error) {
    console.log(error.message);
    res.send("Server Error");
  }
});

// GET ONE STUDENT
router.get("/:studentId", async (req, res) => {
  const { studentId } = req.params;

  try {
    // const student = await studentModel.findById(studentId);
    const result = await resultModel
      .find({ student: studentId })
      .sort({ createdAt: -1 })
      .populate("student")
      .populate("session");

    res.send({ result: result[0] });
  } catch (error) {
    console.log(error.message);
    res.send("Server Error");
  }
});

// GET ALL STUDENTS
router.get("/", async (req, res) => {
  try {
    let sessions = await sessionModel.find({}).sort({ createdAt: -1 });
    const student = await studentModel
      .find({ session: sessions[0]._id })
      .populate("session");

    res.send({ student });
  } catch (error) {
    console.log(error.message);
    res.send("Server Error");
  }
});

// GET ALL STUDENTS IN A CLASS
router.get("/class/:studentClass", async (req, res) => {
  const { studentClass } = req.params;

  try {
    let sessions = await sessionModel.find({}).sort({ createdAt: -1 });
    const student = await studentModel
      .find({ session: sessions[0]._id, studentClass })
      .populate("session");

    res.send(student);
  } catch (error) {
    console.log(error.message);
    res.send("Server Error");
  }
});

module.exports = router;
