const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let cnt1 = 0;
let cnt2 = 0;
for (let i = 0; i < input.length - 1; i++) {
    if (input[i] === "e" && input[i + 1] === "e") {
        cnt1++;
    }
    if (input[i] === "e" && input[i + 1] === "b") {
        cnt2++;
    }
}

console.log(cnt1, cnt2);