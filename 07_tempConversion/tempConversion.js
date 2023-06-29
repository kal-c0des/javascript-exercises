const convertToCelsius = function (tempF) {
  // formula (XdegreesF - 32) * 5/9 = degreesC
  return Math.round((tempF - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (tempC) {
  // formula (XdegreesC * 9/5) + 32 = degreesF
  return Math.round((tempC * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
