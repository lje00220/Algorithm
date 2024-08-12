const fs = require("fs");
let [code, place, time] = fs.readFileSync(0).toString().trim().split(" ");

class Secret {
    constructor(code, place, time) {
        this.code = code;
        this.place = place;
        this.time = time;
    }
}

const secret1 = new Secret(code, place, time);

console.log(`secret code : ${secret1.code}`);
console.log(`meeting point : ${secret1.place}`);
console.log(`time : ${secret1.time}`);