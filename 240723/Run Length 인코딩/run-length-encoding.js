const fs = require("fs");
let str = fs.readFileSync(0).toString().trim();

let cnt = 0;
let standard = str[0];
let result = "";
result += standard;
for (let i = 0; i < str.length; i++) {
    if (standard === str[i]) {
        cnt++;
    } else {
        result += cnt;
        standard = str[i];
        result += standard;
        cnt = 1;
    }
}

result += cnt;

console.log(result.length);
console.log(result);