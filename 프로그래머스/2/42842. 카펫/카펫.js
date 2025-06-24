function solution(brown, yellow) {
    const addNum = brown + yellow;
    const result = [];
    if (Number.isInteger(Math.sqrt(addNum))) return [Math.sqrt(addNum), Math.sqrt(addNum)];
    let idx = 1;
    while (idx <= addNum / 2) {
      if (addNum % idx === 0) result.push(idx)
      idx++
    }
    result.push(addNum);
    for (let i = 0; i < result.length; i++) {
        const [width, height] = [result[result.length - i - 1], result[i]];
        if ((width - 2) * (height - 2) === yellow) return [width, height];
    }
}