const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function printSquare(n) {
    let cnt = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            process.stdout.write(`${cnt} `);
            cnt++;
            if (cnt > 9) cnt = 1;
        }
        process.stdout.write("\n");
    }
}

printSquare(n);