function solution(nums) {
    let answer = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const num = nums[i] + nums[j] + nums[k];
                let satisfied = true;
                for (let m = 2; m < num; m++) {
                    if (num % m === 0) {
                        satisfied = false;
                        break;
                    }
                }
                if (satisfied) answer++;
            }
        }
    }
    return answer;
}