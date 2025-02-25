const fs = require("fs");
const [m, n] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const DIC = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

const arr = Array.from({ length: n - m + 1 }, (_, i) => i + m);

arr.sort((a, b) => {
  const changeA = String(a)
    .split("")
    .reduce((acc, cur) => acc + DIC[+cur], "");

  const changeB = String(b)
    .split("")
    .reduce((acc, cur) => acc + DIC[+cur], "");

  if (changeA.localeCompare(changeB) > 0) {
    return 1;
  } else if (changeB.localeCompare(changeA) > 0) {
    return -1;
  } else {
    return 0;
  }
});

let answer = [];
for (let i = 1; i <= arr.length; i++) {
  answer.push(arr[i - 1]);
  if ((i % 10 === 0 && i !== 0) || i === arr.length) {
    console.log(answer.join(" "));
    answer = [];
  }
}
