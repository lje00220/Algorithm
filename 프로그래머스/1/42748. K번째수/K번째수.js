function solution(array, commands) {
    let answer = [];
    for (let command of commands) {
        const [start, end, idx] = command;
        const num = array.slice(start - 1, end).sort((a, b) => a - b)[idx - 1];
        answer.push(num);
    }
    return answer;
}