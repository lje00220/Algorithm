function solution(arr)
{
    if (arr.length === 0) return [];
    const answer = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            answer.push(arr[i]);
        }
    }
    return answer;
}