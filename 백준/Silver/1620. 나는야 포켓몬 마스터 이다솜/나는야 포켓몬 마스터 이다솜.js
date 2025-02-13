const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);

const pokemon = new Map();
const orderPokemon = new Map();
for (let i = 1; i <= n; i++) {
  pokemon.set(input[i], i);
  orderPokemon.set(i, input[i]);
}

for (let i = n + 1; i < input.length; i++) {
  if (pokemon.has(input[i])) console.log(pokemon.get(input[i]));
  if (orderPokemon.has(+input[i])) console.log(orderPokemon.get(+input[i]));
}