const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
let answer = "";
const result = [];
for (let i = 1; i <= n; i++) {
  const order = input[i];
  if (order.slice(0, 4) === "push") {
    const [_, num] = order.split(" ");
    result.push(+num);
  } else if (order === "pop") {
    answer += (result.shift() || -1) + "\n";
  } else if (order === "size") {
    answer += result.length + "\n";
  } else if (order === "empty") {
    answer += +(result.length === 0) + "\n";
  } else if (order === "front") {
    answer += (result[0] || -1) + "\n";
  } else {
    answer += (result[result.length - 1] || -1) + "\n";
  }
}

console.log(answer);
