const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("");

let cnt = 0;

for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
        if (input[i] === "(" && input[j] === ")") {
            cnt++;
        }
    }
}

console.log(cnt);