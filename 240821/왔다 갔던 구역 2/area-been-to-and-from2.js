const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = Array(2000).fill(0);
let current = 1000;

for (let i = 1; i <= n; i++) {
    let [x, dir] = input[i].trim().split(" ");
    if (dir === "R") {
        for (let i = current; i < current + Number(x); i++) {
            arr[i] += 1;
        }
        current += Number(x);
    } else {
        for (let i = current; i > current - Number(x); i--) {
            arr[i] += 1;
        }
        current -= Number(x);
    } 

}

let width = 0;
arr.forEach((elem) => {
    if (elem >= 2) {
        width++;
    }
})

console.log(width);