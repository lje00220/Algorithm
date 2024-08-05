const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

function printSentence(n) {
    for (let i = 0; i < n; i++) {
        process.stdout.write("12345^&*()_");
        process.stdout.write("\n");
    }
}

printSentence(n);