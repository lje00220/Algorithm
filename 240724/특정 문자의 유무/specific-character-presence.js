const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let str = "";
if (input.includes("ee")) {
    str += "Yes ";
} else {
    str += "No ";
}

if (input.includes("ab")) {
    str += "Yes";
} else {
    str += "No";
}

console.log(str);