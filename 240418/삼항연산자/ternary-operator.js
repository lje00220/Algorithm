const fs = require("fs");
let score = Number(fs.readFileSync(0).toString().trim());

if (score === 100) {
    console.log("pass");
} else {
    console.log("failure");
}