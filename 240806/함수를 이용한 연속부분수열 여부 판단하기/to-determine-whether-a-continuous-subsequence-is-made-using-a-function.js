const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [n1, n2] = input[0].split(" ").map(Number);
let arr1 = input[1].split(" ").map(Number);
let arr2 = input[2].split(" ").map(Number);

function checkarr(arr1, arr2) {
    let cnt = 0;
    for (let i = 0; i < n1; i++) {
        for (let j = 0; j < n2; j++) {
            if (arr1[i + j] === arr2[j]) {
                cnt++;
            } else {
                cnt = 0;
                break;
            }
        }
        if (cnt === n2) break;
    }

    return cnt === n2
}

if (checkarr(arr1, arr2)) {
    console.log("Yes");
} else {
    console.log("No");
}