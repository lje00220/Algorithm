function solution(n) {
    let answer = 0;
    let sum;
    for (let i = 1; i <= n; i++) {
        sum = 0;
        for (let j = i; j <= n; j++) {
            sum += j;
            if (sum > n) break;
            if (sum === n) {
                answer++;
                break;
            }
        }
    }
    return answer;
}