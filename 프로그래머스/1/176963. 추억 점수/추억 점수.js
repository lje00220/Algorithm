function solution(name, yearning, photo) {
    let answer = [];
    const map = new Map();
    for (let i = 0; i < name.length; i++) {
        map.set(name[i], yearning[i]);
    }
    for (let arr of photo) {
        answer.push(arr.reduce((acc, cur) => acc += map.has(cur) ? map.get(cur) : 0, 0))
    }
    return answer;
}