const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = [];
for (let i = 1; i <= Number(input[0]); i++) {
    const temp = input[i].split(" ").map(Number);
    arr.push(temp);
}

arr.sort((a, b) => a[0] - b[0])

let time = 0;

arr.forEach((value) => {
  const [start, end] = value;
  if (time > start) {
    time += end;
  } else {
    time += start - time + end;
  }
});

console.log(time);

