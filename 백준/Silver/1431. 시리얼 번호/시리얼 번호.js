const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input.slice(1).sort();

arr.sort((a, b) => {
  if (a.length - b.length > 0) {
    return 1;
  } else if (b.length - a.length > 0) {
    return -1;
  } else {
    const sumA = a.split("").reduce((acc, cur) => {
      acc += isNaN(Number(cur)) ? 0 : Number(cur);
      return acc;
    }, 0);

    const sumB = b.split("").reduce((acc, cur) => {
      acc += isNaN(Number(cur)) ? 0 : Number(cur);
      return acc;
    }, 0);

    if (sumA - sumB > 0) {
      return 1;
    } else if (sumB - sumA > 0) {
      return -1;
    } else {
      return 0;
    }
  }
});

console.log(arr.join("\n"));