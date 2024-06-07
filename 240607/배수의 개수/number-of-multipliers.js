const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let cnt3 = 0; let cnt5 = 0;

for (let i = 0; i < 10; i++) {
    if (input[i] % 3 == 0) {
        cnt3++;
    }
    if (input[i] % 5 == 0) {
        cnt5++;
    }
}

console.log(cnt3, cnt5);