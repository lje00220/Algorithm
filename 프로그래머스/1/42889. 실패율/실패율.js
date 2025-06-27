function solution(N, stages) {
    let answer = [];
    const map = new Map();
    for (let i = 1; i <= N; i++) {
        const cnt = stages.filter((stage) => stage === i).length;
        map.set(i, cnt);
    }
    let total = stages.length;
    for (let [key, value] of map.entries()) {
        const failure = value !== 0 ? value / total : 0;
        map.set(key, failure);
        total -= value;
    }
    
    const sorted = [...map.entries()].sort((a, b) => {
        if (b[1] === a[1]) return a[0] - b[0];
        return b[1] - a[1];
    });

    answer = sorted.map(([stage, _]) => stage);

    return answer;
}