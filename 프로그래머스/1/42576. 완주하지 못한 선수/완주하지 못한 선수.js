function solution(participant, completion) {
    const map = new Map();
    for (let elem of completion) {
        if (map.has(elem)) {
            map.set(elem, map.get(elem) + 1);
        } else {
            map.set(elem, 1);
        }
    }
    
    for (let elem of participant) {
        if (map.has(elem) && map.get(elem) > 0) {
            map.set(elem, map.get(elem) - 1);
        } else {
            return elem;
        }
    }
}