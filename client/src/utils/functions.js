export const formatNumber = (num) => {
  const newNumber = new Intl.NumberFormat();

  return newNumber.format(num);
};

export const grader = (total) => {
  if (total > 69) {
    return "Excenllent";
  } else if (total > 59 && total < 70) {
    return "Very Good";
  } else if (total > 49 && total < 60) {
    return "Good";
  } else if (total >= 40 && total < 50) {
    return "Pass";
  } else if (total >= 30 && total < 40) {
    return "Poor";
  } else {
    return "";
  }
};
