function solution(k, score) {
  let answer = [];
  const honors = [];
  for (let i = 0; i < score.length; i++) {
    honors.push(score[i])
    honors.sort((a, b) => b - a);
    if (i >= k) honors.pop();
    answer.push(honors[honors.length - 1])
  }

  return answer;
}