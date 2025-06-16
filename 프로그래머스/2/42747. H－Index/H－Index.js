function solution(citations) {
    citations.sort((a, b) => a - b);
    let answer = 0;
    for (let i = 0; i <= 10000; i++) {
        let cnt = 0;
        for (let elem of citations) {
            if (elem >= i) cnt++;
        }
        
        if (cnt >= i) answer = i;
    }
    return answer;
}