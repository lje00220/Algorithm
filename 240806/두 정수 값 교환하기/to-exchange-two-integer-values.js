const fs = require("fs");
let [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function change(a, b) {
    return [b, a];
}

console.log(change(n, m).join(" "));