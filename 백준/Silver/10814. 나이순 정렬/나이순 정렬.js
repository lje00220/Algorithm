const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const people = [];

for (let i = 1; i < input.length; i++) {
  const [age, name] = input[i].split(" ");
  people.push({ age, name });
}

people.sort((a, b) => +a.age - +b.age);

for (let elem of people) {
  console.log(elem["age"], elem["name"]);
}
