function solution(s) {
    const answer = [];
    const arr = s.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 0) {
            answer.push(arr[i]);
        } else {
            answer.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());     
        }
        
    }
    return answer.join(" ");
}