const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const bookList = new Map()
const arr = input.slice(1,).sort()

for (let i = 0; i < n; i++) {
    if (!bookList.has(arr[i])) {
        bookList.set(arr[i], 1);
    } else {
        bookList.set(arr[i], bookList.get(arr[i]) + 1);
    }
}

console.log([...bookList].sort((a, b) => b[1] - a[1])[0][0])



