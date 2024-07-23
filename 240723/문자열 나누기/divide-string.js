const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ");

arr = arr.join("");

let str = "";
let cnt = 0;
for (let elem of arr) {
    str += elem;
    cnt++;

    if (cnt === 5) {
        console.log(str);
        str = "";
        cnt = 0;
    }
}

console.log(str);