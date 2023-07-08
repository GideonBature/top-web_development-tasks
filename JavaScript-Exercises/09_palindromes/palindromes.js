const palindromes = function (str) {

    let exp = /[a-z]/gi;

    let mainStr = str.match(exp).join('').toLowerCase();
    let reverseStr = str.match(exp).reverse().join('').toLowerCase();
    
    return mainStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
