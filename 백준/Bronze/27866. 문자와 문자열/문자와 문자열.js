const fs = require("fs");
const [str, i] = fs.readFileSync(0).toString().trim().split("\n");

console.log(str[i - 1]);
