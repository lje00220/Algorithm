const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let str = input[0];
let n = input[1];

if (str.indexOf(n) === -1) {
    console.log("No");
} else {
    console.log(str.indexOf(n));
}