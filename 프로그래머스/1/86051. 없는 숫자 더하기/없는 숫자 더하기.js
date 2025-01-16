function solution(numbers) {
    return 45 - numbers.reduce((preV, curV) => preV + curV, 0);
}