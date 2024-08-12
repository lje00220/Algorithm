const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arrA = input[1].trim().split(" ").map(Number);
let arrB = input[2].trim().split(" ").map(Number);

arrA.sort((prev, cur) => prev - cur);
arrB.sort((prev, cur) => prev - cur);

let satisfied = true;
for (let i = 0; i < n; i++) {
    if (arrA[i] !== arrB[i]) satisfied = false;
}

if (satisfied) {
    console.log("Yes");
} else {
    console.log("No");
}