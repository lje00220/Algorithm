const fs = require("fs");
let [code, color, time] = fs.readFileSync(0).toString().trim().split(" ");

class Bomb {
    constructor(code, color, time) {
        this.code = code;
        this.color = color;
        this.time = time;
    }
}

const bomb = new Bomb(code, color, time);

console.log(`code : ${bomb.code}`);
console.log(`color : ${bomb.color}`);
console.log(`second : ${bomb.time}`);