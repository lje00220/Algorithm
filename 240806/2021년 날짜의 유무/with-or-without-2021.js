function checkDate(month, day) {
    if (month === 2 && day <= 28) return true;
    if ([1, 3, 5 ,7, 8, 10, 12].includes(month) && day <= 31) return true;
    if ([4, 6, 9, 11].includes(month) && day <= 30) return true;

    return false;
}

const fs = require("fs");
let [m, d] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

if (checkDate(m, d)) {
    console.log("Yes");
} else {
    console.log("No");
}