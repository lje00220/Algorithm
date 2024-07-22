const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let str1 = input[0];
let str2 = input[1];
let str3 = input[2];

let len1 = str1.length;
let len2 = str2.length;
let len3 = str3.length;

let max; let min;

if (len1 >= len2 && len1 >= len3) max = len1;
if (len2 >= len1 && len2 >= len3) max = len2;
if (len3 >= len1 && len3 >= len2) max = len3;

if (len1 <= len2 && len1 <= len3) min = len1;
if (len2 <= len1 && len2 <= len3) min = len2;
if (len3 <= len1 && len3 <= len2) min = len3;

console.log(max - min);