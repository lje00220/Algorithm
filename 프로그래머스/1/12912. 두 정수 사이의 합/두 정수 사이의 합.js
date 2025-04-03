function solution(a, b) {
    let answer = 0;
    const START = Math.min(a, b);
    const END = Math.max(a, b)
    for (let i = START; i <= END; i++) {
        answer += i;
    }
    return answer;
}