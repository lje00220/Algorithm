const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

class UserInfo {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

let users = Array(5).fill(new UserInfo());

for (let i = 0; i < 5; i++) {
    let [name, score] = input[i].trim().split(" ");
    users[i] = new UserInfo(name, score);
}

let codeName = "";
let minScore = 100;
for (let elem of users) {
    if (Number(elem.score) <= minScore) {
        codeName = elem.name;
        minScore = Number(elem.score);
    }
}

console.log(codeName, minScore);