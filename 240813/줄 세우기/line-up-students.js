class Student {
    constructor(height, weight, number) {
        this.height = height;
        this.weight = weight;
        this.number = number;
    }
}

function cmp(a, b) {
    if (a.height === b.height) {
        if (a.weight === b.weight) {
            return a.number - b.number;
        }
        return b.weight - a.weight;
    }
    return b.height - a.height;
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let students = [];

for (let i = 1; i <= n; i++) {
    let [height, weight] = input[i].trim().split(" ").map(Number);
    students.push(new Student(height, weight, i));
}

students.sort(cmp);

for (elem of students) {
    console.log(elem.height, elem.weight, elem.number);
}