function solution(name, yearning, photo) {
    const result = [];
    for (let arr of photo) {
        let score = 0;
        for (let i = 0; i < arr.length; i++) {
            if (name.includes(arr[i])) {
                score += yearning[name.indexOf(arr[i])];
                console.log(arr[i]);
            }
        }
        result.push(score);
    }
    return result;
}