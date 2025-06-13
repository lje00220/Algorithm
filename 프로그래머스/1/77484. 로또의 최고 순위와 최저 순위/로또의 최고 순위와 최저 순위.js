function solution(lottos, win_nums) {
    const filteredLottos = lottos.filter((lotto) => lotto !== 0);
    const zeroNum = 6 - filteredLottos.length;
    let answer = 0;
    for (let i = 0; i < filteredLottos.length; i++) {
        if (win_nums.includes(filteredLottos[i])) answer++;
    }
    const upperRank = (answer + zeroNum) < 2 ? 6 : 7 - (answer + zeroNum);
    const lowerRank = answer === 0 ? 6 : 7 - answer;
          
    return [upperRank, lowerRank];
}