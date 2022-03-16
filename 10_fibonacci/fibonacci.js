const fibonacci = function (index) {
  // First, the fibonacci needs to be created:
  let fibArray = [];
  fibArray[0] = 0;
  fibArray[1] = 1;
  for (let i = 2; i <= 30; i++) {
    // Next fibonacci number = previous + one before previous
    fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
  }

  // Returns oops IF item is below 0.
  if (index < 0) {
    return "OOPS";
  }

  // Second, locate the index of every fibonacci array.
  return fibArray[index];
};

// Do not edit below this line
module.exports = fibonacci;
