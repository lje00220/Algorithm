const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let str1 = input[0];
let str2 = input[1];

let strN1 = "";
let strN2 = "";

for (let elem of str1) {
    if (elem >= "0" && elem <= "9") {
        strN1 += elem;
    } else {
        break;
    }
}

for (let elem of str2) {
    if (elem >= "0" && elem <= "9") {
        strN2 += elem;
    } else {
        break;
    }
}

console.log(Number(strN1) + Number(strN2));