function solution(babbling) {
    let answer = 0;
    const words = ["aya", "ye", "woo", "ma"];
    
    for (let i = 0; i < babbling.length; i++) {
        let speakWord = babbling[i];
        let pos = 0;
        let prev = "";
        let isValid = true;

        while (pos < speakWord.length) {
            let matched = false;

            for (let word of words) {
                if (speakWord.startsWith(word, pos)) {
                    if (word === prev) {
                        isValid = false;
                        break;
                    }
                    prev = word;
                    pos += word.length;
                    matched = true;
                    break;
                }
            }

            if (!matched || !isValid) break;
        }

        if (pos === speakWord.length && isValid) {
            answer++;
        }
    }

    return answer;
}