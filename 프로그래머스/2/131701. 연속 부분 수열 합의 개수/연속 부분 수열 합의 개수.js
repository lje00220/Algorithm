function solution(elements) {
    const arr = [...elements, ...elements];
    const sums = new Set();

    for (let i = 1; i <= elements.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            const part = arr.slice(j, j + i);
            const sum = part.reduce((a, b) => a + b, 0);
            sums.add(sum);
        }
    }

    return sums.size;
}