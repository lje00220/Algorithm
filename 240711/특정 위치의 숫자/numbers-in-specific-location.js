const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
arr = arr.map(Number);

console.log(arr[2] + arr[4] + arr[9]);