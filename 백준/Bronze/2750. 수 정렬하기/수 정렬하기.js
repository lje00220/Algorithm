const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const result = input.slice(1);

result.sort((x, y) => x - y);

result.forEach((x) => console.log(x));