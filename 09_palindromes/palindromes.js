const palindromes = function (word) {
  //1. replace every non-word character and underscore with an empty string.
  let replace = /[\W_]/g;

  // Lowercase all the words and replace with the new word pattern.
  let wordLowerCase = word.toLowerCase().replace(replace, "");

  // Reverse the word
  const reverseWord = wordLowerCase.split("").reverse().join("");

  // Compare if they are the same or not
  return wordLowerCase === reverseWord;
};

// Do not edit below this line
module.exports = palindromes;
