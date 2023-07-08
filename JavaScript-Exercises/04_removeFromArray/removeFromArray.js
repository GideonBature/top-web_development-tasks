const removeFromArray = function (...args) {
    let array = args[0];
    let num = array.length - 1;
    let newArray = [];
    for (let i = 0; i <= num; i++) {
        if ((array[i] !== args[1]) && (array[i] !== args[2]) && (array[i] !== args[3]) && (array[i] !== args[4])) {
        newArray.push(array[i])
        }
    }
        return newArray;
  };

// Do not edit below this line
module.exports = removeFromArray;
