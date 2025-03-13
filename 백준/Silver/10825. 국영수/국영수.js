const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const arr = [];

for (let i = 1; i <= N; i++) {
    arr.push(input[i].split(" "));
}
arr.sort();

arr.sort((a, b) => {
    if (+b[1] - +a[1] > 0) {
        return 1;
    } else if (+a[1] - +b[1] > 0) {
        return -1;
    } else {
        if (+a[2] - +b[2] > 0) {
            return 1;
        } else if (+b[2] - +a[2] > 0) {
            return -1;
        } else {
            if (+b[3] - +a[3] > 0) {
                return 1;
            } else if (+a[3] - +b[3] > 0) {
                return -1;
            } else {
                return 0;
            }
        }
    }
})

let answer = [];
for (let elem of arr) {
    answer.push(elem[0]);
}

console.log(answer.join("\n"));