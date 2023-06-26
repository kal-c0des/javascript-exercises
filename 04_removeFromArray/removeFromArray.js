const removeFromArray = function (remove, ...stuff) {
  const newArray = [];
  remove.forEach((item) => {
    if (!stuff.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
