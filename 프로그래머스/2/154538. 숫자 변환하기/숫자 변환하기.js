function solution(x, y, n) {
  const visited = new Set();
  const queue = [[x, 0]];
  let idx = 0;

  while (idx < queue.length) {
    const [cur, count] = queue[idx++];
    if (cur === y) return count;

    const nexts = [cur + n, cur * 2, cur * 3];
    for (const next of nexts) {
      if (next <= y && !visited.has(next)) {
        visited.add(next);
        queue.push([next, count + 1]);
      }
    }
  }

  return -1;
}