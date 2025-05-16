function solution(n) {
    const fibonacci = [0, 1];
    for (let i = 2; i <= n % 1234567; i++) {
        fibonacci.push(fibonacci[i - 1] % 1234567 + fibonacci[i - 2] % 1234567);
    }
    return fibonacci[fibonacci.length - 1] % 1234567;
}