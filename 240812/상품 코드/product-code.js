class Goods {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}

const fs = require("fs");
let [name, code] = fs.readFileSync(0).toString().trim().split(" ");

let goods1 = new Goods("codetree", "50");
let goods2 = new Goods(name, code);

console.log(`product ${goods1.code} is ${goods1.name}`);
console.log(`product ${goods2.code} is ${goods2.name}`);