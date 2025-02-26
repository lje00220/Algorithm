const fs = require("fs");
const [H, M] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const totalMinute = (H * 60 + M) - 45;

if (totalMinute < 0) {
    console.log(`23 ${60 + totalMinute}`);
} else {
    console.log(`${Math.floor(totalMinute / 60)} ${totalMinute % 60}`)
}
