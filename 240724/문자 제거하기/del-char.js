const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let str = input[0];

for (let i = 1; i < input.length; i++) {
    if (str.length === 1) break;
    let n = Number(input[i]);
    if (n >= str.length - 1)  {
        str = str.slice(0, str.length - 1);
    } else {
        str = str.slice(0, n) + str.slice(n + 1);
    }

    console.log(str);
}