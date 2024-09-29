const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("");

let cnt = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === "(" && arr[i + 1] === "(" && arr[j] === ")" && arr[j + 1] === ")") {
            cnt++;
        }
    }
}

console.log(cnt);