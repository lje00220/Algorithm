const fs = require("fs");
let [num1, num2, num3] = fs.readFileSync(0).toString().split(" ").map(Number);
let result = num1 * num2 * num3;

function addNum(n) {
    if (n < 10) return n;
    return addNum(parseInt(n / 10)) + n % 10;
}

console.log(addNum(result));