function solution(n) {
    let answer = 0;
    let i = 1;

    while (i * (i - 1) / 2 < n) {
        if ((n - (i * (i - 1)) / 2) % i === 0) {
            answer++;
        }
        i++;
    }

    return answer;
}