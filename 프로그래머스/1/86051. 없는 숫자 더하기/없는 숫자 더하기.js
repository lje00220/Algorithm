function solution(numbers) {
    let answer = 0;
    const zeroToNine = Array.from({length: 10}, (_, i) => i);
    zeroToNine.forEach((num) => {
        if (!numbers.includes(num)) answer += num;
    })
    return answer;
}