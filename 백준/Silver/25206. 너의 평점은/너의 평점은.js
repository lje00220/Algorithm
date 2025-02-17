const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const grades = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let answer = 0;
let total = 0;

for (let elem of input) {
  const [name, credit, grade] = elem.split(" ");
  if (grade === "P") continue;
  answer += +credit * grades[grade];
  total += +credit;
}

console.log((answer / total).toFixed(6));