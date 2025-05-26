function solution(clothes) {
    const map = new Map();
    for (let i = 0; i < clothes.length; i++) {
        if (!map.has(clothes[i][1])) {
            map.set(clothes[i][1], [clothes[i][0]]);
        } else {
            map.set(clothes[i][1], [...map.get(clothes[i][1]), clothes[i][0]])
        }
    }
    
    let combinations = 1;
    for (let value of map.values()) {
        combinations *= (value.length + 1);
    }
    return combinations - 1;
}