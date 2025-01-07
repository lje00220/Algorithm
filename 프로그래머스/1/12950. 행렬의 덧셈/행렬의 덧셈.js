function solution(arr1, arr2) {
    var answer = arr1;
    for (let i = 0; i < arr1.length; i++) {
        arr1[i].forEach((elem, idx) => {
            answer[i][idx] = elem + arr2[i][idx];
        });
    }
    return answer;
}