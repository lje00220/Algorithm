function solution(n) {function solution(n) {
  let battery = 0;

  while (n > 0) {
    if (n % 2 === 1) {
      battery += 1;
      n -= 1;
    } else {
      n /= 2;
    }
  }

  return battery;
}
  let battery = 0;

  while (n > 0) {
    if (n % 2 === 1) {
      battery += 1;
      n -= 1;
    } else {
      n /= 2;
    }
  }

  return battery;
}