function solution(food) {
    let answer = '';
    const arr = food.slice(1).map((x) => Math.floor(x / 2));
    for (let i = 1; i < arr.length + 1; i++) {
        answer += String(i).repeat(arr[i - 1]);
    }
    answer += '0' + answer.split("").reverse().join("");
    return answer;
}