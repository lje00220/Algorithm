function solution(n) {
    let answer = n + 1;
    const binaryN = n.toString(2).replaceAll("0", "").length;
    while(true) {
        let binaryTemp = answer.toString(2).replaceAll("0", "").length;
        if (binaryTemp === binaryN) {
            return answer;
        }
        answer++;
    }
}