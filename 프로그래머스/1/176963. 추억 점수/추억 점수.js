function solution(name, yearning, photo) {
  const scoreMap = {}; 

  for (let i = 0; i < name.length; i++) {
    scoreMap[name[i]] = yearning[i];
  }

  const answer = [];

  for (let people of photo) {
    let sum = 0;

    for (let person of people) {
      if (scoreMap[person]) {
        sum += scoreMap[person];
      }
    }

    answer.push(sum);
  }

  return answer;
}