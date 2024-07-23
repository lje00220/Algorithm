const fs = require("fs");
let str = fs.readFileSync(0).toString().trim();

let result = "";
for (let i = 1; i < str.length; i += 2) {
    result += str[i];
}

let resultReverse = "";
for (let i = result.length - 1; i >= 0; i--) {
    resultReverse += result[i];
}

console.log(resultReverse);