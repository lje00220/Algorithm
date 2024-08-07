const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

function even(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] /= 2;
        }
    }
}

even(arr);
for (let elem of arr) {
    process.stdout.write(elem + " ");
}