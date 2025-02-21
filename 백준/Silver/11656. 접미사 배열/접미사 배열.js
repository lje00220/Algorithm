const fs = require('fs');
const str = fs.readFileSync("/dev/stdin").toString().trim();

const arr = [];

for (let i = 0; i < str.length; i++) {
    arr.push(str.slice(i, str.length));
}

console.log(arr.sort().join("\n"));