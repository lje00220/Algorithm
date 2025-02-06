const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const result = [];

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(" ");
  result.push([a, b]);
}

result.sort((x, y) => {
  if (+x[1] > +y[1]) {
    return 1;
  }
  if (+x[1] < +y[1]) {
    return -1;
  }
  if (+x[0] > +y[0]) {
    return 1;
  }
  return -1;
});

result.forEach((x) => console.log(x.join(" ")));