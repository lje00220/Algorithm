const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [r, c] = input[0].trim().split(" ").map(Number);
let arr = [];

for (let i = 1; i < input.length; i++) {
    arr.push(input[i].trim().split(" "));
}

let cnt = 0;
let color = arr[0][0];

for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
        for (let k = i + 1; k < r; k++) {
            for (let l = j + 1; l < c; l++) {
                if (arr[k][j] !== color) {
                    cnt++;
                    color = arr[k][j];
                    i = k; j = l;
                }
            }
        }
    }
}

console.log(cnt);