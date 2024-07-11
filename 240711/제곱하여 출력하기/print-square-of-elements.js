const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");
let result = arr[1].split(" ");
result = result.map(Number);
result = result.map((e) => e*e);
console.log(result.join(" "));