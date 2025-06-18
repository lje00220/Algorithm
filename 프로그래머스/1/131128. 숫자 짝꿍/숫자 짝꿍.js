function solution(X, Y) {
    const countX = Array(10).fill(0);
    const countY = Array(10).fill(0);

    for (let ch of X) countX[ch]++;
    for (let ch of Y) countY[ch]++;

    const result = [];

    for (let i = 9; i >= 0; i--) {
        const minCount = Math.min(countX[i], countY[i]);
        if (minCount > 0) result.push(String(i).repeat(minCount));
    }

    if (result.length === 0) return "-1";

    const answer = result.join("");

    return answer[0] === "0" ? "0" : answer;
}