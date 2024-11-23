const mongoose = require("mongoose");

const psychologicalSchema = new mongoose.Schema({
  handwriting: { type: Number, default: 0 },
  reading: { type: Number, default: 0 },
  "musical skill": { type: Number, default: 0 },
  "physical education": { type: Number, default: 0 },
  "general reasoning": { type: Number, default: 0 },
  "creative art": { type: Number, default: 0 },
  "verbal fluency": { type: Number, default: 0 },
});
const traitSchema = new mongoose.Schema({
  punctuality: { type: Number, default: 0 },
  behavior: { type: Number, default: 0 },
  politeness: { type: Number, default: 0 },
  "self-control": { type: Number, default: 0 },
  honesty: { type: Number, default: 0 },
  "relationship with student": { type: Number, default: 0 },
  respect: { type: Number, default: 0 },
  attentiveness: { type: Number, default: 0 },
  neatness: { type: Number, default: 0 },
  politeness: { type: Number, default: 0 },
  initiative: { type: Number, default: 0 },
  "attitude to school": { type: Number, default: 0 },
});

const caSchema = new mongoose.Schema({
  first: { type: Number, default: 0 },
  second: { type: Number, default: 0 },
  third: { type: Number, default: 0 },
});

const subjectSchema = new mongoose.Schema({
  CA: caSchema,
  exam: { type: Number, default: 0 },
  class_average: { type: Number, default: 0 },
  class_highest: { type: Number, default: 0 },
  class_lowest: { type: Number, default: 0 },
  class_lowest: { type: Number, default: 0 },
  remark: { type: String, default: 0 },
});

const attendanceSchema = new mongoose.Schema({
  opened: { type: Number, default: 0 },
  present: { type: Number, default: 0 },
  absent: { type: Number, default: 0 },
});

const holidaySchema = new mongoose.Schema({
  debt: { type: Number, default: 0 },
  next_term_fee: { type: Number, default: 0 },
  next_term_begin: { type: Number, default: 0 },
  term_end: { type: Number, default: 0 },
});

const optionSchema = mongoose.Schema({
  position: { type: Number, default: 0 },
  positionClass: { type: Number, default: 0 },
  overallTotalCsore: { type: Number, default: 0 },
  averageScore: { type: Number, default: 0 },
  highestAverage: { type: Number, default: 0 },

  studentNo: { type: Number, default: 0 },
  studentAverage: { type: String, default: 0 },
  overallPerformance: { type: String, default: "" },
  teacher_comment: { type: String, default: "" },
  principal_comment: { type: String, default: "" },
});

const termSchema = new mongoose.Schema({
  mathematics: subjectSchema,
  "english language": subjectSchema,
  "cultural and creative art": subjectSchema,
  french: subjectSchema,
  "quantitative reasoning": subjectSchema,
  "verbal reasoning": subjectSchema,
  "water and environmental sanitation": subjectSchema,
  handwriting: subjectSchema,
  "food and nutrition": subjectSchema,
  "social and moral development": subjectSchema,
  "protection issue": subjectSchema,
  "nigerian language": subjectSchema,
  "nigerian language": subjectSchema,
  "basic science": subjectSchema,
  "basic technology": subjectSchema,
  "physical and health education": subjectSchema,
  "information technology": subjectSchema,
  "home economics": subjectSchema,
  "agric science": subjectSchema,
  religion: subjectSchema,
  "social studies": subjectSchema,
  "civic education": subjectSchema,
  "security education": subjectSchema,
  "business studies": subjectSchema,
  "computer science": subjectSchema,
  history: subjectSchema,

  attendace_res: attendanceSchema,
  holiday: holidaySchema,
  traits: traitSchema,
  psychologicalTrait: psychologicalSchema,
  options: optionSchema,
});

const resultSchema = new mongoose.Schema({
  first: termSchema,
  second: termSchema,
  third: termSchema,
});

const resultsSchema = mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
    result: resultSchema,
    session: { type: mongoose.Schema.Types.ObjectId, ref: "sessions" },
  },
  { timestamps: true }
);

const result = mongoose.model("results", resultsSchema);

module.exports = result;
