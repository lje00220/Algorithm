function solution(nums) {
    const pokemons = new Map();
    for (let num of nums) {
        pokemons.set(num, (pokemons.get(num) || 0) + 1)
    }
    return Math.min(pokemons.size, nums.length / 2);
}