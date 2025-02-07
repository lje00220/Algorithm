const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const val = input[i].split("").reverse().join("");
  if (val === input[i]) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
