function solution(id_list, report, k) {
    const complaintArr = new Set(report);
    const frequency = new Map();
    const result = new Map()
    
    for (let elem of complaintArr) {
        const [user, complaint] = elem.split(" ");
        frequency.set(complaint, (frequency.get(complaint) ?? 0) + 1);
    }
    
    for (let elem of complaintArr) {
        const [user, complaint] = elem.split(" ");
        if (frequency.get(complaint) >= k) {
            result.set(user, (result.get(user) ?? 0) + 1);
        }
    }
    
    return id_list.map((id) => result.get(id) ?? 0);
}