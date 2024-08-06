function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    if (year % 4 === 0 && year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }

    return false;
}

function checkMonth(year, month) {
    if (isLeapYear(year) && month === 2) return 29;
    if (!isLeapYear(year) && month === 2) return 28;
    if (month === 4 || month === 6 || month === 9 || month === 11) return 30;

    return 31;
}

function checkSeason(year, month, day) {
    if (day > checkMonth(year, month)) {
        return -1;
    }
    if (month >= 3 && month <= 5) return "Spring";
    if (month >= 6 && month <= 8) return "Summer";
    if (month >= 9 && month <= 11) return "Fall";
    if (month === 12 || month <= 2) return "Winter";
}

const fs = require("fs");
let [y, m, d] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

console.log(checkSeason(y, m, d));