function solution(want, number, discount) {
    let answer = 0;
    const arr = [];
    for (let i = 0; i < want.length; i++) {
        for (let j = 0; j < number[i]; j++) {
            arr.push(want[i]);
        }
    }
    
    arr.sort();
    
    for (let i = 0; i < discount.length - 9; i++) {
        if (JSON.stringify(arr) === JSON.stringify(discount.slice(i, i + 10).sort())) answer++;
    }
    return answer;
}