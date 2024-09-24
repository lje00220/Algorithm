const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].trim().split(" ").map(Number);
let cnt = 0;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            let first = arr[i];
            let second = arr[j];
            let third = arr[k];

            if (second >= first && second <= third) {
                cnt++;
            }
        }
    }
}

console.log(cnt);