const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let mapper = {
    "W": 0, // 서
    "S": 1, // 남
    "N": 2, // 북
    "E": 3  // 동
};

let dx = [-1, 0, 0, 1], dy = [0, -1, 1, 0];
let [x, y] = [0, 0];
let cDir = mapper[0];
let time = 0;
let satisfied = false;

outer: for (let i = 1; i < input.length; i++) {
    let [dir, dist] = input[i].trim().split(" ");
    dist = Number(dist);
    cDir = mapper[dir];
    for (let j = 0; j < dist; j++) {
        x += dx[cDir]; y += dy[cDir];
        time++;
        
        if (x === 0 && y === 0) {
            satisfied = true;
            break outer;
        }
    }
}

if (satisfied) {
    console.log(time);
} else {
    console.log(-1);
}