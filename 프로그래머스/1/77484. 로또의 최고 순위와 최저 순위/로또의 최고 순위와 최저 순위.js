function solution(lottos, win_nums) {
    var answer = [];
    let [zeroNum, winning] = [0, 0]
    lottos.forEach((x) => {
        if (win_nums.includes(x)) winning++;
        if (x === 0) zeroNum++;
    })
    7 - (winning + zeroNum) == 7 ? answer.push(6) : answer.push(7 - (winning + zeroNum));
    (7 - winning) === 7 ? answer.push(6) : answer.push(7 - winning);
    
    return answer;
}