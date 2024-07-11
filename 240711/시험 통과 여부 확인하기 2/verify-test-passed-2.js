const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");
let cnt = 0;

for (let i = 1; i <= Number(arr[0]); i++) {
    let sumVal = 0;
    let score = arr[i].split(" ");

    score.forEach((val) => {
        sumVal += Number(val);
    })

    if ((sumVal / 4) >= 60) {
        console.log("pass");
        cnt++;
    } else {
        console.log("fail");
    }
}

console.log(cnt);