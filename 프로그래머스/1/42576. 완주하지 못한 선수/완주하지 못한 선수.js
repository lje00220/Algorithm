function solution(participant, completion) {
    const map = new Map();
    for (let i = 0; i < participant.length; i++) {
        map.set(participant[i], (map.get(participant[i]) || 0) + 1);
    }
    
    for (let i = 0; i < completion.length; i++) {
        const person = completion[i];
        map.set(person, map.get(person) - 1);
        if (map.get(person) === 0) map.delete(person);
    }
    return [...map.keys()][0]
}