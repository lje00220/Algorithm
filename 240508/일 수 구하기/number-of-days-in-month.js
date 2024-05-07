const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

if (n <= 7) {
    if (n == 2) {
        console.log(28);
    } else if (n % 2 == 0) {
        console.log(30);
    } else {
        console.log(31);
    }
} else {
    if (n % 2 == 0) {
        console.log(31);
    } else {
        console.log(30);
    }
}