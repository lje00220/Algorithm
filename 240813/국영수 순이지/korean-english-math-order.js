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
let people = [];

function cmp(a, b) {
    if (a.kor === b.kor) {
        if (a.eng === b.eng) {
            return b.math - a.math;
        }
        return b.eng - a.eng;
    }

    return b.kor - a.kor;
}

for (let i = 1; i <= n; i++) {
    let [name, kor, eng, math] = input[i].trim().split(" ");
    people.push(new Score(name, Number(kor), Number(eng), Number(math)));
}

people.sort(cmp);

for (let elem of people) {
    console.log(elem.name, elem.kor, elem.eng, elem.math);
}