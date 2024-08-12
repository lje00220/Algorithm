class userInfo {
    constructor(name, address, region) {
        this.name = name;
        this.address = address;
        this.region = region;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);

let users = Array(n).fill(new userInfo());
for (let i = 1; i <= n; i++) {
    let [name, address, region] = input[i].trim().split(" ");
    users[i - 1] = new userInfo(name, address, region);
}

let idx = 0;
for (let i = 0; i < n; i++) {
    if (users[i].name > users[idx].name) {
        idx = i;
    }
}

console.log(`name ${users[idx].name}`);
console.log(`addr ${users[idx].address}`);
console.log(`city ${users[idx].region}`);