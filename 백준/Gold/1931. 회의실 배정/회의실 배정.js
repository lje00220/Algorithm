const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const tables = [];

for (let i = 1; i < input.length; i++) {
  tables.push(input[i].split(" ").map(Number));
}

tables.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let count = 0;
let lastEndTime = 0;

for (let i = 0; i < tables.length; i++) {
  if (tables[i][0] >= lastEndTime) {
    count++;
    lastEndTime = tables[i][1];
  }
}

console.log(count);
