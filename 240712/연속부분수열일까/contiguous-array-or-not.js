const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n1 = input[0].split(" ").map(Number)[0];
let n2 = input[0].split(" ").map(Number)[1];
let arr_a = input[1].split(" ").map(Number);
let arr_b = input[2].split(" ").map(Number);
let cnt = 0;

for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
        if (arr_a[i + j] === arr_b[j]) {
            cnt++;
        } else {
            cnt = 0;
            break;
        }
    }
    if (cnt === n2) break;
}

if (cnt === n2) {
    console.log("Yes");
} else {
    console.log("No");
}