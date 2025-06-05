function solution(new_id) {
    let answer = '';
    // 1단계
    answer = new_id.toLowerCase();
    // 2단계
    answer = answer.replace(/[^a-z0-9-_.]/g, '');
    // 3단계
    answer = answer.replace(/\.{2,}/g, '.');
    // 4단계
    if (answer[0] === '.') answer = answer.slice(1, answer.length);
    if (answer[answer.length - 1] === '.') answer = answer.slice(0, answer.length - 1);
    // 5단계
    if (answer.length === 0) answer = 'a';
    // 6단계
    if (answer.length >= 16) answer = answer.slice(0, 15);
    if (answer[answer.length - 1] === '.') answer = answer.slice(0, 14);
    // 7단계
    if (answer.length <= 2) answer = answer.padEnd(3, answer[answer.length - 1]);
    return answer;
}