const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = Array(2001).fill(0);
let current = 1000;

for (let i = 1; i <= n; i++) {
    let [x, dir] = input[i].trim().split(" ");
    if (dir === "R") {
        for (let j = current; j < current + Number(x); j++) {
            arr[j] += 1;
            // process.stdout.write(j + " ");
        }
        current += Number(x);
    } else {
        for (let j = current - 1; j >= current - Number(x); j--) {
            arr[j] += 1;
            // process.stdout.write(j + " ");
        }
        current -= Number(x);
    } 
        // console.log();

}

let cnt = 0;
arr.forEach((elem) => {
    if (elem >= 2) {
        cnt++;
    }
})

console.log(cnt);