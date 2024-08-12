class person {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let people = [];

for (let i = 1; i <= n; i++) {
    let [name, height, weight] = input[i].trim().split(" ");
    people.push(new person(name, Number(height), Number(weight)));
}

people.sort((prev, cur) => prev.height - cur.height);

for (elem of people) {
    console.log(elem.name, elem.height, elem.weight);
}