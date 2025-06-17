function solution(record) {
    const answer = [];
    const map = new Map();
    for (let elem of record) {
        const [status, uid, name] = elem.split(" ");
        if (status === "Enter" && typeof name !== undefined || status === "Change") {
            map.set(uid, name);
        } 
    }
    
    for (let elem of record) {
        const [status, uid, _] = elem.split(" ");
        if (status === "Enter") {
            answer.push(`${map.get(uid)}님이 들어왔습니다.`);
        }
        if (status === "Leave") {
            answer.push(`${map.get(uid)}님이 나갔습니다.`);
        }
    }
    
    return answer;
}