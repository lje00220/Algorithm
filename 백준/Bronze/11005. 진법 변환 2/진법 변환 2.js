const fs = require("fs");
const [n, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

console.log(n.toString(b).toUpperCase());