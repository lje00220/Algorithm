const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
arr = arr.map(Number);

for (let i = 0; i < 10; i++) {
    if (arr[i] % 3 === 0) {
        console.log(arr[i-1]);
        break;
    }
}