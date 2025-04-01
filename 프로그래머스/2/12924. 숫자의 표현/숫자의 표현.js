function solution(n) {
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        let sumVal = i;
        for (let j = i + 1; j <= n + 1; j++) {
            if (sumVal === n) {
                cnt++;
                break;
            }
            if (sumVal > n) break;
            sumVal += j;
        }
    }
    return cnt;
}