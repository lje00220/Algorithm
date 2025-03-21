function solution(x) {
    const sumVal = String(x).split("").map(Number).reduce((acc, cur) => {
        acc += cur;
        return acc;
    });
    return x % sumVal === 0;
}