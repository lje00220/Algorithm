function solution(n, lost, reserve) {
    const lostSet = new Set(lost);
    const reserveSet = new Set(reserve);
    for (let student of lost) {
        if (reserveSet.has(student)) {
            lostSet.delete(student);
            reserveSet.delete(student);
        }
    }
    let answer = n - lostSet.size;
    for (let i = 1; i <= n; i++) {
        if (lostSet.has(i)) {
            if (i > 1 && reserveSet.has(i - 1)) {
                reserveSet.delete(i - 1);
                answer++;
            } else if (reserveSet.has(i + 1)) {
                reserveSet.delete(i + 1);
                answer++;
            }
        }
    }
    return answer;
}