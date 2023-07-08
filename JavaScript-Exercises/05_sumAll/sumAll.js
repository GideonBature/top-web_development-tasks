const sumAll = function(a, b) {
    let sum = 0;
    if (a < 0 || typeof b == "string" || typeof b == "object") {
        return "ERROR";
    } else if (a < b) {
        for(let i = a; i <= b; i++) {
            sum += i;
        }
    } else {
        for(let i = a; i>= b; i--) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
