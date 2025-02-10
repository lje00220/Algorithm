const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let answer = "";
let sequenceScore, curScore;

for (let i = 1; i < input.length; i++) {
  const quiz = input[i].split("");
  sequenceScore = 0;
  curScore = 0;
  for (let j = 0; j < quiz.length; j++) {
    if (quiz[j] === "X") {
      sequenceScore = 0;
    } else {
      sequenceScore++;
      curScore += sequenceScore;
    }
  }
  answer += curScore + "\n";
}

console.log(answer);
