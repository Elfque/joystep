const express = require("express");
const resultModel = require("../models/result");
const studentModel = require("../models/studentModel");

const router = express.Router();

// UPDATE RESULT
router.post("/:resultId", async (req, res) => {
  const { resultId } = req.params;
  const { result } = req.body;

  try {
    let student = await resultModel.updateOne(
      { _id: resultId },
      { $set: { result: result } }
    );

    res.status(201).json({ msg: "Success", student });
  } catch (error) {
    console.log(error.message);
    res.send("Server Error");
  }
});

// GET STUDENT RESULT
router.get("/:studentId", async (req, res) => {
  const { studentId } = req.params;

  try {
    const result = await resultModel.find({ student: studentId });

    res.status(201).json({ msg: "Success", result });
  } catch (error) {
    console.log(error.message);
    res.send("Server Error");
  }
});

// // GET ONE STUDENT
// router.get("/:studentId", async (req, res) => {
//   const { studentId } = req.params;

//   try {
//     const student = await studentModel.findById(studentId);

//     res.send({ student });
//   } catch (error) {
//     console.log(error.message);
//     res.send("Server Error");
//   }
// });

// // GET ALL STUDENTS
// router.get("/", async (req, res) => {
//   try {
//     let sessions = await sessionModel.find({}).sort({ createdAt: -1 });
//     const student = await studentModel
//       .find({ session: sessions[0]._id })
//       .populate("session");

//     res.send({ student });
//   } catch (error) {
//     console.log(error.message);
//     res.send("Server Error");
//   }
// });

module.exports = router;
