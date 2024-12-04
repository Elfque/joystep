export const formatNumber = (num) => {
  const newNumber = new Intl.NumberFormat();

  return newNumber.format(num);
};
