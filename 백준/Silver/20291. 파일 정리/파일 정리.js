const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const extensions = new Map();
const arr = input.slice(1,);

for (let elem of arr) {
    const [name, extent] = elem.split(".")
    if (!extensions.has(extent)) {
        extensions.set(extent, 1);
    } else {
        extensions.set(extent, extensions.get(extent) + 1);
    }
}

const sortedArr = [...extensions].sort((a, b) => a[0].localeCompare(b[0]));

let result = "";

for (let i = 0; i < sortedArr.length; i++) {
    const [name, extent] = sortedArr[i];
    result += `${name} ${extent}`;
    result += (i === (sortedArr.length - 1)) ? "" : "\n"
}

console.log(result)