const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const arr = input.slice(1,);
const people = [];

for (let elem of arr) {
    people.push(elem.split(" "));
}

people.sort((a, b) => {
    if (+a[3] - +b[3] > 0) {
        return 1;
    } else if (+b[3] - +a[3] > 0) {
        return -1;
    } else {
        if (+a[2] - +b[2] > 0) {
            return 1;
        } else if (+b[2] - +a[2] > 0) {
            return -1;
        } else {
            if (+a[1] - +b[1] > 0) {
                return 1;
            } else if (+b[1] - +a[1] > 0) {
                return -1;
            }
        }
}})

console.log(people[people.length - 1][0]);
console.log(people[0][0]);
