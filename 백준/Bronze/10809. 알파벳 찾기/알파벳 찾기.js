const fs = require("fs");
const str = fs.readFileSync(0).toString().trim().split("");
const answer = [];
for (let i = 97; i <= 122; i++) {
  const alphabet = String.fromCharCode(i);
  answer.push(str.indexOf(alphabet));
}

console.log(answer.join(" "));
