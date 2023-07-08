// const number = Math.floor(Math.random() * 1000)
// const repeatString = function(a, number) {
//     let str = "";
//     if (number < 0) {
//         return "ERROR";
//     } else {

//         for (let i = 0; i < number; i++) {
//             str += a;
//         } return str;
//     }
// };
// // Do not edit below this line
// module.exports = repeatString;

const num = Math.floor(Math.random() * 1000)


const repeatString = function(str, num) {
    let string = "";
    if (num < 0) {
        return "ERROR";
    } else {

        for (let i = 0; i < num; i++) {
            string += str;
        } return string;
    };
    }
// Do not edit below this line
module.exports = repeatString;
