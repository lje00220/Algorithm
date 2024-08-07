const fs = require("fs");
let str = fs.readFileSync(0).toString().trim();

function palindrome(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

if (palindrome(str)) {
    console.log("Yes");
} else {
    console.log("No");
}