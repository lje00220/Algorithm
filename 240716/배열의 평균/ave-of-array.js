const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let arr2d = [];
let averageRow = [];
let averageCol = [];
let averageTotal = 0;
let average = 0;

for (let i = 0; i < 2; i++) {
    arr2d.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < 2; i++) {
    average = 0;
    for (let j = 0; j < 4; j++) {
        average += arr2d[i][j];
    }
    averageRow.push((average/4).toFixed(1));
    averageTotal += average;
}


for (let i = 0; i < 4; i++) {
    average = 0;
    for (let j = 0; j < 2; j++) {
        average += arr2d[j][i];
    }
    averageCol.push((average / 2).toFixed(1));
}

averageTotal /= 8;
console.log(averageRow.join(" "));
console.log(averageCol.join(" "));
console.log(averageTotal.toFixed(1));