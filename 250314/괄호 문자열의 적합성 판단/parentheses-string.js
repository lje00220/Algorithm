const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('');

const stack = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
        stack.push(input[i]);
    } else {
        if (stack.length === 0) {
            return console.log("No");
        }
        stack.pop();
    }
}

if (stack.length !== 0) {
    console.log("No")
} else {
    console.log("Yes")
}
