function isPrime(n) {
  if (n < 2) return false;
  const sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  const baseK = n.toString(k);
  const candidates = baseK.split('0');

  let answer = 0;
  for (let token of candidates) {
    if (token === '') continue; 
    const num = Number(token);
    if (isPrime(num)) answer++; 
  }

  return answer;
}