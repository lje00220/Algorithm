const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function even(n) {
    return n % 2 === 0;
}

function hap(n) {
    return (parseInt(n / 10) + (n % 10)) % 5 === 0;
}

if (even(n) && hap(n)) {
    console.log("Yes");
} else {
    console.log("No");
}