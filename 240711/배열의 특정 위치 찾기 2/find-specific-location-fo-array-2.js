const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
arr = arr.map(Number);
let even = 0;
let odd = 0;

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        even += arr[i];
    } else {
        odd += arr[i];
    }
}

if (even >= odd) {
    console.log(even - odd);
} else {
    console.log(odd - even);
}