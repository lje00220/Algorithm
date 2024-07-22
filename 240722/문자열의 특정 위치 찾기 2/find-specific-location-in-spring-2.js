const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();

let arr = ["apple", "banana", "grape", "blueberry", "orange"];

let cnt = 0;
for (elem of arr) {
    if (elem[2] === n || elem[3] === n) {
        console.log(elem);
        cnt++;
    }
}

console.log(cnt);