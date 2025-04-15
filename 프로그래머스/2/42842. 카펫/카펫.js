function solution(brown, yellow) {
    const addNum = brown + yellow;
    const result = [];
    if (Number.isInteger(Math.sqrt(addNum))) return [Math.sqrt(addNum), Math.sqrt(addNum)];
    let index = 1;
    while (index <= addNum / 2) {
      if (addNum % index === 0) result.push(index)
      index++
    }
    result.push(addNum);
    for (let i = 0; i < result.length; i++) {
        const [width, height] = [result[result.length - i - 1], result[i]];
        if ((width - 2) * (height - 2) === yellow) return [width, height];
    }
}