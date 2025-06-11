function solution(n, t, m, p) {
    let answer = '';
    const previewArr = [];
    for (let i = 0; i <= t * m; i++) {
        const num = i.toString(n).toUpperCase();
        if (num.length > 1) {
            previewArr.push(...num.split(""))
        } else {
            previewArr.push(num);
        }
    }

    return previewArr.filter((_, idx) => p === m ? (idx + 1) % m === 0: (idx + 1) % m === p).join("").slice(0, t);
}