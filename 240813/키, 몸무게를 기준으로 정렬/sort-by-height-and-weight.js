class Person {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

function cmp(a, b) {
    if (a.height === b.height) {
        return b.weight - a.weight;
    }
    return a.height - b.height;
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let people = [];

for (let i = 1; i <= n; i++) {
    let [name, height, weight] = input[i].trim().split(" ");
    people.push(new Person(name, Number(height), Number(weight)));
}

people.sort(cmp);

people.forEach((person) => {
    console.log(person.name, person.height, person.weight);
})