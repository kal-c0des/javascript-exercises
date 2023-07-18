const palindromes = function (string) {
  const checkString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return checkString.split("").reverse().join("") == checkString;
};

// Do not edit below this line
module.exports = palindromes;
