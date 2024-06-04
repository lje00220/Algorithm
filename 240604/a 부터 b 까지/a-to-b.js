const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let result = "";
let increase = 0;

for (let i = a; i <= b; i += increase) {
    result += (i + " ");
    if (i % 2 != 0) {
        increase = i;
    } else {
        increase = 3;
    }
}

console.log(result);