function isValid(s) {
  const stack = [];
  const pairs = { ')': '(', ']': '[', '}': '{' };

  for (let char of s) {
    if (['(', '[', '{'].includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== pairs[char]) return false;
    }
  }

  return stack.length === 0;
}

function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i); 
    if (isValid(rotated)) {
      count++;
    }
  }

  return count;
}