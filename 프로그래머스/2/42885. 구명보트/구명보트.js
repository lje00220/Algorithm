function solution(people, limit) {
    let answer = 0;
    let [left, right] = [0, people.length - 1]
    people.sort((a, b) => b - a);
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            right--;
        }
        answer++;
        left++;
    }
    return answer;
}