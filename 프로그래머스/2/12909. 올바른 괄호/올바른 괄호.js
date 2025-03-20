function solution(s){
    if (s[0] === ")" || s[s.length - 1] === "(") return false;
    let bracket = 0;
    for (let i = 0; i < s.length; i++) {
        bracket += (s[i] === "(") ? 1 : -1;
        if (bracket < 0) return false;
    }

    return bracket === 0 ? true : false;
}