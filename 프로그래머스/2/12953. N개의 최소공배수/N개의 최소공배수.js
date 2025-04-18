function solution(arr) {
    let answer = 0;
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    for (let i = 0; i < arr.length - 1; i++) {
        if (i === 0) {
            answer = lcm(arr[i], arr[i + 1]);
        } else {
            answer = lcm(answer, arr[i + 1]);
        }
    }
    return answer;
}