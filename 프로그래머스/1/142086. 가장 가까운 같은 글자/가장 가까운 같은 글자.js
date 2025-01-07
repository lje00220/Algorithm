function solution(s) {
    let answer = [];
    s = s.split("");
    for (let i = 0; i < s.length; i++) {
        let tempArr = s.slice(0, i);
        let idx = tempArr.indexOf(s[i]);
        if (idx === -1) {
            answer.push(idx);
            continue;
        }
        answer.push(i - idx);
        s[idx] = 0;
    }
    return answer;
}