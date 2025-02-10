const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let answer = "";
for (let i = 1; i <= n; i++) {
  answer += "*".repeat(i) + "\n";
}

console.log(answer);
