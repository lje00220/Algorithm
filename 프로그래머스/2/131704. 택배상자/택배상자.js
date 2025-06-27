function solution(order) {
    let answer = 0;
    const main = Array.from({ length: order.length }, (_, i) => i + 1).reverse();
    const sub = [];

    let idx = 0;
    while (true) {
        if (main.length && main[main.length - 1] === order[idx]) {
            main.pop();
            answer++;
            idx++;
        } else if (sub.length && sub[sub.length - 1] === order[idx]) {
            sub.pop();
            answer++;
            idx++;
        } else if (main.length) {
            sub.push(main.pop());
        } else {
            break;
        }
    }

    return answer;
}