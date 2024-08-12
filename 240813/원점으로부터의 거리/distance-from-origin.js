class Distance {
    constructor(x, y, number) {
        this.x = x;
        this.y = y;
        this.number = number;
    }
}

function cmp(a, b) {
    if ((Math.abs(a.x) + Math.abs(a.y)) === (Math.abs(b.x) + Math.abs(b.y))) {
        return a.number - b.number;
    } 
    return (Math.abs(a.x) + Math.abs(a.y)) - (Math.abs(b.x) + Math.abs(b.y))
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let coordinate = [];

for (let i = 1; i <= n; i++) {
    let [x, y] = input[i].trim().split(" ").map(Number);
    coordinate.push(new Distance(x, y, i));
}

coordinate.sort(cmp);

coordinate.forEach((elem) => console.log(elem.number));