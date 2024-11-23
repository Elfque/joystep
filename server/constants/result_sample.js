const caObject = {
  first: 0,
  second: 0,
  third: 0,
  forth: 0,
};

const subjectObject = {
  CA: caObject,
  exam: 0,
  class_average: 0,
  class_highest: 0,
  class_lowest: 0,
  class_lowest: 0,
  remark: "",
};

const psychologicalObject = {
  handwriting: 0,
  reading: 0,
  "musical skill": 0,
  "physical education": 0,
  "general reasoning": 0,
  "creative art": 0,
  "verbal fluency": 0,
};
const traitObject = {
  punctuality: 0,
  behavior: 0,
  politeness: 0,
  "self-control": 0,
  honesty: 0,
  "relationship with student": 0,
  respect: 0,
  attentiveness: 0,
  neatness: 0,
  politeness: 0,
  initiative: 0,
  "attitude to school": 0,
};

const termObject = {
  mathematics: subjectObject,
  "english language": subjectObject,
  "cultural and creative art": subjectObject,
  french: subjectObject,
  "quantitative reasoning": subjectObject,
  "verbal reasoning": subjectObject,
  "water and environmental sanitation": subjectObject,
  handwriting: subjectObject,
  "food and nutrition": subjectObject,
  "social and moral development": subjectObject,
  "protection issue": subjectObject,
  "nigerian language": subjectObject,
  "nigerian language": subjectObject,
  "basic science": subjectObject,
  "basic technology": subjectObject,
  "physical and health education": subjectObject,
  "information technology": subjectObject,
  "home economics": subjectObject,
  "agric science": subjectObject,
  religion: subjectObject,
  "social studies": subjectObject,
  "civic education": subjectObject,
  "security education": subjectObject,
  "business studies": subjectObject,
  "computer science": subjectObject,
  history: subjectObject,

  attendace_res: { opened: 0, present: 0, absent: 0 },
  holiday: { debt: 0, next_term_fee: 0, next_term_begin: 0, term_end: 0 },
  traits: traitObject,
  psychologicalTrait: psychologicalObject,
};

const result = {
  first: termObject,
  second: termObject,
  third: termObject,
};

module.exports = result;
