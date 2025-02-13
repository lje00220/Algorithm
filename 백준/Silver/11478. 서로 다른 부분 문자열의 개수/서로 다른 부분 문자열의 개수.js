const fs = require("fs");
const str = fs.readFileSync(0).toString().trim();

const map = new Map();
for (let start = 0; start < str.length; start++) {
  for (let end = start + 1; end <= str.length; end++) {
    const s = str.slice(start, end);
    map.set(s, 1);
  }
}

console.log(map.size);