const fs = require("fs");
let arr = fs.readFileSync(0).toString().split("\n");

let a = Number(arr[0]);
let b = Number(arr[1]);
let c = Number(arr[2]);

console.log(a.toFixed(3));
console.log(b.toFixed(3));
console.log(c.toFixed(3));