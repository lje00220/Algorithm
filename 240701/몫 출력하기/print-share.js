const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let index = 0;
let cnt = 3;

while (true) {
    let n = Number(input[index]);
    index++;

    if (n % 2 != 0) {
        continue;
    } else {
        console.log(n / 2);
        cnt--;
    }

    if (cnt == 0) {
        break;
    }
}