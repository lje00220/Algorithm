const fs = require("fs");
const [n, input] = fs.readFileSync(0).toString().trim().split("\n");
const arr = input.split("").map(Number);

console.log(arr.reduce((acc, cur) => (acc += cur), 0));
