const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let result = "";

for(let i = n; i < (n*5+1); i += n) {
    result += (i + " ");
}

console.log(result);