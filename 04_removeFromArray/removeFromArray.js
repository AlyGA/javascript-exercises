const removeFromArray = function (array, ...moreRemovalNumber) {
  for (let i = moreRemovalNumber.length - 1; i >= 0; i--) {
    let index = array.indexOf(moreRemovalNumber[i]);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  return array;
};
// Do not edit below this line
module.exports = removeFromArray;
