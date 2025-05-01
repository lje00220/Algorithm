function solution(k, tangerine) {
  const sizeCount = new Map();

  for (const size of tangerine) {
    sizeCount.set(size, (sizeCount.get(size) || 0) + 1);
  }

  const sortedCounts = Array.from(sizeCount.values()).sort((a, b) => b - a);

  let total = 0; 
  let kinds = 0; 

  for (const count of sortedCounts) {
    total += count;
    kinds += 1;
    if (total >= k) break;
  }

  return kinds;
}