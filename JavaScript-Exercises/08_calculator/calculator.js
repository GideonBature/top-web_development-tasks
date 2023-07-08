const add = function(num1, num2) {
  return (num1 + num2);
	
};

const subtract = function(num1, num2) {
  return (num1 - num2);
};

const sum = function(...args) {
  let arr = args[0];
 if(arr.length === 0) {
  return 0;
 } else if (arr.length === 1) {
  return arr[0];
 } else if (arr.length === 2) {
  return arr[0] + arr[1];
 } else {
  let sum = 0;
 for (let value of arr) {
  sum += value;
 } return sum;
 }
};

const multiply = function(...args) {
  let arr = args[0];
  let num = 1;
 for (let value of arr) {
  num *= value;
 } return num;
};

const power = function(...args) {
	return args[0] ** args[1];
};

const factorial = function(num) {
  let newFac = 1;
	if ((num == 0) || (num == 1)) {
    return 1;
  } else {
    for (let i = 1; i <= num; i++) {
      newFac *= i;
    } return newFac;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
