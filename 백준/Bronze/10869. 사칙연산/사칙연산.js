const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(+a + +b);
console.log(+a - +b);
console.log(+a * +b);
console.log(Math.floor(+a / +b));
console.log(+a % +b);