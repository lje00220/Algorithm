const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const result = input.slice(1);

result.sort((x, y) => {
  if (x.length > y.length) {
    return 1;
  }
  if (x.length < y.length) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return -1;
});

result.forEach((x, idx) => {
  if (x !== result[idx - 1]) console.log(x);
});