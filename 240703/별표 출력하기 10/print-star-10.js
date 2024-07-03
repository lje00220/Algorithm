const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
let str = "";

for (let i = 0; i < 2 * n; i++) {
    str = "";
    if (i % 2 === 0) {
        for (let j = (n - i / 2); j <= n; j++) {
            str += "* ";
        }
    } else {
        // i는 1 3 5 7 9에 해당
        for (let k = parseInt(i / 2); k < n; k++) {
            // 5 4 3 2 1 출력
            // k에 할당되는건 0 1 2 3 4
            str += "* ";
        }
    }
    console.log(str);
}