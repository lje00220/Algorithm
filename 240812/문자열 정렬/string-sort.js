const fs = require("fs");
let str = fs.readFileSync(0).toString().trim();
let arr = [...str];

arr.sort();
console.log(arr.join(""));