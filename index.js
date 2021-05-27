const addDays = require("date-fns/addDays");

const getDateAfterXDays = (days) => {
  const newDate = addDays(new Date(22, 7, 2020), x);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};

module.exports = getDateAfterXDays;
