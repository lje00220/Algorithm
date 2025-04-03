function solution(s) {
    const LEN = s.length
    if (LEN % 2 !== 0) {
        return s[Math.floor(LEN / 2)];
    } else {
        return s[LEN / 2 - 1] + s[LEN / 2]
    }
}