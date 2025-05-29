function solution(priorities, location) {
    let answer = 0;
    const arr = priorities.map((p, idx) => ({'index': idx, 'priority': p}));
    while (arr.length > 0) {
        const { index, priority } = arr[0];
        const isSatisfied = arr.filter((p) => p['priority'] > priority).length > 0;
        if (isSatisfied) {
            arr.push({'index': index, 'priority': priority});
        } else {
            answer++;
            if (index === location) return answer;
        }
        arr.shift();
    }

}