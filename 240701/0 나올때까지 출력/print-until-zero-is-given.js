const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let index = 0;


while (true) {
    n = Number(input[index]);
    if (n == 0) {
        break;
    }
    console.log(n);
    index++;
}