const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

function calculate() {
    let sum_val = arr[m - 1];
    while (m !== 1) {
        if (m % 2 === 0) {
            m /= 2;
        } else {
            m -= 1;
        }
        sum_val += arr[m - 1];
    }
    return sum_val;
}

let result = calculate(arr);
console.log(result);