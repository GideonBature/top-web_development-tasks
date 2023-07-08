const fibonacci = function(num) {
    if (num < 0) {
        return 'OOPS'
    }
    else if (typeof num === 'string') {
        parseInt(num);
    } else {
        num;
    }

  let n = [0, 1];
  for (let i = 1; i < num; i++) {
      
    n.push(n[i] + n[i - 1])

  }
  return n[n.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
