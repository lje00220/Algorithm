function solution(s) {
    let answer = 0;
    let x = s[0];
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        cnt = x === s[i] ? cnt + 1 : cnt - 1;
        
        if (cnt === 0) {
            answer++;
            x = s[i + 1];
        }
    }
    if (cnt !== 0) answer++;
    return answer;
}