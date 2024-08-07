const fs = require("fs");
let [arr1, arr2] = fs.readFileSync(0).toString().trim().split("\n");

function findIndex() {
    let index = -1;
    if (arr1.includes(arr2)) {
        index = arr1.indexOf(arr2);
    }
    return index;
}

let result = findIndex();

console.log(result);