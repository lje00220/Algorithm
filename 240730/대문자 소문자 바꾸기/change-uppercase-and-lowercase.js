const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let str = "";
for (let elem of input) {
    if (elem >= "a" && elem <= "z") {
        str += elem.toUpperCase();
    } else if (elem >= "A" && elem <= "Z") {
        str += elem.toLowerCase();
    }
}

console.log(str);