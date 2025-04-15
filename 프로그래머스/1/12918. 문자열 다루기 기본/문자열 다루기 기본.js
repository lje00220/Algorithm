function solution(s) {
    const checkLength = (s) => s.length === 4 || s.length === 6;
    const checkNum = (s) => s.split("").filter((x) => x >= "0" && x <= "9").length === s.length;
    return checkLength(s) && checkNum(s);
}