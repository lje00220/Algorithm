const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, c] = input[0].split(" ").map(BigInt);
const arr = input[1].split(" ").map(BigInt);

const map = new Map();
for (let elem of arr) {
    if (!map.has(elem)) {
        map.set(elem, 1);
    } else {
        map.set(elem, map.get(elem) + 1);
    }
}

const answer = [...map].sort((a, b) => {
    if (b[1] > a[1]) return 1;
    if (a[1] > b[1]) return -1;
    return 0;
})

let result = "";


for (let elem of answer) {
    let [num, count] = elem;
    let str = num.toString();
    for (let i = 0; i < count; i++) {
        result += str + " ";
    }
}

console.log(result);



