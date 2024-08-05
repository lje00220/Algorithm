const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let o = input[1];
let c = Number(input[2]);

function add(a, c) {
    return a + c;
}

function sub(a, c) {
    return a - c;
}

function mul(a, c) {
    return a * c;
}

function div(a, c) {
    return parseInt(a / c);
}


if (o === "+") {
    console.log(`${a} ${o} ${c} = ${add(a, c)}`);
} else if (o === "-") {
    console.log(`${a} ${o} ${c} = ${sub(a, c)}`);
} else if (o === "/") {
    console.log(`${a} ${o} ${c} = ${div(a, c)}`);
} else if (o === "*") {
    console.log(`${a} ${o} ${c} = ${mul(a, c)}`);
} else {
    console.log("False");
}