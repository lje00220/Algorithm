function solution(s) {
    let [cnt, zeroCnt] = [0, 0];
    while (s !== "1") {
        zeroCnt += s.split("").filter((x) => x === "0").length;
        const str = s.replaceAll("0", "");
        s = parseInt(str.length).toString(2);
        cnt++;
    } 
    
    return [cnt, zeroCnt];
}