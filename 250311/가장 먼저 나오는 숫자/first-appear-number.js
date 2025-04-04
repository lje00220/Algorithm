const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const queries = input[2].split(' ').map(Number);

const lower_bound = (target) => {
    let [left, right, min_idx] = [0, N - 1, N];
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] >= target) {
            min_idx = Math.min(min_idx, mid);
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return (min_idx < N && arr[min_idx] === target) ? min_idx + 1 : -1;
}

for (let i = 0; i < M; i++) {
    console.log(lower_bound(queries[i]));
}
