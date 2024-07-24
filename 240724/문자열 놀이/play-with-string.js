const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let str = input[0].split(" ")[0].split("");
let n = Number(input[0].split(" ")[1]);

for (let i = 1; i <= n; i++) {
    let question = Number(input[i].split(" ")[0]);
    let a = input[i].split(" ")[1];
    let b = input[i].split(" ")[2];

    if (question === 1) {
        a = Number(a) - 1; b = Number(b) - 1;
        let temp = str[a];
        str[a] = str[b];
        str[b] = temp;
    } else {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === a) str[i] = b;
        }
    }
    console.log(str.join(""));
}