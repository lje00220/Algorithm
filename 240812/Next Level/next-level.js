const fs = require("fs");
let [id, level] = fs.readFileSync(0).toString().trim().split(" ");

class UserInfo {
    constructor(id, level) {
        this.id = id;
        this.level = level;
    }
}

const user1 = new UserInfo("codetree", "10");
const user2 = new UserInfo();

user2.id = id;
user2.level = level;

console.log(`user ${user1.id} lv ${user1.level}`);
console.log(`user ${user2.id} lv ${user2.level}`);