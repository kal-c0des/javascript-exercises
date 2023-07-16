const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num2, num1) {
  return num2 - num1;
};

const sum = function (num) {
  return num.reduce((accumulator, current) => accumulator + current, 0);
};

const multiply = function (...nums) {
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
  }
  return product;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  if (num === 0) return 1;
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
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
