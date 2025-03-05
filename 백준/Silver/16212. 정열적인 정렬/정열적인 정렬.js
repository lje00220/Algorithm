const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number).sort((x, y) => x - y);

console.log(arr.join(" "));
