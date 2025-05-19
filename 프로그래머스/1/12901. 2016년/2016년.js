function solution(a, b) {
    const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAY_OF_WEEK = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    let answer = b;
    for (let i = 0; i < a - 1; i++) {
        answer += days[i];
    }
    return DAY_OF_WEEK[(answer - 1) % 7];
}