function solution(citations) {
    const answer = [];
    citations = citations.sort((a, b) => a - b);
    for (let i = 0; i <= citations[citations.length - 1]; i++) {
        let cnt = 0;
        for (let j = 0; j < citations.length; j++) {
            if (citations[j] >= i) cnt++;
        }
        if (cnt >= i) answer.push(i);
    }
    return Math.max(...answer);
}