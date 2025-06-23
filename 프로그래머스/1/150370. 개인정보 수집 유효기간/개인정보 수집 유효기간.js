function solution(today, terms, privacies) {
    let answer = [];
    const map = new Map();
    for (let term of terms) {
        const [type, month] = term.split(" ");
        map.set(type, Number(month));
    }
    
    const [year, month, day] = today.split(".").map(Number);
    const todayDay = year * 12 * 28 + month * 28 + day;
    
    for (let i = 0; i < privacies.length; i++) {
        const [date, term] = privacies[i].split(" ");
        let [year, month, day] = date.split(".").map(Number);
        const totalDay = year * 12 * 28 + month * 28 + day + map.get(term) * 28;
        if (totalDay - todayDay <= 0) answer.push(i + 1);
    }
    return answer;
}