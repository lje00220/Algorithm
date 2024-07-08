const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let str = "";

for (let i = 1; i < 10; i++) {
    str = "";
    for (let j = b; j >= a; j -= 2) {
        str += `${j} * ${i} = ${j * i}`;
        if (j !== a) str += " / ";
    }
    console.log(str);
}