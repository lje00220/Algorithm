const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const target = input[0];
const N = Number(input[1]);
const rings = input.slice(2,);

let cnt = 0;
for (ring of rings) {
    const newRing = ring + ring;
    if (newRing.includes(target)) cnt++;
}

console.log(cnt);
