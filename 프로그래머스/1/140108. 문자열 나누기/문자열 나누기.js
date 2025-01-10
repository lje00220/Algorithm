function solution(s) {
    let answer = 0;
    let [xCnt, notXCnt] = [0, 0];
    s = s.split("");
    let x = s[0];
    for (let i = 0; i < s.length; i++) {
        if (x === s[i]) xCnt++;
        if (x !== s[i]) notXCnt++;
        if (xCnt === notXCnt) {
            answer++;
            [xCnt, notXCnt] = [0, 0];
            x = s[i + 1];
        }
        
        if ((i === s.length - 1) && (xCnt !== notXCnt)) answer++;
        
    }
    return answer;
}