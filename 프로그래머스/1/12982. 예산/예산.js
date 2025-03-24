function solution(d, budget) {
    d.sort((a, b) => a - b);
    let answer = 0;
    for (let elem of d) {
        if (budget - elem >= 0) {
            budget -= elem;
            answer++;
        }
    }
    return answer;
}