const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
let str = "";
let cnt = 9;

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < n; j++) {
        str += cnt;
        cnt--;
        if (cnt < 1) {
            cnt = 9;
        }
    }
    console.log(str);
}