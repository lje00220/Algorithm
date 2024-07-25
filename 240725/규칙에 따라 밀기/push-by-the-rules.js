const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let str = input[0];
let order = input[1].split("");

for (elem of order) {
    if (elem === "L") {
        str = str.slice(1) + str.slice(0, 1);
    } else {
        str = str.slice(-1) + str.slice(0, -1);
    }
}

console.log(str);