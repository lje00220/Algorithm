const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

if (a >= 113) {
    console.log(1);
} else {
    console.log(0);
}