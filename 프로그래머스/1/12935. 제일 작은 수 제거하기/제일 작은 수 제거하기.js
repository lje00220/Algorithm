function solution(arr) {
    let minVal = arr[0];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < minVal) minVal = arr[i];
    } 
    const result = arr.filter((x) => x !== minVal);
    return result.length !== 0 ? result : [-1];
}