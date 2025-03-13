const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const arr = input.slice(1,);
const increaseArr = [...arr].sort();
const decreaseArr = [...arr].sort().reverse();

const equals = (a, b) => a.every((val, index) => val === b[index]);

if (equals(arr, increaseArr)) {
    console.log("INCREASING");
} else if (equals(arr, decreaseArr)) {
    console.log("DECREASING");
} else {
    console.log("NEITHER");
}

