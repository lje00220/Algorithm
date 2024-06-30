const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let index = 0;

while (true) {
    let arr = input[index].split(" ");
    index++;

    let width = Number(arr[0]);
    let height = Number(arr[1]);
    let string = arr[2];

    console.log(width * height);

    if (string == "C") {
        break;
    }
}