function solution(n, words) {
    const prevWords = [words[0]];
    for (let i = 1; i < words.length; i++) {
        if (words[i - 1][words[i - 1].length -1] !== words[i][0] || prevWords.includes(words[i])) {
            const turn = Math.ceil((i + 1) / n);
            return (i + 1) % n === 0 ? [n, turn] : [(i + 1) % n, turn];
        }
        prevWords.push(words[i]);
    }
    return [0, 0];
}