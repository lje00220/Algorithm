const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let str = input[0].split(" ")[0];
let n = Number(input[0].split(" ")[1]);

for (let i = 1; i <= n; i++) {
    let q = Number(input[i]);

    if (q === 1) {
        str = str.slice(1) + str.slice(0, 1);
    } else if (q === 2) {
        str = str.slice(-1) + str.slice(0, -1);
    } else {
        let res = "";
        for (let j = str.length - 1; j >= 0; j--) {
            res += str[j];
        }
        str = res;
    }
    console.log(str);
}