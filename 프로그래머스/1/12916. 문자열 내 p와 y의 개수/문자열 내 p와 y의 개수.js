function solution(s) {
    const cntP = Array.from(s.toUpperCase()).filter((x) => x === "P").length;
    const cntY = Array.from(s.toUpperCase()).filter((y) => y === "Y").length;
    return cntP === cntY ? true : false;
}