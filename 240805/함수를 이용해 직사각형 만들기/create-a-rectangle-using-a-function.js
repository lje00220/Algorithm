const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let n = input[0];
let m = input[1];

function printSquare(n, m) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            process.stdout.write("1");
        }
        process.stdout.write("\n");
    }
}

printSquare(n, m);