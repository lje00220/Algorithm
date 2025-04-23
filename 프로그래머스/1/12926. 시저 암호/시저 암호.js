function solution(s, n) {
  return [...s].map((char) => {
    if (char === ' ') return ' ';

    const isUpper = char >= 'A' && char <= 'Z';
    const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);

    const shifted = (char.charCodeAt(0) - base + n) % 26;

    return String.fromCharCode(base + shifted);
  }).join('');
}