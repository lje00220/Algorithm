const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let answer = "";
for (let i = 1; i <= 9; i++) {
  answer += `${n} * ${i} = ${n * i}\n`;
}

console.log(answer);
