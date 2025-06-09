function solution(s) {
    let [cntRepeat, cnt0] = [0, 0];
    while (s !== "1") {
        cnt0 += s.replaceAll("1", "").length;
        s = s.replaceAll("0", "");
        s = Number(s.length).toString(2);
        cntRepeat++;
    }
    return [cntRepeat, cnt0];
}