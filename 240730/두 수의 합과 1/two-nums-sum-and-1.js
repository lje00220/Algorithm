const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let n1 = Number(input[0]);
let n2 = Number(input[1]);

let result = String(n1 + n2);

let cnt = 0;
for (let elem of result) {
    if (elem === "1") cnt++;
}

console.log(cnt);