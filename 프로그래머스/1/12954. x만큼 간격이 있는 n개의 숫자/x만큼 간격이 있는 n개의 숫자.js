function solution(x, n) {
    const arr = Array(n).fill(0);
    return arr.map((elem, idx) => elem + x * (idx + 1));
}