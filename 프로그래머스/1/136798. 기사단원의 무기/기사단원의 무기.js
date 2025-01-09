function solution(number, limit, power) {
    var answer = 0;
    for (let i = 1; i <= number; i++) {
        let divisor = 0;
        for (let j = 1; j <= Math.floor(Math.sqrt(i)); j++) {
            if (i % j === 0) {
                divisor++;
                if (parseInt(i / j) != j) divisor++;
            }
            
        }
        if (divisor > limit) {
            answer += power;
        } else {
            answer += divisor;
        }
    }
    return answer;
}
