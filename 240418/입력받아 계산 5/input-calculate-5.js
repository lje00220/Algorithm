const fs = require("fs");
let arr = fs.readFileSync(0).toString().split(" ");
let a = arr[0];
let b = arr[1];

console.log(a+b);