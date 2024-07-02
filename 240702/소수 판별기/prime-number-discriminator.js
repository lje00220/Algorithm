const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
let satisfied = true;

for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        satisfied = false;
        break;
    }
}

if (satisfied) {
    console.log("P");
} else {
    console.log("C");
}