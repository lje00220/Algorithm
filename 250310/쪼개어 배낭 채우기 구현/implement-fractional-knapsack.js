const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
const jewels = input.slice(1, Number(n) + 1).map(line => {
    const [w, v] = line.split(' ').map(Number);
    return { w, v };
}).sort((a, b) => (b.v / b.w) - (a.v / a.w));

const values = jewels.map((jewel) => {
    const value = jewel.v / jewel.w;
    return value;
}).sort((a, b) => b - a);

let result = 0;

for (let i = 0; i < n; i++) {
    if (m > jewels[i].w) {
        m -= jewels[i].w
        result += jewels[i].v;
    } else {
        result += m * values[i];
        break;
    }
}

console.log(result.toFixed(3));