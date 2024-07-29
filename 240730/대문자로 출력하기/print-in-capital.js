const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

let str = "";
for (let elem of input) {
    if ((elem >= "a" && elem <= "z") || (elem >= "A" && elem <="Z")) {
        str += elem.toUpperCase();
    }
}

console.log(str);