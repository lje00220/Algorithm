const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let result = Array(10);
result[0] = Number(arr[0]); result[1] = Number(arr[1]);

for (let i = 2; i < 10; i++) {
    result[i] = (result[i-1] + result[i-2]) % 10;
}

console.log(result.join(" "));