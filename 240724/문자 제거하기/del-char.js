const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let str = input[0].split("");

for (let i = 1; i < input.length; i++) {
    if (str.length === 1) break;
    let n = input[i];
    if (n >= str.length - 1)  {
        str.pop();
    } else {
        delete str[n];
    }

    console.log(str.join(""));
}