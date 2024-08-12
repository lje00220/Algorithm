const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0].split(" ")[0]);
let k = Number(input[0].split(" ")[1]);
let t = input[0].split(" ")[2];
let arr = [];

for (let i = 1; i <= n; i++) {
    let str = input[i];
    let satisfied = true;
    for (let j = 0; j < t.length; j++) {
        if (t[j] !== str[j]) satisfied = false;
    }
    if (satisfied) arr.push(str);
}

arr.sort();
console.log(arr[k - 1]);