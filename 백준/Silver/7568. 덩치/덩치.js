const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const list = [];
for (let i = 1; i < input.length; i++) {
  list.push(input[i].split(" ").map(Number));
}

const answer = [];
for (let i = 0; i < list.length; i++) {
  const [w, h] = list[i].map(Number);
  let cnt = 1;
  for (let j = 0; j < list.length; j++) {
    if (w < list[j][0] && h < list[j][1]) {
      cnt++;
    }
  }
  answer.push(cnt);
}

console.log(answer.join(" "));


