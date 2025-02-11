const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
  const str = input[i].split("");

  if (str[0] === ")" || str[str.length - 1] === "(") {
    console.log("NO");
    continue;
  }

  let [left, right] = [0, 0];
  let result = true;
  for (let j = 0; j < str.length; j++) {
    if (str[j] === "(") left++;
    if (str[j] === ")") right++;
    if (str[j] === ")" && left < right) {
      result = false;
      break;
    }
  }

  if (left !== right) {
    console.log("NO");
    continue;
  }
  if (result) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}