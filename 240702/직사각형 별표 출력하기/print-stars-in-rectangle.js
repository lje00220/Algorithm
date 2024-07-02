const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
let str = "";

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < m; j++) {
        str += "* ";
    }
    console.log(str);
}