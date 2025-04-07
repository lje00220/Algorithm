function solution(s) {
    const arr = s.split(" ");
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i].split("").map((x, idx) => idx === 0 ? x.toUpperCase() : x.toLowerCase()).join("");
        result.push(temp);
    }
    return result.join(" ");
}