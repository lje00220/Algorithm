function solution(word) {
    const alphabets = ["A", "E", "I", "O", "U"];
    const arr = [];
    function dfs(currentWord) {
        if (currentWord.length === 5) return;

        for (let i = 0; i < alphabets.length; i++) {
            let nextWord = currentWord + alphabets[i];
            arr.push(nextWord)
            dfs(nextWord); // 다음 글자 붙이러 가자!
        }
    }
    dfs("");
    return arr.indexOf(word) + 1;
}