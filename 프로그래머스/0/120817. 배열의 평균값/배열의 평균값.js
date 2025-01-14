function solution(numbers) {
    return (numbers.reduce((preV, curV) => preV + curV, 0) / numbers.length).toFixed(1);
}