const fs = require("fs");
const [n, shirts, arr] = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(n);
const shirtSize = shirts.split(" ").map(Number);
const [T, P] = arr.split(" ").map(Number);

const penBundle = Math.floor(N / P);
const penIndividual = N % P;

const shirtCnt = shirtSize.reduce((acc, cur) => (acc += Math.ceil(cur / T)), 0);

console.log(shirtCnt);
console.log(penBundle, penIndividual);
