function solution(number, limit, power) {   
    let answer = 0;
    const arr = [];
    for (let i = 1; i <= number; i++) {
        let prime = 1;
        for (let j = 1; j <= Math.floor(i / 2); j++) {
            if (i % j === 0) prime++;
        }
        arr.push(prime);
    }
    
    for (let elem of arr) {
        if (elem > limit) {
            answer += power;
        } else {
            answer += elem;
        }
    }
    return answer;
}