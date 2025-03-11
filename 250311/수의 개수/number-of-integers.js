const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const queries = input.slice(2, 2 + M).map(Number);

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
    return min_idx;
}

const custom_bound = (target) => {
    let [left, right, max_idx] = [0, N - 1, -1];
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) {
            max_idx = Math.max(max_idx, mid);
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return max_idx;
}

for (let elem of queries) {
    console.log(custom_bound(elem) - lower_bound(elem) + 1);
}
