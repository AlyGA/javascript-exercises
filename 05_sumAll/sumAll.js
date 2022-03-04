// Come back to clean up code.
"use strict";
const sumAll = function (num1, num2) {
  let finalSum = 0;
  if (
    num1 > num2 &&
    num1 >= 0 &&
    num2 >= 0 &&
    typeof num1 !== "string" &&
    typeof num2 !== "string"
  ) {
    console.log("The first number is bigger!");
    for (let i = num2; i <= num1; i++) {
      finalSum = i + finalSum;
    }
    return finalSum;
  } else if (
    num2 > num1 &&
    num1 >= 0 &&
    num2 >= 0 &&
    typeof num1 !== "string" &&
    typeof num2 !== "string"
  ) {
    console.log("The second number is smaller!");
    for (let i = num1; i <= num2; i++) {
      finalSum = i + finalSum;
    }
    return finalSum;
  } else if (num1 > 0 || num2 > 0) {
    return "ERROR";
  } else if (typeof num1 == "string" || typeof num2 !== "string") {
    return "ERROR";
  } else if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
