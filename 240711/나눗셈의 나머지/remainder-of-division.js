const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let countArr = Array(b).fill(0);
let sumVal = 0;

while (a > 1) {
    countArr[a % b]++;
    a = parseInt(a / b);
}

countArr.forEach((val) => {
    sumVal += val ** 2;
})

console.log(sumVal);