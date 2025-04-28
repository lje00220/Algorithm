function solution(a, b, n) {
  let answer = 0;
  
  while (n >= a) {
    let exchange = Math.floor(n / a) * b;
    answer += exchange;
    n = exchange + (n % a);
  }
  
  return answer;
}