const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let h = Number(input[0]);
let w = Number(input[1]);

let b = parseInt((10000*w)/(h*h));

console.log(b);
if (b >= 25) {
    console.log('Obesity');
}