const fs = require("fs");
let money = Number(fs.readFileSync(0).toString().trim());

if (money >= 3000) {
    console.log("book");
} else if (money >= 1000) {
    console.log("mask");
} else if (money >= 500) {
    console.log("pen");
} else {
    console.log("no");
}