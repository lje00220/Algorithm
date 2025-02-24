let [n, k] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let arr = Array.from({length : n}, (_, i) => i + 1);
const ans = [];

let cnt = 1;
while (arr.length) {
  let data = arr.shift();
  if (cnt % k == 0) {
    ans.push(data);
  } else {
    arr.push(data);
  }
  cnt++;
}

console.log(`<${ans.join(", ")}>`);