function solution(n, arr1, arr2) {
    let answer = [];
    const map1 = [];
    const map2 = [];
    for (let i = 0; i < n; i++) {
        const binaryNum1 = arr1[i].toString(2).padStart(n, "0");
        const binaryNum2 = arr2[i].toString(2).padStart(n, "0");
        map1.push(binaryNum1);
        map2.push(binaryNum2);
    }
    
    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = 0; j < n; j++) {
            if (map1[i][j] === '1' || map2[i][j] === '1') {
                str += "#"
            } else {
                str += " ";
            }
        }
        answer.push(str);
    }
    return answer;
}