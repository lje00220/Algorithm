function solution(k, score) {
    var answer = [];
    let rank = [];
    let len = k > score.length ? score.length : k;
    for (let i = 0; i < len; i++) {
        if (i <= score.length) {
            rank.push(score[i]);
            answer.push(Math.min(...rank));   
        } else {
            answer.push(Math.min(...rank));  
        }
    }
    
    for (let i = k; i < score.length; i++) {
        rank.sort((a, b) => a - b);
        if (score[i] > rank[0]) rank[0] = score[i];
        answer.push(Math.min(...rank));
    }

    return answer;
}
