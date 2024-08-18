const fs = require("fs");
let [a, b, c, d] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let elapsed_time = 0;

while (true) { 
    if (a === c && b === d) {
        break;
    }

    elapsed_time++;
    b++;

    if (b === 60) {
        a++;
        b = 0;
    }
}

console.log(elapsed_time);