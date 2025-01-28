function solution(number) {
    let answer = 0;
    const len = number.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let l = j + 1; l < len; l++) {
                if (number[i] + number[j] + number[l] === 0) answer++;
            }
        }
    }
    return answer;
}