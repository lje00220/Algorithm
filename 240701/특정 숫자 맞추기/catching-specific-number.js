const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let index = 0;

while (true) {
    let n = Number(input[index]);
    if (n < 25) {
        console.log("Higher");
    } else if (n > 25) {
        console.log("Lower");
    } else {
        console.log("Good");
        break;
    }
    index++;
}