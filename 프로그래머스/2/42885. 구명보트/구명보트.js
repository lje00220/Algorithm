function solution(people, limit) {
    const sortedArr = people.sort((x, y) => x - y);
    let cnt = 0;
    while (sortedArr.length !== 0) {
        if (sortedArr[0] + sortedArr[sortedArr.length - 1] <= limit) {
            sortedArr.shift();
            sortedArr.pop();
        } else {
            sortedArr.pop();
        }
        cnt++;
    }
    return cnt;
}