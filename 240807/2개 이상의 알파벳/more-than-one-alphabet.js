const fs = require("fs");
let str = fs.readFileSync(0).toString().trim();

function checkAlphabet(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] !== str[i + 1]) {
            return true;
        }
    }
    return false;
}

if (checkAlphabet(str)) {
    console.log("Yes");
} else {
    console.log("No");
}