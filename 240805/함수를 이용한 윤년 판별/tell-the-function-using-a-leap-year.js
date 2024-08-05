const fs = require("fs");
let year = Number(fs.readFileSync(0).toString().trim());

function isLeapYear(y) {
    if (y % 4 !== 0) {
        return false;
    }

    if (y % 100 === 0 && y % 400 !== 0) {
        return false;
    }

    return true;
}

console.log(isLeapYear(year));