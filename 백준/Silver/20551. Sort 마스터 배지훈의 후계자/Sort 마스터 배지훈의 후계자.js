const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1, N + 1).map(Number).sort((x, y) => x - y);
const questions = input.slice(N + 1, N + M + 1).map(Number);

const binarySearch = (target) => {
    let [left, right, min_idx] = [0, N - 1, N];
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] >= target) {
            min_idx = Math.min(min_idx, mid);
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return (min_idx < N && arr[min_idx] === target) ? min_idx : -1;
}

for (let elem of questions) {
    console.log(binarySearch(elem));
}