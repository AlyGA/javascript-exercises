const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  const initialValue = 0;
  const sumWithInitial = a.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return sumWithInitial;
};

const multiply = function (a) {
  const sumWithInitial = a.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
  return sumWithInitial;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let answer = 1;
  if (a === 0 || a === 1) {
    return answer;
  } else {
    for (let i = a; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
