const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input.slice(1,);

for (let s of arr) {
    if (6 <= s.length  && s.length <= 9) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
