const removeFromArray = function (array, ...moreRemovalNumber) {
  // Going through the array backwards.
  for (let i = moreRemovalNumber.length - 1; i >= 0; i--) {
    // Index of the item that is wished to be removed.
    let index = array.indexOf(moreRemovalNumber[i]);
    // If the index is not in the array, don't do anything. If it is, remove from list.
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  return array; // Return the modified array.
};
// Do not edit below this line
module.exports = removeFromArray;
