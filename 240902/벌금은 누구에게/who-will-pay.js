const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n, m, k] = input[0].trim().split(" ").map(Number)
let arr = Array(n + 1).fill(0);
let student = -1;


outer: for (let i = 1; i <= m; i++) {
    let number = Number(input[i])
    arr[number] += 1;
    for (let elem of arr) {
        if (elem >= k) {
            console.log(number);
            student = number;
            break outer;
        }
    }
}

if (student === -1) {
    console.log(-1);
}