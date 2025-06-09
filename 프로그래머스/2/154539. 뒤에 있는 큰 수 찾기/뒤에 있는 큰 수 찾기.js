function solution(numbers) {
    const answer = Array(numbers.length).fill(-1);
    const stack = []
    for (let i = numbers.length - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= numbers[i]) {
            stack.pop();
        }
        const len = stack.length;
        if (len) {
            answer[i] = stack[len - 1];
        }
        stack.push(numbers[i]);
    }
    
    return answer;
}