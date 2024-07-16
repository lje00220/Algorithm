const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let arr1 = [];
let arr2 = [];

for (let i = 0; i < 3; i++) {
    arr1.push(input[i].split(" ").map(Number));
}

for (let i = 4; i < 7; i++) {
    arr2.push(input[i].split(" ").map(Number));
}

let str = "";
for (let i = 0; i < 3; i++) {
    str = "";
    for (let j = 0; j < 3; j++) {
        str += arr1[i][j] * arr2[i][j] + " ";
    }
    console.log(str);
}