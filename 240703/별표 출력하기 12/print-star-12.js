const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
let str = "";

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < n; j++) {
        // 짝수 열의 경우
        if (j % 2 === 0) {
            if (i === 0) { // 첫번째 행만 * 출력
                str += "* ";
            } else {
                str += "  ";
            }
        
        } else { // 홀수 열의 경우
            if (i <= j) { // 행이 열보다 크지 않을 때 별 출력
                str += "* ";
            } else {
                str += "  ";
            }
        }
    }
    console.log(str);
}