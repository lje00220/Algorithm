const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

for (let i = 1; i <= a; i++) {
    str = "";
    for (let j = 1; j <= b; j++) {
        str += i * j + " ";
    }
    console.log(str);
}