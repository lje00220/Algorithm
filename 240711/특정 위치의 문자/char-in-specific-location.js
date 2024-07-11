const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();
let arr = ["L", "E", "B", "R", "O", "S"];
let idx = -1;

for (let i = 0; i < 6; i++) {
    if (arr[i] === n) {
        idx = i;
    }
}

if (idx === -1) {
    console.log("None");
} else {
    console.log(idx);
}