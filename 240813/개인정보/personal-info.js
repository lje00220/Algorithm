class Person {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let people = [];

for (let i = 0; i < input.length; i++) {
    let [name, height, weight] = input[i].trim().split(" ");
    people.push(new Person(name, Number(height), Number(weight)));
}

function cmp(a, b) {
    if (a.name > b.name) {
        return 1;
    } else {
        return -1;
    }
}


people.sort(cmp);

console.log("name");
people.forEach((person) => {
    console.log(person.name, person.height, person.weight);
});

people.sort((prev, cur) => cur.height - prev.height);

console.log();
console.log("height");
people.forEach((person) => {
    console.log(person.name, person.height, person.weight);
});