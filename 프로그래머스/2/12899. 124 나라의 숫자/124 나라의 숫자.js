function solution(n) {
    let answer = '';
    let rules = {
        0: 4,
        1: 1,
        2: 2,
    }
    
    while (n !== 0) {
        const 나머지 = n % 3;
        const deleteNum = n % 3 === 0 ? 1 : 0
        answer = rules[나머지] + answer;
        n = Math.floor(n / 3) - deleteNum;
    }
    return answer;
}