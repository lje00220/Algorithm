function solution(food) {
  let leftSide = ''; 

  for (let i = 1; i < food.length; i++) {
    const count = Math.floor(food[i] / 2);
    leftSide += String(i).repeat(count);
  }

  const rightSide = leftSide.split('').reverse().join('');
  return leftSide + '0' + rightSide;
}