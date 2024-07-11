const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");
let n = arr[0];
let score = arr[1].split(" ");
let sumVal = 0;

score.forEach((val) => {
    sumVal += Number(val);
});

let avg = (sumVal / n).toFixed(1);
console.log(avg);

if (avg >= 4.0) {
    console.log("Perfect");
} else if (avg >= 3.0) {
    console.log("Good");
} else {
    console.log("Poor");
}