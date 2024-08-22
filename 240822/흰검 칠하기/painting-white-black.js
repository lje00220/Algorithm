const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let tileArr = Array(200001).fill(0);
let whiteTile = Array(200001).fill(0);
let blackTile = Array(200001).fill(0);
let current = 100000;

for (let i = 1; i <= n; i++) {
    let [distance, dir] = input[i].trim().split(" ");
    distance = Number(distance);
    if (dir === "R") {
        for (let j = current; j < current + distance; j++) {
            tileArr[j] = 1;
            blackTile[j] += 1;
            // process.stdout.write(j + " ");
        }
        current += (distance - 1);
    } else {
        for (let j = current; j > current - distance; j--) {
            tileArr[j] = 2;
            whiteTile[j] += 1;
            // process.stdout.write(j + " ");
        }
        current -= (distance - 1);
    }
    // console.log();
}

for (let i = 0; i < tileArr.length; i++) {
    if (blackTile[i] >= 2 && whiteTile[i] >= 2) {
        tileArr[i] = 3;
    }
}

let ans = [0, 0, 0];

for (let elem of tileArr) {
    if (elem === 1) {
        ans[1] += 1;
    } else if (elem === 2) {
        ans[0] += 1;
    } else if (elem === 3) {
        ans[2] += 1;
    }
}

console.log(ans.join(" "));