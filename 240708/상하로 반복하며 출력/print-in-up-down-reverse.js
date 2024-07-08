const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
str = "";
let cnt = 1;

for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = 1; j <= n ; j++) {
        if (j % 2 !== 0) {
            str += cnt;
        } else {
            str += (n - cnt + 1);
        }
    }
    console.log(str);
    cnt++;
}