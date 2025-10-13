const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < arr.length - 1; i++) {
  const [a, b, c] = arr[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  if (a * a + b * b === c * c) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
