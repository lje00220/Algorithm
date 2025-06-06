function solution(k, tangerine) {
    let answer = 0;
    const map = new Map();
    for (let i = 0; i < tangerine.length; i++) {
        map.set(tangerine[i], (map.get(tangerine[i]) ?? 0) + 1);
    }
    
    const newArr = [...map.values()].sort((a, b) => b - a);
    for (let i = 0; i < newArr.length; i++) {
        if (k > 0) {
            answer++;
            k -= newArr[i];
        } else {
            return answer;
        }
    }
    return answer;
}