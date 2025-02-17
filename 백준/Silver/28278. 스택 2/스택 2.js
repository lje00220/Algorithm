const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

input = input.slice(1);

const arr = [];
let answer = "";
for (let elem of input) {
  if (elem === "2") {
    if (!arr.length) {
      answer += -1;
    } else {
      const temp = arr.pop();
      answer += temp;
    }
  } else if (elem === "3") {
    answer += arr.length;
  } else if (elem === "4") {
    answer += arr.length ? 0 : 1;
  } else if (elem === "5") {
    answer += arr.length ? arr[arr.length - 1] : -1;
  } else {
    const [n, x] = elem.split(" ").map(Number);
    arr.push(x);
    continue;
  }
  answer += "\n";
}

console.log(answer);