function solution(progresses, speeds) {
    const answer = [];
    const stack = [];
    for (let i = 0; i < progresses.length; i++) {
        const remainder = Math.ceil((100 - progresses[i]) / speeds[i]);
        stack.push(remainder);
    }
    
    let cnt = 0;
    let standard = stack[0];

    for (let i = 0; i < stack.length; i++) {
        if (standard >= stack[i]) {
            cnt++;
        } else {
            answer.push(cnt);
            standard = stack[i];
            cnt = 1;
        }
    }
    answer.push(cnt);
    return answer;
}