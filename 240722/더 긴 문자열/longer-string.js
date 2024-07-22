const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let str1 = input[0];
let str2 = input[1];

let len1 = str1.length;
let len2 = str2.length;

if (len1 > len2) {
    console.log(str1, len1);
} else if (len1 < len2) {
    console.log(str2, len2);
} else {
    console.log("same");
}