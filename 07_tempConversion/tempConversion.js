"use strict";
const ftoc = function (temp) {
  let modifiedTemp = ((temp - 32) * 5) / 9;
  if (modifiedTemp % 1 !== 0) {
    return Number(modifiedTemp.toFixed(1));
  } else if (modifiedTemp % 1 === 0) {
    return Number(modifiedTemp);
  } else {
    return "Invalid input!";
  }
};

const ctof = function (temp) {
  let modifiedTemp = (temp * 9) / 5 + 32;
  if (modifiedTemp % 1 !== 0) {
    return Number(modifiedTemp.toFixed(1));
  } else if (modifiedTemp % 1 === 0) {
    return Number(modifiedTemp);
  } else {
    return "Invalid input!";
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
