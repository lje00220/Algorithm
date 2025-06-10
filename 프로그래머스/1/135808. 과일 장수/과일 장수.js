function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => b - a);
    for (let i = 0; i + m <= score.length; i += m) {
        answer += score[i + m - 1] * m;
    }
    return answer;
}