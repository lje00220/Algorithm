const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
let str = "";
let cnt = 1;

for (let i = 1; i <= n; i++) {
    str = "";
    if (i % 2 !== 0) {
        for (let i = 0; i < n; i++) {
            str += cnt + " ";
            cnt++;
        }
    } else {
        cnt += (n - 1);
        for (let i = 0; i < n; i++) {
            str += cnt + " ";
            cnt--;
        }
        cnt += (n + 1);
    }
    console.log(str);
}