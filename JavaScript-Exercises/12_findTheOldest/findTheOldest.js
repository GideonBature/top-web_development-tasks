const findTheOldest = function(people) {
    let firstP = people[0];
    let secondP = people[1];
    let thirdP = people[2];
    let date = new Date();
    let year = date.getFullYear();

    
    if(!people[0].yearOfDeath) {
        let firstPAge = year - firstP.yearOfBirth;
        let secondPAge = secondP.yearOfDeath - secondP.yearOfBirth;
        let thirdPAge = thirdP.yearOfDeath - thirdP.yearOfBirth;
        if ((firstPAge > secondPAge) && (firstPAge > thirdPAge)) {
            return firstP;
        } else if ((secondPAge > firstPAge) && (secondPAge > thirdPAge)) {
            return secondP;
        } else {
        return thirdP;
        }
    } else {
        let firstPAge = firstP.yearOfDeath - firstP.yearOfBirth;
        let secondPAge = secondP.yearOfDeath - secondP.yearOfBirth;
        let thirdPAge = thirdP.yearOfDeath - thirdP.yearOfBirth;
        if ((firstPAge > secondPAge) && (firstPAge > thirdPAge)) {
            return firstP;
        } else if ((secondPAge > firstPAge) && (secondPAge > thirdPAge)) {
            return secondP;
        } else {
        return thirdP;
        }
    }
    
};

// Do not edit below this line
module.exports = findTheOldest;
