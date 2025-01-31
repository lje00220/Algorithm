function solution(s) {
    const result = s.split("").reduce((acc, cur, idx) => {
        if (acc.length === 0) return [cur];
        if (acc[acc.length - 1] !== cur) {
            acc.push(cur);
        } else {
            acc.pop();
        }
        return acc;
    }, []);
    return result.length === 0 ? 1 : 0;
}