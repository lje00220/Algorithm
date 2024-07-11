const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let countArr = Array(5).fill(0);

for (let i = 0; i < 3; i++) {
    let person = input[i].split(" ");
    let cold = person[0];
    let temp = Number(person[1]);

    if (cold === "Y") {
        if (temp >= 37) {
            countArr[0]++;
        } else {
            countArr[2]++;
        }
    } else {
        if (temp >= 37) {
            countArr[1]++;
        } else {
            countArr[3]++;
        }
    }
}

if (countArr[0] >= 2) {
    countArr[4] = "E";
}

console.log(countArr.join(" "));