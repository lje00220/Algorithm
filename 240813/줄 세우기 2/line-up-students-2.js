class Student {
    constructor(height, weight, number) {
        this.height = height;
        this.weight = weight;
        this.number = number;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let students = [];

for (let i = 1; i <= n; i++) {
    let [height, weight] = input[i].trim().split(" ").map(Number);
    students.push(new Student(height, weight, i));
}

function cmp(a, b) {
    if (a.height === b.height) {
        return b.weight - a.weight;
    }
    return a.height - b.height;
}

students.sort(cmp);

students.forEach((student) => 
    console.log(student.height, student.weight, student.number));