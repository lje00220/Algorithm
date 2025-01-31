function solution(citations) {
    let answer = 0;
    for (let i = 0; i <= Math.max(...citations); i++) {
        const temp = citations.filter((x) => x >= i)
        if (temp.length >= i) answer = i;
    }
    return answer;
}
