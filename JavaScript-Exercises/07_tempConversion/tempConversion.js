const ftoc = function(temp) {
  let newTemp = (temp - 32) * 5/9;
  let tempTo1dp = parseFloat(newTemp.toFixed(1));
  return tempTo1dp;

};

const ctof = function(temp) {
  let newTemp = (temp * 9/5) + 32;
  let tempTo1dp = parseFloat(newTemp.toFixed(1));
  return tempTo1dp;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
