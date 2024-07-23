const fs = require("fs");
let str = fs.readFileSync(0).toString().trim();

for (let elem of str) {
    console.log(elem);
}