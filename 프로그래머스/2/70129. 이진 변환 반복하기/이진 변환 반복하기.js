function solution(s) {
    let [cnt, cnt0] = [0, 0];
    while (s !== "1") {
        // 1단계) 0 제거
        cnt0 += s.split("").filter((x) => x === "0").length;
        s = s.replaceAll("0", "");
        
        // 2단계) 이진 변환
        s = s.length.toString(2);
        cnt++;
    }
    return [cnt, cnt0];
}