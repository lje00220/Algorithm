const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let temp = input[0].split(" ").map(Number);
let n = temp[0]; let q = temp[1];
let arr = input[1].split(" ").map(Number);

for (let i = 2; i < input.length; i++) {
    let result = input[i].split(" ").map(Number);

    if (result[0] === 1) {
        console.log(arr[result[1] - 1]);
    } else if (result[0] === 2) {
        let idx = 0;
        for (let j = 0; j < n; j++) {
            if (arr[j] === result[1]) {
                idx = j + 1;
                break;
            }
        }
        console.log(idx);
    } else {
        console.log(arr.slice(result[1] - 1, result[2]).join(" "));
    }
}