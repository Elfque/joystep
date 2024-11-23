const mongoose = require("mongoose");

const studentModel = mongoose.Schema(
  {
    firstName: { type: String, trim: true, require: true },
    lastName: { type: String, trim: true, require: true },
    sex: { type: String, trim: true, require: true },
    studentClass: { type: String, trim: true, require: true },
    session: { type: mongoose.Schema.Types.ObjectId, ref: "sessions" },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentModel);

module.exports = Student;
