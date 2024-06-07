const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let cnt2 = 0; let cnt3 = 0; let cnt12 = 0;

for (let i = 1; i <= n; i++) {
    if (i % 12 == 0) {
        cnt12++;
    } else if (i % 3 == 0) {
        cnt3++;
    } else if (i % 2 == 0) {
        cnt2++;
    }
}

console.log(cnt2, cnt3, cnt12);