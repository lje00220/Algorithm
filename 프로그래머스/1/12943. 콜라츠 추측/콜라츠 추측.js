function solution(num) {
    let cnt = 0;
    while (cnt !== 500) {
        if (num === 1) break;
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
        cnt++;
    }
    return num === 1 ? cnt : -1;
}