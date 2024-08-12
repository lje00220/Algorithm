class Score {
    constructor(name, kor, eng, math) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let students = [];

for (let i = 1; i <= n; i++) {
    let [name, kor, eng, math] = input[i].trim().split(" ");
    students.push(new Score(name, Number(kor), Number(eng), Number(math)));
}

students.sort((prev, cur) => {
    return (prev.kor + prev.eng + prev.math) - (cur.kor + cur.eng + cur.math);
});

for (let elem of students) {
    console.log(elem.name, elem.kor, elem.eng, elem.math);
}