const getTheTitles = function (book) {
  let bookArray = []; // Empty array to place items
  book = book.map((book) => book.title); // Filter and return only the values of "title"
  bookArray = book; // Add those values to the new array
  return bookArray; // Return the array
};

// Do not edit below this line
module.exports = getTheTitles;
